---
title: Type Classes
description:
  'Haskell type class mechanism, standard type classes (Show, Eq, Ord, Num), Functor, Applicative,
  Monad, Foldable, Traversable, Semigroup, Monoid, and do notation.'
date: 2026-06-04T10:00:00.000Z
tags:
  - Haskell
categories:
  - Haskell
slug: haskell-type-classes
---

## What Are Type Classes?

Type classes are Haskell's mechanism for **ad hoc polymorphism** -- defining interfaces that types
can implement. Unlike OOP interfaces, type classes are separate from data types and can be added
after the type is defined (unlike in most OOP languages). A type class declares a set of functions
(called **methods**) that implementing types must define.

```haskell
-- Define a type class
class Eq a where
  (==) :: a -> a -> Bool
  (/=) :: a -> a -> Bool

-- Make a type an instance of the class
instance Eq Bool where
  True  == True  = True
  False == False = True
  _     == _     = False

  x /= y = not (x == y)
```

## The deriving Mechanism

Haskell can automatically generate instances for many standard type classes:

```haskell
data Color = Red | Green | Blue
  deriving (Show, Eq, Ord, Enum, Bounded)

-- This automatically generates:
-- show Red = "Red", show Green = "Green", show Blue = "Blue"
-- Red == Red = True, Red == Green = False, etc.
-- Red < Green = True, Green < Blue = True, etc.
-- [Red .. Blue] = [Red, Green, Blue]
-- minBound = Red, maxBound = Blue
```

The `deriving` clause works by generating boilerplate code at compile time. It is available for
these standard type classes: `Eq`, `Ord`, `Enum`, `Bounded`, `Show`, `Read`.

## Show and Read

### Show

`Show` converts values to their string representation:

```haskell
class Show a where
  show :: a -> String
  showList :: [a] -> ShowS  -- optional

-- Derived instances
data Point = Point Double Double
  deriving (Show)

-- Point 1.0 2.0 => "Point 1.0 2.0"

-- Custom instance
instance Show Point where
  show (Point x y) = "(" ++ show x ++ ", " ++ show y ++ ")"
  -- Point 1.0 2.0 => "(1.0, 2.0)"
```

### Read

`Read` is the inverse of `Show` -- it parses a string into a value:

```haskell
class Read a where
  readsPrec :: Int -> ReadS a  -- ReadS a = String -> [(a, String)]

-- read parses a string into any Read type
read "42"       :: Int     -- => 42
read "True"      :: Bool    -- => True
read "[1,2,3]"   :: [Int]   -- => [1, 2, 3]
read "(1,'a')"   :: (Int, Char) -- => (1, 'a')

-- read is partial: provide type annotation or use readMaybe
readMaybe "42" :: Maybe Int  -- => Just 42
readMaybe "abc" :: Maybe Int  -- => Nothing
```

## Eq

```haskell
class Eq a where
  (==) :: a -> a -> Bool
  (/=) :: a -> a -> Bool
  -- Default: x /= y = not (x == y)

-- Derived for algebraic data types
data Shape = Circle Double | Rectangle Double Double
  deriving (Eq)
-- Circle 1.0 == Circle 1.0 = True
-- Circle 1.0 == Rectangle 1.0 1.0 = False

-- Custom instance for types with special equality
data MyFloat = MyFloat Double
instance Eq MyFloat where
  MyFloat a == MyFloat b = abs (a - b) < 1e-9
```

## Ord

```haskell
class Eq a => Ord a where
  compare :: a -> a -> Ordering  -- Ordering = LT | EQ | GT
  (<), (<=), (>), (>=) :: a -> a -> Bool
  min, max :: a -> a -> a

-- Derived instances order constructors by definition order
data Priority = Low | Medium | High
  deriving (Eq, Ord)
-- Low < Medium < High (order of constructor declaration)

-- compare returns LT, EQ, or GT
compare 1 5    -- => LT
compare 5 5    -- => EQ
compare 5 1    -- => GT
```

## Enum and Bounded

### Enum

```haskell
class Enum a where
  succ, pred :: a -> a
  toEnum :: Int -> a
  fromEnum :: a -> Int
  enumFromTo :: a -> a -> [a]
  enumFromThenTo :: a -> a -> a -> [a]

-- Succ and pred move through enumeration
succ True      -- => error (no successor)
succ Red       -- => Green (if Red < Green < Blue)
pred 'b'       -- => 'a'

-- Ranges
[1..10]        -- => [1,2,3,4,5,6,7,8,9,10]
['a'..'z']     -- => "abcdefghijklmnopqrstuvwxyz"
[Red..Blue]    -- => [Red, Green, Blue]
```

### Bounded

```haskell
class Bounded a where
  minBound :: a
  maxBound :: a

minBound :: Int      -- => -9223372036854775808 (on 64-bit)
maxBound :: Int      -- => 9223372036854775807
maxBound :: Char     -- => '\1114111'
minBound :: Bool     -- => False
maxBound :: Bool     -- => True
```

## Num and Numeric Type Classes

```haskell
class Eq a => Num a where
  (+), (-), (*) :: a -> a -> a
  negate :: a -> a
  abs :: a -> a
  signum :: a -> a
  fromInteger :: Integer -> a

class Num a => Fractional a where
  (/) :: a -> a -> a
  fromRational :: Rational -> a

class (Real a, Fractional a) => RealFrac a where
  properFraction :: (Integral b) => a -> (b, a)
  truncate, round, ceiling, floor :: (Integral b) => a -> b
```

Numeric literals are polymorphic:

```haskell
-- 42 has type (Num a) => a
-- It is actually fromInteger 42
42 :: Int     -- => 42
42 :: Double  -- => 42.0
42 :: Integer -- => 42

-- 3.14 has type (Fractional a) => a
-- It is actually fromRational (314 % 100)
3.14 :: Float  -- => 3.14
3.14 :: Double -- => 3.14
```

## Functor

The `Functor` type class represents types that can be "mapped over":

```haskell
class Functor f where
  fmap :: (a -> b) -> f a -> f b
  -- Also: (<$) :: a -> f b -> f a  -- replace mapped value with constant

-- Laws:
-- 1. Identity:   fmap id = id
-- 2. Composition: fmap (f . g) = fmap f . fmap g
```

```haskell
-- Maybe is a Functor
fmap (*2) (Just 5)   -- => Just 10
fmap (*2) Nothing    -- => Nothing
-- Using fmap infix as <$>
-- import Control.Applicative ((<$>))
(*2) <$> (Just 5)    -- => Just 10

-- List is a Functor
fmap (*2) [1, 2, 3] -- => [2, 4, 6]

-- IO is a Functor
fmap length getLine  -- reads a line and returns its length
-- fmap applies the function to the result of the IO action

-- ((->) r) is a Functor (function type)
-- fmap :: (a -> b) -> (r -> a) -> (r -> b)
-- This is just function composition!
instance Functor ((->) r) where
  fmap = (.)
```

### Making a Type a Functor

```haskell
data Tree a = Leaf a | Branch (Tree a) (Tree a)

instance Functor Tree where
  fmap f (Leaf x)     = Leaf (f x)
  fmap f (Branch l r) = Branch (fmap f l) (fmap f r)
```

## Applicative

`Applicative` sits between `Functor` and `Monad` in the type class hierarchy:

```haskell
class Functor f => Applicative f where
  pure :: a -> f a
  (<*>) :: f (a -> b) -> f a -> f b
  (*>) :: f a -> f b -> f b
  (<*) :: f a -> f b -> f a

-- Laws:
-- 1. Identity:      pure id <*> v = v
-- 2. Composition:   pure (.) <*> u <*> v <*> w = u <*> (v <*> w)
-- 3. Homomorphism:  pure f <*> pure x = pure (f x)
-- 4. Interchange:  u <*> pure y = pure ($ y) <*> u
```

### Applicative Examples

```haskell
-- Maybe
Just (+1) <*> Just 5     -- => Just 6
Nothing   <*> Just 5     -- => Nothing
Just (+1) <*> Nothing    -- => Nothing

-- pure lifts a value into the applicative
pure (+1) <*> Just 5      -- => Just 6
-- This is the same as fmap (+1) (Just 5)

-- List: applies each function to each value
[(+1), (*2)] <*> [1, 2, 3]
-- => [(+1) 1, (+1) 2, (+1) 3, (*2) 1, (*2) 2, (*2) 3]
-- => [2, 3, 4, 2, 4, 6]

-- IO: sequence actions
pure print <*> getLine
-- reads input then prints it

-- liftA2: convenience for two-argument functions
liftA2 (+) (Just 3) (Just 5)  -- => Just 8
liftA2 (+) [1, 2] [10, 20]    -- => [11, 21, 12, 22]
```

### Applicative Style Programming

```haskell
-- Without Applicative
addMaybe :: Maybe Int -> Maybe Int -> Maybe Int
addMaybe (Just a) (Just b) = Just (a + b)
addMaybe _         _         = Nothing

-- With Applicative
addMaybe :: Maybe Int -> Maybe Int -> Maybe Int
addMaybe = liftA2 (+)

-- Applicative style for validation
data Validation e a = Error e | Success a
  deriving (Show)

instance Functor (Validation e) where
  fmap f (Success x) = Success (f x)
  fmap _ (Error e)   = Error e

instance Applicative (Validation e) where
  pure = Success
  Error e   <*> _         = Error e
  _         <*> Error e   = Error e
  Success f <*> Success x = Success (f x)
```

## Monad

### The Monad Type Class

```haskell
class Applicative m => Monad m where
  (>>=)  :: m a -> (a -> m b) -> m b  -- "bind"
  (>>)   :: m a -> m b -> m b          -- "then" (discard first result)
  return :: a -> m a                   -- same as pure

-- Laws:
-- 1. Left identity:  return x >>= f = f x
-- 2. Right identity: m >>= return = m
-- 3. Associativity: (m >>= f) >>= g = m >>= (\x -> f x >>= g)
```

### Maybe as a Monad

`Maybe` represents optional values. Binding propagates `Nothing`:

```haskell
-- Manual Maybe handling
addMaybes :: Maybe Int -> Maybe Int -> Maybe Int
addMaybes (Just a) (Just b) = Just (a + b)
addMaybes _         _         = Nothing

-- With monadic bind
addMaybes :: Maybe Int -> Maybe Int -> Maybe Int
addMaybes ma mb = do
  a <- ma
  b <- mb
  return (a + b)

-- Chaining Maybe computations
safeDivide :: Int -> Int -> Maybe Int
safeDivide _ 0 = Nothing
safeDivide x y = Just (x `div` y)

safeCompute :: Maybe Int
safeCompute = do
  a <- safeDivide 10 2   -- Just 5
  b <- safeDivide 20 4   -- Just 5
  return (a + b)          -- Just 10

-- If any step returns Nothing, the whole computation is Nothing
safeFail :: Maybe Int
safeFail = do
  a <- safeDivide 10 0    -- Nothing
  b <- safeDivide 20 4    -- never reached
  return (a + b)           -- Nothing
```

### Either as a Monad

`Either e` represents computations that can fail with an error of type `e`:

```haskell
-- Right is the success path, Left is the error path
safeDivide :: Double -> Double -> Either String Double
safeDivide _ 0 = Left "division by zero"
safeDivide x y = Right (x / y)

compute :: Either String Double
compute = do
  a <- safeDivide 10 2
  b <- safeDivide 20 4
  return (a + b)
-- => Right 10.0

computeFail :: Either String Double
computeFail = do
  a <- safeDivide 10 0
  b <- safeDivide 20 4  -- never reached
  return (a + b)
-- => Left "division by zero"
```

### IO as a Monad

The `IO` monad sequences I/O operations:

```haskell
main :: IO ()
main = do
  putStrLn "What is your name?"
  name <- getLine
  putStrLn "What is your age?"
  ageStr <- getLine
  let age = read ageStr
  putStrLn ("Hello, " ++ name ++ "! You are " ++ show age ++ " years old.")

-- Bind chains IO actions
greetAndCount :: IO ()
greetAndCount = do
  putStrLn "Enter words (empty line to quit):"
  go 0
  where
    go n = do
      line <- getLine
      if null line
        then putStrLn ("Total: " ++ show n ++ " words")
        else go (n + 1)
```

## Do Notation

Do notation is syntactic sugar for monadic bind (`>>=`) and `>>`:

```haskell
-- Do notation:
do
  x <- action1
  y <- action2
  action3 x y
  action4

-- Desugars to:
action1 >>= \x ->
  action2 >>= \y ->
    action3 x y >>
    action4

-- Lines without <- are just sequencing with >>
main :: IO ()
main = do
  putStrLn "Hello"   -- IO ()
  putStrLn "World"   -- IO ()
-- desugars to: putStrLn "Hello" >> putStrLn "World"

-- let bindings in do notation
main :: IO ()
main = do
  let x = 10
      y = 20
  putStrLn (show (x + y))
```

### Do Notation Desugaring Examples

```haskell
-- Example 1: Simple binding
do
  a <- ma
  return (a + 1)
-- => ma >>= \a -> return (a + 1)

-- Example 2: Multiple bindings
do
  a <- ma
  b <- mb
  return (a + b)
-- => ma >>= \a -> mb >>= \b -> return (a + b)

-- Example 3: Let binding
do
  let x = 5
  a <- ma
  return (x + a)
-- => let x = 5 in ma >>= \a -> return (x + a)

-- Example 4: Last action is discarded
do
  a <- ma
  mb
-- => ma >>= \_ -> mb
```

## Custom Type Classes

### Defining a Type Class

```haskell
-- A type class for things that can be serialized
class Serializable a where
  serialize :: a -> ByteString
  deserialize :: ByteString -> Maybe a

-- Instance for a custom type
instance Serializable Person where
  serialize p = encode (personName p, personAge p)
  deserialize bs = case decode bs of
    Just (name, age) -> Just (Person name age)
    Nothing -> Nothing
```

### Default Method Implementations

```haskell
class Eq a => Ord a where
  compare :: a -> a -> Ordering
  x < y  = compare x y == LT
  x > y  = compare x y == GT
  x <= y = compare x y /= GT
  x >= y = compare x y /= LT
  -- Only compare needs to be defined; the rest have defaults
```

### Minimal Complete Definition

Each type class has a **minimal complete definition** -- the smallest set of methods that must be
implemented. The remaining methods have default implementations in terms of the required ones.

```haskell
-- Eq minimal: either (==) or (/=)
-- If you define (/=), (==) defaults to \x y -> not (x /= y)

-- Ord minimal: either compare or (<=)
-- If you define compare, all comparison operators are derived

-- Show minimal: show
-- Read minimal: readsPrec
```

## Foldable

`Foldable` generalizes folding to any container type:

```haskell
class Foldable t where
  fold :: Monoid m => t m -> m
  foldMap :: Monoid m => (a -> m) -> t a -> m
  foldr :: (a -> b -> b) -> b -> t a -> b
  foldl :: (b -> a -> b) -> b -> t a -> b
  toList :: t a -> [a]

-- Examples
foldMap Sum [1, 2, 3]  -- => Sum {getSum = 6}
foldMap Product [1, 2, 3]  -- => Product {getProduct = 6}
foldr (+) 0 (Just 5)  -- => 5
foldr (+) 0 Nothing     -- => 0
toList (Just 3)         -- => [3]
```

## Traversable

`Traversable` combines `Functor` and `Foldable` with the ability to apply an effectful function:

```haskell
class (Functor t, Foldable t) => Traversable t where
  traverse :: Applicative f => (a -> f b) -> t a -> f (t b)
  sequenceA :: Applicative f => t (f a) -> f (t a)

-- traverse applies a function returning an applicative to each element
traverse show [1, 2, 3] :: IO [String]
-- In IO context, this could read values and convert them to strings

-- sequenceA flips: applies all effects, collecting results
sequenceA [Just 1, Just 2, Just 3]    -- => Just [1, 2, 3]
sequenceA [Just 1, Nothing, Just 3]    -- => Nothing
sequenceA [putStrLn "a", putStrLn "b"]  -- IO [(), ()] -- prints a, then b
```

## Semigroup and Monoid

### Semigroup

A semigroup is a set with an associative binary operation:

```haskell
class Semigroup a where
  (<>) :: a -> a -> a

-- Associative law: (a <> b) <> c = a <> (b <> c)

instance Semigroup [a] where
  (<>) = (++)  -- list concatenation

instance Semigroup String where
  (<>) = (++)  -- string concatenation

instance Semigroup (Maybe a) where
  Nothing <> b = b
  a <> Nothing = a
  Just a <> Just b = Just (a <> b)  -- requires Semigroup a

newtype Sum a = Sum { getSum :: a }
instance Num a => Semigroup (Sum a) where
  Sum a <> Sum b = Sum (a + b)
```

### Monoid

A monoid is a semigroup with an identity element:

```haskell
class Semigroup a => Monoid a where
  mempty :: a

-- Identity laws: mempty <> a = a, a <> mempty = a

instance Monoid [a] where
  mempty = []

instance Monoid String where
  mempty = ""

instance Monoid (Maybe a) where
  mempty = Nothing

newtype Product a = Product { getProduct :: a }
instance Num a => Monoid (Product a) where
  mempty = Product 1
  Product a <> Product b = Product (a * b)
```

### Using Monoids

```haskell
-- mconcat folds a list with (<>)
mconcat ["hello", " ", "world"]  -- => "hello world"
mconcat [Sum 1, Sum 2, Sum 3]   -- => Sum 3

-- Using foldMap with Monoid
foldMap (Sum . length) ["hi", "hello", "world"]
-- => Sum {getSum = 12}

-- Intercalate with monoids
intercalate ", " ["a", "b", "c"]  -- => "a, b, c"
```

## Functor/Applicative/Monad Hierarchy

The relationship between these three type classes is:

$$\text{Functor} \subset \text{Applicative} \subset \text{Monad}$$

Every `Monad` is an `Applicative`, and every `Applicative` is a `Functor`. However, there are useful
types that are `Functor` or `Applicative` but not `Monad`:

```haskell
-- All Monads are Functors and Applicatives
-- But not all Functors are Applicative
-- And not all Applicatives are Monads

-- ZipList is Applicative but not Monad
-- newtype ZipList a = ZipList [a]

-- Validation is Applicative but not Monad (errors accumulate)
-- data Validation e a = Error e | Success a
```

### Key Relationships

```haskell
-- fmap can be expressed via Applicative:
-- fmap f x = pure f <*> x

-- fmap can be expressed via Monad:
-- fmap f x = x >>= return . f

-- pure and <*> can be expressed via Monad:
-- pure x = return x
-- mf <*> mx = mf >>= \f -> mx >>= \x -> return (f x)

-- But Functors and Applicatives can exist without Monad
-- They are more general (less powerful but more widely applicable)
```

## Practical Type Class Design

When designing your own type classes, consider:

1. **Minimal complete definition**: Provide defaults that make it easy to write instances
2. **Laws**: Document what laws instances must satisfy
3. **Superclasses**: Use superclasses to share functionality (e.g., `Ord` requires `Eq`)
4. **Avoid orphan instances**: Define instances in the same module as the type or the class
5. **Consider newtype**: Use newtype wrappers instead of orphan instances when possible

```haskell
-- Good type class design
class Hashable a where
  hash :: a -> Int
  hashWithSalt :: Int -> a -> Int
  hashWithSalt salt x = salt `combine` hash x
  -- Minimal complete definition: hash
```
