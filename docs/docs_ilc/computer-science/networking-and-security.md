---
title: Networking and Security
date: 2026-04-14
tags:
  - Computer Science
  - ILC
categories:
  - Computer Science
slug: networking-and-security
---

# Networking and Security

This topic covers computer networks, network models, protocols, security threats, and defensive
measures.

## Network Fundamentals (OL/HL)

### Types of Network

| Type                        | Description                            | Example        |
| --------------------------- | -------------------------------------- | -------------- |
| LAN (Local Area Network)    | Covers a small area (building, campus) | School network |
| WAN (Wide Area Network)     | Covers a large geographic area         | The Internet   |
| WLAN (Wireless LAN)         | LAN using wireless connections         | Home Wi-Fi     |
| PAN (Personal Area Network) | Very small range (a few metres)        | Bluetooth      |

### Client-Server vs Peer-to-Peer (OL/HL)

**Client-server:** central server provides resources to clients. Advantages: centralised management,
security, backup. Disadvantages: single point of failure, cost.

**Peer-to-peer:** all computers are equal, sharing resources directly. Advantages: no central
server, cost-effective for small networks. Disadvantages: security, difficult to manage at scale.

### Network Topologies (OL/HL)

**Star topology:** all devices connect to a central hub/switch.

- Advantages: easy to add/remove devices, if one cable fails others are unaffected.
- Disadvantages: if the hub fails, the network goes down.

**Bus topology:** all devices connect to a single cable (bus).

- Advantages: simple, cheap.
- Disadvantages: if the main cable fails, the network goes down; performance degrades with many
  devices.

**Ring topology:** devices connected in a circular loop.

- Advantages: no collisions, equal access.
- Disadvantages: if one device fails, the ring is broken.

**Mesh topology:** every device connects to every other device.

- Advantages: highly reliable, no single point of failure.
- Disadvantages: expensive, complex cabling.

## Network Models (HL)

### The OSI Model

The Open Systems Interconnection model has 7 layers:

| Layer | Name         | Function                              | Example                 |
| ----- | ------------ | ------------------------------------- | ----------------------- |
| 7     | Application  | User interface, applications          | HTTP, FTP, SMTP         |
| 6     | Presentation | Data formatting, encryption           | SSL/TLS, JPEG           |
| 5     | Session      | Establishes, maintains, ends sessions | NetBIOS                 |
| 4     | Transport    | End-to-end communication              | TCP, UDP                |
| 3     | Network      | Routing and addressing                | IP, ICMP                |
| 2     | Data Link    | Node-to-node data transfer            | Ethernet, MAC addresses |
| 1     | Physical     | Physical transmission of bits         | Cables, Wi-Fi, hubs     |

### The TCP/IP Model (HL)

A simplified 4-layer model:

| Layer          | OSI Equivalent | Protocol             |
| -------------- | -------------- | -------------------- |
| Application    | 5, 6, 7        | HTTP, DNS, SMTP, FTP |
| Transport      | 4              | TCP, UDP             |
| Internet       | 3              | IP, ICMP             |
| Network Access | 1, 2           | Ethernet, Wi-Fi      |

## Network Protocols (OL/HL)

### TCP/IP (HL)

**TCP (Transmission Control Protocol):** connection-oriented, reliable. Establishes a connection
before sending data (three-way handshake). Guarantees delivery and order. Used for web browsing,
email.

**UDP (User Datagram Protocol):** connectionless, unreliable. No guarantee of delivery or order.
Faster than TCP. Used for streaming, online gaming, DNS.

### IP Addressing (OL/HL)

**IPv4:** 32-bit address (4 octets), e.g., $192.168.1.1$. Approximately 4.3 billion addresses.

**IPv6:** 128-bit address, e.g., $2001:0db8:85a3:0000:0000:8a2e:0370:7334$. Virtually unlimited
addresses.

**Private IP ranges:**

- $10.0.0.0$ -- $10.255.255.255$ (Class A)
- $172.16.0.0$ -- $172.31.255.255$ (Class B)
- $192.168.0.0$ -- $192.168.255.255$ (Class C)

### Subnet Masks (HL)

A subnet mask determines which part of an IP address is the network portion and which is the host
portion.

**Example (HL):** IP address $192.168.1.100$ with subnet mask $255.255.255.0$.

Network portion: $192.168.1.0$. Host portion: $0.0.0.100$.

This allows 254 hosts ($2^8 - 2$).

### DNS (Domain Name System) (OL/HL)

Translates domain names (e.g., www.example.com) to IP addresses.

Hierarchical structure: root $\to$ top-level domain (.com, .org) $\to$ second-level domain (example)
$\to$ subdomain (www).

### HTTP/HTTPS (OL/HL)

**HTTP (Hypertext Transfer Protocol):** protocol for transferring web pages. Port 80.

**HTTPS (HTTP Secure):** HTTP encrypted with SSL/TLS. Port 443.

### Other Protocols

- **FTP (File Transfer Protocol):** transfers files. Port 21.
- **SMTP (Simple Mail Transfer Protocol):** sends email. Port 25.
- **POP3/IMAP:** receives email.
- **DHCP (Dynamic Host Configuration Protocol):** assigns IP addresses automatically.
- **NAT (Network Address Translation):** allows multiple devices to share one public IP address.

## Network Hardware (OL/HL)

| Device                | Function                                                           |
| --------------------- | ------------------------------------------------------------------ |
| Router                | Connects different networks, routes packets                        |
| Switch                | Connects devices within a LAN, forwards frames using MAC addresses |
| Hub                   | Connects devices, broadcasts data to all ports (no intelligence)   |
| Modem                 | Converts digital signals to analog and vice versa                  |
| Wireless Access Point | Allows wireless devices to connect to a wired network              |
| Firewall              | Filters traffic, blocks unauthorised access                        |
| Repeater              | Regenerates signals to extend network range                        |

## Security Threats (OL/HL)

### Malware

- **Virus:** attaches to legitimate programs, replicates, and spreads.
- **Worm:** self-replicating, spreads without a host program.
- **Trojan:** disguised as legitimate software, does not self-replicate.
- **Ransomware:** encrypts files and demands payment for decryption.
- **Spyware:** secretly monitors activity and collects information.
- **Adware:** displays unwanted advertisements.

### Social Engineering

Manipulating people into divulging confidential information.

- **Phishing:** fraudulent emails or websites pretending to be legitimate.
- **Spear phishing:** targeted phishing at specific individuals.
- **Pretexting:** creating a false scenario to obtain information.
- **Baiting:** offering something enticing to trick the victim.

### Other Threats

- **DDoS (Distributed Denial of Service):** overwhelms a server with traffic from multiple sources.
- **Man-in-the-middle attack:** intercepts communication between two parties.
- **SQL injection:** inserts malicious SQL code into input fields to access or manipulate a
  database.
- **Brute force attack:** systematically tries every possible password.

## Security Defences (OL/HL)

### Technical Measures

- **Firewall:** monitors and filters incoming and outgoing traffic.
- **Antivirus software:** detects and removes malware.
- **Encryption:** converts data into an unreadable format without the correct key.
- **Two-factor authentication (2FA):** requires two forms of identification.
- **SSL/TLS:** encrypts data in transit (HTTPS).
- **Intrusion Detection System (IDS):** monitors network traffic for suspicious activity.

### Encryption (HL)

**Symmetric encryption:** same key for encryption and decryption. Fast. Example: AES.

**Asymmetric encryption:** public key for encryption, private key for decryption. Slower but more
secure for key exchange. Example: RSA.

**Hashing:** one-way function that produces a fixed-length output. Used for password storage and
integrity verification. Example: SHA-256.

```python
import hashlib

password = "mypassword123"
hash_value = hashlib.sha256(password.encode()).hexdigest()
print(f"SHA-256 hash: {hash_value}")
```

### Policies and Practices

- **Strong passwords:** minimum 12 characters, mix of upper/lowercase, numbers, and symbols.
- **Regular updates:** keep software and operating systems patched.
- **Backup:** regular backups to protect against data loss.
- **Access control:** limit access based on roles (principle of least privilege).
- **Security awareness training:** educate users about threats and best practices.

### SQL Injection Prevention (HL)

Use parameterised queries instead of string concatenation.

**Vulnerable:**

```python
query = f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'"
```

**Secure (parameterised):**

```python
cursor.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password))
```

## Common Pitfalls

1. **OSI model** -- remember the layers from bottom (physical) to top (application).
2. **TCP vs UDP** -- TCP is reliable but slower; UDP is fast but unreliable.
3. **Private IP addresses** -- not routable on the public internet.
4. **Encryption** -- symmetric uses one key; asymmetric uses a key pair.
5. **SQL injection** -- always use parameterised queries.

## Practice Questions

### Ordinary Level

1. Describe the difference between a LAN and a WAN.
2. Explain the functions of a router and a switch.
3. Describe three types of malware and how they differ.
4. Explain what phishing is and how to protect against it.

### Higher Level

1. Describe the OSI model, naming all seven layers and their functions.
2. Explain how TCP establishes a connection using the three-way handshake.
3. A computer has IP address $172.16.5.50$ with subnet mask $255.255.0.0$. What is the network
   address and the broadcast address?
4. Explain the difference between symmetric and asymmetric encryption. When would you use each?
