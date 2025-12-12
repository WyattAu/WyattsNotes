# C++ Syllabus Implementation

Part 1: Environment, Toolchain, and Verification

Module 1: Compiler Infrastructure and Standards
1.1. Installing and Verifying Clang, GCC, and MSVC
1.2. Language Standard Flags and ABI Compatibility
1.3. Standard Library Implementations (libstdc++, libc++, MSVC STL)
1.4. Cross-Compilation Toolchains
1.5. Linker Configuration (Mold, LLD, Gold)

Module 2: Build Orchestration
2.1. CMake Targets, Properties, and Generator Expressions
2.2. Ninja Build System and Parallelism
2.3. CMake Presets and Toolchain Files
2.4. Build Caching (CCache, Sccache)
2.5. Integration of Unit Testing Frameworks (CTest, GTest, Catch2)
2.6. Code Coverage Tools (gcov, lcov, llvm-cov)

Module 3: Dependency Management
3.1. Dependency Resolution Architectures and Distribution Models
3.2. Source-Based Vendorization via CPM.cmake
3.3. Declarative Manifests and Registry Federation in vcpkg
3.4. Binary Package Management and Profile Configuration with Conan
3.5. Transitive Property Propagation and Target Interfaces
3.6. Binary Caching Strategies and Artifact Registries

Module 4: Development Environment Analysis
4.1. Language Server Protocol (clangd) Configuration
4.2. Debugger Attachment and Symbol Loading (LLDB, GDB, WinDbg)
4.3. Static Analysis Pipelines (clang-tidy, cppcheck)
4.4. Sanitizer Integration (ASan, TSan, UBSan, MSan)

---

Part 2: The Compilation Model and Project Architecture

Module 5: The Translation Pipeline
5.1. Preprocessing, AST Generation, and Object Code
5.2. Symbol Visibility, Linkage (Internal/External), and ODR
5.3. The Linker: Symbol Resolution, Relocation, and Deduplication
5.4. Binary Formats (ELF, PE, Mach-O) and Sections (.text, .data, .bss)
5.5. Name Mangling Schemes (Itanium vs MSVC)

Module 6: Modular Architecture
6.1. The C++23 Module System (Primary Interfaces, Partitions, Implementation Units)
6.2. Binary Module Interfaces (BMI) and Dependency Scanning
6.3. Header Units and Legacy Interop
6.4. The C Runtime (CRT) and Application Startup/Termination

---

Part 3: The Type System and Memory Model

Module 7: Data Layout and Semantics
7.1. Fundamental Types, Endianness, and Hardware Representation
7.2. Alignment, Padding, and Structure Layout Optimization
7.3. Bit Manipulation (std::bit_cast, std::popcount, Endianness)
7.4. The Stack Frame: Allocation, Layout, and Buffer Security
7.5. The Heap: Virtual Memory Interaction and Sbrk/Mmap

Module 8: Pointers, References, and Views
8.1. Pointer Arithmetic, Array Decay, and Nullability
8.2. Reference Implementation and Lifetime Extension
8.3. Type Punning and The Strict Aliasing Rule
8.4. String Views and Small String Optimization (SSO)
8.5. Contiguous Memory Views (std::span)

Module 9: Initialization and Lifetime
9.1. Storage Duration: Automatic, Static, Thread-Local, Dynamic
9.2. Uniform Initialization and Constructor Resolution
9.3. Aggregate Initialization and Designated Initializers
9.4. Constant Expressions: const, constexpr, consteval, and constinit
9.5. Deterministic Destruction and Stack Unwinding

---

Part 4: Resource Management and Move Semantics

Module 10: Ownership and RAII
10.1. Resource Acquisition Is Initialization (RAII) Patterns
10.2. Unique Ownership (std::unique_ptr) and Layout Optimization (EBO)
10.3. Shared Ownership (std::shared_ptr) and Control Block Layout
10.4. Weak Pointers and Cyclic Reference Breaking
10.5. Custom Deleters and Allocator Awareness

Module 11: Value Categories and Move Mechanics
11.1. Value Taxonomy: lvalue, prvalue, xvalue, glvalue, rvalue
11.2. Reference Collapsing and Forwarding References
11.3. Temporary Materialization
11.4. Move Constructors, Assignment, and the Swap Idiom
11.5. Return Value Optimization (RVO) and NRVO

---

Part 5: Function Architecture and Error Handling

Module 12: Function Mechanics and Interop
12.1. Overload Resolution and Name Lookup (ADL)
12.2. Calling Conventions and Stack Management
12.3. Lambda Expressions: Capture Layouts and Closure Types
12.4. Type Erasure: Function Pointers, std::function, std::move_only_function
12.5. C-Interop and FFI: extern "C", Data Marshalling, and ABI Boundaries

Module 13: Error Handling Systems
13.1. The Itanium Exception ABI and Table-Based Unwinding
13.2. Exception Safety Guarantees (Basic, Strong, No-throw)
13.3. The noexcept Specifier and Move Optimization
13.4. Algebraic Error Handling (std::optional, std::variant)
13.5. Monadic Error Handling (std::expected)

---

Part 6: Object-Oriented Architecture

Module 14: Class Design and Operators
14.1. Object Layout, vptr, and the "this" Pointer
14.2. Access Control and Friendship
14.3. Special Member Function Generation Rules
14.4. Operator Overloading: Arithmetic, Subscript, and Function Call
14.5. The Spaceship Operator (<=>) and Default Comparisons
14.6. Custom Formatting: Extending std::formatter

Module 15: Runtime Polymorphism
15.1. Virtual Functions and Dispatch Tables (vtables)
15.2. Inheritance, Object Slicing, and Virtual Destructors
15.3. Devirtualization and Final Specifiers
15.4. RTTI, dynamic_cast, and Typeid
15.5. Explicit Object Parameters (Deducing This) and CRTP Replacement

---

Part 7: Templates and Meta-Programming

Module 16: Generic Programming
16.1. Template Instantiation, Monomorphization, and Code Bloat
16.2. Argument Deduction (Class and Function)
16.3. Explicit and Partial Specialization
16.4. Dependent Names and Two-Phase Lookup
16.5. Explicit Instantiation and Extern Templates

Module 17: Concepts and Constraints
17.1. Defining Concepts and Requires Clauses
17.2. Constraint Subsumption and Overload Resolution
17.3. Standard Library Concepts
17.4. SFINAE vs Concepts

Module 18: Compile-Time Computation
18.1. Parameter Packs and Variadic Templates
18.2. Fold Expressions and Pack Expansion
18.3. Compile-Time Branching (if constexpr)
18.4. Type Traits and Static Reflection Patterns

---

Part 8: The Standard Library and Systems Utilities

Module 19: Containers and Allocators
19.1. Sequence Containers (Vector, Deque, List) Memory Models
19.2. Associative and Unordered Containers (Maps, Sets)
19.3. Iterator Categories, Traversal, and Invalidation
19.4. Polymorphic Memory Resources (PMR) and Monotonic Buffers

Module 20: Algorithms and Ranges
20.1. The Iterator-Sentinel Model
20.2. Range Adaptors, Views, and Composition Pipelines
20.3. Projections and Callable Objects
20.4. Range Materialization (std::ranges::to)
20.5. Parallel Algorithms and Execution Policies

Module 21: Input/Output and Formatting
21.1. Stream Buffers and Locale Facets
21.2. Type-Safe Formatting (std::format, std::print)
21.3. Unicode Support (char8_t, char16_t, char32_t)

Module 22: System Utilities
22.1. The Filesystem Library: Paths, Iterators, and Permissions
22.2. The Chrono Library: Clocks, Durations, and Time Points
22.3. Random Number Generation: Engines and Distributions
22.4. Regular Expressions: std::regex vs Compile-Time parsers (CTRE)

---

Part 9: Concurrency and Systems Programming

Module 23: Threading and Synchronization
23.1. Thread Execution (std::jthread) and Hardware Mapping
23.2. Data Races and Critical Sections
23.3. Mutexes, Shared Locks, and Deadlock Prevention
23.4. Condition Variables, Latches, and Barriers
23.5. Thread-Local Storage (TLS)

Module 24: The Memory Model and Atomics
24.1. Instruction Reordering and Happens-Before
24.2. Cache Coherency (MESI) and False Sharing
24.3. Atomic Operations and Lock-Free Programming
24.4. Memory Orderings: Relaxed, Acquire/Release, Sequentially Consistent
24.5. Compare-and-Swap (CAS) Loops

Module 25: Coroutines and Asynchronous I/O
25.1. Stackless Coroutine Frames and Heap Allocation
25.2. The Coroutine Handle, Promise Type, and Awaiter
25.3. Generators (std::generator) and Synchronous Yielding
25.4. Task Scheduling and Executors
25.5. Futures, Promises, and Async Flows
