---
title: Error Handling
description: Type-safe error handling in TypeScript: the never type, unknown vs any, custom error classes, try/catch typing, assert functions, and the Result pattern.
slug: typescript-error-handling
date: 2026-04-22T00:00:00.000Z
tags: [TypeScript]
categories: [TypeScript]
---

## The `never` Type

### Definition and Semantics

The `never` type is the **bottom type** of the TypeScript type system. It has no inhabitants: no
value of type `never` can exist at runtime. It is a subtype of every type, and no type is a subtype
of `never` (except `never` itself).

`never` appears in two principal contexts:

1. **Unreachable code paths** -- functions that never return.
2. **Exhaustive checking** -- the residual case after all union members are handled.

### Functions That Never Return

```ts
function fail(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

A function whose return type is `never` must either throw an exception, enter an infinite loop, or
call another function of type `never`. If a `never`-returning function somehow returns (e.g., the
`throw` is inside a `try` block), TypeScript considers the subsequent code unreachable:

```ts
function example(): number {
  fail('unreachable');
  return 42;
}
```

The `return 42` line is unreachable. TypeScript does not report an error because the type of the
function is inferred from the reachable code path.

### Exhaustive Switch Statements

When a `switch` statement handles all members of a discriminated union, the `default` case receives
a value of type `never`. Assigning this value to a variable of type `never` proves exhaustiveness:

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

If a new variant is added to `Shape` (e.g., `{ kind: "pentagon"; ... }`) without updating the
`switch`, the assignment `_exhaustive: never` produces a compile error because the new variant is
not assignable to `never`.

## `unknown` vs `any`

### Precise Semantics

| Type      | Assignable to everything? | Everything assignable to it?  | Type narrowing required? |
| --------- | ------------------------- | ----------------------------- | ------------------------ |
| `any`     | Yes                       | Yes                           | No                       |
| `unknown` | Yes                       | No (only `any` and `unknown`) | Yes                      |

`any` disables the type system entirely. A value typed as `any` can be used as any type, and any
value can be assigned to it. `unknown` is the type-safe alternative: it can hold any value, but it
must be narrowed before use.

### `unknown` for Error Handling

The `unknown` type is the correct choice for `catch` clause variables and for API responses whose
shape is not known at compile time:

```ts
try {
  const response = await fetch('/api/data');
  const data: unknown = await response.json();
  processData(data);
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error('Unknown error:', error);
  }
}
```

### Narrowing `unknown`

```ts
function handleError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  if (typeof error === 'number') {
    return `Error code: ${error}`;
  }
  return 'An unknown error occurred';
}
```

**Common Pitfall:** Do not use `any` for caught errors. The `any` type propagates unsafety:

```ts
try {
  somethingRisky();
} catch (error: any) {
  console.log(error.message);
}
```

If `somethingRisky()` throws a non-`Error` value (e.g., a string), `error.message` is `undefined` at
runtime, and the `any` type prevents the compiler from catching this.

## Error Types in TypeScript

### Built-in Error Classes

JavaScript provides several built-in error classes, all of which TypeScript types natively:

| Error Class      | Purpose                    |
| ---------------- | -------------------------- |
| `Error`          | Generic error              |
| `TypeError`      | Incorrect type operation   |
| `RangeError`     | Value outside valid range  |
| `SyntaxError`    | Invalid syntax (parser)    |
| `ReferenceError` | Undefined variable access  |
| `URIError`       | Invalid URI operation      |
| `EvalError`      | Error in `eval()` (legacy) |

All built-in error classes inherit from `Error`, which provides the `message`, `name`, and `stack`
properties.

### Custom Error Classes

```ts
class ValidationError extends Error {
  constructor(
    message: string,
    public readonly field: string,
    public readonly value: unknown,
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

class NotFoundError extends Error {
  constructor(
    message: string,
    public readonly resource: string,
    public readonly id: string,
  ) {
    super(message);
    this.name = 'NotFoundError';
  }
}

class NetworkError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly url: string,
  ) {
    super(message);
    this.name = 'NetworkError';
  }
}

class AuthorizationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthorizationError';
  }
}
```

### Error Hierarchy

```ts
abstract class AppError extends Error {
  constructor(
    message: string,
    public readonly code: string,
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}

class DatabaseError extends AppError {
  constructor(
    message: string,
    public readonly query: string,
  ) {
    super(message, 'DATABASE_ERROR');
  }
}

class CacheError extends AppError {
  constructor(message: string) {
    super(message, 'CACHE_ERROR');
  }
}

function handleAppError(error: AppError): void {
  console.error(`[${error.code}] ${error.message}`);
  if (error instanceof DatabaseError) {
    console.error(`Failed query: ${error.query}`);
  }
}
```

**Common Pitfall:** When extending `Error`, call `super(message)` in the constructor and set
`this.name`. Without `super()`, the `message` property is not initialised. Without `this.name`,
`instanceof` checks still work, but `error.name` defaults to `"Error"`.

## `try`/`catch`/`finally` Typing

### Catch Clause Type Narrowing

The `catch` clause variable has type `unknown` by default (when `useUnknownInCatchVariables` is
enabled, which is the default under `strict: true`):

```ts
try {
  JSON.parse('invalid');
} catch (error: unknown) {
  if (error instanceof SyntaxError) {
    console.log('Parse error:', error.message);
  } else if (error instanceof Error) {
    console.log('General error:', error.message);
  } else {
    console.log('Non-error thrown:', error);
  }
}
```

### Narrowing in the `try` Block

Type narrowing inside `try` does not automatically apply to the `catch` or `finally` blocks. The
`catch` block receives the thrown value, and the `finally` block executes regardless of whether an
error occurred:

```ts
function safeParse(json: string): unknown {
  let result: unknown;
  try {
    result = JSON.parse(json);
  } catch {
    result = undefined;
  }
  return result;
}
```

### The `finally` Block

The `finally` block always executes, even when `try` or `catch` returns or throws. TypeScript does
not narrow types across `finally` boundaries because the control flow is non-local:

```ts
function example(): string {
  try {
    return 'try';
  } finally {
    return 'finally';
  }
}
```

This function always returns `"finally"`. The `try` return value is discarded.

### Using `unknown` for Catch

```ts
async function fetchData(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new NetworkError(`HTTP ${response.status}`, response.status, url);
    }
    return await response.text();
  } catch (error: unknown) {
    if (error instanceof NetworkError) {
      throw error;
    }
    throw new AppError('Failed to fetch data', 'FETCH_ERROR');
  }
}
```

## Error Boundaries in React

React error boundaries catch errors during rendering, in lifecycle methods, and in constructors.
They are implemented using class components.

### `componentDidCatch` and `getDerivedStateFromError`

```tsx
import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: (error: Error, reset: () => void) => ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  private reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      return this.props.fallback(this.state.error, this.reset);
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary
      fallback={(error, reset) => (
        <div>
          <h1>Something went wrong</h1>
          <p>{error.message}</p>
          <button onClick={reset}>Try again</button>
        </div>
      )}
    >
      <RiskyComponent />
    </ErrorBoundary>
  );
}
```

**Common Pitfall:** Error boundaries do not catch errors in event handlers, asynchronous code, or
server-side rendering. They only catch errors during React's rendering lifecycle. Use `try`/`catch`
for event handlers and async operations.

## Throw Expressions (TypeScript 4.0+)

TypeScript supports throw expressions, which allow `throw` to appear in expression positions:

```ts
function getLength(value: string | null): number {
  return (
    value ??
    (() => {
      throw new Error('Value is null');
    })()
  );
}

function assertNotNull<T>(value: T | null | undefined): T {
  if (value === null || value === undefined) {
    throw new Error('Value is null or undefined');
  }
  return value;
}
```

Throw expressions are useful in ternary expressions and nullish coalescing:

```ts
const config =
  loadConfig() ??
  (() => {
    throw new Error('No config found');
  })();
```

## Assert Functions

### Basic Assertion

```ts
function assert(condition: boolean, message?: string): asserts condition {
  if (!condition) {
    throw new AssertionError(message ?? 'Assertion failed');
  }
}

class AssertionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AssertionError';
  }
}

function divide(a: number, b: number): number {
  assert(b !== 0, 'Division by zero');
  return a / b;
}
```

### Assertion with Type Predicate

```ts
function assertDefined<T>(value: T): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new AssertionError('Value is null or undefined');
  }
}

function firstElement<T>(arr: T[]): T {
  assertDefined(arr[0]);
  return arr[0];
}
```

After `assertDefined` returns normally, TypeScript narrows the type of `arr[0]` from `T | undefined`
to `T`.

### `assertEqual`

```ts
function assertEqual<T>(actual: T, expected: T, message?: string): void {
  if (actual !== expected) {
    throw new AssertionError(
      message ?? `Expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`,
    );
  }
}
```

### `assertNever`

The `assertNever` function is used in exhaustive checks to prove that all cases are handled:

```ts
function assertNever(value: never): never {
  throw new AssertionError(`Unexpected value: ${JSON.stringify(value)}`);
}

type Action = { type: 'fetch'; url: string } | { type: 'cancel' } | { type: 'retry' };

function processAction(action: Action): void {
  switch (action.type) {
    case 'fetch':
      console.log('Fetching:', action.url);
      break;
    case 'cancel':
      console.log('Cancelled');
      break;
    case 'retry':
      console.log('Retrying');
      break;
    default:
      return assertNever(action);
  }
}
```

If a new variant is added to `Action`, the `assertNever` call produces a compile error because the
new variant is not assignable to `never`.

## Result Type Pattern

The Result type pattern models operations that can fail without using exceptions. It is an explicit,
type-safe alternative to `try`/`catch`.

### Basic Result Type

```ts
type Result<T, E = Error> = { success: true; value: T } | { success: false; error: E };

function ok<T>(value: T): Result<T, never> {
  return { success: true, value };
}

function err<E>(error: E): Result<never, E> {
  return { success: false, error };
}
```

### Result Utilities

```ts
function map<T, U, E>(result: Result<T, E>, fn: (value: T) => U): Result<U, E> {
  if (result.success) {
    return ok(fn(result.value));
  }
  return result;
}

function flatMap<T, U, E>(result: Result<T, E>, fn: (value: T) => Result<U, E>): Result<U, E> {
  if (result.success) {
    return fn(result.value);
  }
  return result;
}

function unwrapOr<T, E>(result: Result<T, E>, defaultValue: T): T {
  if (result.success) {
    return result.value;
  }
  return defaultValue;
}

function unwrapOrThrow<T, E>(result: Result<T, E>): T {
  if (result.success) {
    return result.value;
  }
  throw result.error;
}

function match<T, E, R>(
  result: Result<T, E>,
  onSuccess: (value: T) => R,
  onError: (error: E) => R,
): R {
  if (result.success) {
    return onSuccess(result.value);
  }
  return onError(result.error);
}
```

### Practical Usage

```ts
function parseJSON(input: string): Result<unknown, string> {
  try {
    const value = JSON.parse(input);
    return ok(value);
  } catch {
    return err('Invalid JSON');
  }
}

function validateString(value: unknown): Result<string, string> {
  if (typeof value === 'string') {
    return ok(value);
  }
  return err('Expected a string');
}

function fetchUser(id: string): Result<User, NetworkError | NotFoundError> {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (response.status === 404) {
      return err(new NotFoundError('User not found', 'user', id));
    }
    if (!response.ok) {
      return err(new NetworkError('Network error', response.status, `/api/users/${id}`));
    }
    const data = await response.json();
    return ok(data as User);
  } catch (error) {
    return err(new NetworkError('Network error', 0, `/api/users/${id}`));
  }
}

const result = parseJSON('{"name": "Ada"}');
const final = match(
  result,
  (value) => console.log('Parsed:', value),
  (error) => console.error('Failed:', error),
);
```

### Async Result

```ts
type AsyncResult<T, E = Error> = Promise<Result<T, E>>;

async function safeFetch(url: string): AsyncResult<Response, NetworkError> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return err(new NetworkError(`HTTP ${response.status}`, response.status, url));
    }
    return ok(response);
  } catch (error) {
    return err(new NetworkError(error instanceof Error ? error.message : 'Unknown error', 0, url));
  }
}
```

## Optional vs Nullable vs Undefined

### Precise Semantics

These three concepts are often conflated but have distinct meanings in TypeScript:

| Concept           | Type       | Meaning                                |
| ----------------- | ---------- | -------------------------------------- | ------------------------------ |
| Optional property | `prop?: T` | Property may be absent from the object |
| Nullable          | `T         | null`                                  | Value may be explicitly `null` |
| Undefined         | `T         | undefined`                             | Value may be `undefined`       |

### Optional Properties

Under the default configuration, an optional property (`prop?: T`) has type `T | undefined`. The
property may be absent or present with value `undefined`.

Under `exactOptionalPropertyTypes`, an optional property may only be absent. To allow `undefined`,
declare: `prop?: T | undefined`.

```ts
interface Config {
  host?: string;
}

const a: Config = {};
const b: Config = { host: 'localhost' };
```

Under `exactOptionalPropertyTypes`, `const c: Config = { host: undefined }` is an error.

### Null vs Undefined

`null` represents an intentional absence of value. `undefined` represents a value that has not been
assigned or does not exist. In practice, both are used for "no value," but distinguishing them
enables more precise error handling:

```ts
function findUser(id: string): User | undefined {}
function deleteUser(id: string): User | null {}
```

`findUser` returns `undefined` when the user is not found (the result is absent). `deleteUser`
returns `null` when the operation explicitly produced no result.

### NonNullable Utility

The `NonNullable<T>` utility type removes `null` and `undefined` from `T`:

```ts
type A = NonNullable<string | null | undefined>;
type A = string;
```

### Nullish Values in Practice

```ts
interface Settings {
  theme: string | null;
  fontSize: number | undefined;
  debug?: boolean;
}

function applySettings(settings: Settings): void {
  const theme = settings.theme ?? 'light';
  const fontSize = settings.fontSize ?? 16;
  const debug = settings.debug ?? false;
}
```

`??` treats only `null` and `undefined` as nullish, making it the correct operator for default
values when `0`, `""`, or `false` are valid values.

## Common Pitfalls

### Pitfall 1: Catching `any` Instead of `unknown`

```ts
try {
  risky();
} catch (error: any) {
  console.log(error.message);
}
```

If `risky()` throws a non-`Error` value (e.g., `throw "oops"`), `error.message` is `undefined`. Use
`catch (error: unknown)` and narrow with `instanceof Error`.

### Pitfall 2: Throwing Non-Error Values

TypeScript allows throwing any value:

```ts
throw 'something went wrong';
throw 42;
throw { code: 500 };
```

This is legal JavaScript but makes error handling fragile. Always throw `Error` instances (or
subclasses) to ensure consistent `message`, `name`, and `stack` properties.

### Pitfall 3: Swallowed Errors

```ts
try {
  await fetch('/api/data');
} catch {}
```

An empty `catch` block silently discards all errors. At minimum, log the error:

```ts
try {
  await fetch('/api/data');
} catch (error: unknown) {
  console.error('Fetch failed:', error);
}
```

### Pitfall 4: Error Boundary Limitations

Error boundaries in React do not catch errors in:

- Event handlers (use `try`/`catch`)
- Asynchronous code (use `try`/`catch` in `async` functions)
- Server-side rendering
- Errors thrown in the error boundary itself

Use error boundaries only for rendering errors. For all other error scenarios, use standard
`try`/`catch` with the Result pattern or assert functions.
