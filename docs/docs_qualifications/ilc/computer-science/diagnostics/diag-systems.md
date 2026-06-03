---
title: 'Computer Systems -- Diagnostic Tests'
description:
  'ILC Computer Science Computer Systems -- Diagnostic Tests notes covering key definitions, core
  concepts, worked examples, and practice questions for in-depth revision.'
slug: diag-systems
hide_table_of_contents: true
---

# Computer Systems -- Diagnostic Tests

## Unit Tests

### UT-1: Hardware Components

**Question:**

(a) Describe the function of the following components in a computer system: CPU (Central Processing
Unit), RAM (Random Access Memory), hard disk drive, and motherboard.

(b) Explain the difference between RAM and ROM. State one use of each.

(c) The CPU has three main components: the ALU, the control unit, and registers. Describe the
function of each.

(d) A computer has a clock speed of $3.2\,\text{GHz}$. Explain what this means and describe how
clock speed affects processor performance.

**Solution:**

(a)

- **CPU (Central Processing Unit)**: The "brain" of the computer that processes data and
  instructions. It fetches, decodes, and executes instructions from programs.
- **RAM (Random Access Memory)**: Volatile memory used to store data and instructions that the CPU
  needs to access quickly. It loses its contents when power is turned off.
- **Hard disk drive**: A non-volatile storage device that stores the operating system, applications,
  and user data permanently. Data persists when power is off.
- **Motherboard**: The main circuit board that connects all components (CPU, RAM, storage, graphics
  card, etc.) and provides communication pathways (buses) between them.

(b) **RAM** is volatile (loses data when power is off), allows both read and write operations, and
is used for temporary storage of data the CPU is currently working with. **ROM** (Read Only Memory)
is non-volatile (retains data without power), typically allows only read operations, and stores
permanent data such as the BIOS/firmware that boots the computer.

(c)

- **ALU (Arithmetic Logic Unit)**: performs arithmetic operations (addition, subtraction,
  multiplication, division) and logical operations (AND, OR, NOT, comparison).
- **Control Unit**: coordinates and manages the activities of the CPU. It fetches instructions from
  memory, decodes them, and sends signals to other components to execute them. It controls the
  timing and sequence of operations.
- **Registers**: small, high-speed storage locations within the CPU that hold data and instructions
  being processed. Examples include the program counter (PC), accumulator (ACC), memory address
  register (MAR), and memory data register (MDR).

(d) A clock speed of $3.2\,\text{GHz}$ means the CPU executes
$3.2 \times 10^9 = 3{,}200{,}000{,}000$ clock cycles per second. Each clock cycle represents one
basic operation (or part of an operation) performed by the CPU. A higher clock speed means more
instructions can be executed per second, so the processor performs faster. However, clock speed
alone does not determine overall performance; the number of cores, cache size, and the instruction
set architecture also play significant roles.

---

### UT-2: Software and Operating Systems

**Question:**

(a) Explain the difference between system software and application software. Give two examples of
each.

(b) Describe the main functions of an operating system.

(c) Explain the terms "open source software" and "proprietary software." Give one example of each
and state an advantage and disadvantage of each.

(d) Describe the difference between a compiler and an interpreter. State one advantage and one
disadvantage of each.

**Solution:**

(a) **System software** manages and controls the hardware and provides a platform for other software
to run. Examples: operating systems (Windows, Linux, macOS), device drivers, utility programs (disk
defragmenter, antivirus).

**Application software** is designed to perform specific tasks for the user. Examples: word
processors (Microsoft Word), web browsers (Chrome, Firefox), spreadsheet software (Excel).

(b) Main functions of an operating system:

1. **Memory management**: allocates memory to running programs and ensures programs do not interfere
   with each other's memory.
2. **Processor management**: schedules CPU time among running processes, deciding which process runs
   and for how long.
3. **Device management**: controls and communicates with hardware devices through device drivers.
4. **File management**: organises files in a directory structure, handles file creation, deletion,
   and access permissions.
5. **User interface**: provides a way for users to interact with the computer (command line or
   graphical user interface).
6. **Security**: manages user accounts, passwords, and access permissions to protect data.

(c) **Open source software**: software whose source code is freely available for users to view,
modify, and distribute. Example: Linux operating system. Advantage: free to use and customisable;
disadvantage: may lack official technical support and can have compatibility issues.

**Proprietary software**: software whose source code is owned by a company and is not freely
available. Users purchase a licence to use it. Example: Microsoft Windows. Advantage: typically has
official support and guarantees of quality; disadvantage: users cannot modify it and must pay
licence fees.

(d) A **compiler** translates the entire source code into machine code in one go before execution,
producing an executable file. Advantage: the compiled program runs faster because translation is
already done. Disadvantage: the entire program must be recompiled after any change, and error
messages may be harder to relate to specific lines of code.

An **interpreter** translates and executes the source code one line at a time. Advantage: easier for
debugging because errors are reported immediately when the offending line is reached. Disadvantage:
the program runs more slowly because translation happens during execution.

---

### UT-3: Data Representation

**Question:**

(a) Convert the binary number $11010110_2$ to decimal, hexadecimal, and octal.

(b) Explain why computers use binary to represent data. What is the advantage of using hexadecimal
as a shorthand notation for binary?

(c) A computer stores text using 8-bit ASCII. The ASCII code for 'A' is $65$ and for 'a' is $97$.
Convert the word "Cat" to its binary representation using ASCII codes.

(d) Explain the difference between lossy and lossless compression. Give one example of a file format
that uses each type.

**Solution:**

(a) Binary to decimal: $11010110_2 = 128 + 64 + 0 + 16 + 8 + 0 + 2 + 0 = 218$.

Decimal to hexadecimal: $218 / 16 = 13$ remainder $10$. $13 = \text{D}$, $10 = \text{A}$. So
$218_{10} = \text{DA}_{16}$.

Decimal to octal: $218 / 8 = 27$ remainder $2$. $27 / 8 = 3$ remainder $3$. $3 / 8 = 0$ remainder
$3$. So $218_{10} = 332_8$.

(b) Computers use binary because electronic circuits have two states: on (high voltage,
representing 1) and off (low voltage, representing 0). Transistors in logic gates naturally operate
in these two states, making binary the natural representation for digital systems.

Hexadecimal is a useful shorthand because one hexadecimal digit represents exactly four binary
digits (bits). This makes large binary numbers much easier to read and write. For example, the
16-bit binary number $1101111010101101$ is much easier to read as $\text{DEAD}_{16}$.

(c) ASCII codes: $\text{C} = 67$, $\text{a} = 97$, $\text{t} = 116$.

- $\text{C} = 67_{10} = 64 + 2 + 1 = 01000011_2$
- $\text{a} = 97_{10} = 64 + 32 + 1 = 01100001_2$
- $\text{t} = 116_{10} = 64 + 32 + 16 + 4 = 01110100_2$

"Cat" in binary: $01000011\, 01100001\, 01110100$

(d) **Lossy compression**: permanently removes some data to reduce file size. The original file
cannot be perfectly reconstructed from the compressed version. Some quality is lost. Example: JPEG
(images), MP3 (audio).

**Lossless compression**: reduces file size without losing any data. The original file can be
perfectly reconstructed from the compressed version. Example: PNG (images), FLAC (audio), ZIP
(general files).

---

## Integration Tests

### IT-1: Hardware, Software, and Data Combined

**Question:**

(a) A school is planning to upgrade its computer lab. Describe three hardware specifications they
should consider and explain how each affects performance for typical school applications (web
browsing, word processing, and light programming).

(b) A student writes a program in Python and runs it on their computer. Describe the sequence of
events from typing the source code to the program producing output. Include the roles of the editor,
operating system, interpreter, RAM, and CPU.

(c) A hospital stores patient records digitally. Each record contains the patient's name (20
characters), date of birth (10 characters), blood type (3 characters), and a 1-byte boolean flag
indicating whether the patient has allergies. Calculate the storage required for 5000 patient
records in: (i) bytes, (ii) kilobytes, assuming each character uses 1 byte.

(d) Evaluate the claim that "cloud storage will completely replace local storage." Present arguments
for and against.

**Solution:**

(a) Three hardware specifications:

1. **RAM**: Determines how many applications can run simultaneously without slowdown. For school
   use, 8 GB is sufficient for web browsing and word processing, while 16 GB is better for
   programming with IDEs.
2. **Processor (CPU)**: Affects the speed at which programs execute. A modern multi-core processor
   (e.g., Intel i5 or AMD Ryzen 5) provides adequate performance for school tasks.
3. **Storage type (SSD vs HDD)**: SSDs have much faster read/write speeds than HDDs, meaning faster
   boot times, quicker application loading, and better overall responsiveness. SSDs are strongly
   recommended.

(b) The student types the Python source code in a **text editor** (which runs as an application
managed by the **operating system**). When the student runs the program, the **operating system**
loads the Python **interpreter** from storage into **RAM** and schedules it for execution on the
**CPU**. The interpreter reads the source code line by line, translating each line into machine code
and executing it on the **CPU**. The operating system manages memory allocation, ensuring the
program and its data are stored in **RAM** while running. When the program produces output, the
operating system sends it to the display (via the graphics subsystem).

(c) Each record: $20 + 10 + 3 + 1 = 34$ bytes.

(i) 5000 records: $5000 \times 34 = 170{,}000$ bytes. (ii)
$170{,}000 / 1024 = 166.02\,\text{KB} \approx 166\,\text{KB}$.

(d) Arguments for: cloud storage offers accessibility from any device, automatic backup, scalable
capacity, and reduced hardware costs for the user. Many applications already operate primarily in
the cloud.

Arguments against: local storage is faster (no network latency), works without internet access,
provides complete data ownership and control, and avoids ongoing subscription costs. Sensitive data
(medical records, financial information) may be subject to privacy regulations that favour local
storage. Cloud services can suffer outages and security breaches. In practice, a hybrid approach
(local storage for speed and sensitive data, cloud for backup and accessibility) is the most
practical solution.

---

### IT-2: System Architecture and Performance

**Question:**

(a) Describe the Von Neumann architecture. Name the key components and explain the
fetch-decode-execute cycle.

(b) Explain the purpose of cache memory. Where is it located and how does it improve performance?

(c) A computer system uses a 32-bit address bus and a 64-bit data bus. Explain what this means and
calculate the maximum addressable memory.

(d) Solid state drives (SSDs) use NAND flash memory while hard disk drives (HDDs) use magnetic
platters. Compare and contrast these two storage technologies in terms of speed, durability, cost
per GB, and typical use cases.

**Solution:**

(a) The **Von Neumann architecture** is a computer design model in which:

- Data and instructions are both stored in the same **memory** (the stored-program concept).
- A single set of buses connects the memory to the **CPU**, **input devices**, and **output
  devices**.
- The CPU contains an **ALU**, **control unit**, and **registers**.

The **fetch-decode-execute cycle**:

1. **Fetch**: The address of the next instruction (held in the PC) is copied to the MAR. The
   instruction is fetched from memory (at the address in the MAR) and placed in the MDR. The PC is
   incremented.
2. **Decode**: The instruction in the MDR is decoded by the control unit to determine what operation
   to perform and which operands are needed.
3. **Execute**: The instruction is executed (e.g., the ALU performs a calculation, or data is moved
   to/from memory).

(b) **Cache memory** is a small, very fast type of memory located between the CPU and RAM (often on
or very near the CPU chip). It stores frequently accessed data and instructions so that the CPU can
retrieve them faster than accessing RAM. Since cache is much faster than RAM but much more
expensive, it is kept small (typically a few MB). When the CPU needs data, it checks cache first; if
the data is found (a "cache hit"), it is retrieved quickly. If not (a "cache miss"), the data must
be fetched from slower RAM. This significantly reduces the average time the CPU spends waiting for
data.

(c) A **32-bit address bus** means the CPU can address $2^{32}$ unique memory locations. A **64-bit
data bus** means 64 bits (8 bytes) of data can be transferred simultaneously between the CPU and
memory in a single bus cycle.

Maximum addressable memory $= 2^{32}$ bytes $= 4{,}294{,}967{,}296\,\text{bytes} = 4\,\text{GB}$.

(d)

| Feature     | SSD (NAND Flash)                                  | HDD (Magnetic)                               |
| ----------- | ------------------------------------------------- | -------------------------------------------- |
| Speed       | Fast read/write (hundreds of MB/s)                | Slower read/write (tens to hundreds of MB/s) |
| Durability  | No moving parts, resistant to physical shock      | Moving parts, vulnerable to physical damage  |
| Cost per GB | More expensive                                    | Less expensive                               |
| Capacity    | Typically 256 GB to 4 TB                          | Typically 500 GB to 20 TB                    |
| Use cases   | Boot drive, applications, laptops, fast workloads | Bulk storage, backups, archival data         |

SSDs are preferred for the operating system and frequently used applications due to their speed.
HDDs remain useful for large-capacity storage where speed is less critical.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Confusing RAM (volatile, temporary) with ROM (non-volatile, permanent) or with storage (hard
  disk).
- Forgetting that hexadecimal digits A-F represent the decimal values 10-15.
- Confusing the address bus (carries memory addresses, determines max memory) with the data bus
  (carries data, determines transfer width).
- Stating that the CPU "saves" data to hard disk directly -- the CPU works with RAM; storage access
  goes through the operating system.
- Confusing compilers and interpreters: compilers translate all code before execution; interpreters
  translate and execute one line at a time.
