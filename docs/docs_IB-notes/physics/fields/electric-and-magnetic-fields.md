---
title: Electric and Magnetic Fields
sidebar_position: 2
---

## Point Charge

A point charge is a point particle with nonzero electric charge and infinitesimal volume.

## Coulombs Law

Also called Coulomb's inverse-square law states the magnitude of the attraction or repulsion electrostatic force ($\bm{F}$) between two charges is directly proportional to the magnitude of charges ($q$) and inversely proportional to the square of the magnitude of the separation displacement ($\bm{r}$):

$$
\begin{aligned}
    |\bm{F}| \propto |q_1||q_2|, \quad |\bm{F}| \propto |\bm{r}|^2\\
    |\bm{F}| = k \frac{|q_1||q_2|}{|\bm{r}|^2}
\end{aligned}
$$

:::info
Coulomb's Law can also be expressed in vector form, where the force exerted by $q_1$ on $q_2$ is:

$$
\begin{aligned}
    \bm{F_{12}} = k \frac{q_1 q_2}{|r|^2} \hat{r_{12}} = -\bm{F_{21}}
\end{aligned}
$$

![Coulombs_law](/img/physics/CoulombsLaw.png)
:::

Where the constant $k$ is named Coulomb's constant and is equal to:

$$
\begin{aligned}
    k = \frac{1}{4\pi \epsilon_0}
\end{aligned}
$$

:::info
The derivation of Coulomb's constant can be possible with Maxwell's equations. Gauss's Law states that the electric flux ($\Phi$) through any closed surface is equal to net electric charge enclosed within the surface multiply by the inverse of permittivity of free space ($\epsilon_0$):

$$
\begin{aligned}
    \Phi = \oiint\limits_{S} E \cdot dA = \frac{Q}{\epsilon_0}
\end{aligned}
$$

For a point charge, symmetry implies a radial electric field, and hence a sphere enclosed surface ($4\pi r^2$), therefore, simplifying $\phi$ to:

$$
\begin{aligned}
    \Phi = 4\pi r^2 = \frac{Q}{\epsilon_0}\\
    E = \left(\frac{1}{4\pi\epsilon_0}\right)\left(\frac{Q}{r^2}\right)\\
    F = q_2 E = \frac{1}{4\pi \epsilon_0} \frac{|q_1||q_2|}{r^2}
\end{aligned}
$$

Coulomb's constant can now be identify as:

$$
\begin{aligned}
    k = \frac{1}{4\pi \epsilon_0}
\end{aligned}
$$

:::

## Electric Field

The electric field $\bm{E}$ with vector quantity of electrostatic force $\bm{F}$ exerted per unit of magnitude of charge, evaluated as:

$$
\begin{aligned}
    \bm{E} = \lim_{q \rightarrow 0} \frac{F}{q}
\end{aligned}
$$

### Electric Potential Energy

Electric potential energy ($U$ or $E_p$ or $W$)is the minimum work required to translate charges from infinite separation displacement to a position $\bm{r}$. Since the electrostatic force $\bm{F_e}$ varies due to the displacement, the line integral of the opposing force $\bm{F_{ext}} = \bm{F_e}$ from infinity $(\infty)$ to the potion $\bm{r}$ gives the work required to translate the charges:

$$
\begin{aligned}
    U &= E_p = W = \int_\infty^{\bm{r}} F_{ext} \cdot d\bm{r} = -\int_\infty^{\bm{r}} F_e \cdot \bm{dr}\\
    U &= -\int_\infty^{\bm{r}} \left(k\frac{q_1 q_2}{|\bm{r}|^2}\bm{\hat{r}}\right) \cdot \bm{dr}
\end{aligned}
$$

Separating the magnitude and direction of $\bm{dr}$ gives $d|\bm{r}|\bm{\hat{r}}$, and hence changing the bounds ($\bm{r} \rightarrow |\bm{r}|$):

$$
\begin{aligned}
    U &= -\int_\infty^{|\bm{r}|} \left(k\frac{q_1 q_2}{|\bm{r}|^2}\bm{\hat{r}}\right) \cdot d|\bm{r}|\bm{\hat{r}}\\
    U &= -\frac{q_1 q_2}{4\pi\epsilon_0} \int_\infty^{|\bm{r}|} \frac{1}{|\bm{r}|^2} d|\bm{r}|\\
    U &= -\frac{q_1 q_2}{4\pi\epsilon_0} \left[-\frac{1}{|\bm{r}|}\right]_\infty^{|\bm{r}|}\\
    U &= \frac{1}{4\pi \epsilon_0}\frac{q_1 q_2}{|\bm{r}|}
\end{aligned}
$$

This is written in the formula booklet with $r = |\bm{r}|$ and Coulomb's constant $k$:

$$
\begin{aligned}
    U = k\frac{q_1 q_2}{r}
\end{aligned}
$$

This implies the electric potential energy is a scalar quantity approaching $0$ at infinite displacement $r \rightarrow \infty$.

### Electric Potential

The electric potential ($V_e$) is the electric potential energy of a point charge ($Q$ or $q_1$) at displacement $\bm{r}$ per unit charge:

$$
\begin{aligned}
    V_e &= \frac{U}{q_2} = \frac{1}{4\pi \epsilon_0}\frac{q_1 q_2}{|\bm{r}|q_2} = \frac{1}{4\pi \epsilon_0}\frac{Q}{|\bm{r}|}\\
    V_e &= \frac{kQ}{r}, \quad r = |\bm{r}|
\end{aligned}
$$

### Electric Field Strength

The electric field strength ($\bm{E}$) is the force ($\bm{F_{12}}$) per unit charge of the affected point charge ($q_2$) at a displacement ($\bm{r_{12}}$):

$$
\begin{aligned}
  \bm{E} = \frac{\bm{F_{12}}}{q_2} = \frac{1}{4\pi \epsilon_0} \frac{q_1 q_2}{|\bm{r}|^2}\bm{\hat{r_{12}}}
\end{aligned}
$$

This is written in the formula booklet with $d = |\bm{r}|$:

$$
\begin{aligned}
    E = k\frac{F}{d}
\end{aligned}
$$

The electric field strength is also the negative gradient of the electric potential ($V_e$):

$$
\begin{aligned}
    E = -\nabla V_e
\end{aligned}
$$

Since spherical symmetry implies the gradient of electric potential are equal for equal magnitude of displacement $\bm{r}$:

$$
    \nabla V_e = \frac{dV_e}{d|\bm{r}|}\bm{\hat{r}}\\
    \frac{dV_e}{d|\bm{r}|} = \frac{d}{d|\bm{r}|}\left(\frac{kQ}{|\bm{r}|}\right) = -k\frac{Q}{|\bm{r}|^2}\\
    E = k \frac{Q}{|\bm{r}|^2}\bm{\hat{r}}
$$

When expressing the electric field strength with the average electric potential change, and expressing $r = |\bm{r}|$, the magnitude of $E$ is:

$$
\begin{aligned}
    E = -\frac{\Delta V_e}{\Delta r}
\end{aligned}
$$

### Graphical Presentation of Electric Field

#### Electric Field Lines

Electric field lines present the direction of electric field strength.

#### Equipotential Surfaces

Equipotential surfaces are surfaces with equivalent electric potential.

## Millikan's Experiment

The Millikan's experiment was conducted in 1909 to determine the value of elementary charge. The experiment was passing ionized oil drops with charge $q$ within a region between two charged metal plates with a electric potential $V_e$, and displacement $\bm{d}$. The IB include a simplified calculation for elementary charge by ignoring buoyance force, where the electrostatic force ($\bm{F_e}$) equal to the opposite of gravitational force ($\bm{F_g}$):

$$
\begin{aligned}
    \bm{F_g} &= -\bm{F_e}\\
    \bm{F_g} &= m\bm{g}\\
    -\bm{F_e} &= -qE = -q\left(-\frac{V_e}{\bm{d}}\right)\\
    m\bm{g} &= q\frac{V_e}{\bm{d}}\\
    q &= \frac{m\bm{g}\bm{d}}{V_e}
\end{aligned}
$$
