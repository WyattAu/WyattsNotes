---
title: Computer Systems
date: 2026-04-14
tags:
  - Computer Science
  - GCSE
categories:
  - Computer Science
slug: computer-systems
---

## Computer Systems

:::info
Board Coverage AQA Paper 1 | Edexcel Paper 1 | OCR J277 Paper 1 | WJEC Unit 1
:::

## 1. CPU Architecture

### 1.1 Components of the CPU

The **CPU (Central Processing Unit)** is the brain of the computer. It processes data and executes
instructions.

| Component                   | Function                                                                           |
| --------------------------- | ---------------------------------------------------------------------------------- |
| Arithmetic Logic Unit (ALU) | Performs arithmetic (addition, subtraction) and logical (AND, OR, NOT) operations  |
| Control Unit (CU)           | Coordinates the activities of the CPU; fetches, decodes, and executes instructions |
| Cache                       | Small, fast memory inside the CPU that stores frequently used data                 |
| Registers                   | Small, fast storage locations within the CPU                                       |
| Buses                       | Pathways for data transfer between components                                      |

### 1.2 Registers

| Register                           | Function                                                                   |
| ---------------------------------- | -------------------------------------------------------------------------- |
| Program Counter (PC)               | Holds the memory address of the next instruction to be fetched             |
| Memory Address Register (MAR)      | Holds the address of the memory location to be read from or written to     |
| Memory Data Register (MDR)         | Holds the data that has been read from or is about to be written to memory |
| Accumulator (ACC)                  | Stores the results of calculations performed by the ALU                    |
| Current Instruction Register (CIR) | Holds the instruction currently being decoded and executed                 |

### 1.3 The Fetch-Decode-Execute Cycle

The CPU continuously cycles through three stages:

**1. Fetch:**

- The address in the PC is copied to the MAR
- The instruction stored at that address is copied from memory to the MDR
- The PC is incremented (points to the next instruction)
- The instruction in the MDR is copied to the CIR

**2. Decode:**

- The control unit decodes the instruction in the CIR
- It determines what operation to perform and what data to use

**3. Execute:**

- The instruction is carried out (the ALU performs calculations, data is moved, etc.)
- The cycle repeats

### 1.4 Von Neumann Architecture

The **Von Neumann architecture** is the standard model for most computers:

- Data and instructions are stored in the same memory
- Memory is accessed sequentially
- The CPU fetches, decodes, and executes instructions one at a time
- A single bus is used for data transfer

## 2. Memory

### 2.1 Types of Memory

| Type              | Volatile? | Speed     | Capacity   | Purpose                                      |
| ----------------- | --------- | --------- | ---------- | -------------------------------------------- |
| RAM               | Yes       | Fast      | Moderate   | Stores currently running programs and data   |
| ROM               | No        | Fast      | Small      | Stores the BIOS/start-up instructions        |
| Cache             | Yes       | Very fast | Very small | Stores frequently used instructions and data |
| Secondary storage | No        | Slow      | Large      | Long-term storage of files and programs      |

### 2.2 RAM vs ROM

| Feature        | RAM                                | ROM                                 |
| -------------- | ---------------------------------- | ----------------------------------- |
| Volatile       | Yes (loses data when power is off) | No (retains data when power is off) |
| Read/Write     | Both                               | Read only                           |
| Contents       | Programs and data currently in use | Boot-up instructions (BIOS)         |
| Can be changed | Yes                                | No (in traditional ROM)             |

### 2.3 Virtual Memory

When RAM is full, the operating system uses a section of the hard drive as additional RAM (called a
**swap file** or **page file**). This is **virtual memory**.

**Advantage:** Allows the computer to run more programs than the physical RAM can hold.

**Disadvantage:** Much slower than physical RAM because hard drives are slower than RAM.

## 3. Storage

### 3.1 Primary vs Secondary Storage

| Feature    | Primary Storage (RAM/ROM) | Secondary Storage           |
| ---------- | ------------------------- | --------------------------- |
| Volatile?  | RAM yes, ROM no           | No                          |
| Speed      | Very fast                 | Slower                      |
| Capacity   | Limited                   | Large                       |
| Connection | Directly accessed by CPU  | Accessed via data bus       |
| Examples   | RAM, ROM, cache           | HDD, SSD, USB, optical disc |

### 3.2 Magnetic Storage (Hard Disk Drive)

- Uses spinning magnetic platters and read/write heads
- Large capacity, relatively cheap
- Slower than SSD
- Moving parts (can be damaged by physical shock)

### 3.3 Solid State Storage

- Uses flash memory (no moving parts)
- Faster than HDD
- More durable (no moving parts)
- More expensive per GB
- Examples: SSD, USB flash drives, SD cards

### 3.4 Optical Storage

- Uses lasers to read/write data
- CD: 700 MB, DVD: 4.7 GB, Blu-ray: 25 GB
- Slower than magnetic and solid state
- Examples: CD-ROM, DVD-RW, Blu-ray

### 3.5 Comparing Storage Devices

| Device    | Speed  | Capacity   | Durability | Cost         |
| --------- | ------ | ---------- | ---------- | ------------ |
| HDD       | Medium | Very high  | Medium     | Low          |
| SSD       | Fast   | High       | High       | Medium       |
| USB flash | Medium | Low-Medium | High       | Low          |
| Optical   | Slow   | Low-Medium | Low        | Very low     |
| Cloud     | Varies | Varies     | Varies     | Subscription |

## 4. Operating Systems

### 4.1 Functions of an Operating System

| Function              | Description                                                         |
| --------------------- | ------------------------------------------------------------------- |
| Memory management     | Allocates RAM to programs, manages virtual memory                   |
| Processor management  | Schedules CPU time for running programs                             |
| Device management     | Controls hardware devices via drivers                               |
| - **File management** | Organises files in directories, handles read/write operations       |
| - **User interface**  | Provides a way for users to interact with the computer (GUI or CLI) |
| - **Security**        | Manages user accounts, permissions, and access control              |

### 4.2 Types of User Interface

**Graphical User Interface (GUI):**

- Uses windows, icons, menus, and pointers
- User-friendly, easy to learn
- Examples: Windows, macOS, Android

**Command Line Interface (CLI):**

- Text-based commands typed by the user
- Requires knowledge of commands
- Faster for experienced users, uses fewer resources
- Examples: Windows Command Prompt, Linux terminal

### 4.3 Utility Software

Utility software helps maintain and manage the computer:

| Utility                    | Purpose                                     |
| -------------------------- | ------------------------------------------- |
| Disk defragmenter          | Reorganises data on a HDD for faster access |
| - **Disk cleaner**         | Removes unnecessary files to free up space  |
| - **Antivirus**            | Detects and removes malware                 |
| - **Compression software** | Compresses and decompresses files           |
| - **Backup software**      | Creates copies of data for recovery         |

## 5. Embedded Systems

An **embedded system** is a computer system built into a larger device, designed to perform a
specific function.

**Examples:**

- Washing machines (control programs for wash cycles)
- Microwaves (timer and power settings)
- Cars (engine management, ABS, airbags)
- Traffic lights
- Medical devices (pacemakers)
- Smart thermostats

**Characteristics of embedded systems:**

- Purpose-built for a single task
- Often use ROM to store the program (does not change)
- Limited processing power
- May have no user interface or a simple one
- Reliable and designed to run continuously

## 6. The Systems Life Cycle

### 6.1 Stages

1. **Analysis:** Understanding the problem; identifying requirements; consulting stakeholders
2. **Design:** Planning the solution; designing data structures, user interface, and program
   structure
3. **Implementation:** Writing the code; creating the database; building the system
4. **Testing:** Checking that the system works correctly and meets the requirements
5. **Evaluation:** Reviewing the system against the original requirements; identifying improvements
6. **Maintenance:** Fixing bugs and making improvements after deployment

### 6.2 Types of Testing

| Type                      | Description                                               |
| ------------------------- | --------------------------------------------------------- |
| Unit testing              | Testing individual components in isolation                |
| - **Integration testing** | Testing that components work together correctly           |
| - **System testing**      | Testing the entire system as a whole                      |
| - **Acceptance testing**  | Customer tests the system to ensure it meets requirements |
| - **Alpha testing**       | Testing by the development team                           |
| - **Beta testing**        | Testing by a group of real users                          |

## Common Pitfalls

- **Confusing RAM and ROM.** RAM is volatile and holds current data; ROM is non-volatile and holds
  boot instructions.
- **Getting the fetch-decode-execute cycle wrong.** Remember the order: fetch from memory, decode
  the instruction, execute it.
- **Confusing registers.** PC holds the address of the NEXT instruction; MAR holds the address being
  accessed; MDR holds the DATA.
- **Thinking SSDs have no limit on read/write cycles.** SSDs do have a limit (though much higher
  than expected lifespan for most users).
- **Confusing embedded systems with general-purpose computers.** Embedded systems are designed for a
  single specific task.
- **Forgetting that virtual memory is on the hard drive**, which is much slower than physical RAM.

## Practice Questions

1. Describe the function of each of the following CPU components: ALU, CU, cache, and registers.

2. Explain the fetch-decode-execute cycle, including the role of the Program Counter, MAR, and MDR.

3. Compare RAM and ROM in terms of volatility, purpose, and whether they can be read and written to.

4. Compare three different types of secondary storage, explaining the advantages and disadvantages
   of each.

5. Explain four functions of an operating system.

6. Describe the difference between a GUI and a CLI, giving advantages and disadvantages of each.

7. Explain what an embedded system is and give three examples.

8. Describe the stages of the systems life cycle.

9. Explain why cache memory improves the performance of a computer.

10. Explain the difference between HDD and SSD storage, including why SSDs are generally faster.
