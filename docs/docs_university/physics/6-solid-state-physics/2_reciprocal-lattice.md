---
title: Reciprocal Lattice
tags:
  - Physics
  - University
---

### 2.1 Definition

The **reciprocal lattice vectors** are defined by:

$$\mathbf{b}_1 = 2\pi\frac{\mathbf{a}_2 \times \mathbf{a}_3}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{a}_3)}$$

$$\mathbf{b}_2 = 2\pi\frac{\mathbf{a}_3 \times \mathbf{a}_1}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{a}_3)}$$

$$\mathbf{b}_3 = 2\pi\frac{\mathbf{a}_1 \times \mathbf{a}_2}{\mathbf{a}_1 \cdot (\mathbf{a}_2 \times \mathbf{a}_3)}$$

Every reciprocal lattice point is at:

$$\mathbf{G} = m_1\mathbf{b}_1 + m_2\mathbf{b}_2 + m_3\mathbf{b}_3, \quad m_i \in \mathbb{Z}$$

**Key property:** $\mathbf{G} \cdot \mathbf{R} = 2\pi \times \mathrm{integer}$So
$e^{i\mathbf{G}\cdot\mathbf{R}} = 1$.

**Proof of key property.**

$$\mathbf{G} \cdot \mathbf{R} = (m_1\mathbf{b}_1 + m_2\mathbf{b}_2 + m_3\mathbf{b}_3) \cdot (n_1\mathbf{a}_1 + n_2\mathbf{a}_2 + n_3\mathbf{a}_3)$$

By the orthogonality relation $\mathbf{b}_i \cdot \mathbf{a}_j = 2\pi\delta_{ij}$:

$$\mathbf{G} \cdot \mathbf{R} = 2\pi(m_1 n_1 + m_2 n_2 + m_3 n_3) = 2\pi \times \mathrm{integer}$$

$\blacksquare$

### 2.2 First Brillouin Zone

The **first Brillouin zone** is the Wigner-Seitz cell of the reciprocal lattice. It is the set of
Points closer to the origin than to any other reciprocal lattice point.

For FCC (real space), the reciprocal lattice is BCC. The first Brillouin zone is a truncated
octahedron. For BCC (real space), the reciprocal lattice is FCC.

**Important volumes:**

| Real space | Reciprocal space | BZ volume     |
| ---------- | ---------------- | ------------- |
| SC ($a$)   | SC ($2\pi/a$)    | $(2\pi/a)^3$  |
| BCC ($a$)  | FCC ($4\pi/a$)   | $2(2\pi/a)^3$ |
| FCC ($a$)  | BCC ($4\pi/a$)   | $4(2\pi/a)^3$ |

$V_{\mathrm{BZ} = (2\pi)^3 / V_{\mathrm{cell}}}$.

### 2.3 Reciprocal Lattice and Planes

**Theorem 2.1.** The reciprocal lattice vector
$\mathbf{G}_{hkl} = h\mathbf{b}_1 + k\mathbf{b}_2 + l\mathbf{b}_3$ Is perpendicular to the
real-space planes $(hkl)$And $\lvert\mathbf{G}_{hkl}\rvert = 2\pi/d_{hkl}$ where $d_{hkl}$ is the
interplanar spacing.

**Proof.** The plane $(hkl)$ has intercepts $\mathbf{a}_1/h$, $\mathbf{a}_2/k$, $\mathbf{a}_3/l$.
Two vectors in this plane are $\mathbf{a}_2/k - \mathbf{a}_1/h$ and
$\mathbf{a}_3/l - \mathbf{a}_1/h$.

$\mathbf{G}_{hkl} \cdot (\mathbf{a}_2/k - \mathbf{a}_1/h) = (2\pi/k)k - (2\pi/h)h = 0$.

Similarly $\mathbf{G}_{hkl} \cdot (\mathbf{a}_3/l - \mathbf{a}_1/h) = 0$. Hence $\mathbf{G}_{hkl}$
is Perpendicular to the plane.

For the spacing: the plane through the origin has equation $\mathbf{G}_{hkl} \cdot \mathbf{r} = 0$.
The next parallel plane is $\mathbf{G}_{hkl} \cdot \mathbf{r} = 2\pi$ (since
$e^{i\mathbf{G}\cdot\mathbf{r}} = 1$ On all lattice planes). The distance from the origin to this
plane is $d_{hkl} = 2\pi/\lvert\mathbf{G}_{hkl}\rvert$. $\blacksquare$

### 2.4 Brillouin Zone Construction

<details>
<summary>Worked Example: First Brillouin Zone of the 2D Square Lattice</summary>

For a 2D square lattice with primitive vectors $\mathbf{a}_1 = a\hat{x}$, $\mathbf{a}_2 = a\hat{y}$:

$$\mathbf{b}_1 = \frac{2\pi}{a}\hat{x}, \quad \mathbf{b}_2 = \frac{2\pi}{a}\hat{y}$$

The nearest reciprocal lattice points to the origin are at $(\pm 2\pi/a,\, 0)$ and
$(0,\, \pm 2\pi/a)$. Their perpendicular bisectors are the lines $k_x = \pm\pi/a$ and
$k_y = \pm\pi/a$.

The next-nearest points are at $(\pm 2\pi/a,\, \pm 2\pi/a)$. Their perpendicular bisectors are
$k_x + k_y = \pm 2\pi/a$ and $k_x - k_y = \pm 2\pi/a$.

The first Brillouin zone is bounded by the four nearest-neighbour bisectors and is a square with
Vertices at $(\pm\pi/a,\, \pm\pi/a)$ and area $(2\pi/a)^2$.

The second Brillouin zone is the region between the first zone and the bisectors of the next-nearest
Neighbours.

</details>

<details>
<summary>Worked Example: First Brillouin Zone of the 2D Hexagonal Lattice</summary>

For a 2D hexagonal lattice with $\mathbf{a}_1 = a\hat{x}$
$\mathbf{a}_2 = a(\hat{x}/2 + \sqrt{3}\hat{y}/2)$:

$$\mathbf{b}_1 = \frac{2\pi}{a}\left(\hat{x} - \frac{\hat{y}}{\sqrt{3}}\right), \quad \mathbf{b}_2 = \frac{4\pi}{a\sqrt{3}}\hat{y}$$

The six nearest reciprocal lattice points form a regular hexagon. The perpendicular bisectors of The
six nearest-neighbour vectors form a regular hexagon centred at the origin --- the first Brillouin
zone.

High-symmetry points: $\Gamma$ (centre), $M$ (midpoint of edge), $K$ (corner).

The area of the BZ equals $(2\pi)^2/A_{\mathrm{cell}}$ where $A_{\mathrm{cell} = a^2\sqrt{3}/2}$.

</details>

### 2.5 Ewald Sphere Construction

The **Ewald sphere** provides a geometric criterion for when diffraction occurs. Given an incident
Wave vector $\mathbf{k}$ (with $\lvert\mathbf{k}\rvert = 2\pi/\lambda$) and the reciprocal lattice:

1. Draw $\mathbf{k}$ terminating at the origin of reciprocal space.
2. Construct a sphere of radius $k = 2\pi/\lambda$ centred at the start of $\mathbf{k}$.
3. Diffraction occurs for every reciprocal lattice point $\mathbf{G}$ that lies on the sphere, since
   then $\mathbf{k}' = \mathbf{k} + \mathbf{G}$ also has $\lvert\mathbf{k}'\rvert = k$ (elastic
   scattering condition).

**Implications:**

- For a fixed wavelength and a single crystal, very few reciprocal lattice points lie on the Ewald
  sphere. The crystal must be rotated to bring different points onto the sphere.
- As $\lambda$ decreases (shorter wavelength), the Ewald sphere radius increases and more points
  satisfy the condition.
- For $\lambda \to 0$ (e.g., electron diffraction), the Ewald sphere is effectively flat, and the
  Laue condition reduces to a planar section through reciprocal space.

<details>
<summary>Worked Example: Ewald Sphere for Aluminium</summary>

Aluminium is FCC with $a = 0.405$ nm. The reciprocal lattice is BCC with conventional cubic Constant
$4\pi/a = 3.10 \times 10^{10}$ m$^{-1}$.

Using Cu $K_\alpha$ radiation ($\lambda = 0.15406$ nm), the Ewald sphere radius is
$k = 2\pi/\lambda = 4.08 \times 10^{10}$ m$^{-1}$.

The shortest reciprocal lattice vector has magnitude
$G_{\min} = 2\pi/(a\sqrt{2}) = 1.10 \times 10^{10}$ m$^{-1}$ (the (111) reflection of FCC).

Since $k = 4.08 \times 10^{10}$ m$^{-1} \gt G_{\min}$The (111) point can lie on the Ewald sphere
When the crystal is appropriately oriented. The maximum accessible $G$ is
$G_{\max} = 2k = 8.16 \times 10^{10}$ M$^{-1}$Which allows access to many reflections.

The **limiting sphere** of radius $2k$ centred at the origin contains all reciprocal lattice points
That can potentially be accessed by rotating the crystal. Points outside this sphere can never
Satisfy the diffraction condition for the given wavelength.

</details>

### 2.6 Structure Factor Calculations

<details>
<summary>Worked Example: Structure Factor of the NaCl Structure</summary>

NaCl has an FCC lattice with a two-atom basis: Na$^+$ at $(0,0,0)$ and Cl$^-$ at $(a/2, 0, 0)$ (or
equivalently, Cl$^-$ at $(1/2, 0, 0)$ in fractional coordinates).

The FCC sublattice contributes a factor
$S_{\mathrm{FCC} = f[1 + e^{-i\pi(h+k)} + e^{-i\pi(h+l)} + e^{-i\pi(k+l)}]}$ Which is zero unless
$h,k,l$ are all even or all odd.

For allowed FCC reflections, the basis factor is:

$$F_{\mathrm{basis} = f_{\mathrm{Na} + f_{\mathrm{Cl}\, e^{-i\pi h}}}}$$

When $h,k,l$ are all even: $F = f_{\mathrm{Na} + f_{\mathrm{Cl}}}$. When $h,k,l$ are all odd:
$F = f_{\mathrm{Na} - f_{\mathrm{Cl}}}$.

The intensity $I \propto \lvert S\rvert^2$:

- All even: $I \propto (f_{\mathrm{Na} + f_{\mathrm{Cl})^2}}$ (strong)
- All odd: $I \propto (f_{\mathrm{Na} - f_{\mathrm{Cl})^2}}$ (weak, since
  $f_{\mathrm{Na} \approx f_{\mathrm{Cl}}}$ at high scattering angles where form factors converge)

</details>

