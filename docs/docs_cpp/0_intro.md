---
id: intro
title: C++ Systems Programming
description:
  'C++: C++ Systems Programming — Interactive Examples; How to Use These Notes; Part 1 — Environment
  and Toolchain (Modules 1–4).'
slug: /intro
sidebar_position: 1
---

These notes are a practical reference for working systems engineers who use C++ daily. They focus on
The mechanics that matter when software has to run reliably, perform under constraint, and
Interoperate across boundaries — between translation units, between processes, and between ABIs. The
Goal is not to teach you how to write a for-loop; it is to explain what happens after the compiler
Finishes and why that matters.

Each module targets a specific layer of the language, from the toolchain and object model up through
Templates, the standard library, and concurrency. Code examples are embedded directly from Compiler
Explorer (Godbolt) so you can inspect the generated assembly, switch compilers, and experiment
Without leaving the page. Every example compiles under C++20 or C++23 and targets Linux/x86-64
Unless otherwise noted.

## Interactive Examples

Code snippets throughout these notes are live Godbolt sessions. You can edit, compile, and inspect
The assembly output right here:

<div className="godbolt-container">
 <iframe
 width="100%"
 height="800"
 src="https://godbolt.org/e#z:OYLghAFBqd5QCxAYwPYBMCmBRdBLAF1QCcAaPECAMzwBtMA7AQwFtMQByARg9KtQYEAysib0QXAEx8BBAKoBnTAAUAHpwAMvAFYhptJg1DIApJIBCZ86SX1kBPAMqN0AYVS0AriwYgALADspC4AMngMmABy3gBGmMQSAGykAA6oCoSODO5ePv5BaRkOAmER0SxxCVzJtpj2WUIETMQEOd6%2BgTaYdsUMjc0EpVGx8Uk2TS1teZ0KE4PhwxWj1QCUNqiexMjsHGYAzOHIXlgA1CZ7rmLAJIQILOfYJhoAgvuHx5hnF5iqdZ69Dyer0kBwYR08p3OrjQLBS9FUgJebzBHy%2Brkcs2ImFYiOBoPBkIumPCwFxyIJnyhADc6kRiGSQe8IZSLsRDMBMAoyS80AxZj8UsQThkAF6YAD6BBOAHcvgARE4ADg0pBOCHlJ0kflVLCYqnFhHiGq4Gg050sPIE/NUguFBHQIBAxKMJ2QCGaCg1ZkkJwAdCAALTnOVWABU%2BzMAFYAALe81AoHhKW68IQFZnAIW54nHN2h0gGn2EhQ2b552kvbYE7EVDShQQBAreMvXN5x38Yji7FuiClx0/P69R0pZqqvsFvCYOuOxxNCAaTwi1WN31xYCptZtidThQz1BzhdLtUrX0uNOkIGt1smSOWSSJG9yiC82bCvBiyUnACe6ZMmcvV6AegGwxPQJx4LqwAahAXC%2BhoJwBpqcEnKG34nAA9MezbZoBV41nWN7mF%2Bj4auOVKTtOICzkw86Lqq0pNi2uHMX%2BrhbuRO6OgQbJ8h2LAQIRZgPpGT6ihKUqqL%2B/5McxsknMBnigZ8WJiNBey%2BpGKEnKoGEyghSGRk2exZnJcnjjCcI/FCClKQ8roQCptCqhBTDAJuIoaqYxkAaZuFiZ%2BeAama3kyb5V7SggdCfL29qOgwJD8SKv4XMGJx%2BMhQlCeBVhWGiJy6vqhrEIxOFhbJHmpR5qEVRYrrYWVgFYgQmwMOBXxVgVBoEEa5wAGInGAHADUNICuu6xBcregVRmNHq%2BmJaaPvVDV/nKUlseOPEcruIBECWsVOtxJIPItIWlVeq1GVmPknB2JzPlaUpMP8qBZfhJyjfhCglcx5kbFKUJQtWtZokDg03q4DDg2dq1Ahway0Jwka8L4HBaKQqCcK4OW1QoGxbJSIKSLwBCaPDawINiWAJOeADWEimqQiMcH4vAsCAkYqqj6OYxwvC7iqpNo/DpBwLASADsgL1kBQEDNMACjKIY3RCAgtaozwpAWXQTC9ErES0Kr6tk1rqCwlFCTAFwkZcKb5v0MQkSsDsvDaw7ADy/xG9K3O8JLzzEArnB%2B78yCNPgqO8PwggiGI7BSDIgiKCo6jC6Qui2wYRgoDj1i0HgMS7pAayoCkvS7hwAbu3sCGlsGpgWFYIK8KgNLEMQeBYEX57EJ4ggQZgAAqqAeN3ax45s2x6OMEf6yras%2B5wmvSmyKRLyLzPI6QvsY5w2Ch9L2mKokAaJH4JzAMgyAnNbvpcPd2ONxYqq4IQJBnETKwk2TKwU1ToznmZqzUg7NObbxNrzfmIBBY/wRpwPYKMIHB1IELLQv9SBtwyE4PwQA%3D%3D"
 title="Compiler Explorer"
 sandbox="allow-scripts allow-same-origin"
 loading="lazy"
 ></iframe>
</div>

## How to Use These Notes

The material is organized into nine parts, each building on the previous. You can read linearly or
Jump to a specific part if you already have context in the earlier areas.

### Part 1 — Environment and Toolchain (Modules 1–4)

How C++ code goes from source to running process. Covers the compiler pipeline (preprocessor,
Frontend, optimizer, backend), linker mechanics (static vs. Dynamic linking, symbol resolution,
Visibility), build systems (CMake fundamentals), and the execution environment (startup,
Initialization order, ASLR).

### Part 2 — Compilation Model (Modules 5–6)

The translation unit model and its consequences. Covers the One Definition Rule, internal linkage
Vs. External linkage, header units, modules (C++20), and how the traditional include model creates
Real-world build-time problems.

### Part 3 — Types (Modules 7–9)

How C++ represents data. Covers the type system fundamentals (scalar types, compound types,
Qualifiers), object model (layout, alignment, padding, trivial vs. Standard-layout), and
Enumeration, union, and bit-field specifics.

### Part 4 — Resource Management (Modules 10–11)

Ownership, lifetime, and determinism. Covers RAII in depth, smart pointers (`std::unique_ptr`
`std::shared_ptr``std::weak_ptr`), allocators, memory-mapped regions, and custom deletion Semantics.

### Part 5 — Function Architecture (Modules 12–13)

How functions work at the ABI level. Covers calling conventions, name mangling, overload resolution,
Perfect forwarding, `constexpr` and `consteval` functions, and inline semantics.

### Part 6 — Object-Oriented Design (Modules 14–15)

Inheritance, polymorphism, and their runtime costs. Covers vtables, virtual dispatch, multiple
Inheritance layout, `final``override`And when polymorphism is the wrong abstraction.

### Part 7 — Templates and Metaprogramming (Modules 16–18)

Compile-time computation and type-level programming. Covers template instantiation, SFINAE and
Constraints (C++20 concepts), variadic templates, fold expressions, and `if constexpr`.

### Part 8 — Standard Library (Modules 19–22)

The containers, algorithms, and utilities you should actually use. Covers iterator semantics,
Container choice guidelines, string views, `std::optional``std::variant``std::expected`Ranges, And
common pitfalls.

### Part 9 — Concurrency (Modules 23–25)

Threads, atomics, and the memory model. Covers `std::thread``std::jthread`Mutexes and lock Types,
condition variables, atomic operations, memory ordering (`relaxed``acquire``release` `seq_cst`), and
lock-free patterns.

## Conventions

These notes follow a consistent set of conventions to keep the material precise and unambiguous.

**Language Standard.** All normative references are to the C++ Standard as published in document
**N4950** (C++23 draft). When a feature is C++20-only or C++23-only, this is noted explicitly.

**Target Dialect.** Code examples default to **C++20** with annotations for C++23 additions. If you
Are compiling with `-std=c++20` or later, every snippet in these notes should compile without
Modification.

**Platform Defaults.** Unless stated otherwise, platform-specific discussion assumes
**Linux/x86-64** using the **System V AMD64 ABI**. Where behavior differs on other platforms
(Windows MSVC, ARM64, etc.), this is called out.

**Godbolt-Ready Code.** Every code block is self-contained and can be pasted directly into
[Compiler Explorer](https://godbolt.org) without modification. The default compiler is GCC 13 with
`-std=c++20 -O2` unless otherwise specified.

## Common Pitfalls

1. Neglecting to normalise database designs, leading to data redundancy and update anomalies.

2. Writing pseudocode that is too language-specific rather than using standard algorithmic
   constructs.

3. Confusing authentication (who you are) with authorisation (what you can do) in security contexts.

4. Misunderstanding the difference between a stack (LIFO) and a queue (FIFO) in data structure
   applications.
