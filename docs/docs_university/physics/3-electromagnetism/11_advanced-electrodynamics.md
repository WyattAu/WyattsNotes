---
title: Advanced Electrodynamics
tags:
  - Physics
  - University
---

### 11.1 Multipole Expansion

The scalar potential of a localised charge distribution at large distances ($r \gg d$Where $d$ is
the size of the distribution):

$$\phi(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0}\left[\frac{Q}{r} + \frac{\mathbf{p}\cdot\hat{\mathbf{r}}}{r^2} + \frac{1}{2}\sum_{ij}Q_{ij}\frac{\hat{r}_i\hat{r}_j}{r^3} + \cdots\right]$$

**Monopole term:** $Q = \int \rho\, dV$ (total charge).

**Dipole term:** $\mathbf{p} = \int \mathbf{r}'\,\rho(\mathbf{r}')\,dV'$ (electric dipole moment).

**Quadrupole term:** $Q_{ij} = \int (3r'_ir'_j - r'^2\delta_{ij})\,\rho(\mathbf{r}')\,dV'$
(traceless quadrupole tensor).

The quadrupole term is important for nuclei with spin $I \geq 1$ and for non-spherical charge
distributions. The quadrupole moment $Q = Q_{zz}$ (in the principal axis frame) characterises the
deviation from spherical symmetry.

### 11.2 Gauge Transformations and Potentials

The scalar and vector potentials are not unique. The **gauge transformation**:

$$\mathbf{A}' = \mathbf{A} + \nabla\chi, \quad \phi' = \phi - \frac{\partial\chi}{\partial t}$$

Leaves $\mathbf{E}$ and $\mathbf{B}$ unchanged for any scalar function $\chi(\mathbf{r}, t)$.

**Common gauges:**

| Gauge    | Condition                                                                    | Use                                |
| -------- | ---------------------------------------------------------------------------- | ---------------------------------- |
| Coulomb  | $\nabla \cdot \mathbf{A} = 0$                                                | Static problems, quantum mechanics |
| Lorenz   | $\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial\phi}{\partial t} = 0$ | Relativistic problems, radiation   |
| Temporal | $\phi = 0$                                                                   | Some scattering problems           |

In the Lorenz gauge, both $\mathbf{A}$ and $\phi$ satisfy wave equations with sources:

$$\Box^2\mathbf{A} = -\mu_0\mathbf{J}, \quad \Box^2\phi = -\frac{\rho}{\varepsilon_0}$$

Where $\Box^2 = \nabla^2 - \frac{1}{c^2}\frac{\partial^2}{\partial t^2}$ is the d'Alembertian.

### 11.3 Electromagnetic Stress-Energy Tensor

The electromagnetic stress-energy tensor $T^{\mu\nu}$ encodes the energy density, momentum density,
and stress:

$$T^{00} = \frac{1}{2}\left(\varepsilon_0 E^2 + \frac{B^2}{\mu_0}\right) \quad \text{(energy density)}$$

$$T^{0i} = \frac{1}{c}(\mathbf{E} \times \mathbf{B})_i = \frac{S_i}{c} \quad \text{(momentum density)}$$

$$T^{ij} = -\varepsilon_0 E_i E_j - \frac{1}{\mu_0}B_i B_j + \frac{1}{2}\delta_{ij}\left(\varepsilon_0 E^2 + \frac{B^2}{\mu_0}\right) \quad \text{(Maxwell stress tensor)}$$

**Conservation law:** $\partial_\mu T^{\mu\nu} = -f^\nu$ where $f^\nu$ is the Lorentz force density
on charges.

**Radiation pressure:** For a normally incident plane wave with intensity $I$:

$$P_{\text{rad} = \frac{I}{c} = \frac{1}{2}\varepsilon_0 E_0^2}$$

For a perfect reflector, the radiation pressure is $2I/c$ (momentum transfer is doubled).

<details>
<summary>Worked Example 11.1: Radiation Pressure from Sunlight</summary>

Solar constant at Earth: $I = 1361$ W/m$^2$.

Radiation pressure on a perfectly absorbing surface:

$$P = \frac{I}{c} = \frac{1361}{3 \times 10^8} = 4.54 \times 10^{-6}\ \text{N}/m^2 = 4.54\ \mu\text{Pa}$$

For a perfect reflector: $P = 9.07\,\mu\text{Pa}$.

This is tiny compared to atmospheric pressure ($10^5$ Pa), but is significant for:

- Solar sails: A 100 m $\times$ 100 m sail with 90% reflectivity experiences $F \approx 0.12$ N,
  producing acceleration $a \approx 0.6$ mm/s$^2$ for a 100 kg sail.
- Asteroid deflection: Sustained radiation pressure can perturb asteroid orbits over years.
- Atom optics: Laser cooling uses radiation pressure to slow atoms to microkelvin temperatures.

</details>

## Common Pitfalls (Additional)

1. **$v_p > c$ does not violate relativity:** The phase velocity in a waveguide exceeds $c$But no
   information or energy travels faster than $c$. The group velocity (signal velocity) is always
   $v_g < c$. Similarly, the refracted phase front in a prism can appear to move faster than $c$But
   the actual signal does not.

2. **Gauge choice matters for potentials, not fields:** Different gauges give different $\mathbf{A}$
   and $\phi$ for the same $\mathbf{E}$ and $\mathbf{B}$. In quantum mechanics, the Hamiltonian
   depends on the gauge, but all physical observables are gauge-invariant. The Aharonov--Bohm effect
   shows that even in regions where $\mathbf{E} = \mathbf{B} = 0$The vector potential $\mathbf{A}$
   has measurable physical effects.

3. **Multipole expansion convergence:** The multipole expansion converges only outside a sphere that
   encloses all charges. Inside the charge distribution, the expansion diverges and must not be
   used. The expansion parameter is $d/r$ where $d$ is the source size and $r$ is the observation
   distance.

4. **Radiation fields vs. Near fields:** At distances $r \ll \lambda$ (near field), the fields are
   dominated by $1/r^2$ (induction) and $1/r^3$ (electrostatic/magnetostatic) terms. The radiation
   fields ($\propto 1/r$) dominate only in the far field ($r \gg \lambda$). Do not apply the Larmor
   formula or radiation resistance in the near field.

5. **Poynting vector is not unique:** The Poynting vector
   $\mathbf{S} = \mathbf{E} \times \mathbf{H}$ is gauge-dependent and can be nonzero even in static
   situations (e.g., a charged capacitor in a constant magnetic field). Only the surface integral
   $\oint \mathbf{S} \cdot d\mathbf{a}$ (total power flow) is physically meaningful.

## Problems (Additional)

<details>
<summary>Problem 19: TE$_{10}$ Mode Field Patterns</summary>

For a rectangular waveguide ($a \times b$) operating in TE$_{10}$ mode at frequency $f$:

(a) Write the complete expressions for all six field components ($E_x, E_y, E_z, B_x, B_y, B_z$).

(b) Sketch the field pattern: show the direction and relative magnitude of $\mathbf{E}$ and
$\mathbf{B}$ in the $xy$-plane at $z = 0$.

(c) Find the positions of maximum surface current density on the walls and explain why the waveguide
loss is minimised by making the broad wall dimension $a$ as large as possible (for a given $f$).

**Solution:**

(a) For TE$_{10}$: $B_z = B_0\cos(\pi x/a)\,e^{i(\beta z - \omega t)}$.

$$E_x = 0, \quad E_y = \frac{i\omega\mu_0 a}{\pi}B_0\sin\!\left(\frac{\pi x}{a}\right)e^{i(\beta z - \omega t)}$$

$$E_z = 0$$

$$B_x = -\frac{i\beta a}{\pi}B_0\sin\!\left(\frac{\pi x}{a}\right)e^{i(\beta z - \omega t)}, \quad B_y = 0$$

$$B_z = B_0\cos\!\left(\frac{\pi x}{a}\right)e^{i(\beta z - \omega t)}$$

(b) The electric field $E_y$ is purely vertical, with a $\sin(\pi x/a)$ profile: zero at the side
walls ($x = 0, a$) and maximum at the centre ($x = a/2$). The magnetic field forms closed loops in
the $xz$-plane.

(c) Surface current $\mathbf{K} = \hat{\mathbf{n}} \times \mathbf{H}$. On the broad walls
($y = 0, b$): $\mathbf{K}$ has components from $B_x$ and $B_z$With maximum at $x = a/2$ (where
$\sin(\pi x/a) = 1$). The power loss per unit length is:

$$P_{\text{loss} = \frac{R_s}{2}\oint |\mathbf{K}|^2\, dl}$$

Where $R_s = \sqrt{\omega\mu_0/(2\sigma)}$ is the surface resistance. For fixed $f$Increasing $a$
reduces the current density on the broad walls and increases the power-handling capacity.

</details>

<details>
<summary>Problem 20: Antenna Radiation Pattern</summary>

A half-wave dipole antenna of length $\ell = \lambda/2$ carries a sinusoidal current distribution:

$$I(z) = I_0\cos(kz), \quad -\lambda/4 \leq z \leq \lambda/4$$

(a) Calculate the radiation fields $\mathbf{E}$ and $\mathbf{B}$ in the far field.

(b) Find the angular distribution of radiated power $dP/d\Omega$.

(c) Calculate the total radiated power and the radiation resistance. Compare with the short-dipole
result $R_{\text{rad} = 197(\ell/\lambda)^2\,\Omega}$.

**Solution:**

(a) The vector potential in the far field:

$$A_z = \frac{\mu_0}{4\pi}\frac{e^{ikr}}{r}\int_{-\lambda/4}^{\lambda/4}I_0\cos(kz')\,e^{-ikz'\cos\theta}\,dz'$$

The integral evaluates to:

$$A_z = \frac{\mu_0 I_0}{4\pi}\frac{e^{ikr}}{r}\frac{2\cos\!\left(\frac{\pi}{2}\cos\theta\right)}{k\sin^2\theta}$$

The radiation fields:

$$E_\theta = ikA_z\sin\theta = \frac{i\mu_0 c I_0}{4\pi}\frac{e^{ikr}}{r}\frac{\cos\!\left(\frac{\pi}{2}\cos\theta\right)}{\sin\theta}$$

$$B_\phi = E_\theta/c$$

(b) The angular distribution:

$$\frac{dP}{d\Omega} = \frac{r^2}{2Z_0}|E_\theta|^2 = \frac{Z_0 I_0^2}{32\pi^2}\frac{\cos^2\!\left(\frac{\pi}{2}\cos\theta\right)}{\sin^2\theta}$$

(c) Total power:

$$P = \frac{Z_0 I_0^2}{32\pi^2}\int_0^{2\pi}\!\!\int_0^\pi \frac{\cos^2\!\left(\frac{\pi}{2}\cos\theta\right)}{\sin^2\theta}\sin\theta\,d\theta\,d\phi$$

$$= \frac{Z_0 I_0^2}{16\pi}\int_0^\pi \frac{\cos^2\!\left(\frac{\pi}{2}\cos\theta\right)}{\sin\theta}\,d\theta$$

With the substitution $u = \cos\theta$: $\int_{-1}^{1}\frac{\cos^2(\pi u/2)}{1-u^2}\,du = 1.2188$
(the Siegel integral).

$$P = \frac{377 \times 1.2188}{16\pi}I_0^2 = 9.16\,I_0^2$$

Radiation resistance: $R_{\text{rad} = 2P/I_0^2 = 18.3\,\Omega}$.

For comparison, a short dipole ($\ell \ll \lambda$) of length $\lambda/2$ would give
$R_{\text{rad} = 197 \times 0.25 = 49.3\,\Omega}$. The half-wave dipole has lower radiation
resistance because the current distribution (cosine) has less total effective acceleration than a
uniform current.

The directivity of the half-wave dipole is $D = 1.64$ (2.15 dBi), slightly higher than the short
dipole ($D = 1.5$).

</details>

