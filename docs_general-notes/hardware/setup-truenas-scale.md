---
title: Setup TrueNAS Scale
date: 2025-06-13T18:15:42.956Z
categories:
  - CS
slug: setup-truenas-scale
---

## Home Server setup
If the only hardware consist of a few HDD and a SSD, I would recommend allocating as:
- A fast pool using SSD for:
  - TrueCharts apps
  - container storage
  - vm_storage
  - SLOG
  - L2ARC
- A HDD pool:
  - if theres only a single HDD, add as single-disk VDEV and enable compression. Expand by using expand pool -> add VDEV, type mirror and select the new pairs of HDDs