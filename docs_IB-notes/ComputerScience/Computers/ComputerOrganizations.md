---
title: Computer Organizations
date: 2025-05-01T23:58:50.146Z
tags:
    - CS
categories:
    - CS
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
SRAM are volatile semiconductor memory that uses flip flops to store each bit of data. This is characterized by fast access times and used in cache memory.

#### Dynamic RAM (DRAM)
DRAM are volatile memory that store each bit as a electric charge in a capacitor within each memory cell. This is characterized by denser and cheaper than SRAM, used in main system memory (RAM modules).


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