---
title: Security
tags:
  - Computing
  - University
---

### 9.1 Access Control

**Access control lists (ACLs).** Each object (file, directory, device) has an associated list of
Entries specifying which subjects (users, groups) have which permissions (read, write, execute).

```
ACL for /data/report.txt:
  alice: rw-
  bob:   r--
  @dev:  rwx
  other: ---
```

- _Advantage:_ Flexible; per-object granularity; easy to audit.
- _Disadvantage:_ Checking permissions requires scanning the list; ACLs can grow large.

**Capabilities.** Each subject (process) carries a list of capability tokens, each granting access
to A specific object with specific rights. The kernel verifies that the process presents a valid
Capability.

- _Advantage:_ Decentralised; no per-object list to scan; efficient for distributed systems.
- _Disadvantage:_ Capability revocation is difficult; if a process copies a capability, revoking the
  original does not affect copies (solved by indirection: capabilities point to a kernel-managed
  object table entry that can be invalidated).

| Property       | ACLs                   | Capabilities         |
| -------------- | ---------------------- | -------------------- |
| Association    | With objects           | With subjects        |
| Revocation     | Easy (modify the list) | Difficult            |
| Delegation     | Requires policy        | Natural (copy token) |
| Implementation | POSIX, NTFS            | seL4, Capsicum, FUSE |

### 9.2 Principle of Least Privilege

A subject should receive only the minimum privileges necessary to perform its task. Violations
Create unnecessary attack surface.

**Application to OS design:**

- **Processes:** Run with the lowest possible privileges. Web servers should not run as root.
- **System calls:** `chmod` and `chown` require appropriate ownership; `setuid` requires root.
- **Kernel modules:** Loadable kernel modules have full kernel access; restrict loading to
  privileged users.
- **Containers:** Limit capabilities via `docker run --cap-drop ALL --cap-add NET_BIND_SERVICE`.

**Privilege separation.** Split a program into components with different privilege levels. Example:
OpenSSH splits into an unprivileged monitor (handles network I/O) and a privileged child (handles
Authentication and session setup). A compromise of the monitor does not grant root access.

### 9.3 Buffer Overflow Prevention

A **buffer overflow** occurs when a program writes data beyond the bounds of a buffer, potentially
Overwriting return addresses, function pointers, or other control data.

**Defences:**

**Stack canaries.** A random value (`canary`) placed between the local variables and the saved
Return address on the stack. Before returning, the function checks that the canary is unchanged. If
Modified, the program aborts.

- Implemented in GCC/Clang with `-fstack-protector-all`.
- The canary value is randomised per process and stored in a segment register (`%fs:40` on x86-64).

**Address Space Layout Randomisation (ASLR).** Randomises the base addresses of the stack, heap,
Libraries, and executable code in each process invocation.

- Defeats return-to-libc and ROP (Return-Oriented Programming) attacks that rely on known addresses.
- Entropy: 22--28 bits on 64-bit systems, providing $2^{22}$ to $2^{28}$ possible layouts.
- Limitation: information leaks (e.g., pointer disclosure) can defeat ASLR.

**Data Execution Prevention (DEP / W\^X).** Marks memory pages as either writable or executable,
Never both. A buffer overflow that injects shellcode into a writable data region cannot execute it.

- Hardware support: the NX (No-eXecute) bit in page table entries.
- Compiler support: `-Wl,-z,noexecstack` (GNU ld).

**Control Flow Integrity (CFI).** Verifies that indirect branches (function pointers, returns) jump
Only to valid targets. Forward-edge CFI checks call targets; backward-edge CFI checks return
Addresses using shadow stacks.

- Implemented in LLVM via `-fsanitize=cfi`.
- Hardware support: Intel CET (Control-flow Enforcement Technology).

:::caution Common Pitfall ASLR, stack canaries, and DEP are complementary defences. Relying on any
single mechanism is Insufficient. A determined attacker who can read memory can defeat ASLR; a
format string Vulnerability can leak canary values; and JIT compilers require
writable-and-executable pages.
:::

