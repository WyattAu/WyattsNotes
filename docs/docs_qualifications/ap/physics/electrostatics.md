---
title: Electrostatics
description: "Electrostatics -- Electric Charge, Coulomb's Law, Electric Fields, Gauss's Law, Electric Potential, Capacitance, and Dielectrics (AP Physics C: E&M)."
date: 2026-05-05
tags:
  - Physics
  - AP
categories:
  - Physics
slug: electrostatics
---
## Electric Charge

Charge is a fundamental property of matter. There are two types: positive and negative.

- The elementary charge is $e = 1.602 \times 10^{-19}$ C.
- Charge is quantized: $q = ne$ for integer $n$.
- Charge is conserved: the net charge in an isolated system is constant.
- Conductors allow free movement of charge; insulators do not.

### Coulomb's Law

The electrostatic force between two point charges is:

$$
\vec{F}_{12} = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{r^2}\hat{r}_{12}
$$

Where $\epsilon_0 = 8.854 \times 10^{-12}$ C$^2$/N$\cdot$M$^2$ is the permittivity of free space and
$k = \dfrac{1}{4\pi\epsilon_0} = 8.99 \times 10^9$ N$\cdot$M$^2$/C$^2$.

### Superposition Principle

For a system of $n$ point charges, the net force on charge $q_0$ is:

$$
\vec{F} = q_0 \sum_{i=1}^{n} \frac{1}{4\pi\epsilon_0} \frac{q_i}{|\vec{r} - \vec{r}_i|^2} \hat{r}_{0i}
$$

This is a vector sum; each pair interacts independently.

### Continuous Charge Distributions

For a continuous charge distribution, replace the sum with an integral:

$$
\vec{F} = \int \frac{1}{4\pi\epsilon_0} \frac{dq}{r^2}\hat{r}
$$

Where $dq$ depends on the geometry:
- Linear: $dq = \lambda\, dl$ (charge per unit length)
- Surface: $dq = \sigma\, dA$ (charge per unit area)
- Volume: $dq = \rho\, dV$ (charge per unit volume)

:::info[Example: Force from a uniformly charged rod]

A rod of length $L$ carries total charge $Q$ distributed uniformly. Find the force on a point charge $q$
Placed along the rod's axis at distance $a$ from one end.

The linear charge density is $\lambda = Q/L$. Place the rod along the $x$-axis from $x = 0$ to $x = L$
And the point charge at $x = L + a$.

$$
F = \int_0^L \frac{1}{4\pi\epsilon_0} \frac{q \lambda\, dx}{(L + a - x)^2} = \frac{q\lambda}{4\pi\epsilon_0} \int_0^L \frac{dx}{(L+a-x)^2}
$$

Let $u = L + a - x$$du = -dx$:

$$
F = \frac{q\lambda}{4\pi\epsilon_0} \int_{L+a}^{a} \frac{-du}{u^2} = \frac{q\lambda}{4\pi\epsilon_0} \left[\frac{1}{u}\right]_a^{L+a} = \frac{q\lambda}{4\pi\epsilon_0}\left(\frac{1}{a} - \frac{1}{L+a}\right) = \frac{qQ}{4\pi\epsilon_0\, a(L+a)}
$$

:::

## Electric Field

The electric field at a point is the force per unit charge:

$$
\vec{E} = \frac{\vec{F}}{q_0} = \frac{1}{4\pi\epsilon_0} \frac{q}{r^2}\hat{r}
$$

The field is defined at every point in space regardless of whether a test charge is present.

### Electric Field of a Continuous Distribution

$$
\vec{E} = \frac{1}{4\pi\epsilon_0} \int \frac{dq}{r^2}\hat{r}
$$

:::info[Example: Electric field on the axis of a charged ring]

A ring of radius $R$ carries total charge $Q$. Find the electric field at distance $x$ along its axis.

By symmetry, the perpendicular components cancel. Only the axial component survives:

$$
DE_x = \frac{1}{4\pi\epsilon_0} \frac{dq}{R^2 + x^2} \cdot \frac{x}{\sqrt{R^2 + x^2}} = \frac{1}{4\pi\epsilon_0} \frac{x\, dq}{(R^2 + x^2)^{3/2}}
$$

$$
E_x = \frac{1}{4\pi\epsilon_0} \frac{x}{(R^2 + x^2)^{3/2}} \int dq = \frac{1}{4\pi\epsilon_0} \frac{Qx}{(R^2 + x^2)^{3/2}}
$$

At the center ($x = 0$): $E = 0$As expected by symmetry.

:::

:::info[Example: Electric field of an infinite line of charge]

For an infinite line with linear charge density $\lambda$Use cylindrical symmetry. Place the line along
The $z$-axis. A segment $dz$ at the origin produces a field with perpendicular component:

$$
DE_\perp = \frac{1}{4\pi\epsilon_0} \frac{\lambda\, dz}{z^2 + r^2} \cdot \frac{r}{\sqrt{z^2 + r^2}}
$$

Integrating from $z = -\infty$ to $\infty$:

$$
E = \frac{\lambda r}{4\pi\epsilon_0} \int_{-\infty}^{\infty} \frac{dz}{(z^2 + r^2)^{3/2}} = \frac{\lambda r}{4\pi\epsilon_0} \cdot \frac{2}{r^2} = \frac{\lambda}{2\pi\epsilon_0 r}
$$

:::

### Electric Field Lines

- Field lines point away from positive charges and toward negative charges.
- The density of lines is proportional to the field magnitude.
- Lines never cross.
- Lines begin on positive charges and end on negative charges (or extend to infinity).

## Gauss's Law

Gauss's law relates the electric flux through a closed surface to the enclosed charge:

$$
\oint_S \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc{}}}{\epsilon_0}
$$

### Choosing a Gaussian Surface

Choose a surface where $\vec{E}$ is either constant and parallel to $d\vec{A}$Or perpendicular to
$d\vec{A}$ (contributing zero flux). Common choices exploit symmetry: spheres, cylinders, and boxes.

### Applications of Gauss's Law

#### Field of an Infinite Plane (surface charge density $\sigma$)

Choose a cylindrical Gaussian surface piercing the plane. The flux through the curved sides is zero
($\vec{E} \perp d\vec{A}$). The flux through each flat end is $EA$.

$$
2EA = \frac{\sigma A}{\epsilon_0} \implies E = \frac{\sigma}{2\epsilon_0}
$$

This result is independent of distance from the plane.

#### Field of a Uniformly Charged Sphere (total charge $Q$Radius $R$)

**Outside ($r > R$):** Choose a spherical Gaussian surface of radius $r$.

$$
\oint \vec{E} \cdot d\vec{A} = E \cdot 4\pi r^2 = \frac{Q}{\epsilon_0} \implies E = \frac{Q}{4\pi\epsilon_0 r^2}
$$

This is identical to a point charge.

**Inside ($r < R$):** Only charge within radius $r$ is enclosed. If the charge density is uniform,
$\rho = Q / (\tfrac{4}{3}\pi R^3)$So $Q_{\text{enc{}} = \rho \cdot \tfrac{4}{3}\pi r^3 = Q r^3/R^3$.

$$
E \cdot 4\pi r^2 = \frac{Qr^3}{\epsilon_0 R^3} \implies E = \frac{Qr}{4\pi\epsilon_0 R^3}
$$

The field inside grows linearly with $r$ and reaches its maximum at $r = R$.

#### Field of an Infinite Cylindrical Shell (radius $R$Linear charge density $\lambda$)

**Outside ($r > R$):** Cylindrical Gaussian surface of radius $r$Length $L$.

$$
\oint \vec{E} \cdot d\vec{A} = E \cdot 2\pi r L = \frac{\lambda L}{\epsilon_0} \implies E = \frac{\lambda}{2\pi\epsilon_0 r}
$$

**Inside ($r < R$):** $Q_{\text{enc{}} = 0$So $E = 0$.

:::info[Example: Non-conducting sphere with non-uniform charge density]

A sphere of radius $R$ has charge density $\rho(r) = \rho_0 (1 - r/R)$ for $0 \le r \le R$. Find $E$
Inside and outside.

$Q_{\text{enc{}}(r) = \int_0^r \rho(r') \cdot 4\pi r'^2\, dr' = 4\pi\rho_0 \int_0^r \left(r'^2 - \frac{r'^3}{R}\right) dr'$

$$
Q_{\text{enc{}}(r) = 4\pi\rho_0 \left[\frac{r^3}{3} - \frac{r^4}{4R}\right]
$$

Inside ($r \le R$):

$$
E = \frac{\rho_0}{\epsilon_0}\left(\frac{r}{3} - \frac{r^2}{4R}\right)
$$

Outside ($r > R$): First find $Q_{\text{total{}} = 4\pi\rho_0 [R^3/3 - R^3/4] = 4\pi\rho_0 R^3/12 = \pi\rho_0 R^3/3$.

$$
E = \frac{\pi\rho_0 R^3}{12\epsilon_0 r^2}
$$

:::

## Electric Potential

The electric potential difference between two points is the work done per unit charge:

$$
V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{l}
$$

The potential at a distance $r$ from a point charge $q$ (choosing $V(\infty) = 0$):

$$
V = \frac{q}{4\pi\epsilon_0 r}
$$

### Relation Between Field and Potential

$$
\vec{E} = -\nabla V = -\left(\frac{\partial V}{\partial x}\hat{i} + \frac{\partial V}{\partial y}\hat{j} + \frac{\partial V}{\partial z}\hat{k}\right)
$$

In one dimension: $E = -\dfrac{dV}{dx}$.

### Potential of Continuous Distributions

$$
V = \frac{1}{4\pi\epsilon_0} \int \frac{dq}{r}
$$

:::info[Example: Potential on the axis of a charged disk]

A disk of radius $R$ has surface charge density $\sigma$. Find the potential at distance $x$ along the
Axis.

Divide the disk into rings of radius $r$ and width $dr$. Each ring has charge $dq = \sigma \cdot 2\pi r\, dr$.

The distance from a ring at radius $r$ to the point at height $x$ is $\sqrt{r^2 + x^2}$.

$$
V = \frac{1}{4\pi\epsilon_0} \int_0^R \frac{\sigma \cdot 2\pi r\, dr}{\sqrt{r^2 + x^2}} = \frac{\sigma}{2\epsilon_0} \left[\sqrt{r^2 + x^2}\right]_0^R
$$

$$
V = \frac{\sigma}{2\epsilon_0}\left(\sqrt{R^2 + x^2} - |x|\right)
$$

:::

### Electric Potential Energy

For a system of point charges, the total potential energy is:

$$
U = \frac{1}{2}\sum_{i=1}^{n} q_i V_i
$$

Where $V_i$ is the potential at the location of $q_i$ due to all other charges. For two point charges:

$$
U = \frac{q_1 q_2}{4\pi\epsilon_0 r}
$$

:::info[Example: Energy to assemble a square of charges]

Four charges $q$ are placed at the corners of a square of side $a$. Find the total potential energy.

There are $\binom{4}{2} = 6$ pairs. Four pairs are side-by-side (distance $a$), and two are diagonal
(distance $a\sqrt{2}$).

$$
U = \frac{4 q^2}{4\pi\epsilon_0 a} + \frac{2 q^2}{4\pi\epsilon_0 a\sqrt{2}} = \frac{q^2}{4\pi\epsilon_0 a}\left(4 + \sqrt{2}\right)
$$

:::

## Capacitance

Capacitance is defined as:

$$
C = \frac{Q}{V}
$$

### Parallel Plate Capacitor

Two plates of area $A$ separated by distance $d$:

$$
C = \frac{\epsilon_0 A}{d}
$$

**Derivation:** The field between infinite parallel plates is $E = \sigma/\epsilon_0 = Q/(\epsilon_0 A)$.
The potential difference is $V = Ed = Qd/(\epsilon_0 A)$So $C = Q/V = \epsilon_0 A/d$.

### Cylindrical Capacitor

Inner radius $a$Outer radius $b$Length $L$.

By Gauss's law, the field at radius $r$ ($a \le r \le b$) is $E = \lambda/(2\pi\epsilon_0 r)$ where
$\lambda = Q/L$.

$$
V = -\int_b^a E\, dr = \frac{\lambda}{2\pi\epsilon_0} \int_a^b \frac{dr}{r} = \frac{\lambda}{2\pi\epsilon_0}\ln\frac{b}{a}
$$

$$
C = \frac{Q}{V} = \frac{\lambda L}{V} = \frac{2\pi\epsilon_0 L}{\ln(b/a)}
$$

### Spherical Capacitor

Inner radius $a$Outer radius $b$.

$$
E = \frac{Q}{4\pi\epsilon_0 r^2} \quad (a \le r \le b)
$$

$$
V = -\int_b^a \frac{Q}{4\pi\epsilon_0 r^2}\, dr = \frac{Q}{4\pi\epsilon_0}\left(\frac{1}{a} - \frac{1}{b}\right)
$$

$$
C = \frac{Q}{V} = \frac{4\pi\epsilon_0}{\frac{1}{a} - \frac{1}{b}} = \frac{4\pi\epsilon_0 ab}{b - a}
$$

For an isolated sphere ($b \to \infty$): $C = 4\pi\epsilon_0 a$.

### Energy Stored in a Capacitor

$$
U = \frac{Q^2}{2C} = \frac{1}{2}CV^2 = \frac{1}{2}QV
$$

**Derivation from work:** The work to add charge $dq$ to a capacitor at potential $V = q/C$ is
$dU = V\, dq = (q/C)\, dq$.

$$
U = \int_0^Q \frac{q}{C}\, dq = \frac{Q^2}{2C}
$$

### Energy Density of the Electric Field

$$
U_E = \frac{1}{2}\epsilon_0 E^2
$$

For a parallel plate capacitor: $U = \frac{1}{2}\epsilon_0 E^2 \cdot Ad = u_E \cdot \text{volume{}$.

### Capacitors in Combination

**Series:** $\dfrac{1}{C_{\text{eq{}}} = \sum \dfrac{1}{C_i}$

**Parallel:** $C_{\text{eq{}} = \sum C_i$

## Dielectrics

A dielectric is an insulating material placed between capacitor plates. When an external field $\vec{E}_0$
Is applied, the dielectric polarizes, creating an opposing field $\vec{E}_p$. The net field is reduced:

$$
E = \frac{E_0}{\kappa}
$$

Where $\kappa$ is the dielectric constant ($\kappa \ge 1$).

### Effect on Capacitance

With a dielectric filling the gap:

$$
C = \kappa C_0
$$

Where $C_0$ is the capacitance without the dielectric.

### Bound Charge and Gauss's Law with Dielectrics

The electric displacement field is:

$$
\vec{D} = \epsilon_0 \vec{E} + \vec{P} = \epsilon_0 \kappa \vec{E}
$$

Gauss's law for $\vec{D}$:

$$
\oint \vec{D} \cdot d\vec{A} = Q_{\text{free, enc{}}
$$

:::info[Example: Parallel plate capacitor with partial dielectric]

A parallel plate capacitor has plate area $A$ and separation $d$. A dielectric of thickness $t < d$ and
Constant $\kappa$ is inserted. Find the capacitance.

Treat the gap as two capacitors in series: one with dielectric ($t$) and one air-filled ($d - t$).

$$
\frac{1}{C} = \frac{t}{\kappa \epsilon_0 A} + \frac{d - t}{\epsilon_0 A} = \frac{t + \kappa(d - t)}{\kappa \epsilon_0 A}
$$

$$
C = \frac{\kappa \epsilon_0 A}{\kappa d - (\kappa - 1)t}
$$

:::

## Common Pitfalls

1. **Confusing electric field and electric force.** $\vec{E} = \vec{F}/q_0$. The field exists
 independently of any test charge. The force depends on the charge placed in the field.
2. **Forgetting that Gauss's law gives the total flux, not the field directly.** You must exploit
 symmetry to pull $E$ out of the integral. Gauss's law is always true, but it is only useful when
 symmetry allows you to determine $\vec{E}$.
3. **Incorrect sign in the potential integral.** $V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{l}$. The
 negative sign is essential. When you move against the field, the potential increases.
4. **Confusing potential and potential energy.** $U = qV$. Potential is a property of the field;
 potential energy depends on the charge placed in the field.
5. **Using the wrong Gaussian surface.** Choose the surface that matches the symmetry of the charge
 distribution. For a point charge or sphere, use a sphere. For a line or cylinder, use a cylinder.
 For a plane, use a cylinder with flat ends parallel to the plane.
6. **Ignoring conductor behavior in electrostatics.** Inside a conductor in equilibrium, $\vec{E} = 0$
 and all excess charge resides on the surface. The surface is an equipotential.
7. **Incorrectly handling series and parallel capacitors.** In series, the charge on each capacitor is
 the same. In parallel, the voltage across each capacitor is the same.
8. **Forgetting the factor of $1/2$ in potential energy of a charge distribution.** The energy to
 assemble $n$ charges is $\frac{1}{2}\sum q_i V_i$Not $\sum q_i V_i$. Without the factor of $1/2$
 each pair is counted twice.

## Practice Questions

1. Three point charges $q_1 = 2\,\mu\text{C{}$$q_2 = -3\,\mu\text{C{}$$q_3 = 4\,\mu\text{C{}$ are placed
 at the corners of an equilateral triangle of side 0.5 m. Find the net force on $q_1$.

2. A uniformly charged rod of length $L = 2$ m carries charge $Q = 8\,\mu\text{C{}$. Find the electric
 field at a point 1 m from one end along the perpendicular bisector of the rod.

3. A solid insulating sphere of radius $R = 0.1$ m has charge density $\rho = 10^{-6}$ C/m$^3$.
 Find the electric field at (a) $r = 0.05$ m and (b) $r = 0.2$ m from the center.

4. Derive the potential on the perpendicular bisector of a uniformly charged rod of length $L$ and
 total charge $Q$.

5. A spherical capacitor has inner radius 2 cm and outer radius 5 cm. The space between is filled with
 a dielectric of $\kappa = 3$. Find the capacitance.

6. A parallel plate capacitor with $C = 10\,\mu\text{F{}$ is charged to $100$ V. A dielectric with
 $\kappa = 4$ is inserted while the battery remains connected. Find the new charge on the plates and
 the change in stored energy.

7. A conducting sphere of radius $a$ is surrounded by a conducting spherical shell of inner radius $b$
 and outer radius $c$. The inner sphere has charge $+Q$ and the outer shell has charge $-2Q$.
 Find the electric field in all regions and the potential at $r = a$.

8. Calculate the work required to bring four charges of $+1\,\mu\text{C{}$ from infinity to the corners
 of a square of side 1 m.

<details>
<summary>Question 9: AP Exam-Style -- Field of a non-uniformly charged cylinder</summary>

An infinitely long solid cylinder of radius $R$ has volume charge density $\rho(r) = \rho_0 r/R$ for
$0 \le r \le R$. Find the electric field (a) inside ($r < R$) and (b) outside ($r > R$) the cylinder.

</details>

<details>
<summary>Answer</summary>

(a) Inside ($r < R$): Use a cylindrical Gaussian surface of radius $r$ and length $L$.

$$Q_{\text{enc{}} = \int_0^r \rho(r') \cdot 2\pi r' L\, dr' = \frac{2\pi \rho_0 L}{R} \int_0^r r'^2\, dr' = \frac{2\pi \rho_0 L r^3}{3R}$$

$$E \cdot 2\pi r L = \frac{Q_{\text{enc{}}}{\epsilon_0} = \frac{2\pi \rho_0 r^3 L}{3R\epsilon_0}$$

$$E = \frac{\rho_0 r^2}{3R\epsilon_0}$$

(b) Outside ($r > R$):

$$Q_{\text{total{}} = \frac{2\pi \rho_0 R^3 L}{3R} = \frac{2\pi \rho_0 R^2 L}{3}$$

$$E \cdot 2\pi r L = \frac{2\pi \rho_0 R^2 L}{3\epsilon_0}$$

$$E = \frac{\rho_0 R^2}{3\epsilon_0 r}$$

</details>

<details>
<summary>Question 10: AP Exam-Style -- Potential and field from a charged arc</summary>

A thin rod is bent into a semicircular arc of radius $R$ with total charge $Q$ uniformly distributed.
Find (a) the electric field at the center of the semicircle and (b) the electric potential at the
Center.

</details>

<details>
<summary>Answer</summary>

Let the arc span from $\theta = -\pi/2$ to $\theta = \pi/2$. The linear charge density is
$\lambda = Q/(\pi R)$.

(a) By symmetry, the field points along the axis of symmetry (let us call it the $y$-direction, with
The arc opening to the right). A charge element $dq = \lambda R\, d\theta$ at angle $\theta$ produces:

$$dE_y = \frac{1}{4\pi\epsilon_0}\frac{dq}{R^2}\sin\theta = \frac{\lambda}{4\pi\epsilon_0 R}\sin\theta\, d\theta$$

$$E_y = \frac{\lambda}{4\pi\epsilon_0 R}\int_{-\pi/2}^{\pi/2}\sin\theta\, d\theta = \frac{\lambda}{4\pi\epsilon_0 R}[-\cos\theta]_{-\pi/2}^{\pi/2} = \frac{\lambda}{4\pi\epsilon_0 R}(1 - (-1)) = \frac{2\lambda}{4\pi\epsilon_0 R}$$

$$E = \frac{2Q}{4\pi^2\epsilon_0 R^2} = \frac{Q}{2\pi^2\epsilon_0 R^2}$$

The $x$-components cancel by symmetry.

(b) Every charge element is at distance $R$ from the center:

$$V = \frac{1}{4\pi\epsilon_0}\int \frac{dq}{R} = \frac{Q}{4\pi\epsilon_0 R}$$

</details>

## Summary

<!-- TODO: Add a summary for this topic -->

## Worked Examples

<!-- TODO: Add worked examples for this topic -->
