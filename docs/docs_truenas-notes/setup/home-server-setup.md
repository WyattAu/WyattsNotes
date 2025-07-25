---
title: Setting Up Home Server
date: 2025-07-11T17:57:30.362Z
tags:
  - OS
categories:
  - OS
slug: setting-home-server
---

## Requirements

### Software and Images

- [Rufus](https://rufus.ie/en/)
- [TrueNAS Scale ISO](https://www.truenas.com/download-truenas-community-edition/)

### Hardware

- SSD for OS drive (preferred, can also boot from flash drives)
- USB for etching ISO to USB
- HDDs for storage drives (prefer $2+$ HDD for mirroring or RAID)
- Any computer with SATA connection (for HDDs), connection to a display (HDMI or DisplayPort, assuming a motherboard without IPMI support) and ethernet connection to ISP provided router (for public access)

## Procedure

1. Plugin USB (ensure no useful content is in the usb as all content allocated will be erased)
2. Start Rufus and select the trueNAS Scale ISO installed
3. Change the file system to FAT32 or exFAT
4. Click start
5. Select dd when prompted
6. Unplug the USB and plug the USB in the server
7. Boot the server and select the USB as boot drive
8. Select install on your SSD when prompted with
9. Create your admin
10. Open the internal IP address of the server on the browser of another device
11. Enter the admin information, username should be `truenas_admin`
12. Go to datasets display and create a dataset with the HDD, leaving every setting to default
