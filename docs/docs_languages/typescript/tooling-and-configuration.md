---
title: Tooling and Configuration
description: TypeScript toolchain configuration: tsconfig.json options, module resolution, @types packages, type checking, ESLint integration, project references, and recent language features.
slug: typescript-tooling-and-configuration
date: 2026-04-22T00:00:00.000Z
tags: [TypeScript]
categories: [TypeScript]
---

## tsconfig.json: Core Configuration

Every TypeScript project is governed by a `tsconfig.json` file at the project root. This file
specifies compiler options, file inclusion/exclusion, and project references. A minimal
configuration:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "outDir": "./dist",
    "declaration": true,
    "sourceMap": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

### Compiler Options Reference

#### Language and Environment

| Option               | Description                               | Recommended                      |
| -------------------- | ----------------------------------------- | -------------------------------- |
| `target`             | ECMAScript version for emitted JavaScript | `"ES2022"` or `"ESNext"`         |
| `lib`                | Library files to include in compilation   | Auto-inferred from `target`      |
| `jsx`                | JSX compilation mode                      | `"react-jsx"` (React 17+)        |
| `jsxFactory`         | JSX factory function                      | `"React.createElement"` (legacy) |
| `jsxFragmentFactory` | JSX fragment factory                      | `"React.Fragment"` (legacy)      |

#### Module Resolution

| Option              | Description                                       | Recommended               |
| ------------------- | ------------------------------------------------- | ------------------------- |
| `module`            | Module system for emitted code                    | `"ESNext"`                |
| `moduleResolution`  | Module resolution strategy                        | `"bundler"` or `"node16"` |
| `baseUrl`           | Base directory for non-relative module resolution | `"."`                     |
| `paths`             | Path aliases for module resolution                | `{"@/*": ["src/*"]}`      |
| `rootDirs`          | Multiple root directories treated as one          | `["src", "generated"]`    |
| `resolveJsonModule` | Allow importing `.json` files                     | `true`                    |
| `isolatedModules`   | Ensure each file can be transpiled independently  | `true`                    |

#### Type Checking

| Option                         | Description                                                     | Recommended                  |
| ------------------------------ | --------------------------------------------------------------- | ---------------------------- |
| `strict`                       | Enable all strict type-checking options                         | `true`                       |
| `noImplicitAny`                | Error on implicit `any` type                                    | `true` (implied by `strict`) |
| `strictNullChecks`             | Strict `null` and `undefined` checking                          | `true` (implied by `strict`) |
| `strictFunctionTypes`          | Contravariant function parameter checking                       | `true` (implied by `strict`) |
| `strictBindCallApply`          | Strict checking for `bind`, `call`, `apply`                     | `true` (implied by `strict`) |
| `strictPropertyInitialization` | Check class property initialisation                             | `true` (implied by `strict`) |
| `noImplicitThis`               | Error when `this` gets `any` type                               | `true` (implied by `strict`) |
| `noImplicitReturns`            | Error on code paths that do not return a value                  | `true`                       |
| `noUnusedLocals`               | Error on unused local variables                                 | `true`                       |
| `noUnusedParameters`           | Error on unused function parameters                             | `true`                       |
| `noFallthroughCasesInSwitch`   | Error on switch case fallthrough                                | `true`                       |
| `exactOptionalPropertyTypes`   | Distinguish between optional and `undefined`-present properties | `true`                       |

#### Output

| Option           | Description                           | Recommended                   |
| ---------------- | ------------------------------------- | ----------------------------- |
| `outDir`         | Directory for emitted JavaScript      | `"./dist"`                    |
| `declaration`    | Generate `.d.ts` files                | `true` for libraries          |
| `declarationMap` | Generate sourcemaps for `.d.ts` files | `true` for libraries          |
| `sourceMap`      | Generate sourcemaps                   | `true`                        |
| `noEmit`         | Type-check without emitting files     | `true` for type-checking only |

### The `strict` Flag

`strict: true` enables all of the following flags simultaneously:

- `noImplicitAny`
- `noImplicitThis`
- `alwaysStrict`
- `strictBindCallApply`
- `strictNullChecks`
- `strictFunctionTypes`
- `strictPropertyInitialization`

**Common Pitfall:** Enabling `strict` in an existing JavaScript codebase will produce many errors.
Migrate incrementally by enabling individual strict flags one at a time, starting with
`strictNullChecks`.

### `exactOptionalPropertyTypes`

When `exactOptionalPropertyTypes` is enabled, TypeScript distinguishes between a property that is
absent and a property that is present with the value `undefined`:

```ts
interface Config {
  host?: string;
}

const a: Config = {};
const b: Config = { host: undefined };
```

Under `exactOptionalPropertyTypes`, the second line is an error. To explicitly allow `undefined`,
declare the property as `host?: string | undefined`.

## Module Resolution Strategies

### `classic`

The original TypeScript resolution strategy. Resolves relative to the importing file. Rarely used in
modern projects.

### `node`

Mimics Node.js CommonJS resolution. Searches `node_modules` hierarchically and checks `package.json`
`types`/`typings` fields.

### `node16` / `nodenext`

Node.js ESM-aware resolution (TypeScript 4.7+). Respects the `"type": "module"` field in
`package.json` and enforces extension-including imports for ES modules.

### `bundler`

Designed for projects using bundlers (Vite, webpack, esbuild) that handle module resolution
themselves (TypeScript 5.0+). Does not enforce Node.js-specific resolution rules.

### Resolution Comparison

| Feature                            | `node`          | `node16`           | `bundler`        |
| ---------------------------------- | --------------- | ------------------ | ---------------- |
| ESM-aware                          | No              | Yes                | No               |
| Requires file extensions in ESM    | No              | Yes                | No               |
| Checks `exports` in `package.json` | No              | Yes                | Yes              |
| Best for                           | Legacy projects | Node.js native ESM | Bundled web apps |

## @types Packages and DefinitelyTyped

### Installing Type Definitions

```bash
npm install --save-dev @types/node
npm install --save-dev @types/react
npm install --save-dev @types/express
```

### How @types Resolution Works

When TypeScript encounters an import from a module without corresponding `.ts` or `.d.ts` files, it
searches `node_modules/@types/` for a matching package. The search order is controlled by
`typeRoots` (default: `node_modules/@types/`).

### Custom `typeRoots` and `types`

```json
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./custom-types"],
    "types": ["node", "jest"]
  }
}
```

When `types` is specified, only the listed packages from `typeRoots` are included. An empty array
(`"types": []`) disables automatic inclusion of all `@types` packages.

### Declaration File Structure

```
node_modules/
  @types/
    node/
      index.d.ts
      package.json
    react/
      index.d.ts
      package.json
```

### Contributing to DefinitelyTyped

When a library lacks type definitions, you can:

1. Create a declaration file locally: `declarations/my-lib.d.ts`.
2. Submit a pull request to [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped).
3. Use `declare module "my-lib" {}` as a temporary ambient declaration.

## Type Checking Commands

### `tsc --noEmit`

Type-checks the project without producing output files:

```bash
tsc --noEmit
```

This is the recommended command for CI pipelines that only need to verify type correctness.

### `tsc --strict`

Enables all strict type-checking options regardless of `tsconfig.json` settings:

```bash
tsc --strict --noEmit
```

### `tsc --watch`

Watches for file changes and re-type-checks incrementally:

```bash
tsc --watch
```

### Incremental Compilation

TypeScript supports incremental compilation via the `tsconfig.json` flag or `--incremental` CLI
option. The compiler stores dependency information in a `.tsbuildinfo` file, enabling faster
subsequent compilations:

```json
{
  "compilerOptions": {
    "incremental": true,
    "tsBuildInfoFile": "./.tsbuildinfo"
  }
}
```

## ts-node for Development

`ts-node` executes TypeScript files directly without a separate compilation step:

```bash
npx ts-node src/index.ts
```

Configuration for `ts-node` in `tsconfig.json`:

```json
{
  "ts-node": {
    "transpileOnly": true,
    "files": true
  }
}
```

`transpileOnly: true` skips type checking for faster execution (useful during development). Remove
it for production scripts where type safety is critical.

**Common Pitfall:** `ts-node` with ESM requires additional configuration. Set `"esm": true` in the
`ts-node` section of `tsconfig.json` and ensure `package.json` has `"type": "module"`.

## ESLint with @typescript-eslint

### Installation

```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### Configuration

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/strict-boolean-expressions": "warn"
  }
}
```

### Key Rules

| Rule                                               | Description                      |
| -------------------------------------------------- | -------------------------------- | --- | --- |
| `@typescript-eslint/no-explicit-any`               | Disallow `any` type              |
| `@typescript-eslint/no-unused-vars`                | Disallow unused variables        |
| `@typescript-eslint/explicit-function-return-type` | Require explicit return types    |
| `@typescript-eslint/no-floating-promises`          | Require promises to be handled   |
| `@typescript-eslint/strict-boolean-expressions`    | Restrict boolean expressions     |
| `@typescript-eslint/prefer-nullish-coalescing`     | Prefer `??` over `               |     | `   |
| `@typescript-eslint/prefer-optional-chain`         | Prefer `?.` over manual checks   |
| `@typescript-eslint/no-non-null-assertion`         | Disallow `!` non-null assertions |

**Common Pitfall:** The `@typescript-eslint/recommended-requiring-type-checking` config requires
`parserOptions.project` to point to a valid `tsconfig.json`. This makes linting slower because it
runs the type checker. Use this config in CI, not in the editor.

## Project References

Project references allow a TypeScript project to be split into multiple sub-projects, each with its
own `tsconfig.json`. This is essential for monorepo architectures.

### Structure

```
packages/
  core/
    tsconfig.json
    src/
  utils/
    tsconfig.json
    src/
tsconfig.json
```

Root `tsconfig.json`:

```json
{
  "files": [],
  "references": [{ "path": "./packages/core" }, { "path": "./packages/utils" }]
}
```

Sub-project `tsconfig.json`:

```json
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  },
  "include": ["src"]
}
```

### Key Requirements

- `composite: true` must be set in each referenced project.
- `declaration: true` must be enabled so other projects can reference the types.
- Referenced projects must list all their input files explicitly or via `include` (no `files`
  globbing with `**`).
- References form a directed acyclic graph (no circular references).

### Building with Project References

```bash
tsc --build
```

This command builds all referenced projects in dependency order, incrementally. It uses the
`.tsbuildinfo` files to avoid redundant work.

### Cross-Project Imports

```ts
import { something } from '@myorg/core';
```

The path alias is resolved via `paths` in `tsconfig.json` or through Node.js module resolution.

## Declaration Files

### `.d.ts` File Format

Declaration files describe the shape of JavaScript code without providing implementations:

```ts
declare module 'my-library' {
  export interface Options {
    debug: boolean;
    timeout: number;
  }

  export function createClient(options: Options): Client;

  export interface Client {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    send(message: string): Promise<string>;
  }
}
```

### `global.d.ts`

```ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      API_URL: string;
    }
  }

  interface Window {
    analytics: {
      track(event: string, data?: Record<string, unknown>): void;
    };
  }
}

export {};
```

The `export {}` at the end turns the file into a module, which is required for `declare global` to
work.

### Module Declaration

For untyped modules:

```ts
declare module 'untyped-module' {
  export function doSomething(input: string): number;
}
```

For modules that export a default:

```ts
declare module 'another-untyped' {
  const value: {
    method(): void;
  };
  export default value;
}
```

## JSX Configuration

### `jsx` Option Values

| Value            | Output                                                           |
| ---------------- | ---------------------------------------------------------------- |
| `"preserve"`     | Emit `.jsx` files (for further processing by Babel)              |
| `"react"`        | `React.createElement`                                            |
| `"react-native"` | `React.createElement` (preserves JSX as `React.NativeComponent`) |
| `"react-jsx"`    | `_jsx` from `react/jsx-runtime` (React 17+)                      |
| `"react-jsxdev"` | `_jsxDev` from `react/jsx-dev-runtime` (React 17+ dev)           |

### Custom JSX Factory

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "h",
    "jsxFragmentFactory": "Fragment"
  }
}
```

This configuration uses `h` instead of `React.createElement`, which is the convention for Preact.

## New Features (TypeScript 5.0+)

### `satisfies` Operator

The `satisfies` operator validates that an expression matches a type without widening the
expression's type:

```ts
const config = {
  host: 'localhost',
  port: 3000,
  debug: false,
} satisfies Record<string, string | number | boolean>;

const host: string = config.host;
const port: number = config.port;
const debug: boolean = config.debug;
```

Without `satisfies`, assigning to `Record<string, string | number | boolean>` would widen the
property types. With `satisfies`, the literal types are preserved while still validating against the
broader type.

### `satisfies` vs Type Annotation

```ts
const a: Record<string, string | number> = {
  key: 'value',
};

const b = {
  key: 'value',
} satisfies Record<string, string | number>;

type A = (typeof a)['key'];
type B = (typeof b)['key'];
```

`A` is `string | number` (widened by the annotation). `B` is `"value"` (literal type preserved by
`satisfies`).

### `const` Type Parameters

TypeScript 5.0+ supports `const` type parameters, which infer the narrowest (literal) type for
generic type arguments:

```ts
function createRoute<const T extends string[]>(path: `/${string}`, params: T): void {}

createRoute('/users/:id', ['id'] as const);
```

Without `const` on the type parameter, `T` would be inferred as `string[]`. With `const`, `T` is
inferred as `readonly ["id"]`.

### Decorator Metadata (TypeScript 5.2+)

```ts
function logged<T extends { new (...args: any[]): {} }>(target: T, context: ClassDecoratorContext) {
  console.log(`Decorating ${String(context.name)}`);
}
```

### `using` and `Symbol.dispose` (TypeScript 5.2+)

```ts
class Resource implements Disposable {
  dispose(): void {
    console.log('Resource cleaned up');
  }
}

function example(): void {
  using resource = new Resource();
}
```

The `using` keyword ensures that `dispose()` is called when the variable goes out of scope, even if
an exception is thrown.

## Common Pitfalls

### Pitfall 1: `include` vs `files`

`include` specifies file patterns, while `files` specifies individual files. If both are present,
both are used. Do not use both `include` and `files` in the same `tsconfig.json` unless you have a
specific reason.

### Pitfall 2: Path Aliases Not Resolved at Runtime

Path aliases in `tsconfig.json` (`paths`) are resolved only by the TypeScript compiler. The bundler
or runtime must be configured separately to resolve these aliases. Without matching bundler
configuration, imports will fail at runtime.

### Pitfall 3: `composite` Requires Explicit File Listing

When `composite: true` is set, all source files must be listed explicitly via `include` or `files`.
Wildcard patterns like `"src/**/*.ts"` are supported, but the compiler must be able to determine the
full list of input files without filesystem traversal.

### Pitfall 4: Declaration Files and `isolatedModules`

When `isolatedModules` is enabled, declaration files must be careful about re-exports. Re-exporting
types and values from the same module can cause issues with some bundlers.
