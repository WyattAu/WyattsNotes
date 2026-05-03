---
title: Maclaurin and Taylor Series -- Diagnostic Tests
description: "A-Level Further Maths diagnostic tests for Maclaurin series: standard expansions, radius of convergence, differentiation and integration of series."
slug: diag-maclaurin-taylor-series
hide_table_of_contents: true
---

# Maclaurin and Taylor Series — Diagnostic Tests

## Unit Tests

### UT-1: Standard Maclaurin Expansions
**Question:** Write the Maclaurin series up to the $x^4$ term for: (a) $e^x$, (b) $\ln(1 + x)$, (c) $\sin x$, (d) $(1 + x)^n$.

**Solution:**

(a) $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \frac{x^4}{24} + \cdots$

(b) $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots$ (valid for $-1 \lt x \le 1$).

(c) $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots = x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots$ (valid for all $x$).

(d) $(1+x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \frac{n(n-1)(n-2)(n-3)}{4!}x^4 + \cdots$ (valid for $|x| \lt 1$).

### UT-2: Maclaurin Series from First Principles
**Question:** (a) Find the Maclaurin series of $\cos x$ up to $x^6$. (b) Find the Maclaurin series of $e^{2x}$ up to $x^4$. (c) Find the Maclaurin series of $\frac{1}{1-x}$ and state its radius of convergence. (d) Use the series for $\frac{1}{1-x}$ to find the series for $\frac{1}{1+x^2}$.

**Solution:**

(a) $f(x) = \cos x$, $f(0) = 1$. $f'(x) = -\sin x$, $f'(0) = 0$. $f''(x) = -\cos x$, $f''(0) = -1$. $f'''(x) = \sin x$, $f'''(0) = 0$. $f^{(4)}(x) = \cos x$, $f^{(4)}(0) = 1$. $f^{(5)}(0) = 0$, $f^{(6)}(0) = -1$.

$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots = 1 - \frac{x^2}{2} + \frac{x^4}{24} - \frac{x^6}{720} + \cdots$

(b) $f(x) = e^{2x}$, $f^{(n)}(x) = 2^n e^{2x}$, $f^{(n)}(0) = 2^n$.
$e^{2x} = 1 + 2x + \frac{4x^2}{2} + \frac{8x^3}{6} + \frac{16x^4}{24} + \cdots = 1 + 2x + 2x^2 + \frac{4x^3}{3} + \frac{2x^4}{3} + \cdots$

(c) $f(x) = (1-x)^{-1}$. $f^{(n)}(x) = n!(1-x)^{-n-1}$, $f^{(n)}(0) = n!$.
$\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \cdots$

This is a geometric series with ratio $x$. Converges when $|x| \lt 1$. Radius of convergence $= 1$.

(d) Substitute $x \to -x^2$: $\frac{1}{1+x^2} = 1 - x^2 + x^4 - x^6 + \cdots$ (valid for $|x| \lt 1$).

### UT-3: Series Manipulation
**Question:** (a) Find the Maclaurin series of $\frac{e^x - 1}{x}$ up to $x^3$. (b) Find the Maclaurin series of $x\ln(1+x)$ up to $x^4$. (c) Find the Maclaurin series of $\cos^2 x$ up to $x^4$ using the identity $\cos^2 x = \frac{1 + \cos 2x}{2}$. (d) Evaluate $\lim_{x \to 0}\frac{e^x - 1 - x}{x^2}$ using series.

**Solution:**

(a) $e^x = 1 + x + x^2/2 + x^3/6 + \cdots$. $e^x - 1 = x + x^2/2 + x^3/6 + \cdots$.
$\frac{e^x - 1}{x} = 1 + \frac{x}{2} + \frac{x^2}{6} + \cdots$

(b) $\ln(1+x) = x - x^2/2 + x^3/3 - x^4/4 + \cdots$
$x\ln(1+x) = x^2 - \frac{x^3}{2} + \frac{x^4}{3} - \frac{x^5}{4} + \cdots$

(c) $\cos 2x = 1 - \frac{(2x)^2}{2} + \frac{(2x)^4}{24} + \cdots = 1 - 2x^2 + \frac{2x^4}{3} + \cdots$
$\cos^2 x = \frac{1}{2}\left(2 - 2x^2 + \frac{2x^4}{3}\right) = 1 - x^2 + \frac{x^4}{3} + \cdots$

(d) $e^x - 1 - x = \frac{x^2}{2} + \frac{x^3}{6} + \cdots$. $\frac{e^x - 1 - x}{x^2} = \frac{1}{2} + \frac{x}{6} + \cdots$.
$\lim_{x \to 0} = \frac{1}{2}$.

---

## Integration Tests

### IT-1: Taylor Series about a Point (with Calculus)
**Question:** (a) Find the Taylor series of $\ln x$ about $x = 1$ up to $(x-1)^4$. (b) Use the result to approximate $\ln 1.1$ correct to 4 decimal places. (c) Estimate the error in the approximation. (d) Explain why the Maclaurin series of $\ln x$ does not exist.

**Solution:**

(a) $f(x) = \ln x$, $f(1) = 0$. $f'(x) = 1/x$, $f'(1) = 1$. $f''(x) = -1/x^2$, $f''(1) = -1$. $f'''(x) = 2/x^3$, $f'''(1) = 2$. $f^{(4)}(x) = -6/x^4$, $f^{(4)}(1) = -6$.

$\ln x = (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3} - \frac{(x-1)^4}{4} + \cdots$

(b) With $x = 1.1$, $h = 0.1$: $\ln 1.1 \approx 0.1 - 0.005 + 0.000333 - 0.000025 = 0.095308 \approx 0.0953$.

(c) The next term is $\frac{(0.1)^5}{5} = 0.000002$. The error is less than the magnitude of the first omitted term: error $\lt 0.000002$. So $\ln 1.1 = 0.0953$ to 4 d.p. (Actual: $0.095310$.)

(d) $f(0) = \ln 0$ is undefined, so $f^{(n)}(0)$ does not exist for $\ln x$. The Maclaurin series requires the function and all its derivatives to be defined at $x = 0$.

### IT-2: Series for Integration (with Further Calculus)
**Question:** (a) Use series to evaluate $\int_0^{0.5} \frac{\sin x}{x}\,dx$ correct to 6 decimal places. (b) Use the series for $e^x$ to find the Maclaurin series of $\frac{e^x - e^{-x}}{2}$ (hyperbolic sine, $\sinh x$). (c) Evaluate $\int_0^{0.2} \sinh x\,dx$ using the series. (d) Find the Maclaurin series of $e^{x^2}$ and use it to find $\int_0^{0.5} e^{x^2}\,dx$.

**Solution:**

(a) $\sin x = x - x^3/6 + x^5/120 - \cdots$. $\frac{\sin x}{x} = 1 - x^2/6 + x^4/120 - \cdots$.
$\int_0^{0.5} \frac{\sin x}{x}\,dx = \left[x - \frac{x^3}{18} + \frac{x^5}{600}\right]_0^{0.5} = 0.5 - \frac{0.125}{18} + \frac{0.03125}{600}$
$= 0.5 - 0.006944 + 0.000052 = 0.493108 \approx 0.493108$.

(b) $e^x = 1 + x + x^2/2! + x^3/3! + \cdots$. $e^{-x} = 1 - x + x^2/2! - x^3/3! + \cdots$.
$\sinh x = \frac{e^x - e^{-x}}{2} = x + \frac{x^3}{3!} + \frac{x^5}{5!} + \cdots = x + \frac{x^3}{6} + \frac{x^5}{120} + \cdots$

(c) $\int_0^{0.2} \sinh x\,dx = \left[\frac{x^2}{2} + \frac{x^4}{24} + \frac{x^6}{720}\right]_0^{0.2} = 0.02 + \frac{0.0016}{24} + \frac{0.000064}{720}$
$= 0.02 + 0.0000667 + 0.0000001 = 0.020067$.

(d) $e^{x^2} = 1 + x^2 + \frac{x^4}{2!} + \frac{x^6}{3!} + \cdots = 1 + x^2 + \frac{x^4}{2} + \frac{x^6}{6} + \cdots$
$\int_0^{0.5} e^{x^2}\,dx = \left[x + \frac{x^3}{3} + \frac{x^5}{10} + \frac{x^7}{42}\right]_0^{0.5} = 0.5 + \frac{0.125}{3} + \frac{0.03125}{10} + \frac{0.0078125}{42}$
$= 0.5 + 0.04167 + 0.003125 + 0.000186 = 0.54498$.

### IT-3: Convergence and Applications (with Complex Numbers)
**Question:** (a) Find the Maclaurin series of $(1-x)^{-1/2}$ and determine its radius of convergence. (b) Use the series to approximate $\frac{1}{\sqrt{0.9}}$ correct to 5 decimal places. (c) The series $\sum_{n=0}^{\infty} \frac{x^n}{n!}$ converges for all $x$. Use this to show that $\sum_{n=0}^{\infty} \frac{(-1)^n}{n!} = \frac{1}{e}$. (d) Explain why $\sum_{n=1}^{\infty} \frac{1}{n}$ diverges while $\sum_{n=1}^{\infty} \frac{(-1)^n}{n}$ converges.

**Solution:**

(a) $(1-x)^{-1/2} = 1 + \frac{1}{2}x + \frac{1 \cdot 3}{2 \cdot 4}x^2 + \frac{1 \cdot 3 \cdot 5}{2 \cdot 4 \cdot 6}x^3 + \frac{1 \cdot 3 \cdot 5 \cdot 7}{2 \cdot 4 \cdot 6 \cdot 8}x^4 + \cdots$
$= 1 + \frac{x}{2} + \frac{3x^2}{8} + \frac{5x^3}{16} + \frac{35x^4}{128} + \cdots$

Radius of convergence: $|x| \lt 1$ (from the binomial series formula, valid when $|x| \lt 1$).

(b) With $x = 0.1$: $\frac{1}{\sqrt{0.9}} = 1 + 0.05 + 0.00375 + 0.0003125 + 0.00002734 + \cdots = 1.054090 \approx 1.05409$.

(c) $\sum_{n=0}^{\infty} \frac{x^n}{n!} = e^x$. Setting $x = -1$: $\sum_{n=0}^{\infty} \frac{(-1)^n}{n!} = e^{-1} = \frac{1}{e}$.

(d) $\sum_{n=1}^{\infty} \frac{1}{n}$ is the harmonic series, which diverges (the partial sums grow without bound, albeit slowly -- $\ln n$).

$\sum_{n=1}^{\infty} \frac{(-1)^n}{n} = -1 + \frac{1}{2} - \frac{1}{3} + \frac{1}{4} - \cdots$ is an alternating series with terms $a_n = 1/n$ that decrease to 0. By the alternating series test, it converges (to $-\ln 2$). The partial sums oscillate above and below $-\ln 2$, with the amplitude of oscillation decreasing.
