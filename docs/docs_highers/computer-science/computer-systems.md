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

**Hexadecimal:** Base-16 using digits 0-9 and A-F. Used for memory addresses, colour codes, and MAC
addresses.

$$\text{A}3_{16} = 10 \times 16 + 3 = 163_{10}$$

**Binary to hex:** Group binary digits in fours from the right.

$$11010110_2 = 1101 \; 0110 = \text{D}6_{16}$$

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

**Binary addition:**

$$
\begin{array}{r}
  \phantom{0}1101 \\
+ \phantom{0}1011 \\
\hline
  11000
\end{array}
$$

**Binary subtraction:** Add the two's complement.

### Representing Text

**ASCII:** 7-bit code, 128 characters (0-127). Includes uppercase and lowercase letters, digits,
punctuation, and control characters.

**Unicode:** 16-bit or 32-bit encoding, supports over 149000 characters across all writing systems.

**Example:** The ASCII code for 'A' is 65 (01000001 in binary), and for 'a' is 97 (01100001).

### Representing Images

**Bitmap images:** Each pixel is represented by binary values.

**Colour depth:** Number of bits per pixel.

- 1-bit: 2 colours (black and white)
- 8-bit: 256 colours
- 24-bit: over 16 million colours (true colour)

**Image file size (bytes) = width $\times$ height $\times$ colour depth / 8**

**Example:** A $1920 \times 1080$ image with 24-bit colour depth:

$$1920 \times 1080 \times 24 / 8 = 6220800 \text{ bytes} \approx 5.93 \text{ MB}$$

**Vector images:** Images described by mathematical equations (coordinates, lines, curves). Scale
without loss of quality. Smaller file sizes for simple images.

### Representing Sound

**Analogue to Digital Conversion:**

1. **Sampling:** Measure the sound wave at regular intervals
2. **Quantisation:** Round each sample to the nearest available value
3. **Encoding:** Convert each value to binary

**Sample rate:** Number of samples per second (Hz). CD quality: 44100 Hz.

**Bit depth:** Number of bits per sample. CD quality: 16-bit.

**File size (bits) = sample rate $\times$ duration (s) $\times$ bit depth $\times$ channels**

**Example:** A 3-minute stereo (2 channels) audio file at CD quality:

$$44100 \times 180 \times 16 \times 2 = 254016000 \text{ bits} \approx 30.2 \text{ MB}$$

### Compression

**Lossless compression:** No data is lost; the original can be perfectly reconstructed. Examples:
ZIP, PNG, FLAC.

**Lossy compression:** Some data is permanently discarded. Smaller files. Examples: JPEG, MP3, MPEG.

**Run-Length Encoding (RLE):** A simple lossless compression that stores repeated values as count +
value.

**Example:** AAAAABBCCCC $\to$ 5A2B4C

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

**Fetch-Decode-Execute Cycle:**

1. **Fetch:** The control unit fetches the next instruction from memory (address in the Program
   Counter)
2. **Decode:** The instruction is decoded to determine what operation to perform
3. **Execute:** The instruction is carried out; the Program Counter is updated

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

### Cache Memory

Small, fast memory between the CPU and RAM. Stores frequently accessed data and instructions.

**Levels:**

- **L1 cache:** Smallest, fastest, on the CPU core
- **L2 cache:** Larger, slightly slower, per core or shared
- **L3 cache:** Largest, slowest, shared across all cores

**Cache hit:** Data is found in the cache (fast access).

**Cache miss:** Data is not in the cache; must be fetched from RAM (slower).

### Memory Hierarchy

| Level     | Speed     | Capacity | Cost    |
| --------- | --------- | -------- | ------- |
| Registers | Fastest   | Smallest | Highest |
| Cache     | Very fast | Small    | High    |
| RAM       | Fast      | Medium   | Medium  |
| HDD/SSD   | Slow      | Large    | Low     |

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

- Windows (desktop)
- macOS (desktop)
- Linux (desktop, server)
- Android / iOS (mobile)
- Real-time operating systems (RTOS)

---

## Common Pitfalls

1. **Two's complement:** Forgetting to add 1 after flipping bits. The most significant bit indicates
   the sign (0 = positive, 1 = negative).

2. **Image file size:** Forgetting to divide by 8 when converting from bits to bytes.

3. **Colour depth vs. bit depth:** Colour depth is per pixel; bit depth is per audio sample.

4. **Cache hierarchy:** L1 is the smallest and fastest; L3 is the largest and slowest.

5. **Registers vs. memory:** Registers are inside the CPU; RAM is separate.

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
