---
title: Computer Systems -- Diagnostic Tests
description: "DSE ICT diagnostic tests for computer systems: CPU architecture, Von Neumann model, fetch-decode-execute cycle, memory hierarchy, I/O devices."
slug: diag-computer-systems
hide_table_of_contents: true
---

# Computer Systems — Diagnostic Tests

## Unit Tests

### UT-1: CPU Components and the Fetch-Decode-Execute Cycle
**Question:** (a) Describe the role of the ALU, Control Unit, and registers in the CPU. (b) A CPU has a clock speed of 3.2 GHz and takes 4 clock cycles to complete the fetch-decode-execute cycle for a simple instruction. Calculate the time taken to execute one instruction. (c) Explain why a 64-bit processor can access more RAM than a 32-bit processor. (d) Explain the difference between RISC and CISC architectures.

**Solution:**

(a) **ALU (Arithmetic Logic Unit):** Performs all arithmetic calculations (add, subtract, multiply, divide) and logical operations (AND, OR, NOT, XOR) on data. It is the computational heart of the CPU.

**Control Unit (CU):** Coordinates and directs all CPU activities. It fetches instructions from memory, decodes them, and sends control signals to the ALU, memory, and I/O devices to execute them. It manages the timing and sequencing of operations.

**Registers:** Small, high-speed storage locations within the CPU that hold data and instructions being processed. Key registers include the Program Counter (next instruction address), MAR (memory address to access), MDR (data to/from memory), and the Accumulator (results of ALU operations).

(b) Clock period $= 1 / 3.2 \times 10^9 = 3.125 \times 10^{-10}$ seconds $= 0.3125$ ns.

Time for one instruction $= 4 \times 0.3125 = 1.25$ ns.

(c) A 32-bit processor uses 32-bit addresses, allowing it to address $2^{32} = 4{,}294{,}967{,}296$ unique memory locations (4 GB of byte-addressable RAM). A 64-bit processor uses 64-bit addresses, allowing $2^{64}$ locations -- far more than any current system needs (theoretically 16 exabytes). The larger address space means the processor can reference more physical RAM without workarounds like PAE (Physical Address Extension).

(d) **RISC (Reduced Instruction Set Computing):** Uses a small set of simple, highly optimised instructions that execute in one clock cycle. Each instruction is the same length, enabling pipelining. Requires more instructions for complex operations but achieves higher throughput through faster execution. Examples: ARM (used in smartphones).

**CISC (Complex Instruction Set Computing):** Has a large instruction set with instructions of varying lengths and complexity. A single instruction can perform multi-step operations (e.g., a string copy). This reduces the number of instructions in a program but each takes multiple clock cycles. Examples: x86 (used in PCs).

### UT-2: Memory Hierarchy and Storage
**Question:** (a) Explain the memory hierarchy (registers, cache, RAM, secondary storage) and why it exists. (b) A computer has L1 cache with access time 1 ns, L2 cache 5 ns, and RAM 100 ns. If the hit rate is 95% for L1 and 80% for L2 (when L1 misses), calculate the average memory access time (AMAT). (c) Explain the difference between SRAM and DRAM.

**Solution:**

(a) The memory hierarchy exists because of three key principles:
1. **Speed-cost trade-off:** Faster memory is exponentially more expensive per byte.
2. **Locality of reference:** Programs tend to access a relatively small portion of their address space at any time (temporal locality -- recently accessed data is likely to be accessed again; spatial locality -- data near recently accessed data is likely to be accessed).

Registers (fastest, smallest, most expensive) $\to$ L1/L2/L3 cache $\to$ RAM $\to$ SSD/HDD (slowest, largest, cheapest). The hierarchy works by keeping frequently accessed data in faster, smaller storage closer to the CPU.

(b) $\text{AMAT} = \text{L1 time} + \text{L1 miss rate} \times (\text{L2 time} + \text{L2 miss rate} \times \text{RAM time})$.

$\text{AMAT} = 1 + 0.05 \times (5 + 0.20 \times 100) = 1 + 0.05 \times (5 + 20) = 1 + 0.05 \times 25 = 1 + 1.25 = 2.25$ ns.

(c) **SRAM (Static RAM):** Uses flip-flop circuits (6 transistors per cell). Does not require refreshing -- data is retained as long as power is supplied. Faster access time but much more expensive and lower density. Used for CPU cache.

**DRAM (Dynamic RAM):** Uses a single transistor and capacitor per cell. The capacitor leaks charge, so data must be refreshed thousands of times per second. Slower but much cheaper and higher density. Used for main memory (RAM).

### UT-3: Input/Output Devices and Secondary Storage
**Question:** (a) Compare a magnetic hard disk drive (HDD) and a solid-state drive (SSD) in terms of: access mechanism, speed, durability, and cost per GB. (b) A hard drive has 4 platters with 1024 tracks per surface, 256 sectors per track, and 512 bytes per sector. Calculate the total storage capacity. (c) Explain why a touchscreen can be considered both an input and output device.

**Solution:**

(a) | Feature | HDD | SSD |
|---|---|---|
| Access mechanism | Mechanical spinning platters with read/write head | NAND flash memory chips (no moving parts) |
| Speed | 80--160 MB/s (SATA); seek time 5--10 ms | 500--7000 MB/s (NVMe); essentially zero seek time |
| Durability | Vulnerable to physical shock (head crash) | Highly durable (no moving parts) |
| Cost per GB | Low (around \$0.02--0.03/GB) | Higher (around \$0.05--0.10/GB) |

(b) Total sectors $= 4 \text{ platters} \times 2 \text{ surfaces/platter} \times 1024 \text{ tracks/surface} \times 256 \text{ sectors/track} = 4 \times 2 \times 1024 \times 256 = 2{,}097{,}152$ sectors.

Total capacity $= 2{,}097{,}152 \times 512 \text{ bytes} = 1{,}073{,}741{,}824 \text{ bytes} = 1 \text{ GB}$.

(c) A touchscreen displays visual output (images, text, UI elements) like any monitor, making it an output device. Simultaneously, it detects touch input (position, pressure, gestures), making it an input device. The combination in a single hardware component is what makes it both. This dual functionality enables intuitive user interfaces on smartphones and tablets.

---

## Integration Tests

### IT-1: CPU and Performance (with Data Representation)
**Question:** A 32-bit computer uses IEEE 754 single-precision floating-point format. (a) Explain how the number $-6.625$ is stored in binary floating-point format (sign, exponent, mantissa). (b) If the CPU needs to add $-6.625$ and $3.5$, describe the steps the ALU performs. (c) Why does floating-point arithmetic sometimes produce rounding errors, and how does this relate to the CPU's hardware design?

**Solution:**

(a) $-6.625 = -(110.101)_2 = -1.10101 \times 2^2$.

Sign bit: 1 (negative). Exponent: $2 + 127 = 129 = (10000001)_2$. Mantissa: $10101000000000000000000$.

Stored as: 1 10000001 10101000000000000000000.

(b) Steps: (1) Compare exponents -- align the smaller number's mantissa by shifting right. $3.5 = 1.11 \times 2^1$. Shift to $0.111 \times 2^2$ (2). Add mantissas: $1.10101 + 0.111 = 10.10001$. Normalise: $1.00001 \times 2^3$ (3). Result: $-1.00001 \times 2^2 + 0.111 \times 2^2 = -0.11001 \times 2^2$... Actually: subtracting since one is negative. The ALU adds the signed mantissas using two's complement arithmetic.

(c) Floating-point has limited precision (23 bits of mantissa in single precision $=$ about 7 significant decimal digits). Values like $0.1$ cannot be represented exactly in binary (it is a recurring fraction: $0.000110011...$). This causes small rounding errors that accumulate through repeated operations. The CPU hardware is designed with a fixed number of bits for the mantissa, so it cannot store infinite precision -- a fundamental hardware limitation of the ALU's arithmetic circuits.

### IT-2: System Architecture (with Programming and Databases)
**Question:** A school's student management system stores data in a relational database on a server. (a) Explain the roles of the CPU, RAM, and hard disk when a teacher searches for a student by ID number. (b) If the database has 50{,}000 records and a sequential search takes 0.001 ms per record, calculate the worst-case search time. How does indexing reduce this? (c) Explain why the database uses RAM (buffer cache) to improve performance, relating to the memory hierarchy.

**Solution:**

(a) When a teacher searches for student ID "S12345":
1. The teacher's browser sends the query over the network to the server.
2. The server's CPU receives the request and executes the database query program.
3. The CPU checks RAM (buffer cache) for the data -- if found (cache hit), it returns the result immediately.
4. If not in RAM (cache miss), the CPU instructs the disk controller to read from the hard disk.
5. The data is loaded from disk into RAM (and cached for future queries).
6. The CPU processes the data, formats the result, and sends it back to the teacher's browser.

(b) Worst-case sequential search: $50{,}000 \times 0.001 = 50$ ms.

With a B-tree index: search depth $\approx \log_2(50{,}000) \approx 16$ levels. With 3--4 disk accesses (each $\approx 5$ ms), total $\approx 15$--$20$ ms. With the index cached in RAM, the search reduces to a fraction of a millisecond.

(c) The database buffer cache keeps frequently accessed data and index pages in RAM. Since RAM access time ($\approx 100$ ns) is roughly 100{,}000 times faster than disk access ($\approx 10$ ms), caching dramatically reduces query latency. The memory hierarchy principle applies: the most frequently accessed database pages are kept in the fastest available storage. The database engine uses LRU (Least Recently Used) or similar algorithms to manage the buffer cache, evicting least-used pages when RAM is full.

### IT-3: Hardware Selection (with Network Security)
**Question:** A small business needs to set up a file server for 20 employees. (a) Recommend minimum specifications for: CPU cores, RAM, and storage type, justifying each choice. (b) Explain why ECC (Error-Correcting Code) RAM is important for a server but not typically needed for a desktop. (c) The server will store sensitive client data. Explain how hardware-level security features (TPM, secure boot) complement software-level encryption.

**Solution:**

(a) **CPU:** Minimum 4 cores. A server handles concurrent requests from 20 users -- multiple cores allow parallel processing of file operations, database queries, and network I/O without queuing.

**RAM:** Minimum 16 GB. The OS uses $\approx 4$ GB, and the file server needs RAM for the buffer cache (storing frequently accessed files), network buffers, and user session data. Insufficient RAM causes excessive disk swapping, severely degrading performance.

**Storage:** NVMe SSD (minimum 500 GB). SSDs provide fast random read/write for concurrent file access by multiple users. NVMe is significantly faster than SATA SSDs for multi-user workloads. A secondary HDD can be added for backup.

(b) ECC RAM detects and corrects single-bit errors that can occur due to electromagnetic interference, cosmic rays, or hardware degradation. In a server running 24/7, even a single-bit error could corrupt critical data or crash the system. Desktops are used for shorter periods and the occasional error is tolerable (a crash is merely inconvenient). Servers process financial data, databases, and critical business data where data integrity is paramount.

(c) **TPM (Trusted Platform Module):** A dedicated hardware chip that securely stores cryptographic keys and verifies system integrity. It ensures that encryption keys cannot be extracted even if the server is physically stolen.

**Secure Boot:** Ensures that only cryptographically signed, trusted firmware and OS components load at startup. This prevents rootkits and boot-level malware from compromising the system before software encryption activates.

Hardware and software security are complementary: TPM protects keys at the hardware level (preventing extraction), secure boot ensures a trusted execution environment, and software encryption (e.g., AES-256 full-disk encryption) protects data at rest. Together they provide defence in depth.
