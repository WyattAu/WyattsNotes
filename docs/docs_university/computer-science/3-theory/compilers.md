---
title: Compilers
description:
  'University-level notes on Compilers: lexical analysis, parsing, semantic analysis,
  intermediate representations, optimization, and code generation.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Computer Science
  - University
categories:
  - Computer Science
slug: compilers
---

## 1. Compiler Overview

### 1.1 Phases

```
Source Code
  → Lexical Analysis (tokens)
  → Syntax Analysis (parse tree)
  → Semantic Analysis (annotated tree)
  → Intermediate Representation (IR)
  → Code Optimization (optimized IR)
  → Code Generation (target code)
  → Target Program
```

### 1.2 Symbol Table

A data structure maintained throughout compilation storing:

| Entry             | Description                     |
| ----------------- | ------------------------------- |
| Name              | Lexeme / identifier             |
| Kind              | Variable, function, type, etc.  |
| Type              | Int, float, struct, array       |
| Scope             | Block, function, file           |
| Offset            | Memory location                 |
| Attributes        | Array dimensions, parameters    |

## 2. Lexical Analysis

### 2.1 Tokens and Patterns

A **token** is a pair $\langle \text{type}, \text{lexeme} \rangle$.

**Token types:** Keywords, identifiers, literals, operators, delimiters, comments (discarded).

**Example:**

```
Source:  int x = 42 + y;
Tokens:  <TYPE, "int"> <ID, "x"> <OP, "="> <INT_LIT, "42"> <OP, "+"> <ID, "y"> <DELIM, ";">
```

### 2.2 Regular Expressions for Tokens

| Token       | Regular Expression                                    |
| ----------- | ----------------------------------------------------- |
| Identifier  | `[a-zA-Z_][a-zA-Z0-9_]*`                              |
| Integer     | `[0-9]+`                                              |
| Float       | `[0-9]+\.[0-9]+([eE][+-]?[0-9]+)?`                    |
| Keyword     | `if | else | while | return | int | ...`             |
| Operator    | `+ | - | * | / | == | != | <= | >=`                   |
| Whitespace  | `[ \t\n\r]+` (skip)                                   |

### 2.3 Finite Automata for Lexing

Build a DFA from token regexes using Thompson's construction + subset construction. The DFA accepts the longest matching prefix (maximal munch).

```
LEXER(source):
    pos = 0
    tokens = []
    while pos < len(source):
        match = LONGEST_MATCH(source, pos, DFA)
        if match == null:
            error("invalid token at position", pos)
        tokens.append(match.token)
        pos += match.length
    return tokens
```

### 2.4 Handling Ambiguity

**Maximal munch:** Always match the longest possible token. `123abc` → `123` `abc`, not `1` `2` `3` `abc`.

**Keyword priority:** Keywords override identifiers. `if` → keyword `if`, not identifier `if`.

## 3. Parsing

### 3.1 Context-Free Grammars

A grammar $G = (V, \Sigma, R, S)$ defines the syntactic structure.

**Expression grammar:**

```
E → E + T | T
T → T * F | F
F → ( E ) | id | num
```

### 3.2 Parse Trees and Derivations

**Leftmost derivation:** Always expand the leftmost variable.

$$E \Rightarrow E + T \Rightarrow T + T \Rightarrow F + T \Rightarrow \mathbf{id} + T \Rightarrow \mathbf{id} + T * F \Rightarrow \mathbf{id} + F * F \Rightarrow \mathbf{id} + \mathbf{id} * \mathbf{id}$$

**Rightmost derivation:** Always expand the rightmost variable (used in bottom-up parsing).

### 3.3 Ambiguity and Precedence

**Ambiguous grammar for expressions:**

```
E → E + E | E * E | ( E ) | id
```

**Disambiguated with precedence:**

```
E  → E + T | T          // + has lower precedence
T  → T * F | F          // * has higher precedence
F  → ( E ) | id
```

**Associativity:**
- Left-associative ($a - b - c = (a - b) - c$): $E \to E \text{ op } T$
- Right-associative ($a = b = c \Rightarrow a = (b = c)$): $E \to T \text{ op } E$

### 3.4 LL Parsing (Top-Down)

**LL(1):** Left-to-right scan, Leftmost derivation, 1 token of lookahead.

**Requirements:**
1. No left recursion.
2. The grammar is factored (no common prefixes).

**Eliminating left recursion:**

```
// Replace: A → Aα | β
// With:
A  → βA'
A' → αA' | ε
```

**Left factoring:**

```
// Replace: A → αβ1 | αβ2
// With:
A  → αA'
A' → β1 | β2
```

**LL(1) parsing table construction:**

```
For each production A → α:
    For each terminal a in FIRST(α):
        add A → α to TABLE[A, a]
    If ε ∈ FIRST(α):
        For each terminal b in FOLLOW(A):
            add A → α to TABLE[A, b]
```

**FIRST and FOLLOW sets:**

$$\text{FIRST}(\alpha) = \{a : \alpha \Rightarrow^* a\beta\} \cup \{\epsilon\} \text{ if } \alpha \Rightarrow^* \epsilon$$

$$\text{FOLLOW}(A) = \{a : S \Rightarrow^* \alpha Aa\beta\} \cup \{\$ \text{ if } S \Rightarrow^* \alpha A\}$$

**LL(1) condition:** No multiple entries in the parsing table.

### 3.5 LR Parsing (Bottom-Up)

**LR(k):** Left-to-right scan, Rightmost derivation in reverse, $k$ tokens lookahead.

**Shift-reduce parsing:**

```
LR_PARSE(input):
    stack = [$]
    push start state
    lookahead = next_token(input)
    while true:
        s = top of stack
        if ACTION[s, lookahead] == SHIFT t:
            push lookahead
            push state t
            lookahead = next_token(input)
        elif ACTION[s, lookahead] == REDUCE A → α:
            pop 2|α| symbols
            push A
            push GOTO[prev_state, A]
            output production A → α
        elif ACTION[s, lookahead] == ACCEPT:
            return success
        else:
            error("syntax error")
```

**LR parsing table = ACTION + GOTO:**

| State | ACTION                                   | GOTO       |
| ----- | ---------------------------------------- | ---------- |
|       | Shift to state, Reduce by production    | Go to state on nonterminal |

### 3.6 LR Variants

| Variant     | Power          | Table Size | Construction Cost |
| ----------- | -------------- | ---------- | ----------------- |
| SLR(1)      | Least powerful | Small      | Low               |
| LALR(1)     | Medium         | Medium     | Medium            |
| LR(1)       | Most powerful  | Large      | High              |

**SLR(1):** Uses FOLLOW sets for reduce decisions. May miss valid reductions.

**LALR(1):** Merges LR(1) states with the same core. Used by Yacc, Bison.

**LR(1):** Full power. Each state has unique lookahead context. Rarely needed in practice.

### 3.7 Recursive Descent (Hand-Written LL)

```
EXPR():
    result = TERM()
    while token == '+':
        advance()
        right = TERM()
        result = BinOp('+', result, right)
    return result

TERM():
    result = FACTOR()
    while token == '*':
        advance()
        right = FACTOR()
        result = BinOp('*', result, right)
    return result

FACTOR():
    if token == '(':
        advance()
        result = EXPR()
        expect(')')
        return result
    elif token is ID:
        name = token.lexeme
        advance()
        return Var(name)
    elif token is NUM:
        val = token.value
        advance()
        return Num(val)
    else:
        error("unexpected token")
```

**Pros:** Clear, extensible, good error messages. **Cons:** Manual construction, no automatic generation.

## 4. Abstract Syntax Tree (AST)

### 4.1 From Parse Tree to AST

The parse tree preserves all grammar details. The **AST** simplifies to essential structure:

```
Parse tree:  (E (E (T (F id:x))) + (T (T (F num:42)) * (T (F id:y))))
AST:         BinOp('+', Var('x'), BinOp('*', Num(42), Var('y')))
```

**Rules for AST construction:**
- Remove punctuation tokens (parentheses, commas).
- Collapse chains of single-child nodes.
- Use operator-specific node types.

### 4.2 AST Node Types

```
AST_NODE:
    | IntLit(value)
    | FloatLit(value)
    | BoolLit(value)
    | Var(name)
    | BinOp(op, left, right)
    | UnaryOp(op, operand)
    | If(cond, then_branch, else_branch)
    | While(cond, body)
    | FuncCall(name, args)
    | FuncDef(name, params, body)
    | Return(expr)
    | Block(statements)
    | ArrayLit(elements)
    | IndexExpr(array, index)
```

## 5. Semantic Analysis

### 5.1 Type Checking

Ensure operations are applied to correctly typed operands.

```
TYPE_CHECK(node):
    switch node.type:
        case IntLit:    return INT
        case Var:       return lookup_type(node.name)
        case BinOp:     check_types(node.op, TYPE_CHECK(node.left), TYPE_CHECK(node.right))
        case FuncCall:
            params = TYPE_CHECK each arg
            sig = lookup_function(node.name)
            if sig.params != params: error "type mismatch"
            return sig.return_type
        case If:
            if TYPE_CHECK(node.cond) != BOOL: error "condition must be boolean"
            TYPE_CHECK(node.then_branch)
            if node.else_branch: TYPE_CHECK(node.else_branch)
```

**Type coercion rules:**

| Expression       | Rule                              |
| ---------------- | --------------------------------- |
| `int + int`      | `int`                            |
| `int + float`    | `float` (coerce int to float)     |
| `int / int`      | `int` (integer division)         |

### 5.2 Type Inference

**Hindley-Milner type inference** (used in ML, Haskell):

```
Algorithm W:
    Γ = {} (empty type environment)
    infer(e, Γ):
        case e:
            x (variable):      return instantiate(Γ(x))
            λx.e (abstraction): α = fresh type variable
                                 (τ, Γ') = infer(e, Γ ∪ {x : α})
                                 return (α → τ, Γ')
            e1 e2 (application): (τ1, Γ') = infer(e1, Γ)
                                  (τ2, Γ'') = infer(e2, Γ')
                                  α = fresh type variable
                                  unify(τ1, τ2 → α)
                                  return (α, Γ'')
            let x = e1 in e2:  (τ1, Γ') = infer(e1, Γ)
                                  (τ2, Γ'') = infer(e2, Γ' ∪ {x : generalize(τ1, Γ')})
                                  return (τ2, Γ'')
```

**Unification algorithm:**

```
UNIFY(t1, t2):
    if t1 == t2: return
    if t1 is type variable and t1 not in t2: substitute(t1, t2)
    if t2 is type variable and t2 not in t1: substitute(t2, t1)
    if t1 = T(s1,...,sn) and t2 = T(s1,...,sm) and n == m:
        for i = 1 to n: UNIFY(si, ti)
    else: error "type mismatch"
```

### 5.3 Scope Resolution

**Scoping rules:**

- **Static (lexical) scoping:** Name resolution depends on where the function is defined.
- **Dynamic scoping:** Name resolution depends on where the function is called.

```
x = 10

function f():
    return x       // static: x = 10; dynamic: depends on caller

function g():
    x = 20
    return f()
```

**Symbol table implementation:** Nested hash maps or a stack of scopes.

## 6. Intermediate Representations

### 6.1 Three-Address Code

Instructions with at most one operator, two operands, and one result:

```
x = y op z      // binary operation
x = op y        // unary operation
x = y           // copy
goto L          // unconditional jump
if x goto L     // conditional jump
if x op y goto L // conditional branch
param x         // function parameter
call f, n       // function call with n args
return x        // function return
x = y[i]        // array access
x[i] = y        // array store
```

**Example:**

```
Source:  a = (b + c) * d
TAC:
    t1 = b + c
    t2 = t1 * d
    a = t2
```

### 6.2 Static Single Assignment (SSA)

Every variable is defined exactly once. New versions introduced at merge points using $\phi$-functions.

```
Before SSA:
    x = 1
    if cond:
        x = 2
    y = x + 3

After SSA:
    x_1 = 1
    if cond:
        x_2 = 2
    x_3 = φ(x_1, x_2)
    y_1 = x_3 + 3
```

**Dominance:** Node $d$ dominates node $n$ if every path from entry to $n$ passes through $d$.

**Dominance frontier:** The set of nodes where dominance ends — exactly where $\phi$-functions are placed.

```
INSERT_PHI_FUNCTIONS():
    for each variable v:
        worklist = all blocks that define v
        while worklist not empty:
            block = worklist.remove()
            for each df in dominance_frontier(block):
                if df has no φ-function for v:
                    insert φ-function for v at df
                    add df to worklist
```

### 6.3 Control Flow Graph (CFG)

A directed graph where:
- **Nodes** are basic blocks (sequences of instructions with one entry, one exit, no branches in between).
- **Edges** represent possible control flow.

**Basic block construction:**

```
BUILD_BASIC_BLOCKS(instructions):
    leaders = first instruction
    leaders += targets of branches/jumps
    leaders += instructions after branches/jumps
    for each leader:
        basic_block = instructions from leader to next leader - 1
```

## 7. Optimization

### 7.1 Optimization Levels

| Level              | When Applied       | Scope                     |
| ------------------ | ------------------ | ------------------------- |
| Local              | Within basic block | Single block              |
| Global             | Within a function  | Single function with CFG  |
| Interprocedural    | Across functions   | Whole program             |

### 7.2 Common Optimizations

**Constant folding:**

```
// Before
x = 3 + 5
// After
x = 8
```

**Constant propagation:**

```
// Before
x = 10
y = x + 5
// After
x = 10
y = 15
```

**Dead code elimination:**

```
// Before
x = compute()     // x never used
y = x + 1         // y never used
return 42
// After
return 42
```

**Common subexpression elimination:**

```
// Before
t1 = a + b
t2 = a + b    // same computation
// After
t1 = a + b
t2 = t1       // reuse
```

**Loop invariant code motion:**

```
// Before
for i = 0 to n:
    x = a[i] * c    // c doesn't change
// After
temp = c
for i = 0 to n:
    x = a[i] * temp
```

**Strength reduction:**

```
x * 2   → x + x        // or x << 1
x ** 2  → x * x
x / 8   → x >> 3       // for unsigned integers
```

**Loop unrolling:**

```
// Before
for i = 0 to 99:
    a[i] = b[i] + c[i]
// After
for i = 0; i < 96; i += 4:
    a[i] = b[i] + c[i]
    a[i+1] = b[i+1] + c[i+1]
    a[i+2] = b[i+2] + c[i+2]
    a[i+3] = b[i+3] + c[i+3]
```

### 7.3 Data-Flow Analysis

**Reaching definitions:** Which definitions of a variable may reach each program point?

$$\text{OUT}[B] = \text{gen}[B] \cup (\text{IN}[B] - \text{kill}[B])$$
$$\text{IN}[B] = \bigcup_{P \in \text{pred}(B)} \text{OUT}[P]$$

Iterate until convergence (fixed point).

**Other analyses:**

| Analysis              | Purpose                           |
| --------------------- | --------------------------------- |
| Live variable analysis | Optimize register allocation     |
| Available expressions | Enable CSE                        |
| Very busy expressions | Enable code motion                |
| Constant propagation  | Fold constants                    |

### 7.4 Register Allocation

**Problem:** Map an unlimited set of virtual registers to a finite set of physical registers.

**Graph coloring approach:**

1. Build an **interference graph**: vertices = virtual registers, edges = simultaneous liveness.
2. Color the graph with $k$ colors (physical registers).
3. If coloring fails, spill a variable (move to memory).

```
REGISTER_ALLOCATE(interference_graph, k_registers):
    stack = []
    while nodes remain in interference_graph:
        if node has degree < k:
            push node to stack
            remove node and edges
        else:
            spill one node (store to memory)
    while stack not empty:
        node = stack.pop()
        assign color different from all neighbors
    return allocation
```

**NP-hard** in general; heuristic algorithms (simplify, coalesce, freeze, spill-and-reload) work well in practice.

## 8. Code Generation

### 8.1 Code Generation from TAC

```
// TAC:                // Assembly:
t1 = b + c            mov eax, [b]
t2 = t1 * d           add eax, [c]
a = t2                mov ecx, [d]
                      imul eax, ecx
                      mov [a], eax
```

### 8.2 Instruction Selection

Map IR operations to target machine instructions. Can use:

- **Pattern matching:** Match IR patterns against instruction templates.
- **Tree pattern matching:** AST tree rewriting with optimal cover (dynamic programming / BURG).

### 8.3 Instruction Scheduling

Reorder instructions to avoid pipeline stalls:

```
// Before (stall on dependency):
load r1, [addr]    // latency: 3 cycles
add r2, r1, r3     // stalls 2 cycles waiting for r1
store r2, [out]

// After (reorder to hide latency):
load r1, [addr]    // start load early
mov r4, [other]   // independent work
add r5, r4, r6    // more independent work
add r2, r1, r3     // r1 ready now
store r2, [out]
```

### 8.4 Target Code

**x86-64 example:**

```asm
; int add(int a, int b) { return a + b; }
add:
    push rbp
    mov rbp, rsp
    mov eax, edi        ; first arg in edi
    add eax, esi        ; second arg in esi
    pop rbp
    ret
```

## 9. Common Pitfalls

1. **Left recursion in LL grammars causes infinite loops.** A rule like $E \to E + T$ causes a recursive descent parser to loop. Always eliminate left recursion before building an LL parser.

2. **FIRST/FOLLOW set computation errors.** Incorrect sets lead to parsing table conflicts. Remember: $\epsilon \in \text{FIRST}(\alpha)$ only if $\alpha$ can derive the empty string.

3. **Forgetting to insert $\phi$-functions at dominance frontiers.** SSA requires $\phi$-functions precisely at points where control flow merges. Placing them incorrectly leads to wrong data flow.

4. **Incorrect interference graph for register allocation.** Two variables interfere only if they are simultaneously live. If one's definition kills the other before use, they do not interfere.

5. **Confusing parse trees and ASTs.** Parse trees preserve all grammar productions (including punctuation). ASTs abstract away syntactic details to represent semantic structure.

6. **Semantic analysis after code generation.** Type errors and scope violations must be caught during semantic analysis, before optimization and code generation. Fixing them later is much harder.

7. **Ignoring phase ordering issues.** Some optimizations interfere with others. The order of optimization passes affects the final result. Common order: SSA construction → constant propagation → dead code elimination → loop optimizations → register allocation.

## Summary

- **Lexical analysis** converts source to tokens using regex and finite automata.
- **Parsing** builds parse trees from tokens using LL (top-down) or LR (bottom-up) methods.
- **ASTs** abstract away grammar details to represent program structure.
- **Semantic analysis** performs type checking, type inference (Hindley-Milner), and scope resolution.
- **IR** (three-address code, SSA) provides a platform-independent program representation.
- **Optimization** includes constant folding, dead code elimination, CSE, loop optimization, and register allocation via graph coloring.
- **Code generation** maps IR to target machine instructions with instruction selection and scheduling.
