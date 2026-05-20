---
sidebar_label: Networks
sidebar_position: 6
description:
  'Rigorous A-Level computer science notes covering Networks. Includes definitions, derivations,
  worked examples, and exam-style problems.'
sidebar_custom_props:
  some_prop: true
---

# Networks

Computer networks enable communication between devices. A-Level covers the principles of how data is
transmitted, routed, and secured across local and wide-area networks, as well as the protocols and
models that govern these processes.

## Topics Covered

### Network Fundamentals

- **LAN, WAN, WLAN** — classification by geography and technology
- **Client-server vs. peer-to-peer** — architecture models and their trade-offs
- **Topologies** — star, bus, ring, mesh, hybrid; advantages and disadvantages of each
- **Transmission media** — copper (twisted pair, coaxial), fibre optic, wireless; bandwidth and
  latency trade-offs

### The OSI and TCP/IP Models

- **OSI 7-layer model** — Physical, Data Link, Network, Transport, Session, Presentation,
  Application
- **TCP/IP 4-layer model** — Link, Internet, Transport, Application
- **Protocol mapping** — where HTTP, TCP, IP, Ethernet sit in each model
- **Encapsulation** — how data is wrapped with headers at each layer

### Protocols

- **TCP** — reliable, connection-oriented; three-way handshake, flow control
- **UDP** — unreliable, connectionless; when speed matters more than reliability
- **IP addressing** — IPv4 (dotted decimal), subnet masks, CIDR notation
- **HTTP/HTTPS** — request-response model, status codes, TLS encryption
- **DNS** — domain name resolution, hierarchical lookup
- **DHCP** — automatic IP address assignment

### Network Security

- **Firewalls** — packet filtering, stateful inspection
- **Encryption** — symmetric vs. asymmetric; TLS/SSL handshake
- **Authentication** — passwords, biometrics, multi-factor authentication
- **Malware and attacks** — viruses, worms, trojans, phishing, DDoS, SQL injection

### Web Technologies

- **HTML, CSS, JavaScript** — structure, presentation, behaviour
- **Client-side vs. server-side** processing — where computation happens and why

## Study Tips

1. **Draw the OSI and TCP/IP models side by side** — memorise which protocols operate at which
   layer.
2. **Trace a packet** from application layer through to physical — describe what headers are added
   at each layer (encapsulation).
3. **Compare TCP and UDP** with specific use cases — e.g., TCP for web browsing, UDP for video
   streaming.
4. **Practise IP subnetting** — calculating network address, broadcast address, and host range from
   an IP and subnet mask.
5. **Link security concepts** to real-world scenarios — exam questions often describe a situation
   and ask which protection to apply.

## How to Use These Notes

Start with network fundamentals and the OSI model, then move to protocols and security. Each page
provides definitions, diagrams, worked examples, and exam-style problems.
