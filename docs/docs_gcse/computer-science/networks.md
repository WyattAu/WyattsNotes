---
title: Networks
date: 2026-04-14
tags:
  - Computer Science
  - GCSE
categories:
  - Computer Science
slug: networks
---

## Networks

:::info
Board Coverage AQA Paper 2 | Edexcel Paper 2 | OCR J277 Paper 2 | WJEC Unit 2
:::

## 1. Types of Networks

### 1.1 LAN and WAN

| Feature   | LAN (Local Area Network)            | WAN (Wide Area Network)                |
| --------- | ----------------------------------- | -------------------------------------- |
| Coverage  | Small area (building, school, home) | Large area (cities, countries, global) |
| Ownership | Owned by the organisation           | Owned by multiple organisations/ISPs   |
| Speed     | Fast (100 Mbps -- 10 Gbps)          | Slower than LAN                        |
| Cost      | Low setup and maintenance           | High setup and maintenance             |

**The Internet** is the largest WAN in the world, connecting billions of devices globally.

### 1.2 Network Topologies

A **network topology** describes the physical or logical arrangement of devices in a network.

**Star topology:**

- All devices connect to a central switch or hub
- If the central device fails, the network fails
- If one cable fails, only that device is affected
- Easy to add or remove devices
- Most common topology in modern networks

**Mesh topology:**

- Every device is connected to every other device
- Very reliable (multiple paths for data)
- Expensive (many cables)
- Complex to set up
- Used in critical systems where reliability is essential

**Bus topology:**

- All devices connected to a single backbone cable
- Cheap and simple
- If the backbone cable fails, the entire network fails
- Performance degrades with many devices
- Rarely used in modern networks

**Ring topology:**

- Devices connected in a circular loop
- Data travels in one direction
- If one device or cable fails, the entire network fails
- Rarely used (modern ring networks use dual rings for redundancy)

## 2. Network Hardware

### 2.1 Key Devices

| Device                            | Function                                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Router                            | Connects different networks together; directs data packets to their destination; assigns IP addresses (DHCP) |
| Switch                            | Connects devices within a LAN; directs data to the correct device using MAC addresses                        |
| Hub                               | Connects devices in a LAN; broadcasts data to ALL connected devices (less efficient than a switch)           |
| Network interface card (NIC)      | Allows a device to connect to a network; has a unique MAC address                                            |
| - **Wireless access point (WAP)** | Allows wireless devices to connect to a wired network                                                        |
| - **Bridge**                      | Connects two segments of a LAN, filtering traffic                                                            |
| - **Repeater**                    | Amplifies signals to extend the range of a network                                                           |

### 2.2 Switch vs Hub

A **hub** broadcasts incoming data to ALL ports. This is inefficient and causes collisions.

A **switch** learns which device is connected to each port and directs data only to the intended
recipient. This is more efficient and reduces collisions.

## 3. Network Models

### 3.1 The TCP/IP Model

The TCP/IP model has four layers:

| Layer                 | Function                               | Examples                        |
| --------------------- | -------------------------------------- | ------------------------------- |
| Application           | Provides services to user applications | HTTP, FTP, SMTP, DNS            |
| Transport             | Ensures reliable delivery of data      | TCP, UDP                        |
| Internet (Network)    | Routes data packets across networks    | IP, routing protocols           |
| Link (Network Access) | Handles physical transmission of data  | Ethernet, Wi-Fi, MAC addressing |

### 3.2 The Four-Layer Model in Action

**Example:** Sending an email using SMTP over TCP/IP.

1. **Application layer:** SMTP protocol prepares the email message.
2. **Transport layer:** TCP breaks the message into segments and adds sequence numbers and
   error-checking.
3. **Internet layer:** IP adds source and destination IP addresses, creating packets.
4. **Link layer:** Ethernet/Wi-Fi adds MAC addresses and transmits the data as frames.

## 4. Network Protocols

### 4.1 Key Protocols

| Protocol  | Layer       | Purpose                                                                                   |
| --------- | ----------- | ----------------------------------------------------------------------------------------- |
| TCP       | Transport   | Reliable, connection-oriented data transfer; breaks data into segments; checks for errors |
| UDP       | Transport   | Fast, connectionless data transfer; no error checking; used for streaming                 |
| IP        | Internet    | Addresses and routes packets across networks                                              |
| HTTP      | Application | Transfers web pages (port 80)                                                             |
| HTTPS     | Application | Secure version of HTTP (port 443); uses encryption                                        |
| FTP       | Application | Transfers files between client and server (ports 20/21)                                   |
| SMTP      | Application | Sends email (port 25)                                                                     |
| POP3/IMAP | Application | Receives email (port 110/143)                                                             |
| DNS       | Application | Resolves domain names to IP addresses (port 53)                                           |
| DHCP      | Application | Assigns IP addresses automatically (port 67/68)                                           |

### 4.2 TCP vs UDP

| Feature     | TCP                                 | UDP                          |
| ----------- | ----------------------------------- | ---------------------------- |
| Connection  | Connection-oriented (handshake)     | Connectionless               |
| Reliability | Guaranteed delivery, error checking | Best effort, no guarantees   |
| Speed       | Slower                              | Faster                       |
| Order       | Data arrives in order               | Data may arrive out of order |
| Use cases   | Web browsing, email, file transfer  | Streaming, gaming, VoIP      |

## 5. IP Addressing

### 5.1 IPv4 Addresses

An **IPv4 address** is a 32-bit number, written as four decimal numbers separated by dots:

$$\text{Example: } 192.168.1.1$$

Each number ranges from 0 to 255 (8 bits each, total 32 bits).

### 5.2 MAC Addresses

A **MAC (Media Access Control) address** is a 48-bit unique identifier assigned to a network
interface card by the manufacturer. It is written as six pairs of hexadecimal digits:

$$\text{Example: } 00:1A:2B:3C:4D:5E$$

**Difference between IP and MAC addresses:**

| Feature     | IP Address                 | MAC Address                            |
| ----------- | -------------------------- | -------------------------------------- |
| Assigned by | Network (DHCP or manually) | Manufacturer (permanent)               |
| Changes?    | Yes (can change)           | No (fixed to hardware)                 |
| Used for    | Routing across networks    | Identifying devices on a local network |
| Layer       | Internet layer             | Link layer                             |

## 6. Network Security

### 6.1 Threats

| Threat                        | Description                                                                        |
| ----------------------------- | ---------------------------------------------------------------------------------- |
| Malware                       | Malicious software (viruses, worms, trojans, ransomware, spyware)                  |
| Phishing                      | Fraudulent emails or websites that trick users into revealing personal information |
| Social engineering            | Manipulating people into breaking security procedures                              |
| - **Brute force attacks**     | Trying every possible password to gain access                                      |
| - **Denial of service (DoS)** | Overwhelming a server with traffic to make it unavailable                          |
| - **Interception**            | Eavesdropping on network communications                                            |
| - **Data theft**              | Unauthorised access to or copying of data                                          |

### 6.2 Prevention Methods

| Method                                | Description                                                                   |
| ------------------------------------- | ----------------------------------------------------------------------------- |
| Firewall                              | Hardware or software that monitors and filters network traffic based on rules |
| Encryption                            | Converting data into a coded form that can only be read with the correct key  |
| Strong passwords                      | Long, complex passwords that are difficult to guess                           |
| - **Antivirus software**              | Detects and removes malware                                                   |
| - **Two-factor authentication (2FA)** | Requires two forms of identification to log in                                |
| - **User access levels**              | Limiting what each user can access based on their role                        |
| - **Physical security**               | Locks, security guards, CCTV                                                  |
| - **Penetration testing**             | Simulated attacks to find vulnerabilities                                     |

### 6.3 Encryption

**Symmetric encryption:** The same key is used to encrypt and decrypt data. Fast but requires secure
key exchange. Example: AES.

**Asymmetric encryption:** A public key encrypts data; a private key decrypts it. Slower but more
secure (no need to exchange keys). Example: RSA.

**SSL/TLS:** Used to secure web traffic (HTTPS). The browser and server establish a secure
connection using asymmetric encryption, then switch to symmetric encryption for speed.

## 7. The Internet and the World Wide Web

### 7.1 Key Distinctions

The **Internet** is the global network of interconnected computers and cables.

The **World Wide Web (WWW)** is a collection of web pages accessed over the Internet using
HTTP/HTTPS.

The Web is a service that runs ON the Internet. The Internet existed before the Web.

### 7.2 How the Web Works

1. A user enters a URL (e.g. https://www.example.com) in a browser
2. The **DNS (Domain Name System)** translates the domain name into an IP address
3. The browser sends an **HTTP request** to the web server at that IP address
4. The server processes the request and sends back **HTML, CSS, and JavaScript** files
5. The browser renders the page for the user

### 7.3 Search Engines

A **search engine** (e.g. Google) uses automated programs called **web crawlers** (or spiders) to:

1. Crawl: Follow links from page to page, discovering new pages
2. Index: Store and organise information about each page
3. Search: When a user enters a query, the search engine ranks matching pages by relevance

**Page ranking** algorithms consider:

- Keywords in the page content and title
- Number and quality of links pointing to the page
- Page popularity and user engagement

## 8. Data Transmission

### 8.1 Packet Switching

Data is broken into small packets for transmission across a network. Each packet contains:

- The data being sent
- A header (source address, destination address, sequence number, error checking)
- A trailer (error checking)

**Advantages of packet switching:**

- No dedicated route needed (packets can take different paths)
- If a packet is lost, only that packet needs to be resent
- Multiple users can share the same network

### 8.2 Transmission Media

| Medium                      | Type     | Speed     | Distance    | Security            |
| --------------------------- | -------- | --------- | ----------- | ------------------- |
| Copper cable (twisted pair) | Guided   | Medium    | Short       | Low (can be tapped) |
| Fibre optic cable           | Guided   | Very fast | Long        | High                |
| Wi-Fi (radio waves)         | Unguided | Fast      | Short       | Low (interceptable) |
| Microwave                   | Unguided | Fast      | Medium-Long | Medium              |
| Satellite                   | Unguided | Variable  | Very long   | Medium              |

### 8.3 Encryption for Data Transmission

All data sent over public networks should be encrypted. HTTPS uses TLS (Transport Layer Security) to
encrypt web traffic, preventing interception.

## Common Pitfalls

- **Confusing the Internet and the World Wide Web.** The Internet is the infrastructure; the Web is
  a service that runs on it.
- **Confusing TCP and UDP.** TCP is reliable and ordered; UDP is fast but unreliable.
- **Confusing IP addresses and MAC addresses.** IP addresses are logical and can change; MAC
  addresses are physical and permanent.
- **Thinking a hub and a switch do the same thing.** A hub broadcasts to all; a switch directs data
  to the correct device.
- **Confusing symmetric and asymmetric encryption.** Symmetric uses one key; asymmetric uses a
  public/private key pair.
- **Forgetting that firewalls filter traffic based on rules.** They are not the same as antivirus
  software.

## Practice Questions

1. Compare LANs and WANs, giving an example of each.

2. Describe the function of a router, a switch, and a NIC.

3. Explain the difference between a star topology and a mesh topology, including advantages and
   disadvantages of each.

4. Describe the four layers of the TCP/IP model and give an example protocol for each layer.

5. Explain the difference between TCP and UDP, and state when each would be appropriate.

6. Explain the difference between an IP address and a MAC address.

7. Describe three methods of protecting a network from security threats.

8. Explain how a web browser loads a web page when the user enters a URL.

9. Explain how packet switching works and why it is used for data transmission over the Internet.

10. Describe the role of a firewall and explain how it differs from antivirus software.
