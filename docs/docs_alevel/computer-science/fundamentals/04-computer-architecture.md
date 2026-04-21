---
title: Computer Architecture
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: computer-architecture
---

## 1. Von Neumann Architecture

### Definition

The **Von Neumann architecture**, proposed by John Von Neumann in 1945, is characterised by a single
unified memory space that stores both data and instructions, a single set of buses connecting memory
to the CPU, and sequential execution of instructions.

### Components

1. **Central Processing Unit (CPU)** — executes instructions
2. **Memory (RAM)** — stores both programs and data
3. **Input/Output devices** — interact with the external world
4. **System bus** — connects all components

### Key Property: Stored Program Concept

Both instructions and data reside in the same memory. The CPU fetches instructions from memory,
decodes them, and executes them. This is the **stored program concept** — the machine can modify its
own instructions (though modern systems typically prevent this for security).

<hr />

## 2. Harvard Architecture

### Definition

The **Harvard architecture** uses **separate memory spaces** for instructions and data, each with
its own bus.

### Comparison: Von Neumann vs Harvard

| Property            | Von Neumann               | Harvard                               |
| ------------------- | ------------------------- | ------------------------------------- |
| Memory              | Single unified memory     | Separate instruction and data memory  |
| Buses               | Single bus (bottleneck)   | Separate buses (parallel access)      |
| Speed               | Slower (bus contention)   | Faster (simultaneous fetch)           |
| Complexity          | Simpler hardware          | More complex hardware                 |
| Self-modifying code | Possible (in theory)      | Not possible                          |
| Modern usage        | General-purpose computers | DSPs, microcontrollers, cache systems |

:::info Board-specific Modern CPUs use a **modified Harvard architecture** at the cache level: L1
cache is split into instruction cache and data cache (Harvard), while main memory is unified (Von
Neumann). :::

<hr />

## 3. CPU Components

### Arithmetic Logic Unit (ALU)

The ALU performs:

- **Arithmetic operations:** addition, subtraction, multiplication, division
- **Logical operations:** AND, OR, NOT, XOR
- **Comparison operations:** equal, less than, greater than
- **Bitwise operations:** shift, rotate

The ALU is a combinational circuit — it has no internal state. It takes inputs from registers and
produces outputs that are written back to registers.

### Control Unit (CU)

The CU orchestrates the fetch-decode-execute cycle by generating control signals that:

- Enable/disable registers (PC, MAR, MDR, etc.)
- Control the ALU operation
- Manage data flow on the buses
- Determine the next instruction address

### Registers

| Register | Full Name                    | Purpose                                            |
| -------- | ---------------------------- | -------------------------------------------------- |
| **PC**   | Program Counter              | Holds the address of the next instruction to fetch |
| **MAR**  | Memory Address Register      | Holds the address to be accessed in memory         |
| **MDR**  | Memory Data Register         | Holds data read from or to be written to memory    |
| **ACC**  | Accumulator                  | Stores results of ALU operations                   |
| **CIR**  | Current Instruction Register | Holds the instruction currently being decoded      |
| **IR**   | Instruction Register         | Synonym for CIR (board-dependent naming)           |

:::info Board-specific

- **AQA** uses: PC, MAR, MDR, ACC, CIR
- **CIE** uses: PC, MAR, MDR, ACC, IR, B (B register as temporary)
- **OCR** uses: PC, MAR, MDR, ACC, CIR, and may reference index registers :::

**General Purpose Registers (GPRs):** Additional registers for temporary storage during computation.
The number varies by architecture (e.g., ARM has 16, x86-64 has 16).

**Special Purpose Registers:**

- **Status/Flags Register:** Stores condition codes (Zero, Carry, Negative, Overflow) set by the ALU
- **Stack Pointer (SP):** Points to the top of the call stack
- **Link Register (LR):** Stores the return address for function calls (ARM-specific)

<hr />

## 4. The Fetch-Decode-Execute Cycle

### Definition

The CPU continuously cycles through three phases:

1. **Fetch:** Load the next instruction from memory
2. **Decode:** Determine what the instruction does
3. **Execute:** Perform the operation

### Detailed Register Transfers

#### Fetch

1. **MAR ← PC**: Copy the program counter to the memory address register
2. **MDR ← Memory[MAR]**: Read from memory at the address in MAR, store in MDR
3. **CIR ← MDR**: Copy the instruction from MDR to the current instruction register
4. **PC ← PC + 1**: Increment the program counter to point to the next instruction

#### Decode

5. The CU examines the **opcode** portion of CIR to determine:
   - What operation to perform
   - What operands are needed
   - What addressing mode to use

The CU then generates the appropriate control signals.

#### Execute

6. The CU sends control signals to execute the instruction. For example:
   - **Add:** ACC ← ACC + operand
   - **Load:** ACC ← Memory[address]
   - **Store:** Memory[address] ← ACC
   - **Branch (conditional):** If condition met, PC ← address

After execution, the cycle repeats from step 1.

### Timing

Each step involves register transfers and bus operations. A typical fetch takes 3–4 clock cycles
(one per bus operation), decode takes 1–2 cycles, and execute takes 1–5 cycles depending on the
instruction.

<details>
<summary>Example: Trace the fetch-decode-execute cycle for ADD #5 (add immediate 5 to ACC)</summary>

**Assume:** PC = 0x1000, instruction at 0x1000 is `ADD #5` (opcode: 0010, operand: 00000101)

1. **Fetch:**
   - MAR ← PC: MAR = 0x1000
   - MDR ← Memory[0x1000]: MDR = 0010 00000101
   - CIR ← MDR: CIR = 0010 00000101
   - PC ← PC + 1: PC = 0x1001

2. **Decode:**
   - CU reads opcode 0010 → identifies ADD immediate
   - CU reads operand 00000101 → value 5

3. **Execute:**
   - ACC ← ACC + 5
   - Set flags in status register (zero, negative, carry, overflow)

</details>

<hr />

## 5. The Bus System

### Definition

A **bus** is a set of parallel wires that carries data, addresses, or control signals between
components.

### Types

| Bus         | Width (typical) | Purpose                                                 | Direction                   |
| ----------- | --------------- | ------------------------------------------------------- | --------------------------- |
| Data bus    | 8, 16, 32, 64   | Carries data between CPU, memory, and I/O               | Bidirectional               |
| Address bus | 16, 32, 64      | Carries memory addresses                                | Unidirectional (CPU→memory) |
| Control bus | Variable        | Carries control signals (read, write, clock, interrupt) | Mostly CPU→devices          |

**Key relationships:**

- Address bus width $n$ determines addressable memory: up to $2^n$ locations
- Data bus width determines how many bits transferred per bus operation
- A 32-bit address bus with byte-addressable memory can address $2^{32} = 4$ GiB

<hr />

## 6. Cache Memory

### Motivation

CPU speeds have increased much faster than memory speeds. **Cache memory** bridges this gap by
storing frequently accessed data in fast memory close to the CPU.

### Locality of Reference

**Temporal locality:** If a memory location is accessed, it is likely to be accessed again soon
(e.g., loop variables, instruction fetch in a loop).

**Spatial locality:** If a memory location is accessed, nearby locations are likely to be accessed
soon (e.g., sequential array access, instruction stream).

### Cache Levels

| Level | Location           | Size          | Speed     | Purpose                            |
| ----- | ------------------ | ------------- | --------- | ---------------------------------- |
| L1    | Inside CPU core    | 32–64 KiB     | ~1 ns     | Hottest data, split I/D            |
| L2    | Inside CPU         | 256 KiB–1 MiB | ~3–10 ns  | Backup for L1                      |
| L3    | Shared among cores | 4–64 MiB      | ~10–30 ns | Shared cache, reduces L1/L2 misses |

### Cache Mapping Techniques

#### Direct Mapping

Each memory block maps to exactly one cache line.

$$\mathrm{Cache line} = \mathrm{Block address} \bmod (\mathrm{Number of cache lines})$$

- **Advantage:** Simple, fast lookup
- **Disadvantage:** Conflict misses — two frequently used blocks mapping to the same line evict each
  other

#### Fully Associative Mapping

A memory block can be placed in **any** cache line.

- **Advantage:** Minimises conflict misses
- **Disadvantage:** Slow lookup (must search all lines), complex hardware

#### Set-Associative Mapping

The cache is divided into $s$ **sets**, each containing $k$ **ways** (lines). A block maps to a
specific set, but can be placed in any line within that set.

$$\mathrm{Set} = \mathrm{Block address} \bmod s$$

- **$k = 1$:** Direct mapping
- **$k = s$:** Fully associative
- Common configurations: 4-way, 8-way, 16-way set-associative

### Cache Replacement Policies

- **LRU (Least Recently Used):** Evict the line that was accessed least recently
- **FIFO (First In, First Out):** Evict the oldest line
- **Random:** Evict a random line

<hr />

## 7. Virtual Memory and Paging

### Definition

**Virtual memory** gives each process the illusion of having its own private, contiguous address
space, while physical memory may be fragmented and shared among processes.

### Paging

Memory is divided into fixed-size **pages** (typically 4 KiB). Virtual addresses are translated to
physical addresses using a **page table**.

**Virtual address structure (32-bit, 4 KiB pages):**

| Offset (12 bits) | Page number (20 bits) |
| ---------------- | --------------------- |

**Page table entry (PTE):**

| Frame number (20 bits) | Flags (present, dirty, accessed, permissions) |

**Translation:** Physical address = Frame number (from PTE) concatenated with Offset.

### Translation Lookaside Buffer (TLB)

The TLB is a small, fast cache of recently used page table entries. It avoids the overhead of a full
page table lookup for every memory access.

- **TLB hit:** Translation found in TLB — fast (1–2 cycles)
- **TLB miss:** Must consult page table — slow (10–100 cycles)

### Page Fault

When the CPU accesses a virtual page that is not in physical memory:

1. A **page fault** exception is raised
2. The OS locates the page on disk (swap space)
3. The OS loads the page into a free frame
4. The page table is updated
5. The instruction is restarted

<hr />

## 8. Pipelining

### Definition

**Pipelining** overlaps the execution stages of multiple instructions, similar to an assembly line.

```
Clock:    1     2     3     4     5     6
Instr 1:  F     D     E
Instr 2:        F     D     E
Instr 3:              F     D     E
Instr 4:                    F     D     E
```

### Speedup Analysis

Without pipelining, $n$ instructions take $n \times k$ cycles (where $k$ is the number of stages).

With pipelining, the first instruction takes $k$ cycles, and each subsequent instruction takes 1
cycle. Total: $k + (n - 1)$ cycles.

$$\mathrm{Speedup} = \frac{nk}{k + n - 1} \xrightarrow{n \to \infty} k$$

A $k$-stage pipeline achieves at most $k\times$ speedup in the ideal case.

### Pipeline Hazards

**Data hazard:** An instruction depends on the result of a previous instruction that has not yet
completed.

_Solutions:_ Forwarding (bypass), stalling, out-of-order execution.

**Control hazard:** A branch instruction changes the PC, but the next instruction(s) may already be
in the pipeline.

_Solutions:_ Branch prediction (static or dynamic), delayed branch, branch target buffer.

**Structural hazard:** Two instructions require the same hardware resource simultaneously.

_Solutions:_ Duplicate resources, stalling.

<hr />

## 9. RISC vs CISC

### Definitions

**RISC (Reduced Instruction Set Computer):** Few, simple instructions that execute in one clock
cycle. Emphasis on software complexity.

**CISC (Complex Instruction Set Computer):** Many, complex instructions that may take multiple
cycles. Emphasis on hardware complexity.

### Comparison

| Property           | RISC                      | CISC                          |
| ------------------ | ------------------------- | ----------------------------- |
| Instruction count  | Small (50–100)            | Large (200–500+)              |
| Instruction format | Fixed length              | Variable length               |
| Execution time     | 1 cycle (mostly)          | 1–20+ cycles                  |
| Addressing modes   | Few (2–5)                 | Many (10+)                    |
| Registers          | Many (32+)                | Few (8–16)                    |
| Microcode          | No (hardwired control)    | Yes (microprogrammed control) |
| Pipeline           | Easy to pipeline          | Harder to pipeline            |
| Examples           | ARM, MIPS, RISC-V         | x86/x86-64                    |
| Code density       | Lower (more instructions) | Higher (fewer instructions)   |
| Power consumption  | Lower                     | Higher                        |

:::info Board-specific All A Level boards require understanding of RISC vs CISC principles. ARM
(used in smartphones, Raspberry Pi) is RISC. Intel/AMD processors are CISC (but use RISC-like
internal micro-operations). :::

<hr />

## Problem Set

**Problem 1.** A CPU has a 24-bit address bus and a 16-bit data bus. What is the maximum addressable
memory?

<details>
<summary>Hint</summary>

Each address identifies one location, and each location holds one data bus width.

</details>

<details>
<summary>Answer</summary>

$2^{24} = 16,777,216$ locations

Each location holds 16 bits = 2 bytes.

Total addressable memory: $16,777,216 \times 2 = 33,554,432$ bytes = 32 MiB.

</details>

**Problem 2.** Describe what happens during the fetch phase of the fetch-decode-execute cycle.
Include all register transfers.

<details>
<summary>Hint</summary>

Four steps: MAR ← PC, read from memory, CIR ← MDR, PC ← PC + 1.

</details>

<details>
<summary>Answer</summary>

1. The contents of the Program Counter (PC) are copied to the Memory Address Register (MAR) via the
   address bus.
2. The data stored at the memory address held in the MAR is copied to the Memory Data Register (MDR)
   via the data bus.
3. The contents of the MDR are copied to the Current Instruction Register (CIR).
4. The Program Counter is incremented by 1 (or by the instruction length, for variable-length ISAs)
to point to the next instruction.
</details>

**Problem 3.** Explain how temporal and spatial locality contribute to cache effectiveness.

<details>
<summary>Hint</summary>

Give concrete examples of code patterns that exhibit each type of locality.

</details>

<details>
<summary>Answer</summary>

**Temporal locality:** In a loop that processes an array, the loop counter variable is accessed
repeatedly. After the first access loads it into cache, subsequent accesses hit the cache.
Similarly, the instruction bytes of the loop body are fetched from cache after the first iteration.

**Spatial locality:** When accessing `array[i]`, the cache loads a block (cache line) containing
`array[i]` and several adjacent elements. Subsequent accesses to `array[i+1]`, `array[i+2]`, etc.,
are cache hits because they are in the same cache line.

</details>

**Problem 4.** A system uses 32-bit virtual addresses with 4 KiB pages. How many entries are in the
page table? What is the size of each entry if physical addresses are 36 bits?

<details>
<summary>Hint</summary>

Number of virtual pages = $2^{32}/4096$. Each PTE stores a frame number and flags.

</details>

<details>
<summary>Answer</summary>

Number of pages: $2^{32}/2^{12} = 2^{20} = 1,048,576$ entries

Physical frame number bits: $36 - 12 = 24$ bits

PTE size: 24 bits (frame number) + flags (typically 8–12 bits) ≈ 4 bytes per entry.

Total page table size: $1,048,576 \times 4 = 4$ MiB per process.

</details>

**Problem 5.** Explain why a 5-stage pipeline (fetch, decode, execute, memory, writeback) processing
100 instructions takes 104 cycles, not 500.

<details>
<summary>Hint</summary>

After the pipeline fills, one instruction completes per cycle.

</details>

<details>
<summary>Answer</summary>

The first instruction takes 5 cycles to pass through all stages (pipeline fill). After that, one
instruction completes per cycle. The last instruction finishes at cycle $5 + 99 = 104$.

Total: $5 + (100 - 1) = 104$ cycles, compared to $100 \times 5 = 500$ without pipelining.

Speedup: $500/104 \approx 4.81\times$ (approaching the theoretical maximum of $5\times$).

</details>

**Problem 6.** Give an example of a data hazard in a pipeline and explain how forwarding can resolve
it.

<details>
<summary>Hint</summary>

Consider two consecutive instructions where the second uses the result of the first.

</details>

<details>
<summary>Answer</summary>

```
ADD R1, R2, R3    // R1 ← R2 + R3
SUB R4, R1, R5    // R4 ← R1 - R5  (depends on R1)
```

The ADD instruction produces R1 in the "writeback" stage, but the SUB instruction needs R1 in its
"decode" stage, which occurs before writeback. This is a data hazard.

**Forwarding solution:** The result of ADD is available after the "execute" stage (as a computed
value). Instead of waiting for writeback, the result is forwarded directly from the execute stage
output to the decode stage input of SUB, eliminating the stall.

</details>

**Problem 7.** Compare Von Neumann and Harvard architectures. Why is the modified Harvard
architecture used in modern CPUs?

<details>
<summary>Hint</summary>

Consider bus contention and the practical need for unified main memory.

</details>

<details>
<summary>Answer</summary>

Von Neumann uses a single memory and bus for both instructions and data, causing contention. Harvard
uses separate memories and buses, allowing simultaneous instruction fetch and data access.

Modern CPUs use modified Harvard: L1 cache is split into instruction cache (I-cache) and data cache
(D-cache), providing Harvard benefits at the fastest level. Beyond L1, memory is unified (Von
Neumann) because:

1. Main memory must be flexible — programs need to load data and instructions dynamically
2. Unified memory simplifies the memory management unit (MMU) design
3. The cost of duplicate main memory buses is not justified given cache hit rates
</details>

**Problem 8.** A direct-mapped cache has 64 lines, each holding 16 bytes. Main memory has 65,536
blocks. How many bits are needed for the tag, line number, and offset fields?

<details>
<summary>Hint</summary>

Offset = log₂(block size). Line = log₂(cache lines). Tag = remaining bits from block address.

</details>

<details>
<summary>Answer</summary>

Offset: $\log_2(16) = 4$ bits Line number: $\log_2(64) = 6$ bits Total block address bits:
$\log_2(65536) = 16$ bits

Tag: $16 - 6 = 10$ bits

Each cache line stores: 16 bytes (data) + 10 bits (tag) + 1 bit (valid) + 1 bit (dirty) ≈ 18 bytes
total.

</details>

**Problem 9.** Explain the difference between a page fault and a TLB miss. Which is more expensive?

<details>
<summary>Hint</summary>

One involves disk I/O; the other involves a slower but still RAM-speed lookup.

</details>

<details>
<summary>Answer</summary>

**TLB miss:** The virtual-to-physical translation is not in the TLB cache. The CPU must consult the
page table in main memory (a few extra memory accesses). Cost: ~10–100 cycles.

**Page fault:** The required page is not in physical memory at all. The OS must read it from disk
(swap space) into a free frame, update the page table, and restart the instruction. Cost:
~100,000–10,000,000 cycles (disk access is ~10ms, while a CPU cycle is ~0.3ns).

A page fault is orders of magnitude more expensive than a TLB miss.

</details>

**Problem 10.** A RISC processor has 32 registers, each 32 bits wide. How many bits are needed to
encode a register operand? What is the maximum number of 3-operand instructions possible if the
opcode field is 8 bits?

<details>
<summary>Hint</summary>

Register field size = log₂(32). Total instruction size = opcode + 3 register fields.

</details>

<details>
<summary>Answer</summary>

Register operand: $\log_2(32) = 5$ bits

Instruction format: 8 (opcode) + 5 + 5 + 5 = 23 bits

With 8-bit opcode: $2^8 = 256$ possible opcodes.

</details>

:::

:::

:::
