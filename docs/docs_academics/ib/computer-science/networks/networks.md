---
title: Networks
date: 2025-05-02T09:03:49.907Z
tags:
  - CS
categories:
  - CS
---

## Computer Network

A computer network is a set of two or more computer systems that is able to exchange data by a
connection.

### Server

A server is a broad term for a computer system or software that provide a service, this can be a
single computer system to a large cluster with many computer systems.

### Client

A client is a computer system to requests a service from a server in the same network.

### Hub

A hub is a connection point that directly copies transmitted data and send to every device
connected. When a device sends transmit data to the hub, the hub copies the data and sends towards
all devices connected. The device awaiting the data will receive the data, while all other device
ignores the signal. Therefore the hub itself is does not account for any MAC address, and is
consider a Physical Layer device in the OSI model.

### Switch

A switch is a connection point that can identify the device connection to each port and transmit
data to the corresponding device using a MAC address. This means only the device awaiting for the
data will receive data while all other devices connected will not. The switch is consider a data
link layer in the OSI model as a flow control is present.

### Router

A router is a connection point that connect multiple networks, where MAC address is use to transmit
information within the local network, and IP is used when transmitting information outside of the
local network. The router is a network layer in the OSI model as it involves inter-network
connections.

### Modem

A modem is a connection to the ISP, where the modem is usually connected to a router to allow router
to access the internet. The modem is consider a physical layer in the OSI model as it only transmit
data in analog signals.

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
  - Partitioned LANs, where they are connected to a central switch but virtualize logically as
    different networks.
  - Normally involve clients and servers connected with a switch, but each set of clients and
    servers are separated to multiple VLANs.
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
  - A network connecting physical devices embedded with sensors and exchange data though the
    internet
- Extranet
  - A network that allowed controlled internet access from clients to specific LAN or WAN
- VPN
  - A network that connects remote networks through a encrypted connection
- Personal Area Network (PAN)
  - A network connecting a single client and multiple devices
- Peer-To-Peer (P2P)
  - A distributed network that connect every device with direct physical layer connection.

### Open System Interconnection (OSI) model

The OSI model is a networking standard established by the International Organization for
Standardization (ISO) to formalize communication across multiple devices. OSI is established by 7
layers which specifies standards for physical communication and virtual communication, this include:

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
    - Handles routing of packets across a interconnected networks using logical address such as IP
      address header
    - PDU: Packets
    - IP (IPv4, IPv6)
    - Router
  - Transport layer
    - Establish end-to-end connection, segmenting data in to packets with transmission protocol
      header.
    - PDU: Segments (TCP) / Datagrams (UDP)
    - TCP, UDP
  - Session layer
    - Managing and terminating sessions between application, including authentication, reconnection,
      and synchronization
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

---

## Network Topologies

### Bus Topology

- All devices share a single communication line (the "bus").
- **Advantages:** Simple and cheap to install, uses less cable than other topologies.
- **Disadvantages:** If the main cable fails, the entire network goes down. Performance degrades as
  more devices are added due to data collisions.

### Star Topology

- All devices connect to a central hub or switch.
- **Advantages:** Easy to add or remove devices without disrupting the network. If one cable fails,
  only that device is affected.
- **Disadvantages:** If the central hub/switch fails, the entire network fails. Requires more cable
  than a bus topology.

### Ring Topology

- Devices are connected in a closed loop, with each device connected to exactly two others.
- **Advantages:** Data travels in one direction, reducing the chance of packet collisions.
- **Disadvantages:** If one device or cable fails, the entire ring is broken. Adding or removing
  devices disrupts the network.

### Mesh Topology

- Every device is connected to every other device (full mesh) or to multiple devices (partial mesh).
- **Advantages:** High redundancy — if one connection fails, data can be rerouted. No single point
  of failure.
- **Disadvantages:** Expensive and complex to set up due to the large number of cables/connections
  required.

### Tree (Hierarchical) Topology

- A hybrid topology combining characteristics of bus and star topologies. Devices are arranged in a
  hierarchy, with a root node branching into sub-nodes.
- **Advantages:** Scalable and easy to manage hierarchically.
- **Disadvantages:** If the root node fails, the entire network below it is affected.

---

## Key Protocols

### TCP/IP (Transmission Control Protocol / Internet Protocol)

TCP/IP is the foundational protocol suite of the internet. It operates at the transport and network
layers of the OSI model.

**TCP (Transport Layer):**

- Connection-oriented — establishes a connection before data transfer (three-way handshake).
- Reliable delivery — uses acknowledgements (ACKs) and retransmission to ensure all packets arrive.
- Flow control — prevents the sender from overwhelming the receiver.
- Order preservation — packets are reassembled in the correct order at the destination.

**IP (Network Layer):**

- Responsible for addressing and routing packets across interconnected networks.
- Each device on a network has a unique IP address (IPv4: 32-bit, e.g. `192.168.1.1`; IPv6:
  128-bit).
- IP is connectionless — each packet is treated independently (datagram switching).
- TTL (Time to Live) prevents packets from circulating indefinitely.

**Three-way handshake (TCP connection establishment):**

1. Client sends SYN (synchronise) packet to server.
2. Server responds with SYN-ACK (synchronise-acknowledge).
3. Client sends ACK (acknowledge) to confirm.

### HTTP and HTTPS

**HTTP (Hypertext Transfer Protocol):**

- Application layer protocol used for transmitting web pages and other resources.
- Stateless — each request is independent; no memory of previous interactions.
- Request methods: `GET` (retrieve data), `POST` (submit data), `PUT` (update data), `DELETE`
  (remove data).
- Status codes: `200` (OK), `301` (Moved Permanently), `404` (Not Found), `500` (Server Error).

**HTTPS (HTTP Secure):**

- HTTP encrypted using SSL/TLS (Secure Sockets Layer / Transport Layer Security).
- Prevents eavesdropping and man-in-the-middle attacks.
- Uses asymmetric encryption for the initial handshake, then symmetric encryption for data transfer.

### DNS (Domain Name System)

DNS translates human-readable domain names (e.g. `www.example.com`) into IP addresses (e.g.
`93.184.216.34`).

**DNS resolution process:**

1. The browser checks its local cache for the IP address.
2. If not found, the request is sent to the **recursive DNS resolver** (usually operated by the
   ISP).
3. The resolver queries the **root DNS server**, which directs it to the appropriate **TLD
   (Top-Level Domain) server** (e.g. `.com`).
4. The TLD server directs the resolver to the **authoritative name server** for the domain.
5. The authoritative server returns the IP address, which is cached by the resolver and returned to
   the browser.

**DNS records:**

- **A record:** Maps a domain name to an IPv4 address.
- **AAAA record:** Maps a domain name to an IPv6 address.
- **CNAME record:** Maps one domain name to another (alias).
- **MX record:** Specifies the mail server for the domain.

### DHCP (Dynamic Host Configuration Protocol)

DHCP automatically assigns IP addresses to devices on a network.

- When a device connects, it broadcasts a DHCPDISCOVER message.
- The DHCP server responds with a DHCPOFFER containing an available IP address.
- The device sends a DHCPREQUEST to accept the offer.
- The server confirms with a DHCPACK.
- IP addresses are leased for a set period and must be renewed.

### Other Important Protocols

| Protocol  | Layer       | Function                                               |
| :-------- | :---------- | :----------------------------------------------------- |
| FTP       | Application | File transfer between client and server                |
| SMTP      | Application | Sending email                                          |
| IMAP/POP3 | Application | Receiving email                                        |
| UDP       | Transport   | Connectionless, fast data delivery (streaming, gaming) |
| ARP       | Network     | Maps IP addresses to MAC addresses                     |
| ICMP      | Network     | Error reporting and diagnostics (e.g. `ping`)          |

---

## Client-Server vs Peer-to-Peer

### Client-Server Model

- A central server provides resources and services to client devices.
- The server has higher processing power, storage, and bandwidth than clients.
- **Advantages:** Centralised security and management; easy to back up data; efficient for many
  simultaneous clients.
- **Disadvantages:** Single point of failure; server bottleneck under heavy load; higher cost to
  maintain the server.

### Peer-to-Peer (P2P) Model

- All devices (peers) have equal status — each can act as both client and server.
- No central server; resources are shared directly between peers.
- **Advantages:** No single point of failure; scalable — more peers means more resources; lower
  infrastructure cost.
- **Disadvantages:** Harder to manage and secure; performance depends on the number and capability
  of peers; data consistency is harder to maintain.

| Feature           | Client-Server                  | Peer-to-Peer                               |
| :---------------- | :----------------------------- | :----------------------------------------- |
| Central authority | Yes (server)                   | No                                         |
| Cost              | Higher (server infrastructure) | Lower                                      |
| Scalability       | Limited by server capacity     | Increases with more peers                  |
| Security          | Centralised, easier to manage  | Distributed, harder to manage              |
| Fault tolerance   | Server failure affects all     | Individual peer failure has minimal impact |
| Examples          | Web browsing, email, databases | BitTorrent, blockchain                     |

---

## Network Security

### Threats

- **Malware:** Viruses (attach to files), worms (self-replicate), trojans (disguised as legitimate
  software), ransomware (encrypts data and demands payment).
- **Phishing:** Deceptive emails or websites designed to steal credentials or personal information.
- **Man-in-the-Middle (MITM) attack:** An attacker intercepts communication between two parties
  without their knowledge.
- **DDoS (Distributed Denial of Service):** Overwhelming a server with traffic from multiple
  compromised devices (botnet).
- **SQL Injection:** Inserting malicious SQL code into input fields to manipulate a database.

### Security Measures

- **Firewall:** Monitors and controls incoming and outgoing network traffic based on security rules.
  Can be hardware- or software-based.
- **Antivirus/Anti-malware software:** Scans for, detects, and removes malicious software.
- **Access control:** Authentication (verifying identity) and authorisation (determining
  permissions). Methods include passwords, biometrics, and multi-factor authentication (MFA).
- **Intrusion Detection System (IDS):** Monitors network traffic for suspicious activity and alerts
  administrators.
- **Physical security:** Securing server rooms with locks, CCTV, and access badges.

---

## Encryption

Encryption is the process of converting plaintext into ciphertext using an algorithm and a key. Only
authorised parties with the correct key can decrypt the data.

### Symmetric Encryption

- The same key is used for both encryption and decryption.
- **Advantages:** Fast; efficient for large amounts of data.
- **Disadvantages:** Key distribution problem — how do you securely share the key?
- **Examples:** AES (Advanced Encryption Standard), DES (Data Encryption Standard — now considered
  insecure).

### Asymmetric Encryption

- Uses a pair of keys: a **public key** (shared openly) and a **private key** (kept secret).
- Data encrypted with the public key can only be decrypted with the private key, and vice versa.
- **Advantages:** Solves the key distribution problem; enables digital signatures.
- **Disadvantages:** Slower than symmetric encryption.
- **Examples:** RSA, ECC (Elliptic Curve Cryptography).

### Digital Signatures and Certificates

- A **digital signature** is created by encrypting a hash of a message with the sender's private
  key. The recipient can verify it using the sender's public key.
- A **digital certificate** binds a public key to an identity, issued by a trusted **Certificate
  Authority (CA)** (e.g. VeriSign, Let's Encrypt). This prevents man-in-the-middle attacks.
- **SSL/TLS** uses a combination of asymmetric encryption (for the initial handshake and key
  exchange) and symmetric encryption (for the data session).

### Hashing

- A hash function converts data of arbitrary size into a fixed-size string (the hash or digest).
- Properties: deterministic, one-way (cannot reverse a hash to find the original data),
  collision-resistant.
- **Examples:** SHA-256, MD5 (now considered insecure due to collision vulnerabilities).
- Uses: password storage (store hash, not plaintext), data integrity verification, digital
  signatures.

---

## Data Transmission

### Packet Switching

Data is broken into packets, each containing:

- **Header:** Source address, destination address, sequence number, protocol information.
- **Payload:** The actual data being transmitted.
- **Trailer:** Error-checking information (checksum).

Packets may travel different routes across the network and arrive out of order. They are reassembled
at the destination using sequence numbers.

### Error Detection

- **Checksum:** A value computed from the data that is sent alongside it. The receiver recomputes
  the checksum and compares.
- **Parity bit:** A single bit added to each byte to make the total number of 1s even (even parity)
  or odd (odd parity). Can detect single-bit errors but cannot correct them.
- **CRC (Cyclic Redundancy Check):** A more robust error-detection method using polynomial division.
  Commonly used in network protocols.

### Transmission Errors

- **Echo:** Part of a signal is reflected back, causing interference.
- **Crosstalk:** Signal from one wire interferes with a signal on an adjacent wire.
- **Attenuation:** Signal strength decreases over distance.
- **Noise:** Unwanted electrical signals that distort the data.

### Multiplexing

- **Frequency-Division Multiplexing (FDM):** Divides the bandwidth into separate frequency channels.
- **Time-Division Multiplexing (TDM):** Each device is assigned a time slot in which to transmit.
- **Statistical TDM:** Time slots are allocated dynamically based on demand, improving efficiency
  over fixed TDM.
