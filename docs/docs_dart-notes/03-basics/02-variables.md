---
title: Variables
date: 2025-07-13T20:44:32.129Z
tags:
  - dart
categories:
  - dart
slug: variables
---

## Specifiers

### Types

Flutter is statically type, therefore, all types are evaluated at compile time, this can be explicitly defined as:

```dart
String text = "hello";
int number = 22;
```

However, Flutter also provides a implicit declaration (`var`) that can be determined by compiler, an example being:

```dart
var text = "hello";
var number = 22;
```

Another way of implicit definition is declaring as `Object` class, since all types in Dart inherits from the `Object` type, implicit definitions can be written as:

```dart
Object text = "hello";
Object number = 22;
```

One exception is that Flutter also allow dynamic typing, if a declarator `dynamic` is used, the evaluation will happen at runtime:

```dart
dynamic text = "hello";
dynamic number = 22;
```

:::tip
The best practice is here is to avoid usage of `dynamic` and `Object` declaration, always use `var` or explicit typing.
:::

### Mutation Specifier

#### `final` specifier

Variables with `final` specifier is instantiated once and will prevent mutation afterwards, usually the instantiation is performed when calling the constructor:

```dart
class Foo extends StatelessWidget {
  const Foo({
    super.key,
    required this.text,
    required this.number
  });

  final String text;
  final bool number;
}
```

In the example, both `text` and `number` are `required` to be instantiated during the constructor call:

```dart
void main(){
  Foo body = Foo(
    text: "hello",
    number: 22
  )
}
```

After the instantiation, the variables cannot be mutated, upon mutation, a compile time error will appear.

#### `const` specifier

Variables with `const` specifier are required to be evaluated at compile time, meaning the value cannot be mutated by any event in runtime including a constructor call.

```dart
const String text = "hello",
const int number = 22

```

### Nullable specifier

Variables are required to be defined at declaration by default, to enable the option for the variable to be `null`, the `?` specifier should be used:

```dart
String? text;
int? number;
```

#### Accessing Null Variables

When a variable is null, and the compile time null check for the variable is disabled by the nullable specifier, null will be treated as a absense of value and therefore can perform instantiation checks with null:

```dart
int? value; // initialized to 'null'

// This null-check ensures that 'value' is not 'null'
if (value != null) {
  doSomething(value);
}
```

#### Assigning nullable values

Assigning nullable values to non-nullable types will generate a compile time error:

```dart
String? world(){
  return "hello"
}

void main(){
  int? text = world();
  int text = world(); // compile time error
}
```

#### `late` specifier

To allow top-level variables and class variables to be initialize separately to their declaration, the `late` specifier can be used, an example being:

```dart
late String text;

void main(){
  text = "hello";
  print(text);
}
```

When accessing a `late` specified variable without instantiation at runtime, a runtime exception will be thrown (runtime error):

```dart
late String text;

void main(){
  print(text); // Runtime exception
  text = "hello";
}
```

:::tip

The best practice of nullability and mutability is to follow the order of `const` >> `final` >> `var` with no nullability specifier >> `final late` >> `var?`. Also non const top-level variables should be avoided.

:::

## Data Types

### Built-in Data Types

:::warning

Dart does not have primitive data types as all types are interfaces inherited from `Object` class

:::

#### Number Types

Only two number types exists in Dart, `int` and `double`. `int` can represents integers up to 64 bits due to JavaScript limitation. `double` follows the IEEE 754 standard and is also 64 bits.

#### String Literals

Only one String type exists in Dart, `String`, which holds a sequence of characters specify in UTF-16 code. Within String declarations `""`, `${ \\ expression }` can be declared, and any expression that evaluates to String can be placed within. A raw `String` can be created with declarator `r` infront of the string:

<div className="godbolt-container">
  <iframe
    width="100%"
    height="500"
    src="https://godbolt.org/e#g:!((g:!((g:!((h:codeEditor,i:(filename:'1',fontScale:12,fontUsePx:'0',j:1,lang:dart,selection:(endColumn:1,endLineNumber:9,positionColumn:1,positionLineNumber:9,selectionStartColumn:1,selectionStartLineNumber:9,startColumn:1,startLineNumber:9),source:'const+String+n1+%3D+%22hello%22%3B%0A%0Avoid+main()+%7B%0A++++const+String+n2+%3D+%22This+is+a%5Cn+sentence,+$%7Bn1%7D%22%3B%0A++++print+(n2)%3B%0A++++const+String+n3+%3D+r%22This+is+a%5Cn+sentence,+$%7Bn1%7D%22%3B%0A++++print+(n3)%3B%0A%7D%0A'),l:'5',n:'0',o:'Dart+source+%231',t:'0')),k:50,l:'4',m:50,n:'0',o:'',s:0,t:'0'),(g:!((h:compiler,i:(compiler:dart373,filters:(b:'0',binary:'1',binaryObject:'1',commentOnly:'0',debugCalls:'1',demangle:'0',directives:'0',execute:'0',intel:'0',libraryCode:'0',trim:'1',verboseDemangling:'0'),flagsViewOpen:'1',fontScale:12,fontUsePx:'0',j:1,lang:dart,libs:!(),options:'',overrides:!(),selection:(endColumn:1,endLineNumber:1,positionColumn:1,positionLineNumber:1,selectionStartColumn:1,selectionStartLineNumber:1,startColumn:1,startLineNumber:1),source:1),l:'5',n:'0',o:'+Dart+3.7.3+(Editor+%231)',t:'0'),(h:output,i:(compilerName:'x86-64+gcc+14.2',editorid:1,fontScale:14,fontUsePx:'0',j:1,wrap:'1'),l:'5',n:'0',o:'Output+of+Dart+3.7.3+(Compiler+%231)',t:'0')),header:(),l:'4',m:50,n:'0',o:'',s:1,t:'0')),k:100,l:'3',n:'0',o:'',t:'0')),version:4"
    title="Compiler Explorer"
    sandbox="allow-scripts allow-same-origin"
    loading="lazy"
  ></iframe>
</div>
