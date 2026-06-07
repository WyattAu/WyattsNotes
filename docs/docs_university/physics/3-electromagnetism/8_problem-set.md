---
title: Problem Set
tags:
  - Physics
  - University
---

**Problem 1.** Starting from Maxwell's equations in differential form, derive the continuity
Equation $\nabla \cdot \mathbf{J} + \partial\rho/\partial t = 0$. Explain why this result Requires
the displacement current term.

<details>
<summary>Solution</summary>

Take the divergence of the Ampere-Maxwell law:

$$\nabla \cdot (\nabla \times \mathbf{B}) = \mu_0\nabla \cdot \mathbf{J} + \mu_0\varepsilon_0\frac{\partial}{\partial t}(\nabla \cdot \mathbf{E})$$

Since $\nabla \cdot (\nabla \times \mathbf{B}) = 0$ and
$\nabla \cdot \mathbf{E} = \rho/\varepsilon_0$:

$$0 = \mu_0\nabla \cdot \mathbf{J} + \mu_0\varepsilon_0\frac{\partial}{\partial t}\!\left(\frac{\rho}{\varepsilon_0}\right) = \mu_0\!\left(\nabla \cdot \mathbf{J} + \frac{\partial\rho}{\partial t}\right)$$

$$\nabla \cdot \mathbf{J} + \frac{\partial\rho}{\partial t} = 0$$

Without the displacement current term, we would obtain $\nabla \cdot \mathbf{J} = 0$Which Violates
charge conservation whenever $\partial\rho/\partial t \neq 0$ (e.g., inside a Charging capacitor).

_Cross-reference:_ Section 1.3, Section 4.5.

</details>

**Problem 2.** A point charge $q$ is placed at the centre of a dielectric sphere of radius $R$ And
permittivity $\varepsilon$. Find $\mathbf{D}$, $\mathbf{E}$And $\mathbf{P}$ everywhere. Determine
the bound surface charge density.

<details>
<summary>Solution</summary>

By spherical symmetry, $\mathbf{D}$ is radial. Use Gauss's law for $\mathbf{D}$ with a Spherical
Gaussian surface of radius $r$:

For $r \lt R$: $D \cdot 4\pi r^2 = q \implies \mathbf{D} = \frac{q}{4\pi r^2}\,\hat{\mathbf{r}}$.

$\mathbf{E}_{\mathrm{in} = \frac{\mathbf{D}}{\varepsilon} = \frac{q}{4\pi\varepsilon r^2}\,\hat{\mathbf{r}}}$.

$\mathbf{P} = \varepsilon_0\chi_e\mathbf{E}_{\mathrm{in} = \left(\varepsilon - \varepsilon_0\right)\frac{q}{4\pi\varepsilon r^2}\,\hat{\mathbf{r}}}$.

For $r \gt R$: $D \cdot 4\pi r^2 = q \implies \mathbf{D} = \frac{q}{4\pi r^2}\,\hat{\mathbf{r}}$.

$\mathbf{E}_{\mathrm{out} = \frac{\mathbf{D}}{\varepsilon_0} = \frac{q}{4\pi\varepsilon_0 r^2}\,\hat{\mathbf{r}}}$.

$\mathbf{P}_{\mathrm{out} = \mathbf{0}}$ (vacuum).

Bound surface charge:
$\sigma_b = \mathbf{P}\cdot\hat{\mathbf{r}}\big|_{r=R} = \left(\varepsilon - \varepsilon_0\right)\frac{q}{4\pi\varepsilon R^2}$.

Bound volume charge:
$\rho_b = -\nabla \cdot \mathbf{P} = -\frac{1}{r^2}\frac{\partial}{\partial r}(r^2 P_r) = 0$ for
$r \lt R$.

_Cross-reference:_ Section 2.10.

</details>

**Problem 3.** An infinitely long cylindrical shell of radius $R$ carries a uniform surface Charge
density $\sigma$. Find the electric field everywhere.

<details>
<summary>Solution</summary>

By cylindrical symmetry, $\mathbf{E}$ is radial and depends only on $r$. Use a Gaussian Cylinder of
radius $r$ and length $L$.

For $r \lt R$: no charge enclosed, so $\mathbf{E} = \mathbf{0}$.

For $r \gt R$: the enclosed charge is $Q_{\mathrm{enc} = \sigma \cdot 2\pi R L}$.

$$E \cdot 2\pi r L = \frac{\sigma \cdot 2\pi R L}{\varepsilon_0}$$

$$\mathbf{E} = \frac{\sigma R}{\varepsilon_0 r}\,\hat{\mathbf{r}}$$

At the surface ($r = R^+$): $E = \sigma/\varepsilon_0$Which is the discontinuity expected From the
surface charge.

_Cross-reference:_ Section 2.2, Section 2.6.

</details>

**Problem 4.** A conducting sphere of radius $a$ carries charge $Q$ and is surrounded by a
Concentric conducting spherical shell of inner radius $b$ and outer radius $c$ carrying charge $-Q$.
Find $V(r)$ everywhere.

<details>
<summary>Solution</summary>

By spherical symmetry, $\mathbf{E}$ is radial. Use Gauss's law with spherical Gaussian Surfaces.

$r \lt a$: $\mathbf{E} = \mathbf{0}$ (conductor interior), so $V = V_a$ (constant).

$a \lt r \lt b$:
$E \cdot 4\pi r^2 = Q/\varepsilon_0 \implies \mathbf{E} = \frac{Q}{4\pi\varepsilon_0 r^2}\,\hat{\mathbf{r}}$.

$$V(r) = -\int_a^r E\,dr' + V_a = \frac{Q}{4\pi\varepsilon_0}\!\left(\frac{1}{r} - \frac{1}{a}\right) + V_a$$

$b \lt r \lt c$: $\mathbf{E} = \mathbf{0}$ (conductor), so $V = V_b$ (constant).

$V_b = \frac{Q}{4\pi\varepsilon_0}\!\left(\frac{1}{b} - \frac{1}{a}\right) + V_a$.

$r \gt c$: $E \cdot 4\pi r^2 = (Q - Q)/\varepsilon_0 = 0 \implies \mathbf{E} = \mathbf{0}$So $V = 0$
(choosing $V(\infty) = 0$).

Since $V_c = 0$ and $V_c = V_b$ (same conductor), $V_b = 0$:

$$V_a = \frac{Q}{4\pi\varepsilon_0}\!\left(\frac{1}{a} - \frac{1}{b}\right)$$

This is the capacitance of the spherical capacitor: $C = Q/V_a = 4\pi\varepsilon_0 ab/(b-a)$.

_Cross-reference:_ Section 2.3, Section 2.4.

</details>

**Problem 5.** The potential on the surface of a sphere of radius $R$ is
$V(\theta) = V_0\cos\theta$. Find the potential inside and outside the sphere.

<details>
<summary>Solution</summary>

Inside ($r \lt R$), solve Laplace's equation by separation of variables in spherical Coordinates.
The general azimuthally symmetric solution is:

$$V(r,\theta) = \sum_{l=0}^{\infty}\left(A_l r^l + \frac{B_l}{r^{l+1}}\right)P_l(\cos\theta)$$

For $r \lt R$: finiteness at $r = 0$ requires $B_l = 0$.

$$V_{\mathrm{in} = \sum_{l=0}^{\infty} A_l\,r^l\,P_l(\cos\theta)}$$

Boundary condition at $r = R$: $V_{\mathrm{in}(R,\theta) = V_0\cos\theta = V_0 P_1(\cos\theta)}$.

By orthogonality of Legendre polynomials, only $l = 1$ contributes: $A_1 = V_0/R$.

$$V_{\mathrm{in} = \frac{V_0}{R}\,r\cos\theta = \frac{V_0}{R}\,z}$$

For $r \gt R$: $V \to 0$ as $r \to \infty$ requires $A_l = 0$.

$$V_{\mathrm{out} = \sum_{l=0}^{\infty}\frac{B_l}{r^{l+1}}P_l(\cos\theta)}$$

Matching at $r = R$: $B_1/R^2 = V_0 \implies B_1 = V_0 R^2$.

$$V_{\mathrm{out} = \frac{V_0 R^2}{r^2}\cos\theta}$$

The interior field is uniform:
$\mathbf{E}_{\mathrm{in} = -\nabla V_{\mathrm{in} = -(V_0/R)\,\hat{\mathbf{z}}}}$.

_Cross-reference:_ Section 2.4, Section 2.7.

</details>

**Problem 6.** Prove the uniqueness theorem for Neumann boundary conditions: the solution to
$\nabla^2 V = -\rho/\varepsilon_0$ in a volume $\mathcal{V}$ is unique up to an additive Constant
when $\partial V/\partial n$ is specified on $\mathcal{S}$.

<details>
<summary>Solution</summary>

Suppose $V_1$ and $V_2$ both satisfy Poisson's equation with the same Neumann boundary Condition
$\partial V_1/\partial n = \partial V_2/\partial n$ on $\mathcal{S}$. Define $U = V_1 - V_2$. Then
$\nabla^2 U = 0$ in $\mathcal{V}$ and $\partial U/\partial n = 0$ on $\mathcal{S}$.

Apply Green's first identity with $\phi = \psi = U$:

$$\int_{\mathcal{V}}\lvert\nabla U\rvert^2\,dV = \oint_{\mathcal{S}} U\,\frac{\partial U}{\partial n}\,dA = 0$$

Since the integrand $\lvert\nabla U\rvert^2 \geq 0$We conclude $\nabla U = \mathbf{0}$ In
$\mathcal{V}$So $U$ is constant throughout $\mathcal{V}$.

$V_1 = V_2 + C$ for some constant $C$. The solution is unique up to an additive constant. (The
constant is physically irrelevant since only potential differences matter.) $\blacksquare$

_Cross-reference:_ Section 2.7.

</details>

**Problem 7.** A point charge $q$ is placed at distance $a$ from the centre of a grounded Conducting
sphere of radius $R$ ($a \gt R$). Find the image charge location and magnitude, And determine the
force on $q$.

<details>
<summary>Solution</summary>

Place $q$ at distance $a$ along the $z$-axis. The image charge $q'$ is at distance $b$ Along the
$z$-axis (inside the sphere).

For $V = 0$ on the sphere ($r = R$), we need:

$$\frac{q}{d_1} + \frac{q'}{d_2} = 0 \quad \mathrm{for\ all\ }\theta$$

Where $d_1^2 = R^2 + a^2 - 2Ra\cos\theta$ and $d_2^2 = R^2 + b^2 - 2Rb\cos\theta$.

The ratio $d_2/d_1$ must be constant. Setting $b = R^2/a$:

$$\frac{d_2^2}{d_1^2} = \frac{R^2 + R^4/a^2 - 2R^3\cos\theta/a}{R^2 + a^2 - 2Ra\cos\theta} = \frac{R^2}{a^2}$$

This is constant (independent of $\theta$). With $q'/q = -R/a$:

$$q' = -\frac{qR}{a}, \quad b = \frac{R^2}{a}$$

The force on $q$ is the Coulomb force due to $q'$:

$$\mathbf{F} = \frac{qq'}{4\pi\varepsilon_0(a-b)^2}\,\hat{\mathbf{z}} = \frac{q(-qR/a)}{4\pi\varepsilon_0(a-R^2/a)^2}\,\hat{\mathbf{z}} = -\frac{q^2R}{4\pi\varepsilon_0 a(a^2-R^2)}\,\hat{\mathbf{z}}$$

The negative sign indicates attraction toward the sphere. $\blacksquare$

_Cross-reference:_ Section 2.8.

</details>

**Problem 8.** A charge $+q$ is at $z = +d/2$ and $-q$ is at $z = -d/2$. Compute the Electric dipole
moment and find the potential to dipole order at a point in the $xy$-plane At distance $r$ from the
origin.

<details>
<summary>Solution</summary>

The dipole moment:

$$\mathbf{p} = \sum_i q_i\mathbf{r}_i = q\!\left(\frac{d}{2}\right)\hat{\mathbf{z}} + (-q)\!\left(-\frac{d}{2}\right)\hat{\mathbf{z}} = qd\,\hat{\mathbf{z}}$$

The dipole potential:

$$V_1(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0}\frac{\mathbf{p}\cdot\hat{\mathbf{r}}}{r^2}$$

In the $xy$-plane, $\hat{\mathbf{r}} = \cos\phi\,\hat{\mathbf{x}} + \sin\phi\,\hat{\mathbf{y}}$ So
$\mathbf{p}\cdot\hat{\mathbf{r}} = qd\,\hat{\mathbf{z}}\cdot\hat{\mathbf{r}} = 0$.

Therefore $V_1 = 0$ in the $xy$-plane. The first non-zero contribution comes from the Quadrupole
term ($\sim 1/r^3$). $\blacksquare$

_Cross-reference:_ Section 2.9.

</details>

**Problem 9.** A dielectric slab of permittivity $\varepsilon$ and thickness $d$ is inserted Between
the plates of a parallel-plate capacitor with plate separation $D \gt d$ and plate Area $A$Carrying
free charge $\pm Q$. Find the capacitance.

<details>
<summary>Solution</summary>

Let the plates be at $x = 0$ and $x = D$With the slab occupying $0 \lt x \lt d$. Since $Q$ is fixed,
$D_n = \sigma_f = Q/A$ is the same in both regions.

In the dielectric ($0 \lt x \lt d$): $E_1 = D/\varepsilon = Q/(\varepsilon A)$.

In vacuum ($d \lt x \lt D$): $E_2 = D/\varepsilon_0 = Q/(\varepsilon_0 A)$.

The potential difference:

$$V = E_1 d + E_2(D - d) = \frac{Q}{A}\!\left(\frac{d}{\varepsilon} + \frac{D-d}{\varepsilon_0}\right)$$

The capacitance:

$$C = \frac{Q}{V} = \frac{\varepsilon_0 A}{D - d + d/\varepsilon_r}$$

Where $\varepsilon_r = \varepsilon/\varepsilon_0$. For $d = D$ (fully filled):
$C = \varepsilon_r\varepsilon_0 A/D$Which is $\varepsilon_r$ times the vacuum capacitance.

_Cross-reference:_ Section 2.10.

</details>

**Problem 10.** Find the magnetic field at the centre of a square loop of side $a$ carrying Current
$I$ using the Biot-Savart law.

<details>
<summary>Solution</summary>

By symmetry, each side contributes equally. Consider one side from $(a/2, -a/2, 0)$ to
$(a/2, a/2, 0)$. For this side, $d\mathbf{l} = dy\,\hat{\mathbf{y}}$ and
$\mathbf{r} = (a/2)\hat{\mathbf{x}} - y\hat{\mathbf{y}}$So $r = \sqrt{(a/2)^2 + y^2}$.

$$d\mathbf{B} = \frac{\mu_0 I}{4\pi}\frac{d\mathbf{l} \times \mathbf{r}}{r^3} = \frac{\mu_0 I}{4\pi}\frac{dy\,\hat{\mathbf{y}} \times [(a/2)\hat{\mathbf{x}} - y\hat{\mathbf{y}}]}{r^3}$$

$$= \frac{\mu_0 I}{4\pi}\frac{(-a/2)\,dy}{[(a/2)^2+y^2]^{3/2}}\,\hat{\mathbf{z}}$$

$$B_{\mathrm{one\ side} = \frac{\mu_0 I}{4\pi}\!\left(-\frac{a}{2}\right)\!\int_{-a/2}^{a/2}\frac{dy}{[(a/2)^2+y^2]^{3/2}}}$$

Using $\int dy/(s^2+y^2)^{3/2} = y/[s^2\sqrt{s^2+y^2}]$ with $s = a/2$:

$$B_{\mathrm{one\ side} = \frac{\mu_0 I}{4\pi}\!\left(-\frac{a}{2}\right)\frac{2}{(a/2)\sqrt{(a/2)^2+(a/2)^2}} \cdot 2 = -\frac{\mu_0 I}{\pi a}\cdot\frac{1}{\sqrt{2}} \cdot 2 = -\frac{\mu_0 I}{\pi a}\sqrt{2}}$$

The magnitude from all four sides:
$B = 4 \times \frac{\sqrt{2}\,\mu_0 I}{\pi a} = \frac{2\sqrt{2}\,\mu_0 I}{\pi a}$.

$$\mathbf{B} = -\frac{2\sqrt{2}\,\mu_0 I}{\pi a}\,\hat{\mathbf{z}}$$

(by the right-hand rule, into the page for counterclockwise current). $\blacksquare$

_Cross-reference:_ Section 3.1.

</details>

**Problem 11.** A toroid with $N$ turns, inner radius $a$And outer radius $b$ carries current $I$.
Find the magnetic field everywhere.

<details>
<summary>Solution</summary>

By symmetry, $\mathbf{B}$ is tangential and depends only on $r$ (distance from the axis of
Symmetry). Apply Ampere's law to a circular loop of radius $r$.

For $r \lt a$: no current is enclosed, so $\mathbf{B} = \mathbf{0}$.

For $a \lt r \lt b$: the Amperian loop encloses all $N$ turns.

$$B \cdot 2\pi r = \mu_0 N I \implies \mathbf{B} = \frac{\mu_0 N I}{2\pi r}\,\hat{\boldsymbol{\phi}}$$

For $r \gt b$: the net enclosed current is $NI - NI = 0$So $\mathbf{B} = \mathbf{0}$.

The field is confined entirely within the toroid, unlike a solenoid where the field extends Beyond
the ends. $\blacksquare$

_Cross-reference:_ Section 3.2, Section 3.4.

</details>

**Problem 12.** A circular loop of radius $R$ carries current $I$. Find the magnetic dipole Moment
and the field on the axis at distance $z$ from the centre. Show that the result Reduces to the
dipole field for $z \gg R$.

<details>
<summary>Solution</summary>

The magnetic dipole moment: $\mathbf{m} = I\pi R^2\,\hat{\mathbf{z}}$.

From the Biot-Savart law, every element $d\mathbf{l}$ is perpendicular to $\hat{\mathbf{r}}$ So
$d\mathbf{B} = \frac{\mu_0 I}{4\pi}\frac{dl}{R^2+z^2}$. By symmetry, only the axial component
Survives:

$$B_z = \frac{\mu_0 I}{4\pi(R^2+z^2)}\frac{R}{\sqrt{R^2+z^2}} \cdot 2\pi R = \frac{\mu_0 I R^2}{2(R^2+z^2)^{3/2}}$$

For $z \gg R$: $(R^2+z^2)^{3/2} \approx z^3(1 + 3R^2/2z^2) \approx z^3$.

$$B_z \approx \frac{\mu_0 I R^2}{2z^3} = \frac{\mu_0}{4\pi}\frac{2m}{z^3}$$

The dipole field formula gives, on the axis ($\theta = 0$):

$$\mathbf{B}_{\mathrm{dip} = \frac{\mu_0}{4\pi}\frac{2\mathbf{m}}{z^3}}$$

This matches. $\blacksquare$

_Cross-reference:_ Section 3.5.

</details>

**Problem 13.** A long straight wire along the $z$-axis carries current $I$. Find the vector
Potential $\mathbf{A}$ and verify that $\nabla \times \mathbf{A}$ gives the correct $\mathbf{B}$.

<details>
<summary>Solution</summary>

By cylindrical symmetry, $\mathbf{A}$ can only depend on $s$ (the radial distance) and must Point
along $\hat{\mathbf{z}}$ (parallel to the current).

$$\mathbf{A}(s) = -\frac{\mu_0 I}{2\pi}\ln\!\left(\frac{s}{s_0}\right)\hat{\mathbf{z}}$$

Where $s_0$ is an arbitrary reference distance (gauge-dependent).

Verify: $\mathbf{B} = \nabla \times \mathbf{A}$.

In cylindrical coordinates,
$\nabla \times (A_z\,\hat{\mathbf{z}}) = -\frac{\partial A_z}{\partial s}\,\hat{\boldsymbol{\phi}}$.

$$B_\phi = -\frac{\partial}{\partial s}\!\left(-\frac{\mu_0 I}{2\pi}\ln\frac{s}{s_0}\right) = \frac{\mu_0 I}{2\pi s}$$

$$\mathbf{B} = \frac{\mu_0 I}{2\pi s}\,\hat{\boldsymbol{\phi}}$$

This matches the Ampere's law result. $\blacksquare$

_Cross-reference:_ Section 3.3, Section 3.6.

</details>

**Problem 14.** An iron ring of mean radius $R = 10$ cm, cross-sectional area $A = 4\ \mathrm{cm}^2$
And relative permeability $\mu_r = 500$ has $N = 200$ turns carrying current $I = 2$ A. Find $B$,
$H$, $M$And the total flux through the ring.

<details>
<summary>Solution</summary>

Apply Ampere's law for $\mathbf{H}$ around the ring:

$$\oint \mathbf{H} \cdot d\mathbf{l} = NI \implies H \cdot 2\pi R = NI$$

$$H = \frac{NI}{2\pi R} = \frac{200 \times 2}{2\pi \times 0.10} = \frac{400}{0.628} \approx 637\ \mathrm{A}/m$$

$$B = \mu_0 \mu_r H = 4\pi \times 10^{-7} \times 500 \times 637 \approx 0.40\ \mathrm{T}$$

$$M = \chi_m H = (\mu_r - 1)H = 499 \times 637 \approx 3.18 \times 10^5\ \mathrm{A}/m$$

Total flux: $\Phi = BA = 0.40 \times 4 \times 10^{-4} = 1.6 \times 10^{-4}\ \mathrm{Wb}$.

_Cross-reference:_ Section 3.7, Section 3.8.

</details>

**Problem 15.** A rectangular conducting loop of width $w = 0.1$ m and length $\ell = 0.2$ m Has
resistance $R = 5\ \Omega$. One end enters a region of uniform magnetic field $B = 0.5$ T
(perpendicular to the loop) at velocity $v = 2$ m/s. Find the induced EMF and Current.

<details>
<summary>Solution</summary>

As the loop enters the field with its leading edge at position $x$ inside the field:

$$\Phi_B = B \cdot w \cdot x$$

$$\mathcal{E} = -\frac{d\Phi_B}{dt} = -Bw\frac{dx}{dt} = -Bwv = -0.5 \times 0.1 \times 2 = -0.1\ \mathrm{V}$$

The magnitude is $0.1$ V. The current is:

$$I = \frac{\lvert\mathcal{E}\rvert}{R} = \frac{0.1}{5} = 0.02\ \mathrm{A}$$

By Lenz's law, the current flows to oppose the increasing flux (counterclockwise when viewed From
the direction of $\mathbf{B}$).

The magnetic braking force on the leading edge: $F = BIw = 0.5 \times 0.02 \times 0.1 = 0.001$ N
(opposing the motion). $\blacksquare$

_Cross-reference:_ Section 4.1, Section 4.4.

</details>

**Problem 16.** A plane electromagnetic wave in vacuum has
$\mathbf{E} = 100\cos(kz - \omega t)\,\hat{\mathbf{x}}$ V/m. Find $B_0$The time-averaged intensity,
and the radiation pressure on a perfectly absorbing Surface.

<details>
<summary>Solution</summary>

$B_0 = E_0/c = 100/(3 \times 10^8) = 3.33 \times 10^{-7}$ T.

$\mathbf{B} = 3.33 \times 10^{-7}\cos(kz - \omega t)\,\hat{\mathbf{y}}$ T.

Time-averaged Poynting vector magnitude:

$$\langle S \rangle = \frac{E_0^2}{2\mu_0 c} = \frac{100^2}{2 \times 4\pi \times 10^{-7} \times 3 \times 10^8} = \frac{10^4}{754} \approx 13.3\ \mathrm{W}/m^2$$

Radiation pressure on a perfect absorber:

$$P_{\mathrm{rad} = \frac{\langle S \rangle}{c} = \frac{13.3}{3 \times 10^8} \approx 4.4 \times 10^{-8}\ \mathrm{Pa}}$$

_Cross-reference:_ Section 5.2, Section 5.4, Section 5.5.

</details>

**Problem 17.** Find the skin depth for a 1 MHz electromagnetic wave in copper
($\sigma = 5.96 \times 10^7$ S/m, $\mu_r \approx 1$). At what frequency does the skin depth Equal 1
$\mu$M?

<details>
<summary>Solution</summary>

At $f = 1$ MHz:

$$\delta = \sqrt{\frac{2}{\mu_0\sigma\omega}} = \sqrt{\frac{2}{4\pi \times 10^{-7} \times 5.96 \times 10^7 \times 2\pi \times 10^6}}$$

$$= \sqrt{\frac{2}{4\pi \times 5.96 \times 2\pi^2 \times 10^6}} = \sqrt{\frac{2}{4.70 \times 10^8}} \approx 65.2\ \mu\mathrm{m}$$

For $\delta = 1\ \mu$M:

$$1 \times 10^{-6} = \sqrt{\frac{2}{4\pi \times 10^{-7} \times 5.96 \times 10^7 \times 2\pi f}}$$

$$10^{-12} = \frac{2}{4\pi \times 5.96 \times 2\pi \times f} = \frac{2}{470.4\,f}$$

$$f = \frac{2}{470.4 \times 10^{-12}} \approx 4.25 \times 10^9\ \mathrm{Hz} = 4.25\ \mathrm{GHz}$$

_Cross-reference:_ Section 5.6.

</details>

**Problem 18.** Verify that Maxwell's equations in covariant form
$\partial_\mu F^{\mu\nu} = \mu_0 J^\nu$ reproduce the Ampere-Maxwell law for $\nu = 1$.

<details>
<summary>Solution</summary>

For $\nu = 1$:

$$\partial_\mu F^{\mu 1} = \mu_0 J^1 = \mu_0 J_x$$

From the field tensor:

$$F^{\mu 1} = (E_x/c,\ 0,\ -B_z,\ B_y) \quad \mathrm{for\ }\mu = 0, 1, 2, 3$$

So:

$$\partial_0 F^{01} + \partial_2 F^{21} + \partial_3 F^{31} = \mu_0 J_x$$

$$\frac{1}{c}\frac{\partial}{\partial t}\!\left(\frac{E_x}{c}\right) + \frac{\partial}{\partial y}(-B_z) + \frac{\partial}{\partial z}(B_y) = \mu_0 J_x$$

$$\frac{1}{c^2}\frac{\partial E_x}{\partial t} - \frac{\partial B_z}{\partial y} + \frac{\partial B_y}{\partial z} = \mu_0 J_x$$

Using $c^2 = 1/(\mu_0\varepsilon_0)$ and noting that
$-(\partial B_z/\partial y) + (\partial B_y/\partial z) = -(\nabla \times \mathbf{B})_x$:

$$\mu_0\varepsilon_0\frac{\partial E_x}{\partial t} - (\nabla \times \mathbf{B})_x = \mu_0 J_x$$

$$(\nabla \times \mathbf{B})_x = \mu_0\varepsilon_0\frac{\partial E_x}{\partial t} - \mu_0 J_x$$

$$\nabla \times \mathbf{B} = \mu_0\mathbf{J} + \mu_0\varepsilon_0\frac{\partial\mathbf{E}}{\partial t}$$

This is the Ampere-Maxwell law. $\blacksquare$

_Cross-reference:_ Section 7.4, Section 1.1.

</details>

