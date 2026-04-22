---
title: Advanced Patterns
description: Advanced TypeScript type-level programming: recursive types, branded types, builder patterns, variadic tuples, mapped type manipulation, and type-level arithmetic.
slug: typescript-advanced-patterns
date: 2026-04-22T00:00:00.000Z
tags: [TypeScript]
categories: [TypeScript]
---

## Conditional Types: Deep Dive

### Distributive Conditional Types

When a conditional type's checked type is a **naked type parameter** (a type parameter used
directly, not wrapped in another type), the conditional distributes over union members. This is the
most important rule governing conditional types.

```ts
type ToArray<T> = T extends any ? T[] : never;
type Result = ToArray<string | number>;
type Result = string[] | number[];
```

The distribution process is equivalent to:

```ts
type Result = ToArray<string> | ToArray<number>;
type Result = string[] | number[];
```

### Preventing Distribution

Wrapping the checked type in a tuple prevents distribution:

```ts
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;
type Result = ToArrayNonDist<string | number>;
type Result = (string | number)[];
```

### Distribution Rules Summary

| Form                                                    | Distributes?    |
| ------------------------------------------------------- | --------------- |
| `T extends U ? X : Y`                                   | Yes (naked `T`) |
| `[T] extends [U] ? X : Y`                               | No              |
| `T extends U ? X : Y` where `T` is not a type parameter | No              |
| `(T & {}) extends U ? X : Y`                            | No              |

## Recursive Types

TypeScript supports recursive type aliases, enabling type-level computations over arbitrarily nested
data structures.

### DeepPartial

`DeepPartial<T>` makes all properties at all nesting levels optional:

```ts
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

interface Config {
  database: {
    host: string;
    port: number;
    credentials: {
      username: string;
      password: string;
    };
  };
  cache: {
    enabled: boolean;
    ttl: number;
  };
}

type PartialConfig = DeepPartial<Config>;

const partial: PartialConfig = {
  database: {
    credentials: {
      username: 'admin',
    },
  },
};
```

### DeepReadonly

`DeepReadonly<T>` makes all properties at all nesting levels readonly:

```ts
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

const config: DeepReadonly<Config> = {
  database: {
    host: 'localhost',
    port: 5432,
    credentials: {
      username: 'admin',
      password: 'secret',
    },
  },
  cache: {
    enabled: true,
    ttl: 3600,
  },
};
```

### DeepRequired

```ts
type DeepRequired<T> = {
  [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];
};
```

The `-?` modifier removes optionality from all properties.

### UnionToIntersection

Converting a union type to an intersection type is a classic type-level programming challenge:

```ts
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void
  ? I
  : never;

type A = UnionToIntersection<{ a: string } | { b: number }>;
type A = { a: string } & { b: number };
```

This works by exploiting contravariance in function parameter types. Each union member is converted
to a function type `(k: Member) => void`, and the union of these function types has an inferred
parameter type that is the intersection of all members.

**Common Pitfall:** `UnionToIntersection` does not handle cases where union members share property
names with different types. The intersection of `{ a: string }` and `{ a: number }` produces
`{ a: never }`, not `{ a: string } & { a: number }`.

## Branded Types / Opaque Types

Branded types (also called opaque types or nominal types) attach a unique "brand" to an underlying
type, preventing assignment between types that share the same structure but have different
semantics.

### Basic Branding

```ts
type Brand<T, B extends string> = T & { readonly __brand: B };

type USD = Brand<number, 'USD'>;
type EUR = Brand<number, 'EUR'>;
type UserId = Brand<string, 'UserId'>;
type OrderId = Brand<string, 'OrderId'>;

function usd(amount: number): USD {
  return amount as USD;
}

function eur(amount: number): EUR {
  return amount as EUR;
}

function addUSD(a: USD, b: USD): USD {
  return usd((a + b) as number);
}

const total = addUSD(usd(10), usd(20));
const invalid = addUSD(usd(10), eur(15));
```

The last line is a compile error because `EUR` is not assignable to `USD`.

### Type-Safe IDs

```ts
interface Branded<T, B extends string> {
  readonly __brand: B;
  readonly value: T;
}

type UserId = Branded<string, 'UserId'>;
type OrderId = Branded<string, 'OrderId'>;

function createUserId(id: string): UserId {
  return { value: id, __brand: 'UserId' };
}

function getUser(id: UserId): void {}
function getOrder(id: OrderId): void {}

const userId = createUserId('u-001');
getUser(userId);
getOrder(userId);
```

### Branding with Newtype Pattern

```ts
class Newtype<Brand extends string, T> {
  private readonly __brand!: Brand;
  constructor(private readonly value: T) {}

  unwrap(): T {
    return this.value;
  }
}

type Email = Newtype<'Email', string>;
type PositiveInt = Newtype<'PositiveInt', number>;

function createEmail(value: string): Email {
  if (!value.includes('@')) throw new Error('Invalid email');
  return new Newtype<'Email', string>(value);
}

function createPositiveInt(value: number): PositiveInt {
  if (value <= 0) throw new Error('Must be positive');
  return new Newtype<'PositiveInt', number>(value);
}
```

## Builder Pattern with Type Safety

The builder pattern constructs complex objects step by step. TypeScript can enforce that required
steps are completed before the build method is called.

### Step Builder

```ts
interface QueryBuilderState {
  select: string[];
  from: string;
  where: string[];
  orderBy: string[];
  limit: number | null;
}

type RequiredKeys = 'select' | 'from';

type BuilderStep<
  State extends Partial<QueryBuilderState>,
  Completed extends keyof QueryBuilderState,
> = {
  [K in Exclude<RequiredKeys, Completed>]: (
    value: QueryBuilderState[K],
  ) => BuilderStep<Omit<State, never> & Pick<QueryBuilderState, K>, Completed | K>;
} & (Completed extends RequiredKeys ? { build: () => QueryBuilderState } : { build?: never });

type QueryBuilder = BuilderStep<Partial<QueryBuilderState>, never>;
```

A simpler practical approach uses method chaining with return types:

```ts
class RequestBuilder {
  private method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET';
  private url = '';
  private headers: Record<string, string> = {};
  private body: string | null = null;

  setMethod(method: 'GET' | 'POST' | 'PUT' | 'DELETE'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  addHeader(key: string, value: string): this {
    this.headers[key] = value;
    return this;
  }

  setBody(body: string): this {
    this.body = body;
    return this;
  }

  build(): RequestInit {
    const init: RequestInit = {
      method: this.method,
      headers: this.headers,
    };
    if (this.body !== null) {
      init.body = this.body;
    }
    return init;
  }
}

const request = new RequestBuilder()
  .setMethod('POST')
  .setUrl('/api/users')
  .addHeader('Content-Type', 'application/json')
  .setBody(JSON.stringify({ name: 'Ada' }))
  .build();
```

## Discriminated Unions and Exhaustive Checking

### Exhaustive Switch with `never`

When all cases of a discriminated union are handled, the default case assigns the discriminant to
`never`. If a new variant is added later, the assignment to `never` produces a compile error:

```ts
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rectangle'; width: number; height: number }
  | { kind: 'triangle'; base: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'rectangle':
      return shape.width * shape.height;
    case 'triangle':
      return (shape.base * shape.height) / 2;
    default:
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}
```

### `assertNever` Utility

```ts
function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${JSON.stringify(value)}`);
}

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'rectangle':
      return shape.width * shape.height;
    case 'triangle':
      return (shape.base * shape.height) / 2;
    default:
      return assertNever(shape);
  }
}
```

### Exhaustive Checking with Objects

```ts
type Action =
  | { type: 'SET_VALUE'; payload: string }
  | { type: 'RESET' }
  | { type: 'INCREMENT'; payload: number };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'SET_VALUE':
      return parseInt(action.payload, 10);
    case 'RESET':
      return 0;
    case 'INCREMENT':
      return state + action.payload;
    default:
      return assertNever(action);
  }
}
```

## Type-Safe Event Emitter

```ts
type EventMap = Record<string, any>;

type EventHandler<T extends EventMap, K extends keyof T> = (payload: T[K]) => void;

class StrictEmitter<Events extends EventMap> {
  private listeners = new Map<keyof Events, Set<EventHandler<Events, any>>>();

  on<K extends keyof Events>(event: K, handler: EventHandler<Events, K>): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    const handlers = this.listeners.get(event)!;
    handlers.add(handler);
    return () => {
      handlers.delete(handler);
    };
  }

  off<K extends keyof Events>(event: K, handler: EventHandler<Events, K>): void {
    this.listeners.get(event)?.delete(handler);
  }

  emit<K extends keyof Events>(event: K, payload: Events[K]): void {
    this.listeners.get(event)?.forEach((handler) => handler(payload));
  }

  once<K extends keyof Events>(event: K, handler: EventHandler<Events, K>): () => void {
    const unsubscribe = this.on(event, (payload) => {
      unsubscribe();
      handler(payload);
    });
    return unsubscribe;
  }
}

interface AppEvents {
  'user:login': { userId: string; timestamp: number };
  'user:logout': { userId: string };
  notification: { message: string; level: 'info' | 'warn' | 'error' };
}

const emitter = new StrictEmitter<AppEvents>();

emitter.on('user:login', ({ userId, timestamp }) => {
  console.log(`${userId} logged in at ${timestamp}`);
});

emitter.emit('user:login', { userId: 'u1', timestamp: Date.now() });

emitter.on('user:login', ({ nonexistent }) => {});
```

The last line is a compile error because `nonexistent` does not exist on the payload type
`{ userId: string; timestamp: number }`.

## Variadic Tuple Types

TypeScript 4.0 introduced variadic tuple types, which allow tuples to contain generic spreads. This
enables type-safe manipulation of function parameter lists and tuple concatenation.

### Tuple Spreading

```ts
type Arr = readonly any[];

function concat<T extends Arr, U extends Arr>(a: T, b: U): [...T, ...U] {
  return [...a, ...b];
}

const result = concat([1, 2] as const, ['a', 'b'] as const);
```

The type of `result` is `readonly [1, 2, "a", "b"]`.

### Tail and Head Extraction

```ts
type Head<T extends any[]> = T extends [infer H, ...any[]] ? H : never;
type Tail<T extends any[]> = T extends [any, ...infer Rest] ? Rest : [];

type H = Head<[1, 2, 3]>;
type T = Tail<[1, 2, 3]>;
```

### Typed `pipe` Function

```ts
function pipe<A extends any[], B, C extends any[]>(
  f1: (...args: A) => B,
  f2: (arg: B) => ...C extends [infer R] ? R : never
): (...args: A) => C extends [infer R] ? R : never {
  return (...args: A) => f2(f1(...args));
}

const double = (x: number) => x * 2;
const stringify = (x: number) => String(x);

const combined = pipe(double, stringify);
```

### Variadic `push` for Tuples

```ts
type Push<T extends any[], V> = [...T, V];
type Prepend<T extends any[], V> = [V, ...T];

type A = Push<[1, 2], 3>;
type B = Prepend<[1, 2], 0>;
```

## Mapped Types: Advanced Manipulation

### Key Remapping with `as`

```ts
type RenameKeys<T, R extends Partial<Record<keyof T, string>>> = {
  [K in keyof T as K extends keyof R ? R[K] : K]: T[K];
};

interface Original {
  foo: number;
  bar: string;
  baz: boolean;
}

type Renamed = RenameKeys<Original, { foo: 'renamedFoo'; bar: 'renamedBar' }>;
type Renamed = {
  renamedFoo: number;
  renamedBar: string;
  baz: boolean;
};
```

### Filtering Properties by Value Type

```ts
type PickByValue<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K];
};

interface Mixed {
  name: string;
  age: number;
  active: boolean;
  tags: string[];
}

type StringFields = PickByValue<Mixed, string>;
type StringFields = {
  name: string;
};
```

### Recursive Key Transform

```ts
type DeepKeyOf<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends object ? `${string & K}.${DeepKeyOf<T[K]>}` : string & K;
    }[keyof T]
  : never;

interface Nested {
  a: string;
  b: { c: number; d: { e: boolean } };
}

type Keys = DeepKeyOf<Nested>;
type Keys = 'a' | 'b.c' | 'b.d.e';
```

### Optional to Required Conversion

```ts
type OptionalToRequired<T> = {
  [K in keyof T]-?: T[K];
};

type RequiredConfig = OptionalToRequired<{
  host?: string;
  port?: number;
}>;
type RequiredConfig = {
  host: string;
  port: number;
};
```

## Template Literal Type Manipulation

### Splitting Strings

```ts
type Split<S extends string, D extends string> = S extends `${infer Head}${D}${infer Tail}`
  ? [Head, ...Split<Tail, D>]
  : [S];

type Parts = Split<'a-b-c', '-'>;
type Parts = ['a', 'b', 'c'];
```

### Joining Strings

```ts
type Join<T extends string[], D extends string> = T extends []
  ? ''
  : T extends [infer Only]
    ? string & Only
    : T extends [infer Head, ...infer Rest]
      ? `${string & Head}${D}${Join<Rest extends string[] ? Rest : [string & Rest], D>}`
      : string;

type Path = Join<['src', 'components', 'Button'], '/'>;
type Path = 'src/components/Button';
```

### Path Type Extraction

```ts
type PathValue<T, P extends string> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? PathValue<T[Key], Rest>
    : never
  : P extends keyof T
    ? T[P]
    : never;

interface Data {
  user: {
    profile: {
      name: string;
      age: number;
    };
    email: string;
  };
}

type Name = PathValue<Data, 'user.profile.name'>;
type Email = PathValue<Data, 'user.email'>;
```

### Replace in Template Literals

```ts
type Replace<
  S extends string,
  From extends string,
  To extends string,
> = S extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${Replace<Suffix, From, To>}`
  : S;

type Result = Replace<'hello world hello', 'hello', 'hi'>;
type Result = 'hi world hi';
```

## Type-Level Arithmetic

TypeScript does not natively support arithmetic on number types. However, type-level arithmetic can
be implemented using tuple length as a representation of natural numbers.

### Counting Tuple Length

```ts
type BuildTuple<N extends number, T extends any[] = []> = T['length'] extends N
  ? T
  : BuildTuple<N, [...T, any]>;

type Tuple3 = BuildTuple<3>;
type Tuple3 = [any, any, any];
```

### Addition

```ts
type Add<A extends number, B extends number> = [
  ...BuildTuple<A>,
  ...BuildTuple<B>,
]['length'] extends infer R extends number
  ? R
  : never;

type Sum = Add<3, 4>;
type Sum = 7;
```

### Subtraction

```ts
type Subtract<A extends number, B extends number> =
  BuildTuple<A> extends [...BuildTuple<B>, ...infer Rest]
    ? Rest['length'] extends infer R extends number
      ? R
      : never
    : never;

type Diff = Subtract<7, 3>;
type Diff = 4;
```

### Comparison

```ts
type GreaterThan<A extends number, B extends number> =
  BuildTuple<A> extends [...BuildTuple<B>, ...any[]] ? true : false;

type A = GreaterThan<5, 3>;
type B = GreaterThan<3, 5>;
```

**Common Pitfall:** Type-level arithmetic is limited to small numbers (typically up to around 9999)
because TypeScript has a recursion depth limit. It is also slow for large numbers. Use these
techniques for type-level constraints, not for runtime computation.

## Utility Type Composition

### Combining Utility Types

Complex types are often built by composing simpler utility types:

```ts
type DeepPartialReadonly<T> = DeepReadonly<DeepPartial<T>>;

type StrictEntity<T extends { id: string }> = Readonly<Required<T>>;

type UpdateDTO<T> = Partial<Omit<T, 'id' | 'createdAt' | 'updatedAt'>>;
```

### Recursive Required

```ts
type DeepRequired<T> = T extends object ? { [K in keyof T]-?: DeepRequired<T[K]> } : T;
```

### Recursive Omit

```ts
type DeepOmit<T, Keys extends string> = T extends object
  ? {
      [K in keyof T as K extends Keys ? never : K]: DeepOmit<T[K], Keys>;
    }
  : T;

type WithoutIds = DeepOmit<
  { user: { id: string; name: string }; post: { id: string; title: string } },
  'id'
>;
type WithoutIds = {
  user: { name: string };
  post: { title: string };
};
```

### Mutable

```ts
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};
```

### Deep Mutable

```ts
type DeepMutable<T> = T extends object ? { -readonly [K in keyof T]: DeepMutable<T[K]> } : T;
```

### Extract by Predicate

```ts
type ExtractMethods<T> = {
  [K in keyof T as T[K] extends Function ? K : never]: T[K];
};

interface Service {
  id: string;
  getData(): string;
  processData(input: string): void;
  config: { debug: boolean };
}

type Methods = ExtractMethods<Service>;
type Methods = {
  getData(): string;
  processData(input: string): void;
};
```

## Common Pitfalls

### Pitfall 1: Excessive Recursion Depth

Recursive types hit TypeScript's recursion limit (typically around 50-100 levels). For deeply nested
types, consider iterative approaches or accept shallower recursion:

```ts
type DepthLimit<T, D extends number, Current extends any[] = []> = Current['length'] extends D
  ? T
  : T extends object
    ? { [K in keyof T]: DepthLimit<T[K], D, [...Current, any]> }
    : T;
```

### Pitfall 2: Conditional Type Distribution in Mapped Types

When using conditional types inside mapped types, distribution may produce unexpected results.
Always consider whether the checked type parameter should distribute:

```ts
type NonNullFields<T> = {
  [K in keyof T]: T[K] extends null | undefined ? never : T[K];
};

interface Data {
  name: string | null;
  age: number | undefined;
  active: boolean;
}

type Clean = NonNullFields<Data>;
```

### Pitfall 3: Branding at Runtime

Branded types are erased at compile time. The `__brand` property does not exist at runtime. If
runtime validation is needed, use a class or a validation function:

```ts
function isUSD(value: number): value is USD {
  return typeof value === 'number';
}
```

This assertion is trivially true because the brand is erased. For meaningful runtime validation, add
actual checks.
