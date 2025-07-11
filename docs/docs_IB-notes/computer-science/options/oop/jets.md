---
title: JETS
date: 2025-05-02T19:29:09.542Z
tags:
  - CS
categories:
  - CS
slug: jets
draft: false
---

# Java Examination Tool Sebset (JETS)

The IB does not expect a specific standard of Java to be taught but a subset of Java called JETS for students to present OOP concepts

## Conventions

### Styles

| Token               | Conventions        |
| ------------------- | ------------------ |
| Classes identifier  | `CapitalCamelCase` |
| Variable identifier | `camelCase`        |
| Method identifier   | `camelCase`        |
| Constant identifier | `UPPER_CASE`       |

### Ordering

- Main class should be placed at the top
- Constructors should be place as the first method

## Operators Permitted

- Arithmetic
  - `-`
  - `-`
  - `-`
  - `/`
  - `%`
- Relational
  - `==`
  - `!=`
  - `>`
  - `<`
  - `>=`
  - `<=`
- Boolean
  - `!`
  - `&&`
  - `||`

## Types

### Primitive Data Types

Primitive data types are data types other data types are constructed with, these are normally built-in as standard data types of programming languages, in JETS, these are:
| type declaration | size | range | Standard | Default init value |
| :---------------- | :---------------------------------------: | :--------------------------------------------------: | :------------------------------------------------------: | :------------------: |
| `byte` | 8 bits | $-128\le n \le 127$ | unsigned | `0` |
| `int` | 32 bits | $-2^{31}\le n \le 2^{32}$ | signed | `0` |
| `long` | 64 bits | $-2^{63}\le n \le 2^{63}$ | signed | `0` |
| `double` | 64 bits | $-4.9\times 10^{324} \le n \le 4.9\times 10^{324}$ | IEEE 754-1984 (double precision binary floating-point) | `0.0d` |
| `char` | 16 bits | $0 \le n \le 2^{16} -1$ | UTF-16 | `'\u0000'` `'a'` |
| `boolean` | 1 bit (logical) 1 byte (in-practice) | `false` |

```java
byte b = 120 // bytes is a 8 bit type with a range of -128<b<127, unsigned
int i = 1243 // int is a 32 bit type have a range of -2^31<i<2^31-1, signed
long
double
char
boolean
```

## Scopes

### Attribute Scopes

Java access modifiers used in JETS are:

```java
class ClassIdentifier{
  public int n1 = 0; //Accessible by any class
  protected int n2 = 0; //Accessible by any extended class
  private int n3 = 0; //Only accessible by the class
}
```

## Type Casting

Type casting refers to the converting of value to another type:

```java
int n1 = (int)9.8 //9
double n2 = (double)6 //6.0f
byte n3 = (byte)1000 //Signed integer truncated to 8 bits: 1000%256-256 = -24
char n4 = (char)75 //K, from ascii mapping
```

## Error Handling

Error handling refers to the handling of exceptions for functions that:

```java
type funcIdentifier () throws IOException
```

```java
try{ /*commands*/ }
  catch(Exception e){ /*Error condition handle*/ }
```
