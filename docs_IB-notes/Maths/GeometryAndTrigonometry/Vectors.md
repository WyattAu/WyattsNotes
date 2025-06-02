---
title: Vectors
date: 2025-05-13T22:14:20.747Z
tags:
    - maths
categories:
    - maths
slug: vectors
---

## Vector Line
### Parametric Form
A vector line ($r$) in parametric form takes a scalar parameter ($\gamma$) to produce each point on the line. The line ($\bm{r}(\gamma)$) is a sum of a point on a line ($\bm{a}$ or $\bm{r_0}$) and a direction vector ($\bm{b}$) scaled by the parameter $\gamma$:
$$
\begin{aligned}
    \bm{r}(\gamma) = \bm{r_0} + \gamma\bm{b}
\end{aligned}
$$

### Cartesian Form
Vectors in cartesian form define a vector by the definition of each coordinate of the unit vector:
$$
\begin{aligned}
    \frac{x-x_0}{l} = \frac{y-y_0}{m} = \frac{z-z_0}{n}
\end{aligned}
$$

### Conversion Between Parametric Form and Cartesian Form
$$
\begin{aligned}
    \bm{r}(\gamma) = \bm{r_0} + \gamma\bm{b}\\
    \begin{pmatrix}
        x \\ y \\ z
    \end{pmatrix}
    = 
    \begin{pmatrix}
        x_0 \\ y_0 \\ z_0
    \end{pmatrix}
    +
    \gamma
    \begin{pmatrix}
       l \\ m \\ n 
    \end{pmatrix}\\
    x = x_0 + \gamma l, \quad y = y_0 + \gamma m, \quad z = z_0 + \gamma n\\
    \gamma = \frac{x-x_0}{l} = \frac{y-y_0}{m} = \frac{z-z_0}{n}
\end{aligned}
$$

## Vector Plane
### Parametric Form
A vector plane ($\bm{r}$) given in parametric form is defined with the sum of a point ($\bm{a}$ or $\bm{r_0}$) on the plane and two direction vector ($\bm{b}$ and $\bm{c}$) scaled by scalar parameter ($\gamma$ and $\mu$):
$$
\begin{aligned}
    \bm{r}(\gamma, \mu) = \bm{r_0} + \gamma \bm{b} + \mu \bm{c}
\end{aligned}
$$

### Point-normal Form
A vector plane ($\bm{r}$) defined in point-normal form is defined by the dot product between the normal ($\hat{n}$) and the direction vectors ($\bm{r}-\bm{r_0}$ or $\gamma \bm{b} + \mu \bm{c}$):
$$
\begin{aligned}
    \left(\bm{r}-\bm{r_0}\right) \cdot \hat{n} = |\bm{r}-\bm{r_0}||\hat{n}|\sin \frac{\pi}{2} = 0\\
    \bm{r} \cdot \hat{n} = \bm{r_0} \cdot \hat{n}
\end{aligned}
$$

### Cartesian Form
A vector plane ($\bm{r}$) defined in cartesian form is extended from the point-normal form by expressing normal vector as its individual axis ($x,y,z$):
$$
\begin{aligned}
    \hat{n} =
    \begin{pmatrix}
        a \\ b \\ c
    \end{pmatrix}, \quad
    \bm{r} = 
    \begin{pmatrix}
        x \\ y \\ z
    \end{pmatrix}, \quad
    \bm{r_0} = 
    \begin{pmatrix}
        x_0 \\ y_0 \\ z_0
    \end{pmatrix}\\
    a(x-x_0) + b(y-y_0) + c(z-z_0) = 0\\
    ax + by + cz = ax_0 + by_0 + cz_0
\end{aligned}
$$
Since $ax_0 + by_0 + cz_0$ produce a constant, the formula booklet uses a single constant $d$ to represent it:
$$
\begin{aligned}
    ax + by + cz = d
\end{aligned}
$$
