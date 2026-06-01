---
title: TypeScript -- Course Overview
description:
  'Typescript Course Overview notes covering key definitions, core concepts, worked examples, and
  practice questions for systematic exam preparation and revision.'
slug: typescript
date: 2026-04-22T00:00:00.000Z
tags: [TypeScript]
categories: [TypeScript]
---

## What Is TypeScript

TypeScript is a statically typed programming language developed by Microsoft. It is a **strict
Syntactic superset** of JavaScript: every valid JavaScript program is, by definition, a valid
TypeScript program. TypeScript adds a compile-time type system that is erased during compilation,
Producing standard JavaScript output.

The type system is **structural**, meaning type compatibility is determined by the shape of values
Rather than by explicit inheritance relationships or nominal declarations. This design choice aligns
With JavaScript's own duck-typing semantics while providing compile-time guarantees that catch a
Broad class of errors before runtime.

## Relationship to JavaScript

TypeScript compiles to JavaScript via the `tsc` compiler. The compilation process performs two
Tasks:

1. **Type checking** -- verifying that the program respects all declared types and constraints.
2. **Code emission** -- producing JavaScript output (ES3 through ESNext targets) with type
   annotations removed.

Because TypeScript is a superset, existing JavaScript codebases can be adopted incrementally. The
Compiler's `strict` flag can be enabled progressively, allowing teams to tighten type safety at
Their own pace.

## Key Language Features

| Feature               | Description                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Type system           | Primitive types, object types, union/intersection types, generics, conditional types, mapped types, template literal types           |
| Generics              | Parametric polymorphism with constraints, variance, and type-level inference                                                         |
| Enums                 | Numeric enums, string enums, const enums, and union enum patterns                                                                    |
| Decorators            | Stage 3 proposal for class and member decoration (experimental in current TS releases)                                               |
| Modules               | ES module import/export, declaration merging, ambient modules, namespaces                                                            |
| Utility types         | Built-in generic utilities: `Partial``Required``Readonly``Pick``Omit``Record``Exclude``Extract``ReturnType``Parameters``NonNullable` |
| Type narrowing        | Discriminated unions, `typeof``instanceof``in` operator, user-defined type guards                                                    |
| Toolchain integration | `tsconfig.json`Declaration files (`.d.ts`), `@types/` packages, project references                                                   |

## The Toolchain

### Compiler (`tsc`)

The TypeScript compiler reads `.ts` (and `.tsx`) source files and produces `.js` output. Its
Behaviour is controlled by `tsconfig.json` at the project root. Key compiler options include:

- **`strict`** -- enables all strict type-checking options.
- **`target`** -- the ECMAScript version for emitted JavaScript.
- **`module`** -- the module system for emitted code (CommonJS, ESNext, etc.).
- **`moduleResolution`** -- the strategy for resolving module imports (`node``bundler` `classic`).
- **`noEmit`** -- type-check without producing output files.

### Configuration (`tsconfig.json`)

Every non-trivial TypeScript project requires a `tsconfig.json`. This file declares compiler
Options, file inclusion/exclusion globs, and project references. Monorepo structures use project
References (`composite: true`) to enable incremental builds across package boundaries.

### Type Definitions (`@types/` and `.d.ts`)

JavaScript libraries without built-in TypeScript support are described by **declaration files**
(`.d.ts`). These are published to the `@types/` scope on npm via DefinitelyTyped. TypeScript
Automatically resolves `@types/` packages from `node_modules/@types/` when `typeRoots` is not
Explicitly overridden.

### Declaration Files

Declaration files describe the shape of existing JavaScript modules or global variables without
Providing implementations. They use `declare` keywords for variables, functions, classes, and
Modules. Ambient context declarations (e.g., `declare global { ... }`) extend existing global scope.

## Assessment Structure

This course is organised into the following modules, each with its own dedicated chapter:

1. **Types and Annotations** -- the type system, narrowing, assertions, inference rules.
2. **Functions** -- function types, overloading, callbacks, `this` typing.
3. **Generics** -- parametric polymorphism, utility types, conditional types, mapped types.
4. **Classes** -- OOP with TypeScript, abstract classes, interfaces, decorators.
5. **Enums and Modules** -- enum patterns, ES modules, namespaces, declaration merging.
6. **Advanced Patterns** -- recursive types, branded types, builder patterns, variadic tuples.
7. **Tooling and Configuration** -- `tsconfig.json`Project references, ESLint integration.
8. **TypeScript with React** -- component typing, hooks, context, refs.
9. **Error Handling** -- `never``unknown`Assert functions, Result types.

Each module contains rigorous definitions, compile-ready code examples, comparison tables, and
Common-pitfall warnings. Cross-references between modules are provided where topics are
Interdependent.

## Common Pitfalls

1. Using `any` as a shortcut — it disables all type checking for a value and propagates unsoundness.
   Prefer `unknown` when the type is genuinely unknown.

2. Relying on type assertions (`as`) instead of proper narrowing — every `as` bypasses the
   compiler's verification and can introduce runtime errors that TypeScript was supposed to prevent.

3. Forgetting that `interface` declarations merge while `type` aliases do not — accidental merging
   can cause subtle bugs in large codebases where the same interface name is used across files.

4. Over-indexing arrays without `noUncheckedIndexedAccess` — by default, `arr[0]` has type `T`, not
   `T | undefined`, which hides potential undefined values at runtime.

### Study Strategy

1. **Enable `strict` mode immediately** — it catches the broadest class of errors and forces good
   habits from the start.
2. **Learn the type system first, the toolchain second** — structural typing, generics, and
   conditional types are the core intellectual content.
3. **Read declaration files (`.d.ts`)** from `@types/` packages to see how real-world APIs are
   typed.
4. **Practise type-level programming** — write your own utility types to internalise mapped types,
   conditional types, and inference.
5. **Use `tsconfig` strict flags** — enable `strictNullChecks`, `noUncheckedIndexedAccess`, and
   `exactOptionalPropertyTypes` for maximum safety.
6. **Avoid type assertions (`as`)** — prefer type guards and narrowing. Every `as` is a hole in the
   type system that the compiler cannot verify.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.
