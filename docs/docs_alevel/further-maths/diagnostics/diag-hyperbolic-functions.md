---
title: "Hyperbolic Functions -- Diagnostic Tests"
description: "A-Level Further Maths diagnostic tests for hyperbolic functions: definitions, identities, calculus, inverse hyperbolic functions."
slug: diag-hyperbolic-functions
hide_table_of_contents: true
---

# Hyperbolic Functions — Diagnostic Tests

## Unit Tests

### UT-1: Definitions and Basic Identities
**Question:** (a) Express $\sinh x$ and $\cosh x$ in terms of $e^x$ and $e^{-x}$. (b) Prove that $\cosh^2 x - \sinh^2 x = 1$ (the hyperbolic Pythagorean identity). (c) Prove that $\sinh 2x = 2\sinh x\cosh x$. (d) Express $\tanh x$ in terms of $e^x$ and simplify.

**Solution:**

(a) $\sinh x = \frac{e^x - e^{-x}}{2}$. $\cosh x = \frac{e^x + e^{-x}}{2}$.

(b) $\cosh^2 x - \sinh^2 x = \left(\frac{e^x+e^{-x}}{2}\right)^2 - \left(\frac{e^x-e^{-x}}{2}\right)^2 = \frac{e^{2x} + 2 + e^{-2x} - (e^{2x} - 2 + e^{-2x})}{4} = \frac{4}{4} = 1$.

(c) $\sinh 2x = \frac{e^{2x} - e^{-2x}}{2}$. $2\sinh x\cosh x = 2 \cdot \frac{e^x-e^{-x}}{2} \cdot \frac{e^x+e^{-x}}{2} = \frac{e^{2x} - e^{-2x}}{2}$. Equal. Proven.

(d) $\tanh x = \frac{\sinh x}{\cosh x} = \frac{e^x - e^{-x}}{e^x + e^{-x}} = \frac{e^{2x} - 1}{e^{2x} + 1}$.

### UT-2: Inverse Hyperbolic Functions
**Question:** (a) Find $\text{arcsinh}(1)$ in exact form. (b) Find $\text{arccosh}(3)$ in exact form. (c) Express $\text{arcsinh}\,x$ in terms of $\ln$. (d) Solve $\sinh x = 2$.

**Solution:**

(a) $\text{arcsinh}(1) = \ln(1 + \sqrt{1 + 1}) = \ln(1 + \sqrt{2})$.

(b) $\text{arccosh}(3) = \ln(3 + \sqrt{9 - 1}) = \ln(3 + 2\sqrt{2})$.

(c) $\text{arcsinh}\,x = \ln(x + \sqrt{x^2 + 1})$.

(d) $\frac{e^x - e^{-x}}{2} = 2$. Let $u = e^x$: $u - 1/u = 4$. $u^2 - 4u - 1 = 0$. $u = \frac{4 \pm \sqrt{20}}{2} = 2 \pm \sqrt{5}$.
$e^x = 2 + \sqrt{5}$ (taking positive). $x = \ln(2 + \sqrt{5})$.

### UT-3: Calculus of Hyperbolic Functions
**Question:** (a) Find $\frac{d}{dx}\sinh x$ and $\frac{d}{dx}\cosh x$. (b) Find $\frac{d}{dx}\tanh x$. (c) Find $\int \cosh x\,dx$ and $\int \sinh x\,dx$. (d) Find $\int \tanh^2 x\,dx$.

**Solution:**

(a) $\frac{d}{dx}\sinh x = \frac{d}{dx}\frac{e^x - e^{-x}}{2} = \frac{e^x + e^{-x}}{2} = \cosh x$.
$\frac{d}{dx}\cosh x = \frac{d}{dx}\frac{e^x + e^{-x}}{2} = \frac{e^x - e^{-x}}{2} = \sinh x$.

(b) $\frac{d}{dx}\tanh x = \frac{d}{dx}\frac{\sinh x}{\cosh x} = \frac{\cosh^2 x - \sinh^2 x}{\cosh^2 x} = \frac{1}{\cosh^2 x} = \text{sech}^2\,x$.

(c) $\int \cosh x\,dx = \sinh x + C$. $\int \sinh x\,dx = \cosh x + C$.

(d) $\tanh^2 x = 1 - \text{sech}^2\,x$. $\int \tanh^2 x\,dx = \int(1 - \text{sech}^2\,x)\,dx = x - \tanh x + C$.

---

## Integration Tests

### IT-1: Hyperbolic Functions in Integration (with Calculus)
**Question:** (a) Evaluate $\int_0^1 \cosh^2 x\,dx$. (b) Evaluate $\int \text{sech}^2 x\,dx$. (c) Use the substitution $x = 2\sinh u$ to evaluate $\int \frac{1}{\sqrt{x^2 + 4}}\,dx$. (d) Find the Maclaurin series of $\cosh x$ up to $x^6$.

**Solution:**

(a) $\cosh^2 x = \frac{1 + \cosh 2x}{2}$. $\int_0^1 \frac{1 + \cosh 2x}{2}\,dx = \frac{1}{2}\left[x + \frac{\sinh 2x}{2}\right]_0^1 = \frac{1}{2}\left(1 + \frac{\sinh 2}{2}\right) = \frac{1}{2} + \frac{\sinh 2}{4}$.

(b) $\int \text{sech}^2 x\,dx = \tanh x + C$.

(c) $x = 2\sinh u$, $dx = 2\cosh u\,du$. $\sqrt{x^2+4} = 2\cosh u$.
$\int \frac{2\cosh u}{2\cosh u}\,du = \int 1\,du = u + C = \text{arcsinh}\frac{x}{2} + C = \ln\left(\frac{x}{2} + \sqrt{\frac{x^2}{4}+1}\right) + C$.

(d) $\cosh x = \frac{e^x + e^{-x}}{2} = \frac{1}{2}\left(1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \frac{x^5}{5!} + \frac{x^6}{6!} + 1 - x + \frac{x^2}{2!} - \frac{x^3}{3!} + \frac{x^4}{4!} - \frac{x^5}{5!} + \frac{x^6}{6!}\right)$
$= \frac{1}{2}\left(2 + \frac{2x^4}{4!} + \frac{2x^6}{6!}\right) = 1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \frac{x^6}{6!} = 1 + \frac{x^2}{2} + \frac{x^4}{24} + \frac{x^6}{720}$.

### IT-2: Osborn's Rule and Trigonometry (with Complex Numbers)
**Question:** (a) State Osborn's rule. (b) Use it to derive the identity for $\cosh 3x$. (c) Find $\frac{d}{dx}\text{cosech}\,x$. (d) Evaluate $\int_0^{\ln 2} \text{sech}\,x\,dx$.

**Solution:**

(a) **Osborn's rule:** Replace every $\sin$ in a trigonometric identity with $\sinh$ and every $\cos$ with $\cosh$, and change the sign of every term containing a product of two $\sinh$s. The resulting identity holds for hyperbolic functions.

(b) From $\cos 3x = 4\cos^3 x - 3\cos x$: replace $\cos \to \cosh$ (no $\sin$ terms):
$\cosh 3x = 4\cosh^3 x - 3\cosh x$.

(c) $\text{cosech}\,x = \frac{1}{\sinh x} = \frac{2}{e^x - e^{-x}}$.
$\frac{d}{dx}\text{cosech}\,x = \frac{-2(e^x + e^{-x})}{(e^x - e^{-x})^2} = \frac{-2\cosh x}{\sinh^2 x} = -\text{cosech}\,x\cosh x$.

(d) $\int_0^{\ln 2} \text{sech}\,x\,dx = \int_0^{\ln 2} \frac{2}{e^x + e^{-x}}\,dx = \int_0^{\ln 2} \frac{2e^x}{e^{2x} + 1}\,dx$.

Let $u = e^x$: $du = e^x\,dx$, $dx = du/u$. $= \int_1^2 \frac{2}{u^2+1}\,du = 2[\arctan u]_1^2 = 2(\arctan 2 - \pi/4)$.

### IT-3: Hyperbolic Functions and DEs (with Differential Equations)
**Question:** The catenary curve is given by $y = a\cosh(x/a)$. (a) Find $\frac{dy}{dx}$ and $\frac{d^2y}{dx^2}$. (b) Show that the catenary satisfies the DE $\frac{d^2y}{dx^2} = \frac{1}{a}\sqrt{1 + \left(\frac{dy}{dx}\right)^2}$. (c) Find the arc length of the catenary from $x = 0$ to $x = a$. (d) A hanging chain forms a catenary. Explain why the hyperbolic cosine models this shape.

**Solution:**

(a) $\frac{dy}{dx} = \sinh(x/a)$. $\frac{d^2y}{dx^2} = \frac{1}{a}\cosh(x/a)$.

(b) $\frac{1}{a}\sqrt{1 + \sinh^2(x/a)} = \frac{1}{a}\sqrt{\cosh^2(x/a)} = \frac{1}{a}\cosh(x/a) = \frac{d^2y}{dx^2}$. Proven.

(c) $s = \int_0^a \sqrt{1 + \sinh^2(x/a)}\,dx = \int_0^a \cosh(x/a)\,dx = a[\sinh(x/a)]_0^a = a\sinh(1)$.

(d) A hanging chain under uniform gravity takes the shape that minimises potential energy. This shape satisfies the differential equation of a catenary, whose solution is $y = a\cosh(x/a) + c$. The chain hangs with the lowest point at the vertex of the catenary (where $\cosh(0) = 1$), and the curve rises symmetrically on both sides. The hyperbolic cosine arises naturally from the equilibrium of forces: the horizontal component of tension is constant, while the vertical component varies with the weight of the chain below each point.
