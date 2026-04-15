---
title: Computer Systems
date: 2026-04-14
tags:
  - Computer Science
  - Highers
categories:
  - Computer Science
slug: computer-systems
---

# Computer Systems

## Higher Computer Systems

### Data Representation

**Binary:** Base-2 number system using digits 0 and 1.

**Converting binary to decimal:**

$$1101_2 = 1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 = 8 + 4 + 0 + 1 = 13_{10}$$

**Converting decimal to binary:** Repeatedly divide by 2 and record remainders.

**Worked Example.** Convert $200_{10}$ to binary.

$200 / 2 = 100$ r 0, $100 / 2 = 50$ r 0, $50 / 2 = 25$ r 0, $25 / 2 = 12$ r 1, $12 / 2 = 6$ r 0,
$6 / 2 = 3$ r 0, $3 / 2 = 1$ r 1, $1 / 2 = 0$ r 1.

Reading bottom to top: $11001000_2$.

**Hexadecimal:** Base-16 using digits 0-9 and A-F. Used for memory addresses, colour codes, and MAC
addresses.

$$\text{A}3_{16} = 10 \times 16 + 3 = 163_{10}$$

**Binary to hex:** Group binary digits in fours from the right.

$$11010110_2 = 1101 \; 0110 = \text{D}6_{16}$$

**Worked Example.** Convert $\text{FF}_{16}$ to binary and decimal.

Binary: $11111111_2$. Decimal: $15 \times 16 + 15 = 255$.

**Hexadecimal conversion table:**

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

**Why hexadecimal?** Hexadecimal is a convenient shorthand for binary. Each hex digit represents
exactly 4 bits, so an 8-bit byte can be written as two hex digits (e.g., `11010110` = `D6`). This is
much more compact and less error-prone than writing long binary strings. Memory addresses, colour
codes (`#FF5733`), MAC addresses (`00:1A:2B:3C:4D:5E`), and error codes all use hexadecimal.

### Representing Numbers

**Unsigned integers:** Non-negative integers. An 8-bit unsigned integer can represent 0 to 255.

**Two's complement:** Represents both positive and negative integers.

To find the two's complement of a negative number:

1. Write the positive binary representation
2. Flip all the bits (1's complement)
3. Add 1

**Example:** Represent $-42$ in 8-bit two's complement.

$42_{10} = 00101010_2$

Flip: $11010101_2$

Add 1: $11010110_2$

**Range for $n$-bit two's complement:** $-2^{n-1}$ to $2^{n-1} - 1$.

For 8 bits: $-128$ to $127$.

**Worked Example.** Represent $-100$ in 8-bit two's complement.

$100_{10} = 01100100_2$. Flip: $10011011_2$. Add 1: $10011100_2$.

Verify: $-128 + 16 + 8 + 4 = -100$. Correct.

**Proof of range.** With $n$ bits, there are $2^n$ distinct patterns. The non-negative range is $0$
to $2^{n-1} - 1$ ($2^{n-1}$ values). The negative range is $-2^{n-1}$ to $-1$ ($2^{n-1}$ values).
Total: $2^{n-1} + 2^{n-1} = 2^n$. $\blacksquare$

**Proof of two's complement negation.** For $n$-bit $x$ where $0 \lt x \le 2^{n-1}$, let $\bar{x}$
be the bitwise complement. Then $\bar{x} = (2^n - 1) - x$. Adding 1: $\bar{x} + 1 = 2^n - x$. In
$n$-bit arithmetic, $2^n \equiv 0$, so $x + (\bar{x} + 1) = 0$, confirming $\bar{x} + 1 = -x$.
$\blacksquare$

**Two's complement range summary:**

| Bits | Minimum       | Maximum      |
| ---- | ------------- | ------------ |
| 8    | -128          | 127          |
| 16   | -32,768       | 32,767       |
| 32   | -2,147,483,648 | 2,147,483,647 |

**Binary addition:**

$$
\begin{array}{r}
  \phantom{0}1101 \\
+ \phantom{0}1011 \\
\hline
  11000
\end{array}
$$

**Binary addition rules:**

| $0 + 0$ | $0 + 1$ | $1 + 0$ | $1 + 1$        |
| ------- | ------- | ------- | -------------- |
| 0       | 1       | 1       | 10 (0 carry 1) |

**Binary subtraction:** Add the two's complement.

**Worked Example.** Calculate $25 - 14$ using two's complement in 8-bit binary.

$25 = 00011001$. $14 = 00001110$.

Two's complement of 14: flip $00001110 \to 11110001$, add 1 $\to 11110010$.

$00011001 + 11110010 = 100001011$.

Discard overflow: $00001011 = 11$. Check: $25 - 14 = 11$. Correct.

**Worked Example.** Calculate $83 - 47$ using 8-bit two's complement.

$83 = 01010011$. $47 = 00101111$.

Two's complement of 47: flip $00101111 \to 11010000$, add 1 $\to 11010001$.

$01010011 + 11010001 = 100100100$.

Discard overflow: $00100100 = 36$. Check: $83 - 47 = 36$. Correct.

**Overflow detection.** If adding two positive numbers produces a negative result (or vice versa),
overflow has occurred. The sign bit flips unexpectedly.

**Worked Example.** Compute $100 + 50$ in 8-bit two's complement.

$100 = 01100100$, $50 = 00110010$.

Sum: $10010110$.

The MSB is 1, indicating a negative result. $10010110 = -128 + 16 + 4 + 2 = -106$. This is incorrect
($100 + 50 = 150$, which exceeds the 8-bit range). Overflow has occurred.

### Representing Text

**ASCII:** 7-bit code, 128 characters (0-127). Includes uppercase and lowercase letters, digits,
punctuation, and control characters.

**Unicode:** 16-bit or 32-bit encoding, supports over 149,000 characters across all writing systems.
UTF-8 is a variable-length encoding (1-4 bytes) that is backward-compatible with ASCII.

**Example:** The ASCII code for 'A' is 65 (01000001 in binary), and for 'a' is 97 (01100001).

**Worked Example.** What is the difference in ASCII code between uppercase and lowercase letters?

'a' - 'A' = 97 - 65 = 32. To convert uppercase to lowercase, add 32 (or flip bit 5).

**Worked Example.** What is stored in binary for the word "Cat" using ASCII?

C = 67 = 01000011, a = 97 = 01100001, t = 116 = 01110100.

"Cat" = 01000011 01100001 01110100 (3 bytes).

### Representing Images

**Bitmap images:** Each pixel is represented by binary values.

**Colour depth:** Number of bits per pixel.

- 1-bit: 2 colours (black and white)
- 8-bit: 256 colours
- 16-bit: 65,536 colours (high colour)
- 24-bit: over 16 million colours (true colour)
- 32-bit: true colour + alpha channel (transparency)

**Image file size (bytes) = width $\times$ height $\times$ colour depth / 8**

**Example:** A $1920 \times 1080$ image with 24-bit colour depth:

$$1920 \times 1080 \times 24 / 8 = 6220800 \text{ bytes} \approx 5.93 \text{ MB}$$

**Worked Example.** An image has 4 megapixels (4,000,000 pixels) and a file size of 6 MB. What is
the colour depth?

$\text{Colour depth} = \frac{6 \times 1024 \times 1024 \times 8}{4000000} = \frac{50331648}{4000000}
\approx 12.58$
bits.

This suggests approximately 12-bit colour, though in practice this would be rounded to 16-bit.

**Worked Example.** A bitmap image is $640 \times 480$ with a file size of 600 KB. What is the colour
depth?

$\text{Colour depth} = \frac{600 \times 1024 \times 8}{640 \times 480} = \frac{4915200}{307200} = 16$
bits per pixel.

**Vector images:** Images described by mathematical equations (coordinates, lines, curves). Scale
without loss of quality. Smaller file sizes for simple images.

| Feature        | Bitmap                      | Vector                      |
| -------------- | --------------------------- | --------------------------- |
| Representation | Grid of pixels              | Mathematical descriptions   |
| Scaling        | Loses quality when enlarged | No quality loss at any size |
| File size      | Depends on resolution       | Depends on complexity       |
| Best for       | Photographs                 | Logos, icons, diagrams      |
| Editing        | Pixel-level manipulation    | Edit shapes and paths       |
| Zoom           | Becomes pixelated           | Always crisp                |

### Representing Sound

**Analogue to Digital Conversion:**

1. **Sampling:** Measure the sound wave at regular intervals
2. **Quantisation:** Round each sample to the nearest available value
3. **Encoding:** Convert each value to binary

**Sample rate:** Number of samples per second (Hz). CD quality: 44,100 Hz.

**Bit depth:** Number of bits per sample. CD quality: 16-bit.

**File size (bits) = sample rate $\times$ duration (s) $\times$ bit depth $\times$ channels**

**Example:** A 3-minute stereo (2 channels) audio file at CD quality:

$$44100 \times 180 \times 16 \times 2 = 254016000 \text{ bits} \approx 30.2 \text{ MB}$$

**Nyquist theorem.** The sample rate must be at least twice the highest frequency to accurately
reproduce the sound. Human hearing goes up to about 20,000 Hz, so 44,100 Hz is sufficient.

**Worked Example.** A 5-minute mono recording at 22050 Hz with 16-bit depth.

$22050 \times 300 \times 16 = 105840000$ bits $\approx 12.6$ MB.

**Worked Example.** A 4-minute stereo audio file at 48,000 Hz has a file size of 41 MB. Calculate the
bit depth.

$\text{Bit depth} = \frac{41 \times 1024 \times 1024 \times 8}{48000 \times 240 \times 2} = \frac{343932928}{23040000} \approx 14.9$
bits.

This is approximately 16-bit (the file likely has metadata/header overhead too).

### Compression

**Lossless compression:** No data is lost; the original can be perfectly reconstructed. Examples:
ZIP, PNG, FLAC.

**Lossy compression:** Some data is permanently discarded. Smaller files. Examples: JPEG, MP3, MPEG.

**Run-Length Encoding (RLE):** A simple lossless compression that stores repeated values as count +
value.

**Example:** AAAAABBCCCC $\to$ 5A2B4C

**Worked Example.** Compress the following data using RLE: WWWWWWWBBBBBBWWWW.

W7 B6 W4 = 6 runs = 12 bytes (assuming 1 byte per count and 1 byte per value).

Original: 17 bytes. Compressed: 12 bytes. Compression ratio: 17/12 $\approx$ 1.42:1.

**Worked Example.** When is RLE ineffective?

For data with no repeated values, e.g., ABCDEFGHIJ, RLE produces A1B1C1D1E1F1G1H1I1J1 = 20 bytes,
which is larger than the original 10 bytes. RLE increases file size in this case.

**Compression comparison:**

| Feature     | Lossless         | Lossy                |
| ----------- | ---------------- | -------------------- |
| Data loss   | None             | Some data discarded  |
| File size   | Larger            | Smaller              |
| Quality     | Identical to original | Reduced from original |
| Examples    | PNG, FLAC, ZIP   | JPEG, MP3, MPEG      |
| Best for    | Text, code, medical images | Photos, audio, video |

**Worked Example.** Explain why lossless compression is used for executable files and documents but
lossy compression is used for photographs.

Executable files and documents must be reconstructed exactly -- a single changed bit could make a
program crash or change the meaning of a legal document. Photographs can tolerate some data loss
because the human eye cannot perceive small differences in colour or detail.

---

## Computer Architecture

### Von Neumann Architecture

**Components:**

- **CPU (Central Processing Unit):** ALU, Control Unit, Registers
- **Memory (RAM):** Stores data and instructions
- **Input devices:** Send data to the computer
- **Output devices:** Receive data from the computer
- **Storage:** Permanent data storage (HDD, SSD)

**Stored program concept:** Both data and instructions are stored in the same memory and accessed
sequentially by the CPU.

**Von Neumann vs Harvard architecture:**

| Feature     | Von Neumann                       | Harvard                                       |
| ----------- | --------------------------------- | --------------------------------------------- |
| Memory      | Shared for data and instructions  | Separate data and instruction memory          |
| Bus         | Single bus                        | Separate buses                                |
| Simplicity  | Simpler hardware                  | More complex hardware                         |
| Performance | Bottleneck when fetching and data | Can fetch instruction and data simultaneously |
| Use         | Most general-purpose computers    | DSP, some microcontrollers                    |

**Von Neumann bottleneck.** Because data and instructions share a single bus, the CPU cannot fetch an
instruction and read/write data simultaneously. Modern processors mitigate this with caches,
pipelines, and Harvard-architecture elements within the CPU.

### The Fetch-Decode-Execute Cycle

1. **Fetch:** The control unit fetches the next instruction from memory (address in the Program
   Counter)
2. **Decode:** The instruction is decoded to determine what operation to perform
3. **Execute:** The instruction is carried out; the Program Counter is updated

**Detailed trace.** PC = 50, instruction at address 50 is "ADD 7" (add 7 to accumulator).

1. Fetch: MAR $\leftarrow$ 50, MDR $\leftarrow$ "ADD 7", PC $\leftarrow$ 51, CIR $\leftarrow$ "ADD
   7".
2. Decode: CU interprets "ADD 7" as "add the value 7 to the accumulator".
3. Execute: ACC $\leftarrow$ ACC + 7.

**Worked Example.** Trace the FDE cycle when PC = 100 and the instruction at address 100 is "SUB 5",
with ACC = 30.

1. Fetch: MAR $\leftarrow$ 100, MDR $\leftarrow$ "SUB 5", PC $\leftarrow$ 101, CIR $\leftarrow$
   "SUB 5".
2. Decode: CU decodes "SUB 5" -- subtract the value 5 from the accumulator.
3. Execute: ACC $\leftarrow$ ACC - 5 = 30 - 5 = 25.

**Worked Example.** Trace the FDE cycle for a store instruction. PC = 200, instruction is "STORE
50" (store ACC to memory address 50), ACC = 42.

1. Fetch: MAR $\leftarrow$ 200, MDR $\leftarrow$ "STORE 50", PC $\leftarrow$ 201, CIR $\leftarrow$
   "STORE 50".
2. Decode: CU identifies a store instruction. Destination address is 50.
3. Execute: MAR $\leftarrow$ 50, MDR $\leftarrow$ 42 (from ACC), memory[50] $\leftarrow$ 42.

### CPU Components

**Arithmetic Logic Unit (ALU):** Performs arithmetic operations (add, subtract, multiply, divide)
and logical operations (AND, OR, NOT, XOR).

**Control Unit (CU):** Coordinates the activities of the CPU. Sends control signals to other
components. Manages the fetch-decode-execute cycle.

**Registers:** Small, fast storage within the CPU.

| Register                      | Purpose                                      |
| ----------------------------- | -------------------------------------------- |
| Program Counter (PC)          | Address of the next instruction              |
| Memory Address Register (MAR) | Address to be accessed in memory             |
| Memory Data Register (MDR)    | Data fetched from or to be written to memory |
| Instruction Register (IR)     | Current instruction being executed           |
| Accumulator (ACC)             | Stores results of ALU operations             |

**Key distinction:** The PC holds an **address** (where to go next). The MAR also holds an **address**
(where to read/write). The MDR holds the actual **data** (what was read or what to write). The CIR
holds the **instruction** (what to do).

**Worked Example.** After the fetch phase, the PC contains 101. What does this mean?

It means the next instruction to be fetched will be from memory address 101. The PC was incremented
during the fetch phase from its previous value (100) to point to the next instruction.

### Cache Memory

Small, fast memory between the CPU and RAM. Stores frequently accessed data and instructions.

**Levels:**

- **L1 cache:** Smallest, fastest, on the CPU core
- **L2 cache:** Larger, slightly slower, per core or shared
- **L3 cache:** Largest, slowest, shared across all cores

**Cache hit:** Data is found in the cache (fast access).

**Cache miss:** Data is not in the cache; must be fetched from RAM (slower).

**Why caching works:** Programs tend to access the same data repeatedly (temporal locality) and data
near recently accessed data (spatial locality). Caching exploits these patterns.

**Worked Example.** A CPU has a 92% cache hit rate. L1 access time is 1 ns, L2 access time is 5 ns,
and RAM access time is 100 ns. Calculate the average memory access time.

Average = $0.92 \times 1 + 0.08 \times 100 = 0.92 + 8 = 8.92$ ns.

Without cache: 100 ns. Speedup: $100 / 8.92 \approx 11.2\times$.

### Memory Hierarchy

| Level     | Speed     | Capacity | Cost    | Volatile? |
| --------- | --------- | -------- | ------- | --------- |
| Registers | Fastest   | Smallest | Highest | Yes       |
| Cache     | Very fast | Small    | High    | Yes       |
| RAM       | Fast      | Medium   | Medium  | Yes       |
| SSD       | Moderate  | Large    | Medium  | No        |
| HDD       | Slow      | Largest  | Lowest  | No        |

**Why the hierarchy exists.** Faster memory is more expensive per byte. The hierarchy exploits
locality of reference: programs tend to access the same data repeatedly (temporal locality) and data
near recently accessed data (spatial locality). By keeping the most frequently used data in small,
fast memory near the CPU, the average access time is dramatically reduced compared to using only
RAM.

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

**Bus comparison:**

| Bus          | Direction      | Carries                |
| ------------ | -------------- | ---------------------- |
| Address bus  | CPU to memory  | Memory addresses       |
| Data bus     | CPU to/from    | Data and instructions  |
| Control bus  | CPU to devices | Control signals (read, write, clock, interrupt) |

### Input/Output Devices

| Device      | Type   | Function                             |
| ----------- | ------ | ------------------------------------ |
| Keyboard    | Input  | Text entry                           |
| Mouse       | Input  | Pointing and clicking                |
| Scanner     | Input  | Converts documents/images to digital |
| Microphone  | Input  | Converts sound to digital            |
| Monitor     | Output | Displays visual output               |
| Printer     | Output | Produces hard copies                 |
| Speaker     | Output | Produces audio                       |
| Touchscreen | Both   | Input (touch) and output (display)   |

### Operating Systems

**Functions of an operating system:**

- **Process management:** Allocates CPU time, schedules processes
- **Memory management:** Allocates memory to processes, virtual memory
- **File management:** Organises files in directories, manages storage
- **Device management:** Communicates with hardware via drivers
- **User interface:** Provides CLI or GUI for user interaction
- **Security:** User authentication, file permissions, firewall

**Types of operating systems:**

| Type      | Description                     | Examples              |
| --------- | ------------------------------- | --------------------- |
| Desktop   | Personal use, multitasking      | Windows, macOS, Linux |
| Mobile    | Touch-optimized, app-based      | iOS, Android          |
| Server    | Network services, high uptime   | Windows Server, Linux |
| Real-time | Guaranteed response times       | VxWorks, FreeRTOS     |
| Embedded  | Limited resources, dedicated    | Car ECU, smart TV     |

**GUI vs CLI:**

| Feature     | GUI                   | CLI                      |
| ----------- | --------------------- | ------------------------ |
| Ease of use | Easy for beginners    | Steep learning curve     |
| Speed       | Slower (mouse-driven) | Faster (keyboard-driven) |
| Resources   | Higher (graphics)     | Lower                    |
| Automation  | Limited               | Easy with scripting      |
| Examples    | Windows, macOS        | Linux terminal, CMD      |

**Process scheduling algorithms:**

| Algorithm                | Description                                            | Fairness |
| ------------------------ | ------------------------------------------------------ | -------- |
| Round-robin              | Each process gets a fixed time slice in turn           | High     |
| Priority-based           | Higher-priority processes get CPU time first           | Low      |
| First-come, first-served | Processes served in order of arrival                   | Medium   |
| Shortest job first       | The process with the shortest expected time runs first | Medium   |

**Worked Example.** Explain why a real-time operating system is needed in a car's anti-lock braking
system (ABS).

The ABS must respond within milliseconds to prevent wheel lockup. A general-purpose OS (like
Windows) cannot guarantee response times because it may be busy with other tasks. A RTOS guarantees
that the ABS process receives CPU time within a fixed deadline, ensuring safety.

**Virtual memory (HL).** When RAM is full, the operating system uses a section of the hard drive as
virtual memory (swap space). A **page fault** occurs when the CPU accesses data that has been swapped
out, causing a delay of milliseconds instead of nanoseconds. **Thrashing** occurs when the system
spends more time swapping pages than executing instructions.

### RAM vs ROM

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
into RAM.

**DRAM vs SRAM:**

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

### Secondary Storage Comparison

| Device    | Speed  | Capacity   | Durability | Cost         |
| --------- | ------ | ---------- | ---------- | ------------ |
| HDD       | Medium | Very high  | Medium     | Low          |
| SSD       | Fast   | High       | High       | Medium       |
| USB flash | Medium | Low-Medium | High       | Low          |
| Optical   | Slow   | Low-Medium | Low        | Very low     |
| Cloud     | Varies | Varies     | Varies     | Subscription |

**Choosing storage: practical considerations:**

- A photographer storing thousands of RAW images needs high capacity (HDD or cloud).
- A video editor needs fast read/write speeds (SSD).
- A student backing up coursework needs portability (USB flash drive).
- A business sharing files across offices needs cloud storage with collaboration features.

**HDD vs SSD in detail:**

| Metric      | HDD              | SSD             |
| ----------- | ---------------- | --------------- |
| Read speed  | 50-200 MB/s      | 200-550 MB/s    |
| Write speed | 50-150 MB/s      | 200-500 MB/s    |
| Latency     | 5-10 ms          | 0.05-0.1 ms     |
| IOPS        | 100-200          | 5000-100000     |
| Cost per GB | Low              | Higher          |
| Durability  | Mechanical parts | No moving parts |
| Power usage | Higher           | Lower           |

### Embedded Systems

An **embedded system** is a computer system built into a larger device, designed to perform a
specific function.

**Examples:** Washing machines, microwaves, cars (engine management, ABS), traffic lights,
pacemakers, smart thermostats.

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


---

## Common Pitfalls

1. **Two's complement:** Forgetting to add 1 after flipping bits. The most significant bit indicates
   the sign (0 = positive, 1 = negative).

2. **Image file size:** Forgetting to divide by 8 when converting from bits to bytes.

3. **Colour depth vs. bit depth:** Colour depth is per pixel; bit depth is per audio sample.

4. **Cache hierarchy:** L1 is the smallest and fastest; L3 is the largest and slowest.

5. **Registers vs. memory:** Registers are inside the CPU; RAM is separate.

6. **Forgetting the PC increments during fetch**, not during execute. The PC points to the NEXT
   instruction after fetch completes.

7. **Confusing MAR and MDR.** MAR holds an address (where to look); MDR holds data (what was found
   or what to store).

8. **RLE increasing file size** when data has no repeated values. Always check if compression is
   effective.

9. **Confusing the address bus and data bus.** The address bus is one-way (CPU to memory); the data
   bus is two-way (CPU to/from memory).

10. **Confusing DRAM and SRAM.** DRAM is used for main memory and needs refreshing. SRAM is used for
    cache and does not need refreshing.

11. **Forgetting that the Von Neumann architecture uses a single bus** for both instructions and
    data, creating a bottleneck.

12. **Confusing lossy and lossless compression.** Lossy permanently discards data (JPEG, MP3);
    lossless preserves the original exactly (PNG, FLAC).

---

## Practice Questions

1. Convert $-75$ to 8-bit two's complement binary.

2. Calculate the file size of a $1280 \times 720$ image with 32-bit colour depth.

3. A 5-minute audio recording uses a sample rate of $22050 \text{ Hz}$ with 16-bit depth and is
   mono. Calculate the file size in MB.

4. Explain the difference between lossy and lossless compression with examples.

5. Describe the fetch-decode-execute cycle, naming the registers involved at each stage.

6. Explain why cache memory improves CPU performance.

7. Convert $\text{FF}_{16}$ to binary and decimal.

8. Explain three functions of an operating system with examples.

9. Calculate $83 - 47$ using 8-bit two's complement. Show all working.

10. A bitmap image is $640 \times 480$ with a file size of 600 KB. What is the colour depth?

11. Explain the Von Neumann bottleneck and describe one technique used to overcome it.

12. A 4-minute stereo audio file at 48000 Hz has a file size of 41 MB. Calculate the bit depth.

13. Explain the difference between RAM and ROM. Why does a computer need both?

14. Describe the memory hierarchy and explain why each level exists.

15. Convert the decimal number $327$ to hexadecimal.

16. A CPU has an L1 cache hit rate of 85%. L1 access is 2 ns and RAM access is 80 ns. Calculate the
    average memory access time.

17. Explain what virtual memory is and why it is necessary. What is a page fault?

18. Compare bitmap and vector images. Give an appropriate use case for each and explain your choice.

19. Explain the difference between Von Neumann and Harvard architecture. Why is Von Neumann more
    common in general-purpose computers?

20. A CPU has a 32-bit address bus and a 64-bit data bus running at 3 GHz. Calculate the maximum
    addressable memory and the maximum data transfer rate.

21. Explain why round-robin scheduling is fairer than priority-based scheduling. Give a scenario
    where priority-based scheduling is more appropriate.

22. Write the hexadecimal conversion for the binary number $1011001111010110_2$. Show your working.

23. Explain the concept of thrashing. What are the symptoms and how can it be resolved?

24. A system has a 95% L1 cache hit rate, a 98% L2 cache hit rate (for L1 misses), L1 access = 1 ns,
    L2 access = 5 ns, RAM access = 100 ns. Calculate the average memory access time.

25. Describe three differences between DRAM and SRAM. State which is used for main memory and which
    for cache, and explain why.
