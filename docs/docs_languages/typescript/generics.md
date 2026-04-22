---
title: Generics
description: "A rigorous treatment of parametric polymorphism in TypeScript: generic functions, interfaces, utility types, conditional types, mapped types, and variance."
slug: typescript-generics
date: 2026-04-22T00:00:00.000Z
tags: [TypeScript]
categories: [TypeScript]
---

## Generic Functions

### Syntax and Motivation

Generics allow functions, interfaces, and type aliases to operate over a range of types rather than
a single fixed type. A generic function declares one or more **type parameters** in angle brackets
after the function name. These type parameters are placeholders for concrete types that are supplied
at the call site.

```ts
function identity<T>(value: T): T {
  return value;
}

const a = identity('hello');
const b = identity(42);
const c = identity(true);
```

The type parameter `T` is inferred from the argument. The function works for any type while
preserving the relationship between the input and output types.

Without generics, one would need either separate functions for each type or unsafe `any` usage:

```ts
function identityAny(value: any): any {
  return value;
}
```

This version loses all type information: the caller knows nothing about the return type.

### Type Inference at Call Sites

TypeScript infers generic type arguments from the types of the provided arguments:

```ts
function first<T>(array: T[]): T | undefined {
  return array[0];
}

const x = first([1, 2, 3]);
```

Here, `T` is inferred as `number`, so `x` has type `number | undefined`.

When inference is insufficient (e.g., when the type parameter appears only in the return type),
explicit type arguments may be provided:

```ts
function create<T>(): T {
  throw new Error('Not implemented');
}

const value = create<string>();
```

### Multiple Type Parameters

```ts
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

const p = pair('hello', 42);
```

The type of `p` is `["hello", 42]`.

### Generic Constraints

The `extends` keyword constrains a type parameter to a specific type or a subtype thereof:

```ts
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength('hello');
getLength([1, 2, 3]);
getLength({ length: 10 });
getLength(42);
```

The last call is an error because `number` does not satisfy the constraint `{ length: number }`.

### Using `keyof` with Generics

The `keyof` operator produces a union of the known public property names of a type. Combined with
generics, it enables type-safe property access:

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

interface Person {
  name: string;
  age: number;
}

const person: Person = { name: 'Ada', age: 30 };

const name = getProperty(person, 'name');
const age = getProperty(person, 'age');
const invalid = getProperty(person, 'email');
```

The first two calls succeed with types `string` and `number` respectively. The third call is a
compile error because `"email"` is not assignable to `keyof Person`.

## Generic Interfaces and Type Aliases

### Generic Interfaces

```ts
interface Repository<T> {
  findById(id: string): T | undefined;
  findAll(): T[];
  create(entity: Omit<T, 'id'>): T;
  update(id: string, entity: Partial<T>): T | undefined;
  delete(id: string): boolean;
}

interface User {
  id: string;
  name: string;
  email: string;
}

const userRepo: Repository<User> = {
  findById(id) {
    return undefined;
  },
  findAll() {
    return [];
  },
  create(entity) {
    return { id: crypto.randomUUID(), ...entity };
  },
  update(id, entity) {
    return undefined;
  },
  delete(id) {
    return false;
  },
};
```

### Generic Type Aliases

```ts
type Result<T, E = Error> = { success: true; value: T } | { success: false; error: E };

type AsyncResult<T, E = Error> = Promise<Result<T, E>>;

type Paginated<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};
```

### Generic Classes

```ts
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  get size(): number {
    return this.items.length;
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.pop();
```

## Built-in Utility Types

TypeScript ships with a library of built-in generic utility types in `lib.es5.d.ts`. These types are
implemented using mapped types and conditional types.

### Partial, Required, Readonly

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type PartialTodo = Partial<Todo>;
type RequiredTodo = Required<Todo>;
type ReadonlyTodo = Readonly<Todo>;
```

`Partial<T>` makes all properties optional. `Required<T>` makes all properties required.
`Readonly<T>` makes all properties readonly.

### Record, Pick, Omit

```ts
type PageInfo = Record<'url' | 'title' | 'description', string>;
type TodoTitle = Pick<Todo, 'title' | 'completed'>;
type TodoWithoutDesc = Omit<Todo, 'description'>;
```

`Record<K, V>` constructs a type with keys of type `K` and values of type `V`. `Pick<T, K>` selects
a subset of properties from `T`. `Omit<T, K>` removes a subset of properties from `T`.

### Exclude, Extract, NonNullable

```ts
type T0 = Exclude<'a' | 'b' | 'c', 'a'>;
type T1 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
type T2 = NonNullable<string | null | undefined>;
```

`Exclude<T, U>` removes from `T` those types that are assignable to `U`. `Extract<T, U>` extracts
from `T` those types that are assignable to `U`. `NonNullable<T>` removes `null` and `undefined`
from `T`.

### ReturnType, Parameters

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

type GreetReturn = ReturnType<typeof greet>;
type GreetParams = Parameters<typeof greet>;
```

`ReturnType<T>` extracts the return type of a function type. `Parameters<T>` extracts the parameter
types as a tuple.

### Summary Table

| Utility Type               | Description                                   |
| -------------------------- | --------------------------------------------- |
| `Partial<T>`               | All properties of `T` become optional         |
| `Required<T>`              | All properties of `T` become required         |
| `Readonly<T>`              | All properties of `T` become readonly         |
| `Record<K, V>`             | Object type with keys `K` and values `V`      |
| `Pick<T, K>`               | Subset of `T` with only keys in `K`           |
| `Omit<T, K>`               | `T` without keys in `K`                       |
| `Exclude<T, U>`            | Members of `T` not assignable to `U`          |
| `Extract<T, U>`            | Members of `T` assignable to `U`              |
| `NonNullable<T>`           | `T` without `null` and `undefined`            |
| `ReturnType<T>`            | Return type of function type `T`              |
| `Parameters<T>`            | Parameter types of function type `T` as tuple |
| `ReadonlyArray<T>`         | Immutable array type                          |
| `ConstructorParameters<T>` | Parameter types of constructor type `T`       |

## Mapped Types

Mapped types generate new types by transforming each property in an existing type. They use the `in`
keyword to iterate over a union of keys.

### Basic Mapped Types

```ts
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};
```

### Remapping Keys

TypeScript 4.1 introduced key remapping in mapped types using `as`:

```ts
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

interface Person {
  name: string;
  age: number;
}

type PersonGetters = Getters<Person>;
type PersonGetters = {
  getName: () => string;
  getAge: () => number;
};
```

### Filtering Properties

Key remapping with `never` filters out properties:

```ts
type RemoveMethods<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
};

interface Service {
  id: number;
  getData(): string;
  process(input: string): void;
}

type ServiceData = RemoveMethods<Service>;
type ServiceData = {
  id: number;
};
```

## Conditional Types

### Syntax

A conditional type has the form `T extends U ? X : Y`. It selects between two types based on whether
`T` is assignable to `U`.

```ts
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;
type B = IsString<number>;
```

### Distributive Conditional Types

When the checked type `T` is a **naked type parameter** (not wrapped in any other type), the
conditional type distributes over union members:

```ts
type ToArray<T> = T extends any ? T[] : never;

type Result = ToArray<string | number>;
type Result = string[] | number[];
```

The distribution rule: `ToArray<string | number>` becomes `ToArray<string> | ToArray<number>`, which
resolves to `string[] | number[]`.

To prevent distribution, wrap `T` in a tuple:

```ts
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;

type Result = ToArrayNonDist<string | number>;
type Result = (string | number)[];
```

### The `infer` Keyword

The `infer` keyword introduces a type variable that is inferred from the structure of a type within
a conditional type:

```ts
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<string>>;
type B = UnwrapPromise<number>;
```

`infer` can appear in multiple positions, including covariant and contravariant positions:

```ts
type Unpack<T> = T extends (infer A)[] ? A : T;
type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never;
type Last<T extends any[]> = T extends [...any[], infer L] ? L : never;
```

**Common Pitfall:** `infer` declarations in the same type parameter are subject to type-level
pattern matching. Multiple `infer` declarations in a single conditional type all infer the same type
(the first match):

```ts
type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;

type Result = Foo<{ a: string; b: number }>;
type Result = string;
```

The inferred type `U` is `string` (the first match). TypeScript does not produce `string | number`
here unless a separate inference variable is used.

### Infer in Function Signatures

```ts
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type A = MyReturnType<() => string>;
type B = MyReturnType<(x: number) => boolean>;
```

## Generic Constraints

### Constraining to Object Types

```ts
function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const result = merge({ name: 'Ada' }, { age: 30 });
```

### Constraining to Specific Keys

```ts
function pluck<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((key) => obj[key]);
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const product: Product = { id: 1, name: 'Widget', price: 9.99 };
const fields = pluck(product, ['name', 'price']);
```

### Template Literal Constraints

```ts
type EventName = `${string}:${string}`;

function on<Event extends EventName>(event: Event, handler: (data: any) => void): void {}

on('click:button', (data) => {});
on('not-an-event', () => {});
```

## Variance

Variance describes how subtyping relationships between type arguments affect subtyping relationships
between generic types. TypeScript uses **structural typing** with specific variance rules.

### Covariance

A type constructor `F<T>` is covariant if `S extends T` implies `F<S> extends F<T>`. Arrays are
covariant in TypeScript (when `strictFunctionTypes` is not considered for method types):

```ts
const strings: string[] = ['a', 'b'];
const objects: object[] = strings;
```

### Contravariance

A type constructor `F<T>` is contravariant if `S extends T` implies `F<T> extends F<S>`. Function
parameter types are contravariant under `strictFunctionTypes`:

```ts
type Handler = (error: Error) => void;
type SpecificHandler = (error: TypeError) => void;

const specific: SpecificHandler = (err) => console.log(err.message);
const general: Handler = specific;
```

This is a compile error under `strictFunctionTypes`. A function that expects `Error` cannot safely
receive a function that only handles `TypeError`, because the general handler might be called with
`RangeError`.

### Bivariance

Without `strictFunctionTypes`, function parameter types are **bivariant**: they are both covariant
and contravariant. This is unsound but matches pre-strict TypeScript behaviour.

### Variance Summary

| Variance      | `S extends T` implies            | Example                                                     |
| ------------- | -------------------------------- | ----------------------------------------------------------- |
| Covariant     | `F<S> extends F<T>`              | `string[] extends (string \| number)[]`                     |
| Contravariant | `F<T> extends F<S>`              | `(x: Error) => void` assignable to `(x: TypeError) => void` |
| Invariant     | No implication either way        | `Mutable<T>` -- must be exact type                          |
| Bivariant     | Both covariant and contravariant | Function params without `strictFunctionTypes`               |

### Invariance in Practice

Mutable generic types should typically be **invariant** to preserve type safety:

```ts
interface MutableBox<T> {
  value: T;
}

const stringBox: MutableBox<string> = { value: 'hello' };
const anyBox: MutableBox<any> = stringBox;
anyBox.value = 42;
```

Without strict variance checking, assigning `stringBox` to `anyBox` would allow storing a number in
a box that is supposed to hold only strings. TypeScript prevents this by enforcing invariance for
mutable references.

## Practical Patterns

### Factory Functions

```ts
interface Entity {
  id: string;
}

function createEntity<T extends Entity>(ctor: new () => T, overrides: Partial<T> = {}): T {
  return new ctor();
}

class User implements Entity {
  id = crypto.randomUUID();
  name = '';
  email = '';
}

const user = createEntity(User, { name: 'Ada' });
```

### Type-Safe Event Emitter

```ts
type EventMap = {
  login: { userId: string; timestamp: number };
  logout: { userId: string };
  error: { message: string; code: number };
};

class TypedEmitter<Events extends Record<string, any>> {
  private handlers = new Map<keyof Events, Set<Function>>();

  on<K extends keyof Events>(event: K, handler: (data: Events[K]) => void): () => void {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, new Set());
    }
    this.handlers.get(event)!.add(handler);
    return () => this.handlers.get(event)!.delete(handler);
  }

  emit<K extends keyof Events>(event: K, data: Events[K]): void {
    this.handlers.get(event)?.forEach((handler) => handler(data));
  }
}

const emitter = new TypedEmitter<EventMap>();

emitter.on('login', (data) => {
  console.log(`User ${data.userId} logged in at ${data.timestamp}`);
});

emitter.on('error', (data) => {
  console.error(`${data.code}: ${data.message}`);
});

emitter.on('login', (data) => {
  console.log(data.nonExistent);
});
```

### Generic Repository

```ts
interface HasId {
  id: string;
}

class InMemoryRepository<T extends HasId> {
  private store = new Map<string, T>();

  findById(id: string): T | undefined {
    return this.store.get(id);
  }

  findAll(): T[] {
    return Array.from(this.store.values());
  }

  save(entity: T): void {
    this.store.set(entity.id, entity);
  }

  delete(id: string): boolean {
    return this.store.delete(id);
  }
}

interface Post extends HasId {
  title: string;
  content: string;
}

const postRepo = new InMemoryRepository<Post>();
```

### Generic Validation

```ts
type ValidationRule<T> = {
  validate: (value: T) => boolean;
  message: string;
};

type Validator<T> = Record<keyof T, ValidationRule<any>>;

function validate<T extends object>(data: T, rules: Partial<Validator<T>>): string[] {
  const errors: string[] = [];
  for (const key in rules) {
    const rule = rules[key];
    if (rule && !rule.validate(data[key])) {
      errors.push(`${String(key)}: ${rule.message}`);
    }
  }
  return errors;
}

interface Registration {
  email: string;
  age: number;
  password: string;
}

const errors = validate(
  { email: 'test@example.com', age: 16, password: 'short' },
  {
    email: {
      validate: (v) => v.includes('@'),
      message: 'Must be a valid email',
    },
    age: {
      validate: (v) => v >= 18,
      message: 'Must be 18 or older',
    },
    password: {
      validate: (v) => v.length >= 8,
      message: 'Must be at least 8 characters',
    },
  },
);
```

## Common Pitfalls

### Pitfall 1: Over-Constraining Generics

Adding unnecessary constraints reduces the flexibility of generic code. Only constrain when the
constraint is required for the implementation:

```ts
function first<T extends any[]>(arr: T): T extends [infer F, ...any[]] ? F : T[number] {
  return arr[0] as any;
}
```

This constraint is unnecessary if `arr[0]` is not accessed in a way that requires the array
constraint.

### Pitfall 2: Distributive Conditional Type Gotchas

Distribution applies only to naked type parameters. Wrapping in a tuple or object prevents
distribution:

```ts
type Naked<T> = T extends string ? 'yes' : 'no';
type Wrapped<T> = [T] extends [string] ? 'yes' : 'no';

type A = Naked<string | number>;
type B = Wrapped<string | number>;
```

`A` is `"yes" | "no"` (distributed). `B` is `"no"` (not distributed).

### Pitfall 3: `any` Bypasses Generic Constraints

A value of type `any` satisfies any constraint, including `extends`:

```ts
function constrained<T extends string>(value: T): T {
  return value;
}

constrained<any>(42);
```

This compiles despite `42` not being a `string`. The `any` type circumvents the constraint entirely.
