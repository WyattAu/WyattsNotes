---
title: Network Models
tags:
  - Computing
  - University
---

### 1.1 The OSI Reference Model

The **Open Systems Interconnection (OSI)** model defines seven layers of abstraction for network
Communication:

| Layer | Name         | Function                                     | Examples                  |
| ----- | ------------ | -------------------------------------------- | ------------------------- |
| 7     | Application  | User-facing protocols                        | HTTP, DNS, SMTP, FTP      |
| 6     | Presentation | Data representation, encryption, compression | TLS, SSL, JPEG, ASCII     |
| 5     | Session      | Dialog control, synchronisation              | NetBIOS, RPC, PPTP        |
| 4     | Transport    | End-to-end reliability, flow control         | TCP, UDP, SCTP            |
| 3     | Network      | Logical addressing, routing                  | IP, ICMP, ARP, OSPF       |
| 2     | Data Link    | Framing, error detection, MAC                | Ethernet, Wi-Fi, PPP      |
| 1     | Physical     | Bit transmission on the medium               | Cables, hubs, radio waves |

**Encapsulation.** Each layer adds its own header (and possibly trailer) to the data from the layer
Above, forming a **protocol data unit (PDU)**:

$$\mathrm{Data} \xrightarrow{+\mathrm{th} \mathrm{Segment} \xrightarrow{+\mathrm{nh} \mathrm{Packet} \xrightarrow{+\mathrm{fh}+ft} \mathrm{Frame} \xrightarrow{\mathrm{encode} \mathrm{Bits}}}}$$

### 1.2 The TCP/IP Model

The **TCP/IP** model is the practical standard used on the Internet, with four layers:

| Layer          | OSI Equivalent | Protocols            |
| -------------- | -------------- | -------------------- |
| Application    | 5, 6, 7        | HTTP, DNS, SMTP, TLS |
| Transport      | 4              | TCP, UDP             |
| Internet       | 3              | IP, ICMP, ARP        |
| Network Access | 1, 2           | Ethernet, Wi-Fi, MAC |

### 1.3 Comparison

The OSI model is a theoretical reference used for teaching and design. The TCP/IP model reflects
Actual protocol implementations. The session and presentation layers in OSI are absorbed into the
Application layer in TCP/IP.

**Detailed OSI vs TCP/IP comparison:**

| Aspect                | OSI Model                              | TCP/IP Model                        |
| --------------------- | -------------------------------------- | ----------------------------------- |
| Layers                | 7                                      | 4                                   |
| Nature                | Theoretical reference model            | Practical implementation model      |
| Session/Presentation  | Separate layers (5, 6)                 | Merged into Application layer       |
| Network layer         | Connection-oriented and connectionless | Primarily connectionless (IP)       |
| Transport layer       | TP4 (reliable) and TP0 (unreliable)    | TCP (reliable) and UDP (unreliable) |
| Standardisation       | ISO/IEC                                | IETF (RFCs)                         |
| Adopted by            | Academic, government                   | The global Internet                 |
| Protocol independence | Layer-independent protocols            | Protocols tightly coupled           |
| Service interface     | Precisely defined (SAPs)               | Loosely defined                     |
| Release               | 1984                                   | Developed 1970s, formalised 1980s   |

### 1.4 Protocol Data Unit Encapsulation

Each layer encapsulates data from the layer above by prepending a header (and appending a trailer at
Layer 2). The resulting data unit is named according to its layer:

| Layer       | PDU Name | Header Added         | Trailer | Size (typical) |
| ----------- | -------- | -------------------- | ------- | -------------- |
| Application | Data     | Application-specific | None    | Variable       |
| Transport   | Segment  | TCP/UDP header       | None    | 20--60 bytes   |
| Network     | Packet   | IP header            | None    | 20--60 bytes   |
| Data Link   | Frame    | MAC header           | FCS     | 14--18 + 4 B   |
| Physical    | Bits     | None (encoding)      | None    | N/A            |

**Encapsulation walkthrough.** Consider sending an HTTP GET request of 500 bytes through TCP/IP over
Ethernet:

1. **Application layer:** HTTP creates a request message (500 bytes).
2. **Transport layer:** TCP adds a 20-byte header. Segment = 520 bytes.
3. **Network layer:** IP adds a 20-byte header. Packet = 540 bytes.
4. **Data Link layer:** Ethernet adds 14-byte header + 4-byte FCS. Frame = 558 bytes.
5. **Physical layer:** Frame is encoded into bits and transmitted on the medium.

**Decapsulation.** At the receiver, each layer strips its corresponding header before passing data
To the layer above. This process is the reverse of encapsulation.

