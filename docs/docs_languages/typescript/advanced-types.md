---
title: advanced types
slug: typescript/advanced-types
date: 2026-05-30
tags:
  - TypeScript
categories:
  - TypeScript
description: Advanced TypeScript type system features: conditional types, mapped types, template literal types, variadic tuples, recursive types, type-level programming, and practical design patterns for complex type scenarios.
---

## Conditional Types: Internals and Advanced `infer`

### `Extract` and `Exclude` Internals

`Extract<T, U>` and `Exclude<T, U>` are built-in conditional types defined in `lib.es5.d.ts`. Their
implementations reveal the core distribution mechanism:

```ts
type Exclude<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;
```

Both rely on distributive conditional types. Given `Exclude<'a' | 'b' | 'c', 'a'>`, the naked type
parameter `T` distributes: `Exclude<'a', 'a'> | Exclude<'b', 'a'> | Exclude<'c', 'a'>`, yielding
`never | 'b' | 'c'`, which simplifies to `'b' | 'c'`.

### `NonNullable` Implementation

`NonNullable<T>` removes `null` and `undefined` from a union using the same mechanism:

```ts
type NonNullable<T> = T extends null | undefined ? never : T;
```

Given `NonNullable<string | null | undefined>`, distribution produces `string | never | never`, which
reduces to `string`.

### Inferred Return Types with Multiple `infer`

When `infer` appears in both covariant and contravariant positions within the same conditional type,
TypeScript resolves them to the intersection of covariant inferences and the union of contravariant
inferences:

```ts
type UnionFromPromise<T> = T extends Promise<infer U> ? U : T;
type UnionOfPromises = UnionFromPromise<Promise<string> | Promise<number> | boolean>;
type UnionOfPromises = string | number | boolean;
```

In the contravariant position (function parameter), the inferred types merge via union:

```ts
type CombinedArg<T> = T extends (arg: infer U) => any ? U : never;
type Arg = CombinedArg<(x: string) => void | ((x: number) => void)>;
type Arg = string | number;
```

### Conditional Type Inference in Function Signatures

Conditional types can appear in function return types, and TypeScript infers the type parameter from
context:

```ts
type Unwrap<T> = T extends Array<infer U> ? U : T;

function unwrap<T>(value: T): Unwrap<T> {
  if (Array.isArray(value)) return value[0] as any;
  return value;
}

const a = unwrap([1, 2, 3]);
const b = unwrap('hello');
```

`a` is inferred as `number` because `T` is `number[]` and `Unwrap<number[]>` resolves to `number`. `b`
is inferred as `string` because `Unwrap<string>` falls through to the `else` branch.

### `infer` with `extends` Constraint

TypeScript 4.7+ supports constrained `infer` declarations using `infer R extends U`. This constrains
the inferred type at the point of inference:

```ts
type FirstString<T> = T extends [infer F extends string, ...any[]] ? F : never;

type A = FirstString<['hello', 'world']>;
type A = 'hello';

type B = FirstString<[42, 'hello']>;
type B = never;
```

The constraint rejects tuples whose first element is not `string`.

## Mapped Types: Modifiers and Key Transformation

### Mapped Type Modifiers (`+`, `-`, `?`)

Mapped types support three modifiers: `?` (optional), `readonly`, and their negations. The `+` prefix
is the default and is usually omitted. The `-` prefix removes a modifier:

```ts
type MakeOptional<T> = { [K in keyof T]?: T[K] };
type MakeRequired<T> = { [K in keyof T]-?: T[K] };
type Freeze<T> = { +readonly [K in keyof T]: T[K] };
type Thaw<T> = { -readonly [K in keyof T]: T[K] };

interface Original {
  readonly name: string;
  age?: number;
  active: boolean;
}

type RequiredMutable = Thaw<MakeRequired<Original>>;
type RequiredMutable = {
  name: string;
  age: number;
  active: boolean;
};
```

### Composing Key Remapping with Value Transformation

Key remapping (`as`) and value transformation can be combined in a single mapped type. This enables
powerful restructuring operations:

```ts
type ApiToDomain<T> = {
  [K in keyof T as `domain${Capitalize<string & K>}`]: T[K] extends string
    ? T[K] extends `${infer _}_${infer Rest}`
      ? Rest
      : T[K]
    : T[K];
};

interface ApiModel {
  first_name: string;
  last_name: string;
  age: number;
}

type Domain = ApiToDomain<ApiModel>;
type Domain = {
  domainFirst_name: string;
  domainLast_name: string;
  domainAge: number;
};
```

### Mapped Types over Union Primitives

Mapped types iterate over any union, not just `keyof T`. When the constraint is a union of string
literals, the result is a record of transformed strings:

```ts
type EventMap<T extends string> = {
  [K in T as `on${Capitalize<K>}`]: (payload: any) => void;
};

type Handlers = EventMap<'click' | 'focus' | 'blur'>;
type Handlers = {
  onClick: (payload: any) => void;
  onFocus: (payload: any) => void;
  onBlur: (payload: any) => void;
};
```

## Template Literal Types: Intrinsic String Types

### `Uppercase`, `Lowercase`, `Capitalize`, `Uncapitalize`

TypeScript provides four intrinsic string transformation types:

```ts
type A = Uppercase<'hello'>;
type B = Lowercase<'HELLO'>;
type C = Capitalize<'hello'>;
type D = Uncapitalize<'Hello'>;
```

These work only on single string literal types, not on arbitrary unions or template expressions. They
are defined in `lib.es5.d.ts` as intrinsic types (their implementations are built into the compiler).

### Type-Safe Route Parameter Extraction

Template literal types enable extracting route parameters from URL patterns:

```ts
type ExtractParams<T extends string> =
  T extends `${string}:${infer Param}/${infer Rest}`
    ? { [K in Param | keyof ExtractParams<Rest>]: string }
    : T extends `${string}:${infer Param}`
      ? { [K in Param]: string }
      : {};

type UserParams = ExtractParams<'/users/:userId/posts/:postId'>;
type UserParams = {
  userId: string;
  postId: string;
};
```

### Type-Safe CSS Unit Types

Template literals can enforce valid CSS value patterns:

```ts
type CssUnit = 'px' | 'em' | 'rem' | 'vh' | 'vw' | '%';
type CssValue = `${number}${CssUnit}`;

function setWidth(value: CssValue): void {}
function setMargin(value: CssValue): void {}

setWidth('16px');
setWidth('2em');
setMargin('100');
```

The last line is an error because `100` lacks a unit suffix.

### Recursive Template Matching for CamelCase to SnakeCase

```ts
type CamelToSnakeCase<S extends string> =
  S extends `${infer Head}${infer Tail}`
    ? Head extends Uppercase<Head>
      ? Head extends Lowercase<Head>
        ? `${Lowercase<Head>}${CamelToSnakeCase<Tail>}`
        : `_${Lowercase<Head>}${CamelToSnakeCase<Tail>}`
      : `${Head}${CamelToSnakeCase<Tail>}`
    : S;

type A = CamelToSnakeCase<'helloWorld'>;
type B = CamelToSnakeCase<'getHTTPResponse'>;
```

## Variadic Tuple Types: Advanced Patterns

### `Init` and `Last` Extraction

```ts
type Init<T extends any[]> = T extends [...infer I, any] ? I : [];
type Last<T extends any[]> = T extends [...any[], infer L] ? L : never;

type I = Init<[1, 2, 3]>;
type L = Last<[1, 2, 3]>;
```

### Type-Safe `concat` with Exact Tuple Preservation

```ts
type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U];

type A = Concat<[1, 2], [true, false]>;
type B = Concat<readonly [1], readonly [2, 3]>;
type B = readonly [1, 2, 3];
```

Using `readonly` in the constraint propagates readonly to the result.

### Multi-Argument Type-Safe `pipe`

```ts
type Pipe<Fns extends readonly any[]> = Fns extends readonly [
  (arg: infer A) => infer B,
  ...infer Rest,
]
  ? Rest extends readonly [(arg: B) => any, ...any[]]
    ? Pipe<Rest> extends (arg: infer C) => infer D
      ? (arg: A) => D
      : never
    : (arg: A) => B
  : never;

function pipe<Fns extends readonly [(...args: any[]) => any, ...Array<(arg: any) => any>]>(
  ...fns: Fns & Pipe<Fns> extends (arg: any) => any
    ? Fns
    : [{ error: 'Functions do not compose' }]
): Pipe<Fns> {
  return ((value: any) => fns.reduce((v, fn) => fn(v), value)) as any;
}

const result = pipe(
  (x: string) => x.length,
  (x: number) => x * 2,
  (x: number) => String(x),
);
```

### Variable-Length Argument Preservation

```ts
type Reverse<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : [];

type R = Reverse<[1, 2, 3]>;
type R = [3, 2, 1];
```

## Recursive Types: JSON and Beyond

### JSON Type

A complete JSON type representation that covers all valid JSON values:

```ts
type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | { [key: string]: Json };

function parseJson(input: string): Json {
  return JSON.parse(input);
}
```

### Recursive `Omit`

Remove keys at all nesting levels:

```ts
type DeepOmit<T, Keys extends string> = T extends object
  ? {
      [K in keyof T as K extends Keys ? never : K]: DeepOmit<T[K], Keys>;
    }
  : T;

interface Raw {
  id: string;
  meta: { id: string; version: number };
  items: { id: string; name: string }[];
}

type Clean = DeepOmit<Raw, 'id'>;
type Clean = {
  meta: { version: number };
  items: { name: string }[];
};
```

### Recursive `Pick`

Select keys at all nesting levels:

```ts
type DeepPick<T, Keys extends string> = T extends object
  ? {
      [K in keyof T as K extends Keys ? K : never]: DeepPick<T[K], Keys>;
    } & {
      [K in keyof T as K extends Keys ? never : K]: DeepPick<T[K], Keys>;
    }
  : T;
```

### Type-Safe Lodash `get` Path

```ts
type PathKeys<T> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? K | `${K}.${PathKeys<T[K]>}`
        : K;
    }[keyof T & string]
  : never;

function get<T, P extends PathKeys<T>>(obj: T, path: P): any {
  return path.split('.').reduce((acc: any, key) => acc?.[key], obj);
}

const data = { user: { address: { city: 'London' } } } as const;
get(data, 'user.address.city');
get(data, 'user.nonexistent');
```

## Type-Level Programming: Advanced Computation

### Multiplication via Repeated Addition

```ts
type BuildTuple<N extends number, T extends any[] = []> = T['length'] extends N
  ? T
  : BuildTuple<N, [...T, any]>;

type Multiply<A extends number, B extends number> = [
  ...BuildTuple<A>,
] extends [any, ...infer Rest]
  ? Rest['length'] extends infer R extends number
    ? B extends 0
      ? 0
      : Add<R, Multiply<A, Subtract<B, 1>>>
    : never
  : 0;

type Add<A extends number, B extends number> = [
  ...BuildTuple<A>,
  ...BuildTuple<B>,
]['length'] extends infer R extends number
  ? R
  : never;

type Subtract<A extends number, B extends number> =
  BuildTuple<A> extends [...BuildTuple<B>, ...infer Rest]
    ? Rest['length'] extends infer R extends number
      ? R
      : never
    : never;

type Product = Multiply<3, 4>;
type Product = 12;
```

### Fibonacci Sequence

```ts
type Fibonacci<N extends number, Current extends any[] = [any], Prev extends any[] = []> =
  Current['length'] extends N
    ? Current['length'] extends infer R extends number
      ? R
      : never
    : Fibonacci<N, [...Current, ...Prev], Current>;

type F5 = Fibonacci<7>;
type F5 = 13;
```

**Common Pitfall:** Type-level arithmetic hits TypeScript's recursion depth limit (~9999 since TS 4.5,
~1000 before). Keep values small and prefer runtime computation for anything non-trivial.

### Type-Level String Length

```ts
type StringLength<S extends string, Acc extends any[] = []> = S extends `${infer _}${infer Rest}`
  ? StringLength<Rest, [...Acc, any]>
  : Acc['length'] extends infer R extends number
    ? R
    : never;

type Len = StringLength<'hello'>;
type Len = 5;
```

### Building a Type-Level Parser: Simple Arithmetic Expression

```ts
type ParseNumber<S extends string> = S extends `${infer N extends number}` ? N : never;

type AddExpr<S extends string> = S extends `${infer Left extends number}+${infer Right}`
  ? Left + ParseNumber<Right>
  : ParseNumber<S>;

type Result = AddExpr<'42+8'>;
type Result = 50;
```

## Branded Types: UniqueSymbol and Advanced Branding

### `UniqueSymbol` for Singleton Branding

`UniqueSymbol` creates truly unique symbols that cannot be replicated, providing stronger branding than
string brands:

```ts
const USD: unique symbol = Symbol('USD');
const EUR: unique symbol = Symbol('EUR');

type Currency<T extends symbol, V = number> = V & { readonly __currency: T };

type Usd = Currency<typeof USD>;
type Eur = Currency<typeof EUR>;

function usd(amount: number): Usd {
  return amount as Usd;
}

function eur(amount: number): Eur {
  return amount as Eur;
}

function convertUsdToEur(value: Usd, rate: number): Eur {
  return eur((value as number) * rate);
}

const total = usd(100);
const converted = convertUsdToEur(total, 0.85);
```

### Branded Newtype with Validation

```ts
interface Branded<T, B extends string> {
  readonly __brand: B;
  readonly value: T;
}

function createBranded<T, B extends string>(
  value: T,
  _brand: B,
  validate: (v: T) => boolean,
): Branded<T, B> {
  if (!validate(value)) throw new Error(`Validation failed for brand ${B}`);
  return { value, __brand: B } as Branded<T, B>;
}

type Email = Branded<string, 'Email'>;
type HexColor = Branded<string, 'HexColor'>;

const email = createBranded<string, 'Email'>(
  'user@example.com',
  'Email',
  (v) => v.includes('@'),
);

const color = createBranded<string, 'HexColor'>(
  '#ff0000',
  'HexColor',
  (v) => /^#[0-9a-f]{6}$/i.test(v),
);
```

### Branded Type Guards for Runtime Safety

```ts
function isBranded<T, B extends string>(
  value: unknown,
  brand: B,
): value is Branded<T, B> {
  return (
    typeof value === 'object' &&
    value !== null &&
    '__brand' in value &&
    (value as any).__brand === brand
  );
}

function sendEmail(to: Email): void {
  console.log(`Sending to ${(to as any).value}`);
}

const candidate = { value: 'test@test.com', __brand: 'Email' };

if (isBranded<string, 'Email'>(candidate, 'Email')) {
  sendEmail(candidate);
}
```

**Common Pitfall:** The `__brand` property does not exist at runtime. The `as` cast is invisible to
JavaScript. Type guards using `isBranded` will fail on plain values (e.g., `{ value: 'x' }`) because
`__brand` is not present.

## Declaration Files (`.d.ts`)

### Structure of a Declaration File

Declaration files describe the shape of JavaScript modules without providing implementations:

```ts
declare module 'my-lib' {
  export interface Config {
    baseUrl: string;
    timeout: number;
  }

  export function createClient(config: Config): Client;

  export interface Client {
    get<T>(path: string): Promise<T>;
    post<T>(path: string, body: unknown): Promise<T>;
    dispose(): void;
  }
}
```

### Ambient Types and `declare global`

The `declare global` block extends the global scope from within a module:

```ts
declare global {
  interface Window {
    myCustomProperty: string;
  }

  var analytics: {
    track(event: string, data?: Record<string, unknown>): void;
  };
}

export {};
```

The `export {}` at the end makes the file a module, which is required for `declare global` to work.

### Augmenting Existing Modules

Module augmentation extends types declared in another module:

```ts
declare module 'express' {
  interface Request {
    userId?: string;
    tenantId?: string;
  }

  interface Response {
    success<T>(data: T): void;
    error(message: string, status?: number): void;
  }
}
```

After this augmentation, `req.userId` and `res.success()` are available throughout the project.

### Triple-Slash Directives

Triple-slash directives are single-line comments that instruct the compiler about dependencies:

```ts
/// <reference path="./types.d.ts" />
/// <reference types="node" />
/// <reference lib="es2022" />
```

- `path`: Reference a local declaration file.
- `types`: Include a package from `@types/`.
- `lib`: Include a built-in library declaration.

**Common Pitfall:** Triple-slash directives are largely superseded by `tsconfig.json` settings
(`compilerOptions.types`, `compilerOptions.lib`). Use them only when explicit ordering is needed.

### `declare module '*'` for Untyped Imports

Wildcard module declarations allow importing any module as `any`:

```ts
declare module 'untyped-library';
```

This prevents `Cannot find module` errors for libraries without type definitions.

## Utility Type Patterns

### State Machine Types

TypeScript can encode state machines as types that prevent invalid transitions:

```ts
type State = 'idle' | 'loading' | 'success' | 'error';
type Event = 'fetch' | 'resolve' | 'reject' | 'reset';

type Transitions = {
  idle: { fetch: 'loading' };
  loading: { resolve: 'success'; reject: 'error' };
  success: { reset: 'idle' };
  error: { reset: 'idle' };
};

type NextState<S extends State, E extends Event> = S extends keyof Transitions
  ? E extends keyof Transitions[S]
    ? Transitions[S][E]
    : never
  : never;

type Valid = NextState<'idle', 'fetch'>;
type Invalid = NextState<'idle', 'resolve'>;
type Invalid = never;

class TypedStateMachine<S extends State> {
  private state: S;

  constructor(initial: S) {
    this.state = initial;
  }

  transition<E extends Event>(
    event: E,
  ): NextState<S, E> extends never ? never : TypedStateMachine<NextState<S, E> & State> {
    const transitions: Transitions = {
      idle: { fetch: 'loading' },
      loading: { resolve: 'success', reject: 'error' },
      success: { reset: 'idle' },
      error: { reset: 'idle' },
    };
    const nextState = transitions[this.state as State][event as keyof Transitions[State]];
    if (nextState === undefined) {
      throw new Error(`Invalid transition from ${this.state} via ${event}`);
    }
    this.state = nextState as S;
    return this as any;
  }

  getState(): S {
    return this.state;
  }
}

const machine = new TypedStateMachine<'idle'>('idle');
const loading = machine.transition('fetch');
const success = loading.transition('resolve');
const idle = success.transition('reset');
```

### AST Visitor Pattern Types

The visitor pattern maps node types to handler return types:

```ts
type AstNode =
  | { kind: 'literal'; value: string | number | boolean }
  | { kind: 'identifier'; name: string }
  | { kind: 'binary'; left: AstNode; operator: '+' | '-' | '*' | '/'; right: AstNode }
  | { kind: 'call'; callee: AstNode; arguments: AstNode[] };

type VisitorHandlers = {
  [K in AstNode['kind']]: Extract<AstNode, { kind: K }> extends infer Node
    ? (node: Node) => unknown
    : never;
};

interface Visitor {
  visit<K extends AstNode['kind']>(node: Extract<AstNode, { kind: K }>): ReturnType<VisitorHandlers[K]>;
}

function createVisitor(partial: Partial<VisitorHandlers>): Visitor {
  return {
    visit(node) {
      const handler = partial[node.kind];
      if (!handler) throw new Error(`No handler for ${node.kind}`);
      return handler(node as any);
    },
  };
}

const evaluator = createVisitor({
  literal(node) {
    return node.value;
  },
  binary(node) {
    const left = Number(evaluator.visit(node.left));
    const right = Number(evaluator.visit(node.right));
    switch (node.operator) {
      case '+': return left + right;
      case '-': return left - right;
      case '*': return left * right;
      case '/': return left / right;
    }
  },
  call(node) {
    return evaluator.visit(node.callee);
  },
  identifier(node) {
    return node.name;
  },
});
```

### Type-Safe Pub/Sub with Wildcard Handlers

```ts
type EventMap = Record<string, any>;

type WildcardHandler<T extends EventMap> = (event: keyof T, payload: T[keyof T]) => void;

class PubSub<Events extends EventMap> {
  private handlers = new Map<keyof Events | '*', Set<Function>>();
  private wildcardHandlers = new Set<WildcardHandler<Events>>();

  on<K extends keyof Events>(event: K, handler: (payload: Events[K]) => void): () => void;
  on(event: '*', handler: WildcardHandler<Events>): () => void;
  on(event: keyof Events | '*', handler: Function): () => void {
    if (event === '*') {
      this.wildcardHandlers.add(handler as WildcardHandler<Events>);
      return () => this.wildcardHandlers.delete(handler as WildcardHandler<Events>);
    }
    if (!this.handlers.has(event)) {
      this.handlers.set(event, new Set());
    }
    const set = this.handlers.get(event)!;
    set.add(handler);
    return () => set.delete(handler);
  }

  emit<K extends keyof Events>(event: K, payload: Events[K]): void {
    this.handlers.get(event)?.forEach((h) => h(payload));
    this.wildcardHandlers.forEach((h) => h(event, payload));
  }
}

interface SystemEvents {
  startup: { timestamp: number };
  shutdown: { reason: string };
  error: { code: number; message: string };
}

const bus = new PubSub<SystemEvents>();

bus.on('*', (event, payload) => {
  console.log(`[${event}]`, payload);
});

bus.on('startup', ({ timestamp }) => {
  console.log(`Started at ${timestamp}`);
});
```

## Common Pitfalls

### Pitfall 1: `keyof T` Includes `symbol` Keys

`keyof T` returns `string | number | symbol` for most object types, not just `string`. Using
`keyof T` as a string constraint without narrowing can cause subtle errors:

```ts
function getNested<T, K extends keyof T>(obj: T, path: K): T[K] {
  return obj[path];
}

const obj = { [Symbol('id')]: 1, name: 'Ada' } as const;
getNested(obj, Symbol('id'));
```

Use `keyof T & string` when only string keys are expected.

### Pitfall 2: `as const` Required for Tuple Literal Inference

Without `as const`, TypeScript widens array literals to regular arrays:

```ts
function tail<T extends any[]>(arr: T): T extends [any, ...infer Rest] ? Rest : never {
  return arr.slice(1) as any;
}

const a = tail([1, 2, 3]);
const b = tail([1, 2, 3] as const);
```

`a` has type `number[]`. `b` has type `[2, 3]`. The `as const` assertion preserves tuple literal
types.

### Pitfall 3: Declaration Merging Ambiguity

When augmenting modules, merging interfaces with the same name requires identical structure for
properties that already exist. Augmenting a property with an incompatible type silently fails:

```ts
declare module 'express' {
  interface Request {
    user: { id: string; role: string };
  }
}

declare module 'express' {
  interface Request {
    user: { id: string };
  }
}
```

The second declaration does not narrow the type. TypeScript merges by intersection, resulting in
`{ id: string; role: string } & { id: string }`, which is equivalent to the first.

### Pitfall 4: Template Literal Recursion on Dynamic Strings

Template literal conditional types only work on **string literal types**, not on generic `string`. A
value typed as `string` (not a specific literal) cannot be decomposed:

```ts
type FirstChar<S extends string> = S extends `${infer C}${infer _}` ? C : never;

type A = FirstChar<'hello'>;
type B = FirstChar<string>;
type B = string;
```

The conditional type evaluates to `string` because `string` satisfies `` `${infer C}${infer _}` ``
with both inferences being `string`.

### Pitfall 5: `readonly` Array Covariance Breaks Mutability

`readonly` arrays are covariant, but mutable arrays are not. Passing a `readonly` array where a
mutable array is expected is an error:

```ts
const readonly: readonly number[] = [1, 2, 3];
const mutable: number[] = readonly;
```

This fails because a mutable array allows `push`, which would violate the `readonly` contract of the
source.

### Pitfall 6: Conditional Types in `extends` Clauses Are Not Evaluated

A conditional type used as a constraint in a generic parameter is not evaluated during constraint
checking:

```ts
type IsArray<T> = T extends any[] ? 'yes' : 'no';

function check<T extends IsArray<any>>(value: T): T {
  return value;
}
```

The constraint `IsArray<any>` evaluates to `'yes'`, so `T` is constrained to `'yes'`, not to array
types. Conditional types in constraints behave unexpectedly.

### Pitfall 7: Excess Property Checking in Generic Assignments

Excess property checking applies only to object literals assigned directly to a typed variable. When
passing through a generic, excess properties are not caught:

```ts
interface Expected {
  name: string;
}

function accept<T extends Expected>(value: T): T {
  return value;
}

const obj = { name: 'Ada', extra: true };
accept(obj);
```

This compiles because `obj` is not an object literal in the call expression. Use `satisfies` (TS 4.9+)
or explicit typing to catch excess properties:

```ts
accept({ name: 'Ada', extra: true });
```

This version is an error because the object literal is directly assigned.

## Summary

This topic covers advanced TypeScript type system features that enable building robust, type-safe
abstractions.

**Key concepts include:**

- Conditional type internals: `Extract`, `Exclude`, and `NonNullable` rely on distributive
  conditional types; constrained `infer` (TS 4.7+) restricts inferred types.
- Mapped type modifiers: `+`/`-`/`?` control optionality and readonly status; key remapping with
  `as` combines with value transformation.
- Template literal intrinsics: `Uppercase`, `Lowercase`, `Capitalize`, `Uncapitalize` operate on literal
  types only; recursive template matching enables string case conversion.
- Variadic tuple types: spread and rest in tuple positions enable type-safe `pipe`, `concat`, and
  `reverse`; `readonly` preservation propagates through tuple operations.
- Recursive types: JSON type, deep `Omit`/`Pick`, and path-key extraction for type-safe deep access.
- Type-level programming: multiplication via repeated addition, Fibonacci sequences, and string length
  computation use tuple-length arithmetic.
- Branded types: `UniqueSymbol` for singleton branding, branded newtypes with validation, and type
  guards for runtime safety.
- Declaration files: `declare module`, `declare global`, module augmentation, and triple-slash
  directives.
- Utility type patterns: state machine types, AST visitor pattern, and type-safe pub/sub with wildcard
  handlers.

Understanding these concepts thoroughly is essential for both examinations and practical programming,
and requires both theoretical knowledge and hands-on practice.
