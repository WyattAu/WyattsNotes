---
title: Setting Up Home Server
date: 2025-07-11T17:57:30.362Z
tags:
  - OS
categories:
  - OS
slug: setting-home-server
---

## Minimal Setup

If the only hardware consist of a few HDD and a SSD, I would recommend allocating as:

- A fast pool using SSD for:
  - TrueCharts apps
  - container storage
  - vm_storage
  - SLOG
  - L2ARC
- A HDD pool:
  - if theres only a single HDD, add as single-disk VDEV and enable compression. Expand by using expand pool -> add VDEV, type mirror and select the new pairs of HDDs