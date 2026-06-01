---
id: intro
title: Introduction to Python
description: 'Python Introduction to Python notes covering key definitions, core concepts, worked examples, and practice questions for complete study and thorough revision.'
slug: intro
sidebar_position: 1
tags:
  - Python
categories:
  - Python
---

## Abstract

This resource is created as an aggregation of best practices in Python. It covers idiomatic Python
patterns, the standard library, and common patterns used in data science, web development, and
systems programming.

## Topics Covered

### Core Language

- **Data types and structures** — `int`, `float`, `str`, `bool`, `list`, `tuple`, `dict`, `set`;
  mutability and immutability
- **Control flow** — `if`/`elif`/`else`, `for` loops (iterable-based), `while`, `break`/`continue`,
  comprehensions (list, dict, set, generator)
- **Functions** — positional and keyword arguments, `*args`/`**kwargs`, default arguments, lambdas,
  decorators, closures
- **Classes and OOP** — classes, instances, `__init__`, methods, class methods, static methods,
  inheritance, `super()`, dunder methods, dataclasses
- **Modules and packages** — `import`, `from ... import`, `__name__ == "__main__"`, package
  structure, `pyproject.toml`

### Standard Library

- **`collections`** — `defaultdict`, `Counter`, `OrderedDict`, `namedtuple`, `deque`
- **`itertools`** — `chain`, `product`, `permutations`, `combinations`, `groupby`
- **`pathlib`** — modern path handling; prefer over `os.path`
- **`typing`** — type hints, `Optional`, `Union`, `Generic`, `Protocol`, `Callable`
- **`dataclasses`** — `@dataclass` for boilerplate-free class definitions
- **`asyncio`** — async/await, coroutines, event loops, `asyncio.gather`

### Best Practices

- **PEP 8** — style guide; use `ruff` or `black` for formatting
- **Type hints** — annotate all public functions; use `mypy` for static checking
- **Error handling** — prefer specific exceptions; use `try`/`except`/`else`/`finally`; avoid bare
  `except`
- **Testing** — `pytest` fixtures, parametrised tests, mocking with `unittest.mock`
- **Virtual environments** — `venv`, `uv`, `poetry`; always isolate project dependencies

## Code Examples

All code examples run under Python 3.12+ unless otherwise noted.

<div className="godbolt-container">
 <iframe
 width="100%"
 height="800"
 src="https://godbolt.org/e#g:!((g:!((g:!((h:codeEditor,i:(filename:'1',fontScale:12,fontUsePx:'0',j:1,lang:python,selection:(endColumn:1,endLineNumber:17,positionColumn:1,positionLineNumber:17,selectionStartColumn:1,selectionStartLineNumber:17,startColumn:1,startLineNumber:17),source:'w,+h,+max_iter+%3D+80,+24,+100%0Achars+%3D+%22+.:-%3D%2B*%23%25@%22%0A%0Afor+y+in+range(h):%0A++++imag+%3D+1.0+-+2.0+*+y+/+h%0A++++row+%3D+%5B%5D%0A++++for+x+in+range(w):%0A++++++++real+%3D+3.5+*+x+/+w+-+2.5%0A++++++++c+%3D+complex(real,+imag)%0A++++++++z+%3D+c%0A++++++++i+%3D+0%0A++++++++while+abs(z)+%3C%3D+2.0+and+i+%3C+max_iter:%0A++++++++++++z+%3D+z+*+z+%2B+c%0A++++++++++++i+%2B%3D+1%0A++++++++row.append(!'+!'+if+i+%3D%3D+max_iter+else+chars%5Bi+%25+len(chars)%5D)%0A++++print(!'!'.join(row))%0A'),l:'5',n:'0',o:'Python+source+%231',t:'0')),k:100,l:'4',m:50,n:'0',o:'',s:0,t:'0'),(g:!((h:executor,i:(argsPanelShown:'1',compilationPanelShown:'0',compiler:python313,compilerName:'',compilerOutShown:'0',execArgs:'',execStdin:'',fontScale:12,fontUsePx:'0',j:1,lang:python,libs:!(),options:'',overrides:!(),runtimeTools:!(),source:1,stdinPanelShown:'1',wrap:'1'),l:'5',n:'0',o:'Executor+Python+3.13+(Python,+Editor+%231)',t:'0')),header:(),l:'4',m:50,n:'0',o:'',s:0,t:'0')),l:'3',n:'0',o:'',t:'0')),version:4"
 title="Compiler Explorer"
 sandbox="allow-scripts allow-same-origin"
 loading="lazy"
 ></iframe>
</div>
