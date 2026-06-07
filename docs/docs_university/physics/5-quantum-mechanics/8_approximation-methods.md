---
title: Approximation Methods
tags:
  - Physics
  - University
---

### 8.1 Time-Independent Perturbation Theory

For a Hamiltonian $\hat{H} = \hat{H}_0 + \lambda \hat{H}'$ where $\hat{H}'$ is "small" and
$\hat{H}_0$ Has known eigenstates $|n^{(0)}\rangle$ and eigenvalues $E_n^{(0)}$.

**First-order energy correction:**

$$E_n^{(1)} = \langle n^{(0)} | \hat{H}' | n^{(0)} \rangle$$

**Second-order energy correction:**

$$E_n^{(2)} = \sum_{m \neq n} \frac{|\langle m^{(0)} | \hat{H}' | n^{(0)} \rangle|^2}{E_n^{(0)} - E_m^{(0)}}$$

**First-order state correction:**

$$|n^{(1)}\rangle = \sum_{m \neq n} \frac{\langle m^{(0)} | \hat{H}' | n^{(0)} \rangle}{E_n^{(0)} - E_m^{(0)}} |m^{(0)}\rangle$$

**Physical interpretation.** The first-order energy correction is the expectation value of the
Perturbation in the unperturbed state. The second-order correction accounts for virtual transitions
To other states: if the perturbation mixes in state $|m\rangle$ with amplitude proportional to
$V_{mn}/(E_n - E_m)$The energy shift is the sum of $|V_{mn}|^2/(E_n - E_m)$ over all Intermediate
states. Lower-energy intermediate states ($E_m \lt E_n$) always lower the energy, While
higher-energy ones raise it.

**Higher-order corrections.** The perturbation series can be extended to arbitrary order:

$$E_n = E_n^{(0)} + \lambda E_n^{(1)} + \lambda^2 E_n^{(2)} + \lambda^3 E_n^{(3)} + \cdots$$

$$|n\rangle = |n^{(0)}\rangle + \lambda|n^{(1)}\rangle + \lambda^2|n^{(2)}\rangle + \cdots$$

The series converges if $\lambda|\langle m|\hat{H}'|n\rangle| \ll |E_n^{(0)} - E_m^{(0)}|$ for all
$m \neq n$. In practice, low-order corrections often give excellent results for weak perturbations.

### 8.2 Degenerate Perturbation Theory

When $E_n^{(0)}$ is degenerate, the corrections are found by diagonalising the perturbation matrix
in The degenerate subspace.

**Theorem 8.1.** The correct zeroth-order states are the eigenvectors of the matrix
$W_{ij} = \langle n_i^{(0)} | \hat{H}' | n_j^{(0)} \rangle$ within the degenerate subspace.

_Proof._ In a $d$-dimensional degenerate subspace spanned by
$\\{|n_1^{(0)}\rangle, \ldots, |n_d^{(0)}\rangle\\}$ The first-order correction to the states is
undetermined by the non-degenerate formula (denominators Vanish). The correct approach is to note
that $\hat{H}$ restricted to this subspace is:

$$\hat{H}_{\mathrm{sub} = E_n^{(0)}\hat{I} + \lambda \hat{W}}$$

Where $W_{ij} = \langle n_i^{(0)}|\hat{H}'|n_j^{(0)}\rangle$. Diagonalising $\hat{W}$ gives the
correct Zeroth-order states and first-order energy splittings. $\blacksquare$

### 8.3 Worked Example: Perturbed Infinite Square Well

**Problem.** A one-dimensional infinite square well of width $L$ has a small perturbation $H' = V_0$
for $0 \lt x \lt L/2$ and $H' = 0$ for $L/2 \lt x \lt L$. Find the first-order energy Corrections.

<details>
<summary>Solution</summary>

The unperturbed states are $\phi_n^{(0)}(x) = \sqrt{2/L}\sin(n\pi x/L)$.

$$E_n^{(1)} = \langle n^{(0)} | H' | n^{(0)} \rangle = \int_0^{L/2} V_0 \frac{2}{L}\sin^2\!\left(\frac{n\pi x}{L}\right) dx$$

$$= \frac{2V_0}{L}\int_0^{L/2} \frac{1 - \cos(2n\pi x/L)}{2}\, dx = \frac{V_0}{L}\!\left[\frac{L}{2} - \frac{L}{4n\pi}\sin(n\pi)\right] = \frac{V_0}{2}$$

The first-order correction is $E_n^{(1)} = V_0/2$ for all $n$. $\blacksquare$

</details>

:::caution Common Pitfall Perturbation theory assumes the perturbation is "small" compared to the
level spacing. If $|\langle m | H' | n \rangle| \sim |E_n^{(0)} - E_m^{(0)}|$The perturbation series
may diverge. The Method also fails for systems where the unperturbed Hamiltonian has closely spaced
or degenerate Levels that are not handled correctly.
:::

### 8.4 Variational Principle

**Theorem 8.2 (Variational Principle).** For any normalised trial state $|\phi\rangle$:

$$\langle\phi|\hat{H}|\phi\rangle \geq E_0$$

Where $E_0$ is the true ground state energy. The equality holds if and only if
$|\phi\rangle = |0\rangle$.

_Proof._ Expand the trial state in the energy eigenbasis:

$$|\phi\rangle = \sum_{n=0}^{\infty} c_n |n\rangle, \quad \sum_n |c_n|^2 = 1$$

Then:

$$\langle\phi|\hat{H}|\phi\rangle = \sum_n |c_n|^2 E_n \geq E_0\sum_n |c_n|^2 = E_0$$

Since $E_n \geq E_0$ for all $n$And the inequality is strict unless $c_n = 0$ for all $n \geq 1$.
$\blacksquare$

**Procedure.** Choose a trial wave function $\phi(x; \alpha_1, \alpha_2, \ldots)$ depending on
variational Parameters $\alpha_i$. Compute
$E(\alpha_i) = \langle\phi|\hat{H}|\phi\rangle / \langle\phi|\phi\rangle$ And minimise with respect
to $\alpha_i$. The minimum provides an upper bound on $E_0$.

**Example 8.1.** Use a Gaussian trial function $\phi(x) = A\exp(-x^2/(2\alpha^2))$ to estimate the
Ground state energy of the anharmonic oscillator $V(x) = \frac{1}{2}m\omega^2 x^2 + \lambda x^4$.

<details>
<summary>Solution</summary>

The normalised Gaussian is $\phi(x) = (\pi\alpha^2)^{-1/4}\exp(-x^2/(2\alpha^2))$ with
$\langle x^2 \rangle = \alpha^2/2$ and $\langle x^4 \rangle = 3\alpha^4/4$.

$$\langle T \rangle = \frac{\langle p^2 \rangle}{2m} = \frac{\hbar^2}{4m\alpha^2}$$

(by using $p = -i\hbar\,d/dx$ and integrating by parts).

$$\langle V \rangle = \frac{1}{2}m\omega^2\langle x^2 \rangle + \lambda\langle x^4 \rangle = \frac{m\omega^2\alpha^2}{4} + \frac{3\lambda\alpha^4}{4}$$

$$E(\alpha) = \frac{\hbar^2}{4m\alpha^2} + \frac{m\omega^2\alpha^2}{4} + \frac{3\lambda\alpha^4}{4}$$

Minimising: $dE/d\alpha = 0$ gives
$-\hbar^2/(2m\alpha^3) + m\omega^2\alpha/2 + 3\lambda\alpha^3 = 0$.

For $\lambda = 0$ (harmonic oscillator), this gives $\alpha^2 = \hbar/(m\omega)$ and
$E = \hbar\omega/2$Which is exact. For small $\lambda$Expand
$\alpha^2 = \hbar/(m\omega)(1 - \delta)$:

$$\alpha^2 \approx \frac{\hbar}{m\omega}\!\left(1 - \frac{3\lambda\hbar}{2m^2\omega^3}\right)$$

$$E_{\mathrm{var} \approx \frac{\hbar\omega}{2}\!\left(1 + \frac{3\lambda\hbar}{4m^2\omega^3}\right)}$$

This agrees with second-order perturbation theory to first order in $\lambda$.

</details>

### 8.5 WKB Approximation

The WKB (Wentzel-Kramers-Brillouin) method provides approximate solutions to the one-dimensional
Schrodinger equation when the potential varies slowly compared to the de Broglie wavelength.

**Ansatz.** Write $\psi(x) = A(x)\exp(iS(x)/\hbar)$ and substitute into the Schrodinger equation:

$$-i\hbar A'S - \hbar^2 A S'' + \hbar^2 A S'^2 - A S' \cdot \hbar^2 = \mathrm{(terms)}$$

Actually, substituting directly into $-\hbar^2\psi''/(2m) + V\psi = E\psi$ and separating orders of
$\hbar$:

**Leading order ($\hbar^0$):** $S'(x) = \pm p(x) = \pm\sqrt{2m(E - V(x))}$

**Next order ($\hbar^1$):** $A'(x)/A(x) = -S''(x)/(2S'(x))$Giving $A(x) \propto 1/\sqrt{p(x)}$.

Therefore, in the classically allowed region ($E \gt V$):

$$\psi(x) \approx \frac{C}{\sqrt{p(x)}}\cos\!\left(\frac{1}{\hbar}\int_{x_1}^x p(x')\,dx' + \frac{\pi}{4}\right)$$

Where $x_1$ is a turning point ($E = V(x_1)$).

**Connection formulas.** At a turning point, the WKB solutions must be matched. The standard
Connection formula (for a linear turning point, $V(x) \approx E + V'(x_1)(x-x_1)$) gives:

- Approaching from the classically allowed side:
  $$\frac{2C}{\sqrt{p(x)}}\cos\!\left(\frac{1}{\hbar}\int_{x_1}^x p(x')\,dx' - \frac{\pi}{4}\right) \longleftrightarrow \frac{C}{\sqrt{|p(x)|}}\exp\!\left(-\frac{1}{\hbar}\int_x^{x_1} |p(x')|\,dx'\right)$$

**Quantization condition.** For a potential well with turning points $x_1$ and $x_2$Applying the
Connection formulas at both ends yields:

$$\int_{x_1}^{x_2} p(x)\,dx = \left(n + \frac{1}{2}\right)\pi\hbar, \quad n = 0, 1, 2, \ldots$$

Equivalently, using the closed phase-space integral:

$$\oint p\,dx = \left(n + \frac{1}{2}\right)h$$

This is the Bohr-Sommerfeld quantization condition, corrected by the $1/2$ term from the connection
Formulas.

**Validity.** The WKB approximation requires $|d\lambda/dx| \ll 1$Where $\lambda = h/p(x)$ is the
Local de Broglie wavelength. Equivalently, the change in potential over one wavelength must be small
Compared to the kinetic energy: $|\hbar\,|V'(x)|/(2mp(x))| \ll 1$.

**Example 8.2.** Apply the WKB quantization condition to the harmonic oscillator.

<details>
<summary>Solution</summary>

For $V(x) = \frac{1}{2}m\omega^2 x^2$The turning points are at $x_{1,2} = \pm\sqrt{2E/(m\omega^2)}$.

$$\int_{x_1}^{x_2} \sqrt{2m\!\left(E - \frac{1}{2}m\omega^2 x^2\right)}\,dx = \sqrt{2mE}\int_{-a}^{a}\sqrt{1 - (x/a)^2}\,dx$$

Where $a = \sqrt{2E/(m\omega^2)}$. The integral equals $\pi a/2$ times $\sqrt{2mE}$:

$$= \sqrt{2mE}\cdot\frac{\pi a}{2} = \frac{\pi E}{\omega}$$

Setting this equal to $(n + 1/2)\pi\hbar$:

$$\frac{\pi E}{\omega} = \left(n + \frac{1}{2}\right)\pi\hbar \implies E_n = \left(n + \frac{1}{2}\right)\hbar\omega$$

This is the exact result! The WKB approximation gives the exact energy levels for the harmonic
Oscillator because the potential is quadratic, so the connection formulas are exact.

**Validity and limitations.** The WKB method fails near turning points (where $E = V(x)$) because
$p(x) \to 0$ and the local wavelength diverges. The linear approximation of the potential near
Turning points (used to derive the connection formulas) breaks down when the potential is not
smooth. The method also fails for potentials with discontinuities or cusps.

Despite these limitations, WKB is remarkably useful for estimating energy levels in potentials Where
exact solutions are not available, and it forms the basis of the JWKB approximation in Scattering
theory.

</details>

