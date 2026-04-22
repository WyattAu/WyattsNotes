---
title: Classes
description: Object-oriented programming with TypeScript: class declarations, access modifiers, abstract classes, interfaces, static members, decorators, and structural typing.
slug: typescript-classes
date: 2026-04-22T00:00:00.000Z
tags: [TypeScript]
categories: [TypeScript]
---

## Class Declarations

### Fields, Constructors, Methods

A TypeScript class declares fields, a constructor, and methods. Unlike JavaScript, TypeScript
requires that all fields accessed in the class body be declared explicitly (under
`strictPropertyInitialization`).

```ts
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distanceTo(other: Point): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }
}
```

Under `strictPropertyInitialization`, the compiler verifies that all declared fields are assigned in
the constructor or have a definite assignment assertion (`!`):

```ts
class Example {
  name: string;

  constructor() {
    this.name = 'default';
  }
}

class Lazy {
  value!: string;

  init(): void {
    this.value = 'initialised';
  }
}
```

The `!` definite assignment assertion tells the compiler that the field will be assigned before use,
even though the constructor does not assign it.

### Access Modifiers

TypeScript supports three access modifiers: `public`, `private`, and `protected`.

| Modifier    | Accessibility                                            |
| ----------- | -------------------------------------------------------- |
| `public`    | Accessible from anywhere (default)                       |
| `private`   | Accessible only within the declaring class               |
| `protected` | Accessible within the declaring class and its subclasses |

```ts
class Account {
  public owner: string;
  private balance: number;
  protected id: string;

  constructor(owner: string, initialBalance: number) {
    this.owner = owner;
    this.balance = initialBalance;
    this.id = crypto.randomUUID();
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  public withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return true;
    }
    return false;
  }

  public getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends Account {
  private interestRate: number;

  constructor(owner: string, initialBalance: number, rate: number) {
    super(owner, initialBalance);
    this.interestRate = rate;
  }

  applyInterest(): void {
    const balance = this.getBalance();
    this.deposit(balance * this.interestRate);
  }
}
```

### `readonly` Modifier

The `readonly` modifier prevents assignment to a field after initialisation:

```ts
class ImmutablePoint {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const p = new ImmutablePoint(1, 2);
p.x = 3;
```

`readonly` is shallow: it prevents reassignment of the field itself but does not prevent mutation of
the field's value if it is an object.

## Parameter Properties

TypeScript provides a shorthand for declaring and initialising fields in the constructor parameter
list. A parameter prefixed with an access modifier is automatically declared as a field and assigned
from the constructor argument.

```ts
class Point {
  constructor(
    public x: number,
    public y: number,
    readonly id: string = crypto.randomUUID(),
  ) {}
}

const p = new Point(1, 2);
console.log(p.x, p.y, p.id);
```

This is equivalent to:

```ts
class Point {
  public x: number;
  public y: number;
  readonly id: string;

  constructor(x: number, y: number, id: string = crypto.randomUUID()) {
    this.x = x;
    this.y = y;
    this.id = id;
  }
}
```

Parameter properties can use any combination of modifiers: `public`, `private`, `protected`,
`readonly`.

## Abstract Classes and Abstract Methods

An abstract class cannot be instantiated directly. It is designed to be extended by concrete
subclasses. Abstract methods have no implementation and must be implemented by subclasses.

```ts
abstract class Shape {
  abstract getArea(): number;
  abstract getPerimeter(): number;

  describe(): string {
    return `Area: ${this.getArea().toFixed(2)}, Perimeter: ${this.getPerimeter().toFixed(2)}`;
  }
}

class Circle extends Shape {
  constructor(public readonly radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(
    public readonly width: number,
    public readonly height: number,
  ) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function printShape(shape: Shape): void {
  console.log(shape.describe());
}

printShape(new Circle(5));
printShape(new Rectangle(3, 4));

const s = new Shape();
```

The last line is a compile error because `Shape` is abstract.

### Abstract Fields

TypeScript 4.2+ supports abstract property declarations:

```ts
abstract class Base {
  abstract name: string;
  abstract readonly id: string;
}

class Derived extends Base {
  name = 'derived';
  readonly id = '001';
}
```

## Implementing Interfaces

Classes implement interfaces using the `implements` keyword. A class may implement multiple
interfaces. The class must provide concrete implementations for all members declared in the
interfaces.

```ts
interface Serializable {
  serialize(): string;
}

interface Deserializable<T> {
  deserialize(json: string): T;
}

class User implements Serializable {
  constructor(
    public name: string,
    public email: string,
  ) {}

  serialize(): string {
    return JSON.stringify({ name: this.name, email: this.email });
  }
}

class UserFactory implements Deserializable<User> {
  deserialize(json: string): User {
    const data = JSON.parse(json);
    return new User(data.name, data.email);
  }
}
```

### Interface vs Abstract Class

| Feature                 | Interface                                       | Abstract Class                             |
| ----------------------- | ----------------------------------------------- | ------------------------------------------ |
| Multiple implementation | A class can implement many interfaces           | A class can extend only one abstract class |
| Instance fields         | Cannot have instance fields (only declarations) | Can have instance fields                   |
| Constructor             | No constructor                                  | Can have a constructor                     |
| Method implementations  | All methods are abstract (no body)              | Can mix abstract and concrete methods      |
| Access modifiers        | No access modifiers on members                  | Supports `public`, `private`, `protected`  |

## Static Members and Static Factory Patterns

### Static Fields and Methods

Static members belong to the class itself, not to instances. They are accessed via the class name.

```ts
class IdGenerator {
  private static counter = 0;

  static nextId(): number {
    return ++IdGenerator.counter;
  }

  static reset(): void {
    IdGenerator.counter = 0;
  }
}

console.log(IdGenerator.nextId());
console.log(IdGenerator.nextId());
```

### Static Factory Pattern

```ts
class LogEntry {
  private constructor(
    public readonly level: 'info' | 'warn' | 'error',
    public readonly message: string,
    public readonly timestamp: Date = new Date(),
  ) {}

  static info(message: string): LogEntry {
    return new LogEntry('info', message);
  }

  static warn(message: string): LogEntry {
    return new LogEntry('warn', message);
  }

  static error(message: string): LogEntry {
    return new LogEntry('error', message);
  }
}

const entry = LogEntry.info('Server started');
```

Making the constructor private ensures that instances can only be created through the static factory
methods.

### Static Members in Interfaces

TypeScript allows static members in interfaces using the `typeof` pattern:

```ts
interface Constructor<T> {
  new (...args: any[]): T;
}

function createInstance<T>(ctor: Constructor<T>, ...args: any[]): T {
  return new ctor(...args);
}

const point = createInstance(Point, 1, 2);
```

## Getter and Setter Accessors

TypeScript supports getter and setter accessor methods using the `get` and `set` keywords:

```ts
class Temperature {
  private _celsius: number;

  constructor(celsius: number) {
    this._celsius = celsius;
  }

  get celsius(): number {
    return this._celsius;
  }

  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error('Temperature below absolute zero');
    }
    this._celsius = value;
  }

  get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }

  set fahrenheit(value: number) {
    this.celsius = ((value - 32) * 5) / 9;
  }
}

const temp = new Temperature(0);
console.log(temp.fahrenheit);
temp.fahrenheit = 212;
console.log(temp.celsius);
```

**Common Pitfall:** A getter without a setter produces a readonly-like effect at runtime but the
field is not `readonly` in the type system. If a setter exists but is omitted from a subclass, the
getter is still accessible.

## Class Expressions vs Class Declarations

### Class Declaration

```ts
class Foo {
  method(): void {}
}
```

### Class Expression

```ts
const Bar = class {
  method(): void {}
};
```

Class expressions are useful for one-off classes or when the class is used as a value (e.g., passed
to a function):

```ts
function createClass(methodBody: string) {
  return class {
    execute(): void {
      console.log(methodBody);
    }
  };
}

const Dynamic = createClass('hello');
new Dynamic().execute();
```

## Mixins and Composition with Classes

TypeScript does not have a native mixin keyword, but mixins can be implemented using a combination
of class expressions, intersection types, and generic factory functions.

### Mixin Pattern

```ts
function Timestamped<T extends new (...args: any[]) => any>(Base: T) {
  return class extends Base {
    createdAt = new Date();

    getAge(): number {
      return Date.now() - this.createdAt.getTime();
    }
  };
}

function Identifiable<T extends new (...args: any[]) => any>(Base: T) {
  return class extends Base {
    readonly id = crypto.randomUUID();
  };
}

class BaseEntity {
  constructor(public name: string) {}
}

const TimedEntity = Timestamped(BaseEntity);
const IdEntity = Identifiable(TimedEntity);

const entity = new IdEntity('test');
console.log(entity.id, entity.createdAt, entity.name);
```

### Mixin Type Pattern

To type the resulting class correctly, use an intersection type:

```ts
function Serializable<T extends new (...args: any[]) => {}>(Base: T) {
  return class extends Base {
    serialize(): string {
      return JSON.stringify(this);
    }
  };
}

class User extends Serializable(BaseEntity) {}

type SerializedUser = User & { serialize(): string };
```

### Composition Over Inheritance

Composition is generally preferred over inheritance for flexibility:

```ts
interface Loggable {
  log(message: string): void;
}

interface Validatable<T> {
  validate(data: T): string[];
}

class ConsoleLogger implements Loggable {
  log(message: string): void {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
}

class FormValidator<T extends object> implements Validatable<T> {
  constructor(private rules: Partial<Record<keyof T, (v: any) => boolean>>) {}

  validate(data: T): string[] {
    const errors: string[] = [];
    for (const key in this.rules) {
      if (!this.rules[key]?.(data[key])) {
        errors.push(`Invalid ${String(key)}`);
      }
    }
    return errors;
  }
}

class RegistrationService {
  constructor(
    private logger: Loggable,
    private validator: Validatable<RegistrationData>,
  ) {}

  register(data: RegistrationData): boolean {
    const errors = this.validator.validate(data);
    if (errors.length > 0) {
      this.logger.log(`Validation failed: ${errors.join(', ')}`);
      return false;
    }
    this.logger.log('Registration successful');
    return true;
  }
}

interface RegistrationData {
  email: string;
  password: string;
  age: number;
}
```

## Decorators

Decorators are a Stage 3 ECMAScript proposal. TypeScript supports an experimental implementation of
decorators via the `experimentalDecorators` compiler option. As of TypeScript 5.0, the language also
supports the TC39 Stage 3 decorator proposal.

### Method Decorators

```ts
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with args: ${JSON.stringify(args)}`);
    const result = originalMethod.apply(this, args);
    console.log(`${propertyKey} returned: ${result}`);
    return result;
  };

  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

new Calculator().add(2, 3);
```

### Class Decorators

```ts
function sealed<T extends new (...args: any[]) => {}>(constructor: T) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class ImmutableService {
  method(): void {}
}
```

### Property Decorators

```ts
function readonly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Config {
  @readonly
  version = '1.0.0';
}
```

**Common Pitfall:** The `experimentalDecorators` flag and the TC39 Stage 3 proposal use different
decorator semantics. Code written for one will not work with the other. New projects should prefer
the TC39 Stage 3 proposal (no `experimentalDecorators` flag needed in TS 5.0+).

## Structural Typing and Nominal Typing for Classes

### Structural Typing (Default)

TypeScript uses structural typing for classes. Two classes are compatible if they have the same
shape, regardless of their declaration heritage:

```ts
class Point2D {
  constructor(
    public x: number,
    public y: number,
  ) {}
}

class Vector2D {
  constructor(
    public x: number,
    public y: number,
  ) {}
}

const p: Point2D = new Vector2D(1, 2);
```

This compiles because `Vector2D` has the same public shape as `Point2D`.

### Simulating Nominal Typing with Branded Types

When nominal typing is required (i.e., type compatibility based on the name rather than the shape),
use branded types:

```ts
type Brand<T, B extends string> = T & { __brand: B };

type UserId = Brand<string, 'UserId'>;
type OrderId = Brand<string, 'OrderId'>;

function createUserId(id: string): UserId {
  return id as UserId;
}

function createOrderId(id: string): OrderId {
  return id as OrderId;
}

function getUser(id: UserId): void {}
function getOrder(id: OrderId): void {}

const userId = createUserId('u1');
const orderId = createOrderId('o1');

getUser(userId);
getUser(orderId);
```

The last call is a compile error because `OrderId` is not assignable to `UserId`, even though both
are branded `string` types.

### Private Fields and Structural Typing

Private fields affect structural typing. Two classes with incompatible private fields are not
structurally compatible, even if their public shapes are identical:

```ts
class Secret {
  private secret = 'hidden';
  public value = 42;
}

class NotSecret {
  private secret = 'different';
  public value = 42;
}

const a: Secret = new NotSecret();
```

This is a compile error because the private `secret` field has a different origin class.

## Common Pitfalls

### Pitfall 1: Forgetting to Call `super()`

In derived classes, `super()` must be called before accessing `this` in the constructor:

```ts
class Derived extends Base {
  constructor() {
    this.value = 0;
    super();
  }
}
```

This is an error. `super()` must be called first.

### Pitfall 2: Structural Typing Surprises

Because of structural typing, classes with the same public shape are interchangeable. This can lead
to subtle bugs when the classes have different internal behaviour:

```ts
class Celsius {
  constructor(public value: number) {}
}

class Fahrenheit {
  constructor(public value: number) {}
}

function printTemp(temp: Celsius): void {
  console.log(`${temp.value} C`);
}

printTemp(new Fahrenheit(100));
```

This compiles but produces misleading output.

### Pitfall 3: `this` in Callbacks

Passing a class method as a callback detaches it from the instance:

```ts
class Timer {
  private count = 0;

  start(): void {
    setInterval(this.tick, 1000);
  }

  tick(): void {
    this.count++;
  }
}

new Timer().start();
```

At runtime, `this` inside `tick` will be `undefined` (in strict mode) because the method was
extracted from its object. Use arrow functions or `bind`:

```ts
start(): void {
  setInterval(() => this.tick(), 1000);
}
```
