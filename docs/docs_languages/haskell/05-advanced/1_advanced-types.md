---
title: Advanced Types
description:
  'GADTs, DataKinds, TypeFamilies, FunctionalDependencies, existential types, RankNTypes, phantom
  types, associated types, kind system, and type-level programming.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Haskell
categories:
  - Haskell
slug: haskell-advanced-types
---

## Algebraic Data Types Revisited

Algebraic data types (ADTs) in Haskell are the foundation of its type system. They combine **sum
types** (multiple constructors, one is chosen) and **product types** (a constructor holds multiple
fields):

```haskell
-- Sum type: a Shape is one of these alternatives
data Shape
  = Circle Double Double Double
  | Rectangle Double Double Double Double
  | Triangle Double Double Double Double Double Double

-- Product type: a Point has both x and y
data Point = Point Double Double

-- Recursive ADT: a tree contains trees
data Tree a = Leaf a | Branch (Tree a) (Tree a)

-- Polymorphic ADT: works for any element type
data Either a b = Left a | Right b
data Maybe a = Nothing | Just a
```

### The Algebra of Types

Haskell types form an algebra where:

- Types correspond to **sets** of values
- `|` (sum) corresponds to **disjoint union** (cardinality $|A + B| = |A| + |B|$)
- Fields in a constructor correspond to **cartesian product** (cardinality
  $|A \times B| = |A| \times |B|$)
- `a -> b` corresponds to $|B|^{|A|}$

```haskell
-- Bool = True | False: 2 values
-- () = (): 1 value
-- Maybe Bool = Nothing | Just True | Just False: 3 values
-- Either Bool () = Left True | Left False | Right (): 3 values

-- (Bool, Bool) = 4 values: (F,F), (F,T), (T,F), (T,T)
-- Bool -> Bool = 4 functions
-- () -> Bool = 2 functions (constant True, constant False)
```

## GADTs (Generalized Algebraic Data Types)

GADTs extend ordinary data types by allowing explicit type signatures on constructors:

```haskell
{-# LANGUAGE GADTs #-}

-- Regular ADT: result type is always the same
data Expr a where
  Lit :: Int -> Expr Int
  Add :: Expr Int -> Expr Int -> Expr Int
  Mul :: Expr Int -> Expr Int -> Expr Int
  IsZero :: Expr Int -> Expr Bool
  If :: Expr Bool -> Expr a -> Expr a -> Expr a
  -- Each constructor can return a different type!
```

### Why GADTs?

GADTs allow the type system to track information that regular ADTs cannot:

```haskell
-- Without GADTs: Expr a means we can put anything anywhere
-- The type checker cannot prevent this:
-- badExpr = If (Lit 42) (Lit 1) (Lit 2)  -- Bool where Int expected
-- This compiles but makes no sense!

-- With GADTs: each constructor constrains its result type
-- This is caught by the type checker:
eval :: Expr a -> a
eval (Lit n)        = n
eval (Add e1 e2)    = eval e1 + eval e2
eval (Mul e1 e2)    = eval e1 * eval e2
eval (IsZero e)     = eval e == 0
eval (If cond t e)  = if eval cond then eval t else eval e

-- The type of eval ensures safety:
-- eval (If (Lit 42) (Lit 1) (Lit 2))
-- Type error: expected Expr Bool, got Expr Int in If condition
```

### More GADT Examples

```haskell
-- Safe list operations
data SafeList a b where
  Nil  :: SafeList a Empty
  Cons :: a -> SafeList a b -> SafeList a NonEmpty

data Empty
data NonEmpty

safeHead :: SafeList a NonEmpty -> a
safeHead (Cons x _) = x

-- This is impossible to call with an empty list
-- safeHead Nil  -- type error!
```

```haskell
-- Typed JSON representation
data JSON where
  JNull   :: JSON
  JBool   :: Bool -> JSON
  JNumber :: Double -> JSON
  JString :: String -> JSON
  JArray  :: [JSON] -> JSON
  JObject :: [(String, JSON)] -> JSON

-- Safe accessor: compile-time guarantee of type
getBool :: JSON -> Maybe Bool
getBool (JBool b) = Just b
getBool _          = Nothing

getString :: JSON -> Maybe String
getString (JString s) = Just s
getString _            = Nothing
```

## DataKinds

The `DataKinds` extension promotes data types to the **kind** level, allowing types to be used as
type parameters:

```haskell
{-# LANGUAGE DataKinds #-}

-- The promoted type Nat has kind *
-- Its constructors 'Z and 'S have kind Nat
data Nat = Z | S Nat

-- Type-level natural numbers
type Zero   = 'Z
type One    = 'S 'Z
type Two    = 'S ('S 'Z)
type Three  = 'S ('S ('S 'Z))

-- Type-level list
data HList (xs :: [*]) where
  HNil  :: HList '[]
  HCons :: x -> HList xs -> HList (x ': xs)

-- '[] and (:) are promoted constructors
-- They exist at the type level as well as the term level
```

### Phantom Types

Phantom types use type parameters that do not appear in the data constructors. They encode
information in the type system without any runtime cost:

```haskell
{-# LANGUAGE DataKinds #-}

data Meter
data Kilometer

data Distance a = Distance Double
  deriving (Show)

-- These are different types even though they have the same runtime representation
d1 :: Distance Meter
d1 = Distance 100.0

d2 :: Distance Kilometer
d2 = Distance 1.0

-- Cannot accidentally mix units:
-- addDistances :: Distance Meter -> Distance Kilometer -> Distance Meter
-- This would require explicit conversion
toKilometers :: Distance Meter -> Distance Kilometer
toKilometers (Distance m) = Distance (m / 1000)
```

### More Phantom Type Examples

```haskell
-- Typed file handles
data ReadOnly
data ReadWrite

data File a = FilePath String
  deriving (Show)

readFile' :: File ReadOnly -> IO String
readFile' (File path) = readFile path

writeFile' :: File ReadWrite -> String -> IO ()
writeFile' (File path) contents = writeFile path contents

-- You cannot write to a ReadOnly file at the type level
-- writeFile' (File "data.txt") "hello"
-- Type error: expected File ReadWrite, got File ReadOnly

-- Safe state machine
data Locked
data Unlocked

data StateMachine a where
  SM :: String -> StateMachine a

lock :: StateMachine Unlocked -> StateMachine Locked
lock (SM s) = SM s

unlock :: StateMachine Locked -> StateMachine Unlocked
unlock (SM s) = SM s

-- The type system prevents double-locking or double-unlocking
-- lock (lock initialSM)  -- type error: expected Unlocked, got Locked
```

## Type Families

Type families allow **type-level functions** -- mappings from types to types:

```haskell
{-# LANGUAGE TypeFamilies #-}

-- Closed type family: all equations must be together
type family Elem xs where
  Elem '[]              = 'False
  Elem (x ': xs)        = 'True

-- Associated type family: lives inside a type class
class Collection c where
  type Element c
  empty :: c
  insert :: Element c -> c -> c
  toList :: c -> [Element c]

instance Collection [a] where
  type Element [a] = a
  empty = []
  insert = (:)
  toList = id

instance Collection (Set.Set a) where
  type Element (Set.Set a) = a
  empty = Set.empty
  insert = Set.insert
  toList = Set.toList
```

### Open vs Closed Type Families

```haskell
-- Open type family: new instances can be added anywhere
type family Container a

type instance Container Int  = [Int]
type instance Container Bool = [Bool]
-- Can add more in any module

-- Closed type family: all equations defined together
-- Matches are tried in order; first match wins
type family Rep a where
  Rep Int    = [Int]
  Rep Bool   = [Bool]
  Rep Double = [Double]
  -- All equations must be here
```

## Functional Dependencies

Functional dependencies constrain the relationship between type parameters in a multi-parameter type
class:

```haskell
{-# LANGUAGE FunctionalDependencies #-}

-- |s -> m| means m is uniquely determined by s
class MonadState s m | m -> s where
  get :: m s
  put :: s -> m ()
  modify :: (s -> s) -> m ()
  modify f = do
    s <- get
    put (f s)

-- Given the monad m, the state type s is determined
-- So there can be at most one instance per monad
instance MonadState Int IO where
  get = readIORef globalIntRef
  put n = writeIORef globalIntRef n
```

### Functional Dependencies vs Type Families

Both solve similar problems but with different trade-offs:

```haskell
-- Functional dependencies approach
class Collects e c | c -> e where
  empty  :: c
  insert :: e -> c -> c

-- Type families approach
class Collects c where
  type Elem c
  empty  :: c
  insert :: Elem c -> c -> c
```

Functional dependencies are generally simpler for one-to-one relationships. Type families are more
expressive for type-level computation and associated types.

## Existential Types

Existential types hide type information, allowing heterogeneous collections:

```haskell
{-# LANGUAGE ExistentialQuantification #-}

-- A list of values that all implement Show
-- but may have different types
data Showable where
  Showable :: Show a => a -> Showable

showList :: [Showable] -> String
showList = unlines . map (\(Showable x) -> show x)

-- Usage
things :: [Showable]
things = [Showable 42, Showable "hello", Showable True]

-- heterogeneousList :: [Showable]
-- heterogeneousList = [Showable 42, Showable "hello", Showable [1,2,3]]
-- All these can go in the same list because their types are hidden
```

### Existential Types and Type Classes

```haskell
-- A collection of comparable values
data Eqable where
  Eqable :: Eq a => a -> Eqable

-- We can compare Eqable values to themselves
-- but not to each other (they may be different types)
checkEquality :: Eqable -> Eqable -> Maybe String
checkEquality (Eqable a) (Eqable b) = do
  -- a and b may have different types, so we cannot use (==)
  -- This is where GADTs with equality constraints help
  Nothing

-- With GADT equality constraints:
data EqBox where
  EqBox :: (Eq a, Show a) => a -> EqBox

-- Still cannot compare different EqBox values
-- but we can display them:
showBox :: EqBox -> String
showBox (EqBox x) = show x
```

## Rank-N Types

Rank-N types allow polymorphism in arguments (rank 2) or even in arguments of arguments (rank N).

### Rank 2 Types

```haskell
{-# LANGUAGE RankNTypes #-}

-- Rank 1 (normal): the type variable 'a' is quantified at the top level
normal :: a -> a
normal = id

-- Rank 2: the function argument is polymorphic
-- The forall is INSIDE the argument type
applyToBoth :: (forall a. a -> a) -> (Int, Bool)
applyToBoth f = (f 42, f True)

-- Only functions that work for ALL types can be passed
-- applyToBoth (*2)  -- type error! *2 only works for Num a
-- applyToBoth id     -- works! id works for all a
```

### Practical Rank 2 Types

```haskell
-- ST Monad: runST has rank 2 type
-- runST :: (forall s. ST s a) -> a
-- The 's' parameter is quantified inside the argument
-- This prevents the 's' from escaping the ST computation
import Control.Monad.ST

safeST :: Int
safeST = runST $ do
  ref <- newSTRef 42
  modifySTRef ref (+1)
  readSTRef ref
-- => 43
-- The type variable 's' cannot leak out of runST

-- Callback-based API
withFile :: FilePath -> (forall h. h -> IO a) -> IO a
-- The handle h is polymorphic inside the callback
-- This ensures the handle is properly closed
```

### Rank 2 Constraints

```haskell
-- A function that requires its argument to be Monad for ALL types
-- This is rarely needed but exists
-- doSomething :: (forall m. Monad m => m Int) -> IO ()
```

## Associated Types

Associated types (synonym families in type classes) link a type family to a type class:

```haskell
{-# LANGUAGE TypeFamilies #-}

class Keyed k where
  type Key k
  lookup' :: Key k -> Map (Key k) v -> Maybe v

instance Keyed String where
  type Key String = String

instance Keyed Int where
  type Key Int = Int

-- Each instance defines what Key means for that type
-- This is cleaner than multi-parameter type classes for many cases
```

## The Kind System

Haskell has a kind system that classifies types. The default kind `*` (also written `Type`)
classifies concrete types. Other kinds classify type constructors:

```haskell
-- Kind *: concrete types
Int :: *
Bool :: *
Maybe Int :: *

-- Kind * -> *: type constructors taking one argument
Maybe :: * -> *
[] :: * -> *
IO :: * -> *

-- Kind * -> * -> *: type constructors taking two arguments
Either :: * -> * -> *
(,) :: * -> * -> *
Map :: * -> * -> *

-- With DataKinds, data constructors become kinds
data Nat = Z | S Nat
-- Nat :: *
-- 'Z :: Nat
-- 'S :: Nat -> Nat

-- GHC.Prim: constraint kinds
-- (Eq Int) :: Constraint
-- (Monad m) :: Constraint
```

### Kind Signatures

```haskell
{-# LANGUAGE KindSignatures #-}

-- Explicit kind annotations
data Proxy (a :: k) = Proxy

data GList (c :: * -> *) (a :: *) where
  GNil  :: GList c a
  GCons :: c a -> GList c a -> GList c a

-- Kinds in type class declarations
class Category (cat :: k -> k -> *) where
  id    :: cat a a
  (.)   :: cat b c -> cat a b -> cat a c
```

## Promoted Types

With `DataKinds`, data constructors are promoted to the type level. This enables type-level
programming where types compute at compile time:

```haskell
{-# LANGUAGE DataKinds, TypeOperators, GADTs #-}

data Nat = Z | S Nat

-- Type-level arithmetic
type family Add (m :: Nat) (n :: Nat) :: Nat where
  Add 'Z     n = n
  Add ('S m) n = 'S (Add m n)

type family Mul (m :: Nat) (n :: Nat) :: Nat where
  Mul 'Z     n = 'Z
  Mul ('S m) n = Add n (Mul m n)

type Two = 'S ('S 'Z)
type Four = 'S ('S ('S ('S 'Z)))
type Six = Add Two Four  -- evaluated at compile time
```

### Type-Level Natural Numbers

```haskell
-- Peano natural numbers at the type level
data Nat = Z | S Nat

type Zero   = 'Z
type One    = 'S 'Z
type Two    = 'S ('S 'Z)
type Three  = 'S ('S ('S 'Z))

-- Vector: length-encoded list
data Vec a (n :: Nat) where
  VNil  :: Vec a 'Z
  VCons :: a -> Vec a n -> Vec a ('S n)

-- head is safe for non-empty vectors
vhead :: Vec a ('S n) -> a
vhead (VCons x _) = x
-- vhead VNil -- type error: cannot match Z with S n

-- append with correct length tracking
vappend :: Vec a m -> Vec a n -> Vec a (Add m n)
vappend VNil ys = ys
vappend (VCons x xs) ys = VCons x (vappend xs ys)
```

## Type-Level Programming

### Singleton Types

Singleton types bridge the gap between term-level and type-level values:

```haskell
{-# LANGUAGE GADTs, DataKinds, TypeFamilies #-}

data Nat = Z | S Nat

data SNat (n :: Nat) where
  SZ :: SNat 'Z
  SS :: SNat n -> SNat ('S n)

-- Type-level to term-level conversion
class KnownNat (n :: Nat) where
  natVal :: proxy n -> Integer

instance KnownNat 'Z where
  natVal _ = 0

instance KnownNat n => KnownNat ('S n) where
  natVal _ = 1 + natVal (Proxy :: Proxy n)

-- Using singleton types for type-safe indexing
indexVec :: SNat n -> Vec a ('S n) -> a
indexVec SZ     (VCons x _)  = x
indexVec (SS n) (VCons _ xs) = indexVec n xs
```

### Type-Level Booleans and Conditionals

```haskell
data Bool = True | False  -- promoted to type level

type family If (cond :: Bool) (t :: k) (f :: k) :: k where
  If 'True  t f = t
  If 'False t f = f

type family Not (b :: Bool) :: Bool where
  Not 'True  = 'False
  Not 'False = 'True

type family (&&) (a :: Bool) (b :: Bool) :: Bool where
  'True  && 'True  = 'True
  'True  && 'False = 'False
  'False && _      = 'False
```

## Template Haskell

Template Haskell (TH) enables compile-time metaprogramming -- generating Haskell code
programmatically:

```haskell
{-# LANGUAGE TemplateHaskell #-}

import Language.Haskell.TH

-- splice: insert generated code at compile time
-- $(...) runs at compile time
-- [| ... |] quotes an expression (returns an Exp)

-- Generate a Show instance automatically
-- deriveShow ''MyType

-- Generate boilerplate for record types
-- makeLenses ''MyRecord

-- Run arbitrary Haskell at compile time
main = putStrLn $(
  let msg = "Generated at compile time!"
  in [| msg |]
  )
```

### Practical Template Haskell

```haskell
-- Generate case analysis for all constructors
-- $(genCases ''MyDataType)

-- Lenses via Template Haskell (lens package)
data Person = Person
  { _name :: String
  , _age  :: Int
  }

-- This generates name, age lenses
-- makeLenses ''Person

-- JSON serialization via Template Haskell
-- deriveJSON defaultOptions ''Person
```

## Type System Best Practices

1. **Prefer newtype over data** when wrapping a single type: zero runtime overhead and clearer
   intent.
2. **Use phantom types** to encode invariants in the type system without runtime cost.
3. **Prefer GADTs** when constructors should produce different result types.
4. **Use type families** for type-level computation and associated types.
5. **Use functional dependencies** for simpler constraints on multi-parameter type classes.
6. **Keep type-level programming simple**: complex type-level code is hard to debug and understand.
7. **Document kind signatures** when working with DataKinds.
8. **Use Template Haskell sparingly**: it can make code harder to read and debug.
