---
title: TypeScript -- Course Overview
description:
  TypeScript: TypeScript -- Course Overview — What Is TypeScript; Relationship
  to JavaScript; Key Language Features; The Toolchain.
slug: typescript
date: 2026-04-22T00:00:00.000Z
tags: [TypeScript]
categories: [TypeScript]
---

## What Is TypeScript

TypeScript is a statically typed programming language developed by Microsoft. It is a **strict
syntactic superset** of JavaScript: every valid JavaScript program is, by definition, a valid
TypeScript program. TypeScript adds a compile-time type system that is erased during compilation,
producing standard JavaScript output.

The type system is **structural**, meaning type compatibility is determined by the shape of values
rather than by explicit inheritance relationships or nominal declarations. This design choice aligns
with JavaScript's own duck-typing semantics while providing compile-time guarantees that catch a
broad class of errors before runtime.

## Relationship to JavaScript

TypeScript compiles to JavaScript via the `tsc` compiler. The compilation process performs two
tasks:

1. **Type checking** -- verifying that the program respects all declared types and constraints.
2. **Code emission** -- producing JavaScript output (ES3 through ESNext targets) with type
   annotations removed.

Because TypeScript is a superset, existing JavaScript codebases can be adopted incrementally. The
compiler's `strict` flag can be enabled progressively, allowing teams to tighten type safety at
their own pace.

## Key Language Features

| Feature               | Description                                                                                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type system           | Primitive types, object types, union/intersection types, generics, conditional types, mapped types, template literal types                               |
| Generics              | Parametric polymorphism with constraints, variance, and type-level inference                                                                             |
| Enums                 | Numeric enums, string enums, const enums, and union enum patterns                                                                                        |
| Decorators            | Stage 3 proposal for class and member decoration (experimental in current TS releases)                                                                   |
| Modules               | ES module import/export, declaration merging, ambient modules, namespaces                                                                                |
| Utility types         | Built-in generic utilities: `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `Exclude`, `Extract`, `ReturnType`, `Parameters`, `NonNullable` |
| Type narrowing        | Discriminated unions, `typeof`, `instanceof`, `in` operator, user-defined type guards                                                                    |
| Toolchain integration | `tsconfig.json`, declaration files (`.d.ts`), `@types/` packages, project references                                                                     |

## The Toolchain

### Compiler (`tsc`)

The TypeScript compiler reads `.ts` (and `.tsx`) source files and produces `.js` output. Its
behaviour is controlled by `tsconfig.json` at the project root. Key compiler options include:

- **`strict`** -- enables all strict type-checking options.
- **`target`** -- the ECMAScript version for emitted JavaScript.
- **`module`** -- the module system for emitted code (CommonJS, ESNext, etc.).
- **`moduleResolution`** -- the strategy for resolving module imports (`node`, `bundler`,
  `classic`).
- **`noEmit`** -- type-check without producing output files.

### Configuration (`tsconfig.json`)

Every non-trivial TypeScript project requires a `tsconfig.json`. This file declares compiler
options, file inclusion/exclusion globs, and project references. Monorepo structures use project
references (`composite: true`) to enable incremental builds across package boundaries.

### Type Definitions (`@types/` and `.d.ts`)

JavaScript libraries without built-in TypeScript support are described by **declaration files**
(`.d.ts`). These are published to the `@types/` scope on npm via DefinitelyTyped. TypeScript
automatically resolves `@types/` packages from `node_modules/@types/` when `typeRoots` is not
explicitly overridden.

### Declaration Files

Declaration files describe the shape of existing JavaScript modules or global variables without
providing implementations. They use `declare` keywords for variables, functions, classes, and
modules. Ambient context declarations (e.g., `declare global { ... }`) extend existing global scope.

## Assessment Structure

This course is organised into the following modules, each with its own dedicated chapter:

1. **Types and Annotations** -- the type system, narrowing, assertions, inference rules.
2. **Functions** -- function types, overloading, callbacks, `this` typing.
3. **Generics** -- parametric polymorphism, utility types, conditional types, mapped types.
4. **Classes** -- OOP with TypeScript, abstract classes, interfaces, decorators.
5. **Enums and Modules** -- enum patterns, ES modules, namespaces, declaration merging.
6. **Advanced Patterns** -- recursive types, branded types, builder patterns, variadic tuples.
7. **Tooling and Configuration** -- `tsconfig.json`, project references, ESLint integration.
8. **TypeScript with React** -- component typing, hooks, context, refs.
9. **Error Handling** -- `never`, `unknown`, assert functions, Result types.

Each module contains rigorous definitions, compile-ready code examples, comparison tables, and
common-pitfall warnings. Cross-references between modules are provided where topics are
interdependent.
