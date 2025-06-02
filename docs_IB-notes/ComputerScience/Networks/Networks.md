---
title: Networks
date: 2025-05-02T09:03:49.907Z
tags:
    - CS
categories:
    - CS
---


## Computer Network
A computer network is a set of two or more computer systems that is able to exchange data by a connection.

### Server
A server is a broad term for a computer system or software that provide a service, this can be a single computer system to a large cluster with many computer systems.

### Client
A client is a computer system to requests a service from a server in the same network.

### Hub
A hub is a connection point that directly copies transmitted data and send to every device connected. When a device sends transmit data to the hub, the hub copies the data and sends towards all devices connected. The device awaiting the data will receive the data, while all other device ignores the signal. Therefore the hub itself is does not account for any MAC address, and is consider a Physical Layer device in the OSI model.

### Switch
A switch is a connection point that can identify the device connection to each port and transmit data to the corresponding device using a MAC address. This means only the device awaiting for the data will receive data while all other devices connected will not. The switch is consider a data link layer in the OSI model as a flow control is present.

### Router
A router is a connection point that connect multiple networks, where MAC address is use to transmit information within the local network, and IP is used when transmitting information outside of the local network. The router is a network layer in the OSI model as it involves inter-network connections.

### Modem
A modem is a connection to the ISP, where the modem is usually connected to a router to allow router to access the internet. The modem is consider a physical layer in the OSI model as it only transmit data in analog signals.

### Wireless Access Points (WAP)
A WAP is a connection point that acts as a hub with wireless connection

### Types of Network
- Local area network (LAN)
  - A single network connected by MAC address.
  - Normally involve clients and servers connected to a single hub or switch.
- Wireless local area network (WLAN)
  - A single network connect by wireless protocols.
  - Normally involve clients and servers connected to a WAP.
- Virtual local area network (VLAN)
  - Partitioned LANs, where they are connected to a central switch but virtualize logically as different networks.
  - Normally involve clients and servers connected with a switch, but each set of clients and servers are separated to multiple VLANs.
- Wide area network (WAN)
  - A network connected multiple LANs spanning a large geographical area
- Storage area network (SAN)
  - A network connected a cluster of storage devices, usually make accessible to a LAN
  - Normally involve servers and storage devices connected by a switch 
- Intranet
  - A network connecting multiple networks through transport layer in OSI such as TCP/IP
- Internet
  - A WAN connecting global devices normally accessed through an ISP
- Internet of things (IOT)
  - A network connecting physical devices embedded with sensors and exchange data though the internet
- Extranet
  - A network that allowed controlled internet access from clients to specific LAN or WAN
- VPN
  - A network that connects remote networks through a encrypted connection
- Personal Area Network (PAN)
  - A network connecting a single client and multiple devices
- Peer-To-Peer (P2P)
  - A distributed network that connect every device with direct physical layer connection.

### Open System Interconnection (OSI) model
The OSI model is a networking standard established by International Standards Organization (ISO) to formalize communication across multiple devices. OSI is established by 7 layers which specifies standards for physical communication and virtual communication, this include:
- Physical communication
  - Physical layer
    - Binary transmission (bitstreams) between devices
    - Protocol data unit (PDU): Bits
    - Bluetooth, IEEE802.11 (Wi-Fi)
    - Hub, ethernet cable, fiber-optic links, WAP
  - Data link layer 
    - Handles communication within a network with MAC address with error detection and flow control
    - PDU: Frames (One network packet)
    - Ethernet, HDLC
    - Switch
  - Network layer
    - Handles routing of packets across a interconnected networks using logical address such as IP address header
    - PDU: Packets
    - IP (IPv4, IPv6)
    - Router
  - Transport layer
    - Establish end-to-end connection, segmenting data in to packets with transmission protocol header.
    - PDU: Segments (TCP) / Datagrams (UDP)
    - TCP, UDP
  - Session layer
    - Managing and terminating sessions between application, including authentication, reconnection, and synchronization
    - PDU: Data
    - NetBIOS, RPC
  - Presentation layer
    - Translate data formats, encrypt, and compresses data
    - PDU: Data
    - SSL/TLS
  - Application Layer
    - Provide end-user application communication 
    - PDU: Data
    - HTTPs, HTTP, FTP, SMTP, DNS, DHCP, IMAP