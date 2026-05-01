---
id: dse-ict-internet-and-data-communications
title: Internet and Data Communications
description: "DSE ICT notes covering network fundamentals, hardware, internet services, web development, IP addressing, DNS, transmission media, protocols, OSI model, network security, and social implications."
slug: internet-and-data-communications
date: 2026-04-08T00:00:00.000Z
tags: [DSE, ICT]
categories: [DSE, ICT]
---

## Network Fundamentals

### Types of Networks

| Type    | Full Name             | Range                     | Example                                           |
| ------- | --------------------- | ------------------------- | ------------------------------------------------- |
| **LAN** | Local Area Network    | A building or campus      | School computer lab, office network               |
| **WAN** | Wide Area Network     | Cities, countries, global | The Internet, a company's offices across cities   |
| **PAN** | Personal Area Network | Within ~10 m              | Bluetooth connection between phone and headphones |

### Network Topologies

#### Star Topology

All devices connect to a central hub or switch.

```python
         [Device]
             |
[Device] -- [Hub/Switch] -- [Device]
             |
         [Device]
```

| Aspect         | Detail                                                                                                   |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| Advantages     | Easy to install and manage; if one cable fails, only that device is affected; easy to add/remove devices |
| Disadvantages  | If the central hub/switch fails, the entire network goes down; requires more cabling than bus topology   |
| Failure impact | Single device failure: no impact on others. Central node failure: total network failure                  |

#### Bus Topology

All devices share a single backbone cable.

```python
[Device] ---[Device] ---[Device] ---[Device] ---[Terminator]
```

| Aspect         | Detail                                                                                                                                         |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Advantages     | Simple and cheap; requires less cabling; easy to set up for small networks                                                                     |
| Disadvantages  | If the backbone cable breaks, the entire network fails; performance degrades as more devices are added (collisions); difficult to troubleshoot |
| Failure impact | Backbone failure: total network failure. Single device failure: network continues but that device is disconnected                              |

#### Ring Topology

Each device connects to exactly two others, forming a closed loop.

```python
         +---> [Device] --+
         |                |
[Device] |                | [Device]
         |                |
         +--- [Device] <--+
```

| Aspect         | Detail                                                                                                                                    |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Advantages     | Data travels in one direction, reducing collisions; equal access for all devices; suitable for token ring networks                        |
| Disadvantages  | If one device or cable fails, the entire network can fail; adding/removing devices disrupts the ring; slower than star for large networks |
| Failure impact | Single failure can bring down the entire ring (unless using a dual ring)                                                                  |

#### Mesh Topology

Every device is connected to every other device (full mesh) or to multiple devices (partial mesh).

```python
  [Device] --- [Device]
     |    \      |
     |     \     |
  [Device] --- [Device]
```

| Aspect         | Detail                                                                                                     |
| -------------- | ---------------------------------------------------------------------------------------------------------- |
| Advantages     | High redundancy and reliability; multiple paths for data; no single point of failure (full mesh)           |
| Disadvantages  | Expensive and complex cabling; difficult to set up and manage; not scalable for large networks (full mesh) |
| Failure impact | High fault tolerance; data can route around failed connections                                             |

:::warning[Exam Tip] In exam questions, always discuss both advantages AND disadvantages of each
topology. Star is the most common in modern LANs due to ease of management and fault isolation.
:::

---

## Networking Hardware

| Device                | Function                                                                                                                         | OSI Layer |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------- |
| **Router**            | Connects different networks; routes packets between them using IP addresses; operates at Network layer                           | Layer 3   |
| **Switch**            | Connects devices within a LAN; forwards frames based on MAC addresses; reduces collisions by creating separate collision domains | Layer 2   |
| **Hub**               | Connects devices in a LAN; broadcasts data to ALL ports (no intelligence); all devices share bandwidth                           | Layer 1   |
| **NIC**               | Network Interface Card; provides the physical connection to the network; has a unique MAC address                                | Layer 1/2 |
| **Modem**             | Modulator-Demodulator; converts digital signals to analogue (and vice versa) for transmission over telephone lines               | Layer 1   |
| **Access Point (AP)** | Allows wireless devices to connect to a wired network; acts as a bridge between wireless and wired segments                      | Layer 2   |

### Hub vs Switch

| Feature           | Hub                            | Switch                                  |
| ----------------- | ------------------------------ | --------------------------------------- |
| Data forwarding   | Broadcasts to all ports        | Forwards only to the destination port   |
| Collision domains | Single shared collision domain | Separate collision domain per port      |
| Bandwidth         | Shared among all devices       | Dedicated bandwidth per port            |
| MAC address table | No                             | Yes (learns and stores MAC addresses)   |
| Intelligence      | None                           | Uses MAC addresses for smart forwarding |

---

## Internet Services

| Service                          | Description                                                        | Protocol(s)      |
| -------------------------------- | ------------------------------------------------------------------ | ---------------- |
| **World Wide Web (WWW)**         | Access and navigate web pages using hyperlinks                     | HTTP, HTTPS      |
| **Email**                        | Send and receive electronic messages                               | SMTP, POP3, IMAP |
| **File Transfer Protocol (FTP)** | Upload and download files between client and server                | FTP, SFTP        |
| **Voice over IP (VoIP)**         | Make voice calls over the internet (e.g., Skype, Zoom)             | SIP, RTP         |
| **Streaming**                    | Real-time audio/video delivery (e.g., YouTube, Netflix)            | HTTP, RTSP, HLS  |
| **Cloud Computing**              | On-demand computing resources over the internet (IaaS, PaaS, SaaS) | Various          |

### Email Protocols

| Protocol | Port     | Purpose       | Direction                                                             |
| -------- | -------- | ------------- | --------------------------------------------------------------------- |
| **SMTP** | 25 / 587 | Send email    | Client to server, server to server                                    |
| **POP3** | 110      | Receive email | Downloads messages to local device, often deletes from server         |
| **IMAP** | 143      | Receive email | Accesses messages on server without downloading; syncs across devices |

---

## Web Development Basics

### HTML (HyperText Markup Language)

HTML defines the **structure** and **content** of a web page.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Page</h1>
    This is a paragraph of text.
    <a href="https://example.com">Click here</a>
    <img src="photo.jpg" alt="A photo" width="300" />
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Alice</td>
        <td>20</td>
      </tr>
    </table>
  </body>
</html>
```

Key HTML tags:

| Tag                               | Purpose                                 |
| --------------------------------- | --------------------------------------- |
| `<html>`                          | Root element                            |
| `<head>`                          | Metadata, title, links to CSS/JS        |
| `<body>`                          | Visible page content                    |
| `<h1>` -- `<h6>`                  | Headings (h1 is largest)                |
| ``                                | Paragraph                               |
| `<a href="URL">`                  | Hyperlink                               |
| `<img src="URL" alt="text">`      | Image                                   |
| `<ul>`, `<ol>`, `<li>`            | Unordered list, ordered list, list item |
| `<table>`, `<tr>`, `<th>`, `<td>` | Table, row, header cell, data cell      |
| `<form>`, `<input>`, `<button>`   | Form elements                           |

### CSS (Cascading Style Sheets)

CSS controls the **presentation and layout** of a web page.

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #333366;
  text-align: center;
}

p {
  font-size: 16px;
  line-height: 1.5;
}

.highlight {
  background-color: yellow;
  font-weight: bold;
}

#main-content {
  width: 800px;
  margin: 0 auto;
}
```

**CSS selectors:**

| Selector | Selects                   | Example             |
| -------- | ------------------------- | ------------------- |
| Element  | All elements of that type | `p { }`             |
| Class    | Elements with that class  | `.highlight { }`    |
| ID       | The element with that ID  | `#main-content { }` |

### JavaScript

JavaScript adds **interactivity and dynamic behaviour** to web pages.

```javascript
// Change content of an element
document.getElementById('demo').innerHTML = 'Hello, World!';

// Display an alert
alert('Welcome!');

// Simple function
function calculateSum() {
  var a = parseInt(document.getElementById('num1').value);
  var b = parseInt(document.getElementById('num2').value);
  var result = a + b;
  document.getElementById('result').innerHTML = 'Sum: ' + result;
}

// Event handling
document.getElementById('myButton').onclick = function () {
  alert('Button clicked!');
};
```

:::info HTML = structure, CSS = style, JavaScript = behaviour. This three-way separation is a
fundamental principle of web development.
:::

---

## IP Addressing

### IPv4

- 32-bit address, written as four octets in dotted decimal: `192.168.1.1`
- Each octet ranges from 0 to 255 ($2^8 - 1$).
- Total addresses: $2^{32} \approx 4.3$ billion.

**IPv4 address classes:**

| Class | First Octet Range | Network Bits | Host Bits | Default Subnet Mask |
| ----- | ----------------- | ------------ | --------- | ------------------- |
| A     | 1 -- 126          | 8            | 24        | 255.0.0.0           |
| B     | 128 -- 191        | 16           | 16        | 255.255.0.0         |
| C     | 192 -- 223        | 24           | 8         | 255.255.255.0       |

Special addresses:

- `127.0.0.1` -- loopback (localhost)
- `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16` -- private address ranges (not routable on the
  internet)
- `255.255.255.255` -- broadcast address

### IPv6

- 128-bit address, written as eight groups of 4 hex digits:
  `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
- Leading zeros in each group can be omitted.
- One consecutive block of all-zero groups can be replaced with `::`.
- Total addresses: $2^{128} \approx 3.4 \times 10^{38}$.

**IPv4 vs IPv6:**

| Feature             | IPv4                               | IPv6                                        |
| ------------------- | ---------------------------------- | ------------------------------------------- |
| Address length      | 32 bits                            | 128 bits                                    |
| Address format      | Dotted decimal                     | Colon-separated hex                         |
| Number of addresses | ~4.3 billion                       | ~$3.4 \times 10^{38}$                       |
| Header complexity   | Complex, variable options          | Simplified, fixed header                    |
| Security            | Optional (IPsec add-on)            | Built-in IPsec support                      |
| NAT                 | Required (due to address shortage) | Not required                                |
| Auto-configuration  | Limited                            | SLAAC (Stateless Address Autoconfiguration) |

### Subnet Masks

A subnet mask determines which part of an IP address is the network portion and which is the host
portion.

For example, `192.168.1.50` with subnet mask `255.255.255.0`:

- Network portion: `192.168.1.0`
- Host portion: `0.0.0.50`
- Broadcast address: `192.168.1.255`
- Usable host range: `192.168.1.1` to `192.168.1.254` (254 hosts)

CIDR notation: `/24` means 24 bits for the network, 8 bits for the host.

---

## DNS (Domain Name System)

DNS translates human-readable domain names (e.g., `www.example.com`) into IP addresses (e.g.,
`93.184.216.34`).

### DNS Resolution Process

1. User types `www.example.com` in the browser.
2. The browser checks its **local cache** for the IP address.
3. If not found, the request goes to the **recursive DNS resolver** (usually provided by the ISP).
4. The resolver checks its cache. If not found: (a) Query the **root name server** -- returns the
   TLD name server for `.com`. (b) Query the **TLD name server** (`.com`) -- returns the
   authoritative name server for `example.com`. (c) Query the **authoritative name server** --
   returns the IP address for `www.example.com`.
5. The resolver returns the IP address to the browser.
6. The browser connects to the web server at that IP address.

### Domain Name Structure

A domain name is read right to left: `www.example.com`

- `.com` -- Top-Level Domain (TLD)
- `example` -- Second-Level Domain (registered by the organisation)
- `www` -- Subdomain

**Common TLDs:** `.com` (commercial), `.org` (organisation), `.edu` (education), `.gov`
(government), `.hk` (Hong Kong), `.net` (network), `.cn` (China).

### Domain Registration

To register a domain:

1. Choose a domain name and check availability.
2. Register through an accredited **domain registrar** (e.g., GoDaddy, Namecheap).
3. Pay an annual registration fee.
4. Provide registrant information (name, contact, DNS server details).
5. The registrar updates the TLD's authoritative name server with the domain's DNS records.

---

## Transmission Media

### Wired Media

| Type              | Description                                                   | Speed          | Max Distance | Cost   | Interference         |
| ----------------- | ------------------------------------------------------------- | -------------- | ------------ | ------ | -------------------- |
| **Twisted Pair**  | Pairs of copper wires twisted together; UTP or STP            | 1 Gbps (Cat 6) | 100 m        | Low    | Moderate (EMI)       |
| **Coaxial Cable** | Central copper conductor with insulating and shielding layers | 10 Gbps        | 500 m        | Medium | Low                  |
| **Fibre Optic**   | Thin glass/plastic fibres transmitting light pulses           | 100+ Gbps      | 100+ km      | High   | None (immune to EMI) |

### Wireless Media

| Type                 | Description                           | Speed                             | Range            | Frequency             |
| -------------------- | ------------------------------------- | --------------------------------- | ---------------- | --------------------- |
| **Wi-Fi**            | IEEE 802.11 standards (a/b/g/n/ac/ax) | Up to ~10 Gbps (Wi-Fi 6)          | 30--100 m indoor | 2.4 GHz, 5 GHz, 6 GHz |
| **Bluetooth**        | Short-range wireless for peripherals  | 1--2 Mbps (Classic) / 2 Mbps (LE) | ~10 m            | 2.4 GHz               |
| **Cellular** (4G/5G) | Mobile network                        | 100 Mbps (4G) -- 10 Gbps (5G)     | km-scale         | Various               |

:::warning[Exam Tip] Fibre optics is immune to electromagnetic interference (EMI), supports the
highest bandwidth and longest distances, but is the most expensive and difficult to install. Twisted
pair is the cheapest but has the lowest bandwidth and is susceptible to EMI.
:::

---

## Transmission Modes

### Serial vs Parallel

| Mode         | Description                                              | Advantages                                                  | Disadvantages                                                               |
| ------------ | -------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Serial**   | Data sent one bit at a time over a single channel        | Fewer wires, cheaper, longer distances, higher clock speeds | Slower for short distances                                                  |
| **Parallel** | Multiple bits sent simultaneously over multiple channels | Faster for short distances                                  | More wires, more expensive, signal skew over distance, limited cable length |

### Synchronous vs Asynchronous

| Mode             | Description                                                    | Features                                                  |
| ---------------- | -------------------------------------------------------------- | --------------------------------------------------------- |
| **Synchronous**  | Data sent in continuous stream, synchronised by a clock signal | No start/stop bits; faster; used for large data transfers |
| **Asynchronous** | Data sent one byte at a time with start and stop bits          | No shared clock; uses start/stop bits; simpler but slower |

### Simplex, Half-Duplex, Full-Duplex

| Mode            | Description                                           | Example                       |
| --------------- | ----------------------------------------------------- | ----------------------------- |
| **Simplex**     | Data flows in one direction only                      | TV broadcast, keyboard to CPU |
| **Half-Duplex** | Data flows in both directions, but only one at a time | Walkie-talkie                 |
| **Full-Duplex** | Data flows in both directions simultaneously          | Telephone, modern Ethernet    |

---

## Bandwidth and Broadband

**Bandwidth:** The maximum data transfer rate of a network connection, measured in bps (bits per
second).

Common units: kbps ($10^3$), Mbps ($10^6$), Gbps ($10^9$).

**Broadband:** High-speed internet access (generally defined as $\gt$ 256 kbps). Technologies
include:

- ADSL (Asymmetric Digital Subscriber Line) -- uses telephone lines, faster download than upload
- Fibre broadband (FTTH/FTTP) -- uses fibre optic cables, highest speeds
- Cable -- uses coaxial cable TV infrastructure
- Mobile broadband (4G/5G) -- cellular network

**Baseband vs Broadband transmission:**

| Feature      | Baseband                    | Broadband                                          |
| ------------ | --------------------------- | -------------------------------------------------- |
| Signal type  | Digital                     | Analogue                                           |
| Transmission | Single signal on the medium | Multiple signals (frequency division multiplexing) |
| Example      | Ethernet LAN                | Cable TV, ADSL                                     |

---

## Protocols

A protocol is a set of rules governing data communication between devices.

| Protocol  | Layer       | Purpose                                                                                                           |
| --------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| **TCP**   | Transport   | Reliable, connection-oriented delivery; ensures packets arrive in order; uses acknowledgements and retransmission |
| **IP**    | Network     | Addresses and routes packets across networks                                                                      |
| **HTTP**  | Application | Request and transfer web pages (port 80)                                                                          |
| **HTTPS** | Application | Secure HTTP using TLS/SSL encryption (port 443)                                                                   |
| **SMTP**  | Application | Send email (port 25/587)                                                                                          |
| **POP3**  | Application | Receive email (port 110)                                                                                          |
| **FTP**   | Application | Transfer files (ports 20/21)                                                                                      |
| **UDP**   | Transport   | Fast, connectionless delivery; no error checking; used for streaming, gaming                                      |

### TCP vs UDP

| Feature     | TCP                                         | UDP                                  |
| ----------- | ------------------------------------------- | ------------------------------------ |
| Connection  | Connection-oriented (3-way handshake)       | Connectionless                       |
| Reliability | Reliable (acknowledgements, retransmission) | Unreliable (best effort)             |
| Ordering    | Packets arrive in order                     | No guarantee of order                |
| Speed       | Slower due to overhead                      | Faster, less overhead                |
| Use cases   | Web browsing, email, file transfer          | Video streaming, online gaming, VoIP |

---

## OSI Model

The OSI (Open Systems Interconnection) model has 7 layers:

| Layer | Name             | Function                                          | Example Protocols/Devices        |
| ----- | ---------------- | ------------------------------------------------- | -------------------------------- |
| 7     | **Application**  | Provides network services to user applications    | HTTP, FTP, SMTP, DNS             |
| 6     | **Presentation** | Data format translation, encryption, compression  | SSL/TLS, JPEG, ASCII             |
| 5     | **Session**      | Establishes, manages, terminates sessions         | NetBIOS, RPC                     |
| 4     | **Transport**    | End-to-end error-free data delivery               | TCP, UDP                         |
| 3     | **Network**      | Logical addressing and routing                    | IP, ICMP, routers                |
| 2     | **Data Link**    | Frame formatting, MAC addressing, error detection | Ethernet, Wi-Fi, switches        |
| 1     | **Physical**     | Physical transmission of raw bits                 | Cables, hubs, electrical signals |

### OSI vs TCP/IP Model

| OSI Layer                          | TCP/IP Layer          |
| ---------------------------------- | --------------------- |
| Application, Presentation, Session | Application           |
| Transport                          | Transport             |
| Network                            | Internet              |
| Data Link, Physical                | Network Access (Link) |

:::warning[Exam Tip] Memorise the OSI layers from top to bottom using mnemonics. Common one: **A**ll
**P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing (Application, Presentation, Session,
Transport, Network, Data Link, Physical).
:::

---

## Network Security

### Firewall

A firewall monitors and controls incoming and outgoing network traffic based on predefined security
rules.

- **Packet filtering:** Examines source/destination IP and port. Fast but basic.
- **Stateful inspection:** Tracks the state of active connections; more intelligent.
- **Application-level (proxy):** Inspects the actual content of packets at the application layer.
  Most thorough but slowest.

### Encryption

- **Symmetric encryption:** Same key for encryption and decryption (e.g., AES). Fast but key
  distribution is a problem.
- **Asymmetric encryption:** Public key for encryption, private key for decryption (e.g., RSA).
  Slower but solves key distribution.

### Digital Certificate

A digital certificate is an electronic document issued by a **Certificate Authority (CA)** that
binds a public key to an identity (e.g., a website domain). It verifies the authenticity of a
website, enabling HTTPS secure connections.

### VPN (Virtual Private Network)

A VPN creates an encrypted tunnel over a public network (the internet), providing:

- Privacy: data is encrypted, hiding it from ISPs and third parties.
- Security: protects data on untrusted networks (e.g., public Wi-Fi).
- Anonymity: masks the user's real IP address.

---

## Social Implications

### Computer Ethics

Ethical principles guiding computer use:

- Do not use computers to harm others.
- Do not interfere with others' computer work.
- Do not snoop on others' files.
- Do not steal software or data.
- Do not use computers to bear false witness.
- Do not copy or use proprietary software without paying.
- Do not use others' resources without authorisation.

### Intellectual Property and Copyright

- **Copyright:** Automatic legal protection of original creative works (software, music, text,
  images). Gives the creator exclusive rights to reproduce, distribute, and adapt the work.
- **Software piracy:** Unauthorised copying, distribution, or use of software. Illegal and
  unethical.
- **Creative Commons:** A licensing system allowing creators to specify how their work may be used
  (e.g., attribution required, non-commercial use only).

### Privacy

- **Personal Data Privacy Ordinance (PDPO, HK):** Hong Kong's data protection law that governs the
  collection, use, and disclosure of personal data.
- Key principles of the PDPO:
  - Purpose and manner of data collection must be lawful and fair.
  - Personal data should only be used for the purpose for which it was collected.
  - Data should be accurate and up to date.
  - Data should not be kept longer than necessary.
  - Individuals have the right to access their personal data.
- **Data user:** A person or organisation that controls the collection, holding, processing, or use
  of personal data.

### Computer Crimes

| Crime                    | Description                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| **Hacking**              | Unauthorised access to a computer system                                                     |
| **Malware distribution** | Spreading viruses, worms, trojans, ransomware                                                |
| **Phishing**             | Fraudulent attempts to obtain sensitive information by pretending to be a trustworthy entity |
| **Identity theft**       | Using another person's personal information without consent                                  |
| **Software piracy**      | Unauthorised copying and distribution of copyrighted software                                |
| **DDoS attacks**         | Flooding a server with traffic to make it unavailable                                        |

### Health Issues

| Issue                              | Cause                                           | Prevention                                                                          |
| ---------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------- |
| **RSI (Repetitive Strain Injury)** | Repeated physical movements (typing, mouse use) | Regular breaks, ergonomic equipment, proper posture                                 |
| **Eye strain**                     | Staring at screens for long periods             | 20-20-20 rule, proper lighting, screen distance                                     |
| **Back/neck pain**                 | Poor posture at workstation                     | Ergonomic chair, correct monitor height, regular movement                           |
| **Radiation concern**              | Proximity to wireless devices                   | Maintain distance; current evidence shows no significant harm from typical exposure |

### Digital Divide

The gap between those who have access to information and communication technology (ICT) and those
who do not.

**Causes:** Economic inequality, geographical location (rural vs urban), age, education level,
physical disability, government policy.

**Effects:** Reduced access to education, employment opportunities, government services, and
information.

**Solutions:** Government subsidies, community ICT centres, improving infrastructure in underserved
areas, digital literacy training programmes.

### Green Computing

Practices to reduce the environmental impact of computing:

- Energy-efficient hardware (Energy Star ratings, low-power processors).
- Power management (sleep mode, automatic shutdown).
- Virtualisation (running multiple virtual machines on a single physical server reduces hardware
  needs).
- Cloud computing (shared resources reduce overall energy consumption).
- Proper disposal and recycling of e-waste (contains toxic materials like lead, mercury).
- Extending device lifespan through upgrades and maintenance.

---

## Common Pitfalls

1. **Hub vs Switch:** A hub broadcasts to all ports; a switch forwards only to the intended
   recipient. This distinction is fundamental.

2. **Router vs Switch:** A router connects different networks (operates at Layer 3, uses IP
   addresses). A switch connects devices within the same network (operates at Layer 2, uses MAC
   addresses).

3. **TCP vs UDP:** TCP is reliable and connection-oriented; UDP is fast and connectionless.
   Streaming and gaming use UDP despite unreliability because speed matters more than perfect
   delivery.

4. **HTTP vs HTTPS:** HTTPS is HTTP over TLS/SSL. It encrypts data in transit, protecting against
   eavesdropping. Modern websites should always use HTTPS.

5. **SMTP sends, POP3/IMAP receives:** Do not confuse the roles. SMTP is for sending; POP3 and IMAP
   are for receiving. IMAP syncs across devices; POP3 typically downloads and removes from server.

6. **Bandwidth units:** Bandwidth is measured in bits per second (bps), not bytes per second. 1 byte
   = 8 bits. A 100 Mbps connection transfers at most 12.5 MB/s.

7. **Private vs Public IP:** Private IP addresses (10.x.x.x, 172.16--31.x.x, 192.168.x.x) are not
   routable on the internet. NAT (Network Address Translation) is needed for private hosts to
   communicate on the internet.

8. **OSI layer ordering:** Application is Layer 7 (top), Physical is Layer 1 (bottom). Know which
   protocols and devices belong to each layer.

9. **Serial vs Parallel:** Serial sends one bit at a time; parallel sends multiple bits
   simultaneously. Modern high-speed interfaces (USB 3.0, SATA) are serial despite being fast --
   parallel interfaces suffer from signal skew at high speeds.

10. **Digital divide is not just about access:** It encompasses skills, affordability, and the
    ability to use technology effectively, not just physical availability of devices.

---

## Practice Problems

<details>
<summary>Question 1: Network Topology Analysis</summary>

A small office with 6 computers needs to set up a LAN. The office manager asks you to recommend a
topology.

(a) Recommend the most suitable topology and justify your answer.

(b) Name the networking hardware device that should be at the centre of this topology.

(c) Explain one advantage and one disadvantage of your chosen topology compared to a bus topology.

Answer:

(a) **Star topology** using a central switch. It is the most suitable because it is easy to manage,
fault-tolerant for individual device failures, and allows easy addition/removal of devices without
disrupting the network.

(b) A **switch** (or hub, but a switch is preferred for its intelligence and dedicated bandwidth).

(c) **Advantage over bus:** If one cable or device fails, only that device is affected; the rest of
the network continues to work. In a bus topology, a backbone cable failure brings down the entire
network.

**Disadvantage over bus:** Star topology requires more cabling (each device needs its own cable to
the central switch), making initial installation more expensive than a bus topology with its single
backbone cable.

</details>

<details>
<summary>Question 2: DNS Resolution</summary>

Explain the steps involved when a user types `www.hkeaa.edu.hk` into a web browser. Your answer
should include the role of DNS.

Answer:

1. The browser checks its **local DNS cache** for the IP address of `www.hkeaa.edu.hk`.
2. If not cached, the request is sent to the **recursive DNS resolver** (configured by the ISP or
   OS).
3. The resolver checks its own cache. If not found: (a) The resolver queries a **root name server**,
   which returns the IP address of the **.hk TLD server**. (b) The resolver queries the **.hk TLD
   server**, which returns the IP address of the **authoritative name server** for `hkeaa.edu.hk`.
   (c) The resolver queries the **authoritative name server** for `hkeaa.edu.hk`, which returns the
   IP address of `www.hkeaa.edu.hk`.
4. The resolver returns the IP address to the browser.
5. The browser caches the result and establishes a TCP connection to the web server at that IP
   address.
6. An HTTP request is sent, and the web page is received and rendered.

</details>

<details>
<summary>Question 3: IP Addressing and Subnetting</summary>

A company has been assigned the IP address `192.168.10.0` with a subnet mask of `255.255.255.192`.

(a) How many bits are used for the host portion?

(b) How many usable host addresses are available per subnet?

(c) List the network addresses of all possible subnets.

(d) What is the broadcast address of the first subnet?

Answer:

(a) The subnet mask `255.255.255.192` in binary is `11111111.11111111.11111111.11000000`. The number
of host bits is 6 (the number of 0s).

(b) Number of usable hosts = $2^6 - 2 = 64 - 2 = 62$. (Subtract 2 for the network address and
broadcast address.)

(c) The block size is $256 - 192 = 64$. Subnet network addresses:

- `192.168.10.0`
- `192.168.10.64`
- `192.168.10.128`
- `192.168.10.192`

(d) Broadcast address of the first subnet (`192.168.10.0`): `192.168.10.63`.

</details>

<details>
<summary>Question 4: Web Development</summary>

(a) Write HTML code to create a form with:

- A text input field for a username
- A password input field
- A submit button

(b) Write CSS to style the form so that the background colour of the page is light grey (`#f5f5f5`),
the form has a white background with 20px padding, and the text input fields have a 2px solid blue
border.

(c) Write JavaScript to validate that the username field is not empty when the form is submitted.

Answer:

(a)

```html
<form id="loginForm">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" />
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" />
  <input type="submit" value="Login" />
</form>
```

(b)

```css
body {
  background-color: #f5f5f5;
}

#loginForm {
  background-color: white;
  padding: 20px;
}

input[type='text'],
input[type='password'] {
  border: 2px solid blue;
}
```

(c)

```javascript
document.getElementById('loginForm').onsubmit = function () {
  var username = document.getElementById('username').value;
  if (username === '') {
    alert('Username cannot be empty!');
    return false;
  }
  return true;
};
```

</details>

<details>
<summary>Question 5: OSI Model</summary>

(a) A router operates at which layer of the OSI model?

(b) Data is divided into "frames" at which layer?

(c) Encryption of data is performed at which layer?

(d) Match the following protocols to their correct OSI layer:

- TCP
- HTTP
- Ethernet
- IP

Answer:

(a) Layer 3 (Network layer).

(b) Layer 2 (Data Link layer).

(c) Layer 6 (Presentation layer). Note: encryption can also occur at the Application layer (HTTPS
uses TLS which operates between the Application and Transport layers, sometimes considered Layer 6).

(d)

- TCP -- Layer 4 (Transport)
- HTTP -- Layer 7 (Application)
- Ethernet -- Layer 2 (Data Link) and Layer 1 (Physical)
- IP -- Layer 3 (Network)

</details>

<details>
<summary>Question 6: Network Security</summary>

(a) Explain the difference between symmetric and asymmetric encryption. Give one example of each.

(b) Describe the role of a digital certificate in HTTPS.

(c) Explain how a firewall protects a network.

Answer:

(a) **Symmetric encryption** uses the same key for both encryption and decryption (e.g., AES, DES).
It is fast but requires a secure method to share the key between parties.

**Asymmetric encryption** uses a pair of keys: a public key for encryption and a private key for
decryption (e.g., RSA). The public key can be freely distributed; only the private key holder can
decrypt. It is slower but solves the key distribution problem.

(b) A digital certificate, issued by a trusted Certificate Authority (CA), binds a public key to the
identity of a website. When a browser connects to an HTTPS site, the server presents its
certificate. The browser verifies the certificate against trusted CAs and checks that the domain
matches. This ensures the website is authentic and that the public key belongs to the correct
server, enabling secure encrypted communication.

(c) A firewall monitors and controls network traffic based on predefined security rules. It can
block unauthorised incoming connections (e.g., blocking traffic from suspicious IP addresses),
prevent access to certain ports, and filter packets based on protocol type. This protects the
internal network from external threats and unauthorised access.

</details>

<details>
<summary>Question 7: Transmission Media Comparison</summary>

A school is upgrading its network cabling. They are considering twisted pair (Cat 6) and fibre
optic.

(a) Compare the two media in terms of speed, maximum distance, cost, and susceptibility to
interference.

(b) Recommend which type of cable should be used for: (i) Connecting computers in a classroom (ii)
Connecting two buildings on the campus

Justify each recommendation.

Answer:

(a)

| Criterion    | Twisted Pair (Cat 6) | Fibre Optic   |
| ------------ | -------------------- | ------------- |
| Speed        | Up to 10 Gbps        | 100+ Gbps     |
| Max distance | 100 m                | 100+ km       |
| Cost         | Low                  | High          |
| Interference | Susceptible to EMI   | Immune to EMI |

(b) (i) **Twisted pair (Cat 6):** Sufficient for classroom distances (well under 100 m), lower cost,
and easy to install and terminate. The bandwidth of Cat 6 is more than adequate for classroom use.

(ii) **Fibre optic:** Buildings may be separated by more than 100 m (the maximum for twisted pair).
Fibre optic supports longer distances, is immune to EMI (important when cables run between buildings
near power lines), and provides higher bandwidth for future upgrades.

</details>

<details>
<summary>Question 8: Social Implications</summary>

(a) Explain the purpose of Hong Kong's Personal Data Privacy Ordinance (PDPO).

(b) A company collects customer email addresses for sending promotional materials. A customer
requests that their data be removed. Under the PDPO, what rights does the customer have?

(c) Describe two measures a company should implement to comply with the PDPO.

Answer:

(a) The PDPO protects the privacy of individuals in relation to personal data. It governs how data
users (organisations) collect, hold, process, and use personal data, ensuring that data is handled
lawfully, accurately, and with the consent of the data subject.

(b) Under the PDPO, the customer has the **right of access** to their personal data held by the
company and can request **correction** or **deletion** of their data. The company is obliged to
comply with the request; if the company refuses, it must provide reasons.

(c) Two measures:

1. **Data access request procedure:** Establish a clear process for individuals to request access to
   their personal data, and respond within the statutory time limit (40 days under PDPO).
2. **Purpose limitation and consent:** Only collect personal data for a stated, lawful purpose and
   obtain the individual's consent before using their data for any other purpose (e.g., using email
   addresses only for the purpose stated at collection).
3. **Data security:** Implement appropriate security measures (encryption, access controls, staff
   training) to protect personal data from unauthorised access, loss, or disclosure.

</details>

<details>
<summary>Question 9: Protocol Analysis</summary>

(a) A user is watching a live video stream. State which protocol (TCP or UDP) is more suitable and
explain why.

(b) Explain why HTTPS is used instead of HTTP for online banking.

(c) Describe the three-way handshake used by TCP to establish a connection.

Answer:

(a) **UDP** is more suitable. Live video streaming prioritises timely delivery over reliability. If
a packet is lost, it is better to skip it and continue playing the next frames than to wait for
retransmission (which would cause buffering/delays). UDP's lower overhead also helps maintain
real-time performance.

(b) HTTPS encrypts all data transmitted between the browser and the server using TLS/SSL. For online
banking, this is essential because it protects sensitive information (account numbers, passwords,
transaction details) from being intercepted by attackers (eavesdropping, man-in-the-middle attacks).
HTTP transmits data in plaintext, which is completely insecure.

(c) The TCP three-way handshake:

1. **SYN:** The client sends a SYN (synchronise) packet to the server to initiate a connection.
2. **SYN-ACK:** The server acknowledges the request by sending a SYN-ACK (synchronise-acknowledge)
   packet back to the client.
3. **ACK:** The client sends an ACK (acknowledge) packet to confirm the connection is established.

After this exchange, both parties have agreed on sequence numbers and the connection is open for
data transfer.

</details>

<details>
<summary>Question 10: Network Design Scenario</summary>

A school has three computer labs (A, B, C) each with 30 computers, a library with 10 computers, and
an administrative office with 5 computers. The school wants all computers to be connected to each
other and to the internet.

(a) Draw a diagram (describe the topology) showing how you would connect these devices.

(b) List the networking hardware devices you would use.

(c) Explain the function of each device in your design.

Answer:

(a) **Star topology** within each room, connected via a **central switch/router** in the server
room. Each room has a local switch connecting its computers in a star pattern. The room switches
connect to the central router/switch, which also connects to the internet via a modem.

```python
Internet -- Modem -- Router -- Central Switch
                            |
                    +-------+-------+
                    |       |       |
                Switch_A  Switch_B  Switch_C  Switch_Library  Switch_Admin
                / | ...   / | ...   / | ...    / | ...        / | ...
              PCs  PCs  PCs  PCs  PCs  PCs  PCs  PCs        PCs  PCs
```

(b) Hardware devices:

- 1 modem (connects to ISP)
- 1 router (routes between internal network and internet, provides NAT/DHCP)
- 1 central switch (or integrated switch in the router)
- 5 local switches (one per room/lab)
- 75 NICs (one in each computer)
- Ethernet cables (Cat 6)

(c)

- **Modem:** Converts the ISP's signal to digital for the router.
- **Router:** Connects the school's internal LAN to the internet (WAN), performs NAT so internal
  private IPs can access the internet, assigns IP addresses via DHCP.
- **Central switch:** Connects all room switches together, providing high-speed communication
  between rooms.
- **Local switches:** Connect computers within each room to the network, providing dedicated
  bandwidth per port and reducing collisions.
- **NICs:** Provide the physical interface for each computer to connect to the network.
- **Ethernet cables:** Physical transmission medium carrying data between devices.

</details>

