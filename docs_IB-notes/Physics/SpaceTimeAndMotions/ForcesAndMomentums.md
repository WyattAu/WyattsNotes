---
title: Forces and Momentums
sidebar_position: 2
---

## motion
### Position
The position ($x$) is a vector quantity representing a point in space from a reference origin position.

### Time Derivatives of motions
#### Displacement
The displacement ($s$ or $\Delta x$) is a vector quantity representing the change in [position](#position) as a translation:
$$
\begin{aligned}
    s = \Delta x = x_f - x_i
\end{aligned}
$$

#### Velocity 
The velocity ($v$) is a vector quantity representing the change in [displacement](#displacement) with time:
$$
\begin{aligned}
    v = \frac{ds}{dt}
\end{aligned}
$$

#### Acceleration 
The acceleration ($a$) is a vector quantity representing the change in [velocity](#velocity) with time:
$$
\begin{aligned}
    a = \frac{dv}{dt}
\end{aligned}
$$

## Rigid Body
A rigid body is a solid with no deformation regardless of any external forces or moments applied.

## Angular Motion
### Unit vector for Radial Coordinates
The radial unit vector ($\bm{\hat{r}}$) is the directional vector with magnitude $1$ from the center radially outside.
$$
\begin{aligned}
    \bm{\hat{r}} = \frac{\bm{r}}{|\bm{r}|}
\end{aligned}
$$

### Centripetal acceleration
The centripetal acceleration ($a$) is the [acceleration](#acceleration) directed radially to the center ($-\bm{\hat{r}}$), keeping the body in circular motion:
$$
\begin{aligned}
    a = -\frac{v^2}{r}\bm{\hat{r}} = -\omega^2 \bm{r}\bm{\hat{r}} = -\frac{4\pi^2r}{T^2}\bm{\hat{r}}
\end{aligned}
$$

:::warning
The IB only consider the magnitude of centripetal acceleration, therefore is shown in the equation booklet as:
$$
\begin{aligned}
    a = \frac{v^2}{r} = \omega^2 r = \frac{4\pi^2r}{T^2}
\end{aligned}
$$
:::

### Centripetal Force
The centripetal force is any force applied on a mass towards the center ($-\bm{\hat{r}}$), leading to a [centripetal acceleration](#centripetal-acceleration) $\bm{a}$:
$$
\begin{aligned}
    F = m\bm{a} = -\frac{mv^2}{r}\bm{\hat{r}} = -m\omega^2 \bm{r}\bm{\hat{r}} = -\frac{4\pi^2mr}{T^2}\bm{\hat{r}}
\end{aligned}
$$

:::warning
As mentioned above, IB only consider the magnitude of centripetal force:
$$
\begin{aligned}
    F = ma = \frac{mv^2}{r} = m\omega^2 r = \frac{4\pi^2mr}{T^2}
\end{aligned}
$$
:::

### Angular Position
The angular position ($\theta$) of a [rigid body](#rigid-body) is a representation of the object's orientation by the angle between a reference position and the current position.
### Time Derivatives of Angular Motions
#### Angular Displacement
The angular displacement ($\Delta \theta$) of a [rigid body](#rigid-body) is the change in [angular position $\theta$](#angular-position) measured from the center:
$$
\begin{aligned}
    \Delta \theta = \theta_f - \theta_i
\end{aligned}
$$
#### Angular velocity
The angular velocity ($\omega$) is the change of [angular displacement $\Delta \theta$](#angular-displacement) of a [rigid body](#rigid-body) with time:
$$
\begin{aligned}
   \omega = \frac{d\theta}{dt} 
\end{aligned}
$$

#### Angular acceleration
The angular acceleration ($\alpha$) is the change of [angular velocity](#angular-velocity) of a [rigid body](#rigid-body) with time:
$$
\begin{aligned}
    \alpha = \frac{d\omega}{dt}
\end{aligned}
$$
### Moment of Inertia
The measure of a solid body's resistance to [angular acceleration](#angular-acceleration).

:::warning
The IB syllabus only consider the moment of inertia of rigid body with approximated geometry as a system of discrete particles, as well as moment of inertia that is determined by closed-form expressions.
:::
 
### Angular Momentum
The angular momentum ($L$) is the product of [moment of inertia $I$](#moment-of-inertia) and [angular velocity $\omega$](#angular-velocity):
$$
\begin{aligned}
    L = I\omega
\end{aligned}
$$  

### Work
The work ($W$) done by a force $F$ on a point mass with a movement of displacement $s$ is:
$$
\begin{aligned}
    W = F \cdot s = |F||s|cos\theta, \quad \theta = \frac{F \cdot s}{|F||s|}
\end{aligned}
$$
:::info
For a force that varies at different position, the line integral of $F$ across a surface $C$ is:
$$
\begin{aligned}
    W = \int_C F \cdot ds
\end{aligned}
$$
:::
