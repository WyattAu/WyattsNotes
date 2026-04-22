---
title: Functions
description: A thorough examination of function types in TypeScript: annotations, overloading, callbacks, this typing, and real-world patterns.
slug: typescript-functions
date: 2026-04-22T00:00:00.000Z
tags: [TypeScript]
categories: [TypeScript]
---

## Function Type Fundamentals

### Parameter Annotations

Every function parameter may carry a type annotation. When the annotation is present, the compiler
verifies that all call sites provide arguments of the correct type.

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

greet('Ada');
greet(42);
```

The second call is a compile error because `42` is not assignable to `string`.

### Return Type Annotations

Return type annotations specify the type of the value a function produces. When omitted, TypeScript
infers the return type from the function body. Explicit annotations are recommended for public API
surfaces because they serve as documented contracts.

```ts
function add(a: number, b: number): number {
  return a + b;
}

function log(msg: string): void {
  console.log(msg);
}
```

When `noImplicitReturns` is enabled, the compiler reports an error if any code path in a non-`void`
function does not return a value.

```ts
function absolute(x: number): number {
  if (x >= 0) {
    return x;
  }
}
```

This is an error under `noImplicitReturns` because the `else` branch does not return.

### Inference vs Annotation

TypeScript infers return types automatically:

```ts
function inferred(x: number) {
  return x * 2;
}
```

The inferred return type is `number`. Explicit annotation is optional but improves readability and
catches accidental type changes:

```ts
function explicit(x: number): number {
  return x * 2;
}
```

If the implementation later changes to return a `string`, the explicit annotation produces a compile
error, whereas inference would silently accept the change.

## Optional and Default Parameters

### Optional Parameters

A parameter is optional when its name is followed by `?`. Optional parameters must appear **after**
all required parameters.

```ts
function buildName(first: string, last?: string): string {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
}

buildName('Ada');
buildName('Ada', 'Lovelace');
buildName('Ada', 'Lovelace', 'Byron');
```

The type of an optional parameter includes `undefined`. In the example above, `last` has type
`string | undefined`.

### Default Parameters

Default parameters provide a value when the caller omits the argument:

```ts
function buildName(first: string, last: string = 'Smith'): string {
  return `${first} ${last}`;
}

buildName('Ada');
buildName('Ada', 'Lovelace');
```

Default parameters are not required to appear after required parameters in TypeScript (unlike in
strict JavaScript mode). However, placing them after required parameters is conventional.

### Optional vs Default

```ts
function a(x?: number): void {}
function b(x: number = 0): void {}
```

Both functions can be called with zero arguments. The difference: in `a`, the type of `x` within the
body is `number | undefined`; in `b`, the type of `x` is `number` (the default ensures it is always
defined).

## Rest Parameters

Rest parameters collect any number of trailing arguments into an array:

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3);
```

The rest parameter must be the last parameter in the signature. Its type is always an array type.

### Rest Parameters with Tuples

TypeScript infers tuple types for rest parameters when the function signature uses a tuple type:

```ts
function pair<T, U>(...args: [T, U]): [T, U] {
  return args;
}

const result = pair('hello', 42);
```

The type of `result` is `["hello", 42]` -- a tuple, not an array.

## Function Overloading

Function overloading allows a single function name to have multiple signatures with different
parameter and return types. The implementation signature must be compatible with all overload
signatures.

### Declaration

```ts
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  if (typeof value === 'string') {
    return value.trim();
  }
  return value.toFixed(2);
}

format('  hello  ');
format(3.14159);
```

The overload signatures (lines 1-2) declare the public contract. The implementation signature
(line 3) is not directly callable -- it must be a supertype of all overload signatures.

### Overload Resolution

When an overloaded function is called, TypeScript resolves the call by checking each overload
signature in declaration order. The first matching signature is used.

```ts
function parse(input: string): number;
function parse(input: number): string;
function parse(input: string | number): string | number {
  if (typeof input === 'string') {
    return parseInt(input, 10);
  }
  return String(input);
}

const a = parse('42');
const b = parse(42);
```

Here, `a` has type `number` and `b` has type `string`.

### Return-Type Overloads

Overloads are particularly useful when the return type depends on the input type:

```ts
function getElement<K extends string>(id: K): K extends 'canvas' ? HTMLCanvasElement : HTMLElement;
function getElement(id: string): HTMLElement {
  return document.getElementById(id)!;
}

const canvas = getElement('canvas');
const div = getElement('div');
```

**Common Pitfall:** The implementation signature's return type is not visible to callers. Only the
overload signatures determine the inferred return type. If the implementation signature does not
cover all overload cases, the compiler may produce unexpected results.

## Function Type Expressions

### Arrow Function Types

A function type expression describes the type of a function value:

```ts
type MathFn = (a: number, b: number) => number;

const add: MathFn = (a, b) => a + b;
const multiply: MathFn = (a, b) => a * b;
```

### Function Type Expressions in Signatures

```ts
function apply(fn: (x: number) => number, value: number): number {
  return fn(value);
}

apply((x) => x * 2, 5);
```

### Object Method Signatures

```ts
interface Comparator<T> {
  compare(a: T, b: T): number;
  equals(a: T, b: T): boolean;
}

const stringComparator: Comparator<string> = {
  compare(a, b) {
    return a.localeCompare(b);
  },
  equals(a, b) {
    return a === b;
  },
};
```

## Callback Types and Signatures

### Callback Typing

Callbacks are typed as function type expressions:

```ts
function fetchData(url: string, callback: (data: string) => void): void {
  setTimeout(() => callback('response'), 100);
}

fetchData('/api', (data) => {
  console.log(data);
});
```

### Optional Callbacks

```ts
function process(items: string[], callback?: (item: string, index: number) => void): void {
  items.forEach((item, index) => {
    callback?.(item, index);
  });
}
```

### Overloaded Callback Signatures

When a callback's shape depends on other parameters, use overloads:

```ts
function map<T, U>(array: T[], callback: (element: T, index: number, array: T[]) => U): U[] {
  return array.map(callback);
}

const lengths = map(['a', 'bb', 'ccc'], (s) => s.length);
```

## `this` Typing

By default, TypeScript infers `this` as `any` inside function bodies. To enforce correct `this`
usage, provide an explicit `this` parameter as the **first parameter** of the function.

### The `this` Parameter

```ts
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
  info: string;

  constructor(info: string) {
    this.info = info;
  }

  onClick(this: Handler, e: Event): void {
    console.log(this.info);
  }
}

const handler = new Handler('button');
```

The `this` parameter in `onClick` ensures that `this` is typed as `Handler` inside the function
body. When the function is passed as a callback, TypeScript verifies that the `this` context is
correct.

### Arrow Functions and `this`

Arrow functions capture `this` from their enclosing lexical scope. They do not have their own `this`
binding, so the `this` parameter is not applicable:

```ts
class Timer {
  seconds = 0;

  start(): void {
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  }
}
```

**Common Pitfall:** Passing a class method as a callback loses the `this` binding:

```ts
class Button {
  label = 'Click me';

  render(): void {
    const button = document.createElement('button');
    button.addEventListener('click', this.handleClick);
  }

  handleClick(this: Button, event: Event): void {
    console.log(this.label);
  }
}
```

This compiles because the `this` parameter annotation informs TypeScript of the expected binding. At
runtime, however, `addEventListener` will invoke `handleClick` with `this` set to the DOM element,
not the `Button` instance. Use an arrow function or `bind` to fix this:

```ts
button.addEventListener('click', this.handleClick.bind(this));
button.addEventListener('click', (event) => this.handleClick(event));
```

## Type Narrowing in Function Bodies

Type narrowing applies within function bodies just as it does in any other scope. Narrowing
information flows from parameters to the function body and from earlier statements to later ones.

### Control-Flow Narrowing

```ts
function processId(id: string | number): string {
  if (typeof id === 'string') {
    return id.toUpperCase();
  }
  return id.toString();
}
```

### Narrowing Through Assignment

```ts
function setWidth(value: string | number): number {
  let width: number;

  if (typeof value === 'string') {
    width = parseInt(value, 10);
  } else {
    width = value;
  }

  return width;
}
```

### Narrowing and Early Returns

```ts
function firstElement<T>(arr: T[]): T {
  if (arr.length === 0) {
    throw new Error('Array is empty');
  }
  return arr[0];
}
```

After the `if` block, TypeScript narrows control flow to the case where `arr.length > 0`, ensuring
`arr[0]` is `T` (not `T | undefined` under strict mode).

## Conditional Types in Return Types

Conditional types in return type positions enable types that depend on input types:

```ts
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

function unwrap<T>(value: T): UnwrapPromise<T> {
  if (value instanceof Promise) {
    return value as unknown as UnwrapPromise<T>;
  }
  return value as UnwrapPromise<T>;
}

const a = unwrap(42);
const b = unwrap(Promise.resolve('hello'));
```

This pattern is especially useful with overloads, where each overload signature maps a specific
input type to a specific output type.

## Practical Patterns

### Event Handlers

```ts
interface ClickEvent {
  target: HTMLElement;
  x: number;
  y: number;
  timestamp: number;
}

type ClickHandler = (event: ClickEvent) => void;

class EventEmitter {
  private handlers: ClickHandler[] = [];

  onClick(handler: ClickHandler): () => void {
    this.handlers.push(handler);
    return () => {
      this.handlers = this.handlers.filter((h) => h !== handler);
    };
  }

  emit(event: ClickEvent): void {
    this.handlers.forEach((h) => h(event));
  }
}
```

### Array Method Callbacks

```ts
interface User {
  id: number;
  name: string;
  age: number;
}

const users: User[] = [
  { id: 1, name: 'Ada', age: 30 },
  { id: 2, name: 'Grace', age: 25 },
];

const names = users.map((u) => u.name);
const adults = users.filter((u) => u.age >= 18);
const totalAge = users.reduce((sum, u) => sum + u.age, 0);
const hasAda = users.some((u) => u.name === 'Ada');
const allAdults = users.every((u) => u.age >= 18);
const found = users.find((u) => u.name === 'Ada');
```

TypeScript infers the callback parameter types from the array element type. For `filter`, TypeScript
uses a special type to preserve the predicate's narrowing:

```ts
const strings = [1, 'two', 3, 'four', 5];
const onlyStrings = strings.filter((s): s is string => typeof s === 'string');
```

The type of `onlyStrings` is `string[]`, not `(string | number)[]`.

### Curried Functions

```ts
function curry<A, B, C>(fn: (a: A, b: B) => C): (a: A) => (b: B) => C {
  return (a) => (b) => fn(a, b);
}

const add = (a: number, b: number) => a + b;
const curriedAdd = curry(add);

const add5 = curriedAdd(5);
add5(3);
```

### Debounce

```ts
function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  return (...args) => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

const log = debounce((message: string) => console.log(message), 300);
log('hello');
```

## Common Pitfalls

### Pitfall 1: Implementation Signature Mismatch

The implementation signature of an overloaded function must be assignable from all overload
signatures. A common error is making the implementation signature too narrow:

```ts
function format(x: string): string;
function format(x: number): number;
function format(x: string | number): string | number {
  if (typeof x === 'string') return x;
  return x;
}
```

This is correct. But if the implementation returns only `string`, it does not satisfy the `number`
overload.

### Pitfall 2: Forgetting to Annotate `this`

When a class method is passed as a callback without binding, `this` is lost at runtime. Always
annotate `this` in method signatures that may be used as callbacks, and bind or wrap in an arrow
function at the call site.

### Pitfall 3: Rest Parameter Type Errors

Rest parameters must be arrays:

```ts
function sum(...nums: number): number {}
```

This is an error. The correct type is `number[]`:

```ts
function sum(...nums: number[]): number {}
```

### Pitfall 4: Optional Callback Invocation

When a callback is optional, always use optional chaining to invoke it:

```ts
function transform<T>(data: T[], callback?: (item: T) => T): T[] {
  return data.map((item) => (callback ? callback(item) : item));
}
```

Or more concisely:

```ts
return data.map((item) => callback?.(item) ?? item);
```
