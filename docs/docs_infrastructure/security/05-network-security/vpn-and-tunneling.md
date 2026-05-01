---
id: vpn-and-tunneling
title: VPN and Tunneling
description:
  VPN and Tunneling — VPN Fundamentals; Tunneling, Encryption, and
  Authentication; VPN Types; WireGuard with worked examples and exam-style
  questions.
slug: vpn-and-tunneling
---

## VPN Fundamentals

### Tunneling, Encryption, and Authentication

A VPN creates an encrypted tunnel between two endpoints over an untrusted network (the internet).
The three core functions are:

```text
1. Tunneling: Encapsulate private network packets inside public network packets
2. Encryption: Scramble the encapsulated data so it cannot be read in transit
3. Authentication: Verify the identity of both tunnel endpoints
```

### VPN Types

| Type          | Layer    | Use Case                          | Example                  |
| ------------- | -------- | --------------------------------- | ------------------------ |
| Remote access | L3 (IP)  | Employees connecting to corporate | WireGuard, OpenVPN       |
| Site-to-site  | L3 (IP)  | Connecting office networks        | IPsec, WireGuard         |
| SSL/TLS VPN   | L7 (app) | Browser-based access              | OpenVPN (TLS mode)       |
| SSH tunneling | L7 (app) | Ad-hoc port forwarding            | SSH local/remote/dynamic |

## WireGuard

WireGuard is a modern, minimalist VPN protocol that uses the Noise protocol framework for key
exchange and ChaCha20 for encryption.

### Core Concepts

WireGuard uses **cryptokey routing**: each peer has a public/private key pair, and each peer's
allowed IP addresses define which packets are routed through the tunnel.

```ini
# /etc/wireguard/wg0.conf (server)

[Interface]
PrivateKey = <server_private_key>
Address = 10.0.0.1/24
ListenPort = 51820
PostUp = iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE

[Peer]
# Client 1
PublicKey = <client1_public_key>
AllowedIPs = 10.0.0.2/32

[Peer]
# Client 2
PublicKey = <client2_public_key>
AllowedIPs = 10.0.0.3/32
```

```ini
# /etc/wireguard/wg0.conf (client)

[Interface]
PrivateKey = <client_private_key>
Address = 10.0.0.2/24
DNS = 10.0.0.1

[Peer]
PublicKey = <server_public_key>
Endpoint = vpn.example.com:51820
AllowedIPs = 10.0.0.0/24, 192.168.1.0/24  # tunnel and LAN
PersistentKeepalive = 25
```

### Key Generation

```bash
# Generate server key pair
wg genkey | tee server_private.key | wg pubkey > server_public.key

# Generate client key pair
wg genkey | tee client_private.key | wg pubkey > client_public.key

# Secure the private keys
chmod 600 server_private.key client_private.key
```

### AllowedIPs

The `AllowedIPs` directive is the routing decision point:

- On the **server**, `AllowedIPs = 10.0.0.2/32` means "accept packets FROM this IP only"
- On the **client**, `AllowedIPs = 10.0.0.0/24` means "route packets TO this subnet through the
  tunnel"
- `AllowedIPs = 0.0.0.0/0` routes ALL traffic through the tunnel (full VPN)
- `AllowedIPs = 10.0.0.0/24` routes only VPN subnet traffic (split tunnel)

### Performance

WireGuard is significantly faster than OpenVPN and IPsec:

| Protocol  | Throughput (approx) | CPU Usage | Code Size | Handshake Time |
| --------- | ------------------- | --------- | --------- | -------------- |
| WireGuard | Near line rate      | Very low  | ~4000 LOC | ~1 RTT         |
| OpenVPN   | 100-600 Mbps        | Moderate  | ~100K LOC | 2-4 RTTs       |
| IPsec     | 200-800 Mbps        | Moderate  | ~400K LOC | 2 RTTs         |

```bash
# Enable WireGuard
wg-quick up wg0

# Check status
wg show

# Add a peer at runtime
wg set wg0 peer <public_key> allowed-ips 10.0.0.4/32

# Bring down
wg-quick down wg0
```

## IPsec

IPsec (Internet Protocol Security) operates at the network layer (L3) and is implemented in the
kernel. It consists of two protocols:

- **IKE (Internet Key Exchange):** manages key exchange (IKEv1 is deprecated; use IKEv2)
- **ESP (Encapsulating Security Payload):** provides encryption and authentication for IP packets

### IKEv2 Configuration (strongSwan)

```ini
# /etc/ipsec.conf (server)
config setup
    charondebug="ike 2, knl 2, cfg 2, net 2, esp 2, dmn 2, mgr 2"

conn %default
    keyexchange=ikev2
    ike=aes256gcm16-sha384-ecp384!
    esp=aes256gcm16-sha384!
    dpdaction=clear
    dpddelay=300s
    rekey=no

conn rw
    left=10.0.0.1
    leftcert=server.crt
    leftsubnet=0.0.0.0/0
    leftfirewall=yes
    right=%any
    rightauth=eap-mschapv2
    rightsourceip=10.10.10.0/24
    auto=add
```

```ini
# /etc/ipsec.secrets (server)
: RSA server.key
alice : EAP "alice_password"
```

### IPsec Modes

| Mode      | Encapsulation                 | Use Case                        |
| --------- | ----------------------------- | ------------------------------- |
| Transport | Original IP header preserved  | Host-to-host communication      |
| Tunnel    | Entire IP packet encapsulated | Site-to-site, remote access VPN |

### SA and SPI

IPsec uses **Security Associations (SAs)** to define the security parameters for a connection. Each
SA is identified by a **Security Parameter Index (SPI)** in the packet header. There are two SAs per
connection: one inbound, one outbound.

```bash
# View IPsec SAs
ip xfrm state
ip xfrm policy

# strongSwan status
swanctl -l
```

## OpenVPN

### TLS Mode Configuration

```ini
# server.conf
port 1194
proto udp
dev tun

ca ca.crt
cert server.crt
key server.key
dh dh.pem

server 10.8.0.0 255.255.255.0

keepalive 10 120
cipher AES-256-GCM
auth SHA256

# Push configuration to clients
push "redirect-gateway def1 bypass-dhcp"
push "dhcp-option DNS 10.8.0.1"
push "route 192.168.1.0 255.255.255.0"

persist-key
persist-tun
status openvpn-status.log
verb 3
```

```ini
# client.conf
client
dev tun
proto udp
remote vpn.example.com 1194

ca ca.crt
cert client.crt
key client.key

remote-cert-tls server
cipher AES-256-GCM
auth SHA256

persist-key
persist-tun
verb 3
```

### Pre-Shared Key Mode

```ini
# Simpler but no individual client authentication
# server.conf
dev tun
secret ta.key
server 10.8.0.0 255.255.255.0

# client.conf
dev tun
remote vpn.example.com
secret ta.key
```

### Push Options

```ini
# Route specific subnets through the VPN
push "route 10.0.0.0 255.255.0.0"

# Route all traffic through the VPN
push "redirect-gateway def1"

# Exclude specific routes from VPN
push "route 192.168.1.0 255.255.255.0 net_gateway"

# Set DNS
push "dhcp-option DNS 10.8.0.1"
```

## SSH Tunneling

### Local Port Forwarding

Forward a local port to a remote host through an SSH connection:

```bash
# Access a remote MySQL server as if it were local
ssh -L 3306:mysql.internal:3306 user@bastion.example.com

# Now connect to localhost:3306 → tunneled to mysql.internal:3306
mysql -h 127.0.0.1 -P 3306 -u app -p
```

### Remote Port Forwarding

Forward a remote port to a local host:

```bash
# Make a local web server accessible from the remote host
ssh -R 8080:localhost:3000 user@remote.example.com

# On remote.example.com: curl http://localhost:8080 → reaches your local :3000
```

### Dynamic Port Forwarding (SOCKS Proxy)

Create a SOCKS proxy that routes all traffic through the SSH connection:

```bash
# Create a SOCKS5 proxy on local port 1080
ssh -D 1080 -C -q -N user@bastion.example.com

# Use the SOCKS proxy
curl --socks5 localhost:1080 http://internal-service:8080/api

# Configure browser to use SOCKS5 proxy at localhost:1080
```

### Jump Hosts

```bash
# Access an internal host through a bastion
ssh -J bastion.example.com user@internal-host

# With local port forwarding through a jump host
ssh -L 5432:internal-db:5432 -J bastion.example.com user@bastion.example.com

# ProxyJump in ~/.ssh/config
Host internal-db
    HostName 10.0.0.50
    ProxyJump bastion

Host bastion
    HostName bastion.example.com
    User deploy
```

### SSH Configuration

```ini
# ~/.ssh/config
Host vpn-socks
    HostName bastion.example.com
    User deploy
    DynamicForward 1080
    ServerAliveInterval 60
    ServerAliveCountMax 3
    Compression yes
    IdentityFile ~/.ssh/id_ed25519
```

## Site-to-Site VPN

### Hub-and-Spoke

```text
        ┌──────────┐
        │  Hub VPN  │
        │ 10.0.0.1 │
        └────┬──┬───┘
             │  │
    ┌────────┘  └────────┐
    │                    │
┌───┴────┐         ┌────┴───┐
│Spoke 1 │         │Spoke 2 │
│10.0.0.2│         │10.0.0.3│
└────────┘         └────────┘
```

WireGuard hub config:

```ini
[Interface]
PrivateKey = <hub_private_key>
Address = 10.0.0.1/24
ListenPort = 51820

[Peer]
PublicKey = <spoke1_public_key>
AllowedIPs = 10.0.0.2/32, 192.168.1.0/24

[Peer]
PublicKey = <spoke2_public_key>
AllowedIPs = 10.0.0.3/32, 192.168.2.0/24
```

### Mesh

Every node connects to every other node. Scales as O(n^2) with the number of nodes:

```bash
# With 10 nodes, each node has 9 peer configurations
# Manage with automation (wg-quick, Ansible, Terraform)
```

## VPN vs Zero-Trust

| Aspect          | VPN                            | Zero-Trust                   |
| --------------- | ------------------------------ | ---------------------------- |
| Network model   | Perimeter-based                | Identity-based               |
| Access model    | Full network access on connect | Least-privilege per resource |
| Trust           | Trusted once connected         | Never trust, always verify   |
| Scalability     | Hub-and-spoke bottlenecks      | Scales per service           |
| User experience | Connect, then access all       | Authenticate per application |

### When to Use Each

```text
Use VPN when:
- You need full network-level access (file shares, internal DNS, SSH)
- You are connecting entire networks (site-to-site)
- You have legacy systems that cannot integrate with zero-trust

Use zero-trust when:
- You are primarily accessing cloud SaaS applications
- You need fine-grained access control per resource
- You have a distributed workforce without a central network
```

## Split Tunneling

Split tunneling routes only specific traffic through the VPN, sending the rest directly to the
internet:

```text
Without split tunnel:
  All traffic → VPN → Internet (slower, uses VPN bandwidth)

With split tunnel:
  Corporate traffic → VPN → Internal resources
  General traffic → Direct → Internet (faster)
```

WireGuard client config for split tunnel:

```ini
[Interface]
PrivateKey = <client_private_key>
Address = 10.0.0.2/24

[Peer]
PublicKey = <server_public_key>
Endpoint = vpn.example.com:51820
AllowedIPs = 10.0.0.0/24, 192.168.1.0/24  # Only corporate subnets
PersistentKeepalive = 25
```

### DNS Leak Prevention

When using split tunnel, DNS queries for non-VPN domains may go to the ISP DNS, leaking information:

```ini
# WireGuard: force DNS through VPN
[Interface]
DNS = 10.0.0.1  # VPN DNS server

# Or use DNS over HTTPS locally
DNS = 1.1.1.1#cloudflare-dns.com
```

### Kill Switch

A kill switch blocks all traffic if the VPN connection drops, preventing data leaks:

```bash
# iptables kill switch (Linux)
# Allow only VPN interface traffic
iptables -P OUTPUT DROP
iptables -A OUTPUT -o lo -j ACCEPT
iptables -A OUTPUT -o wg0 -j ACCEPT
iptables -A OUTPUT -d vpn.example.com -p udp --dport 51820 -j ACCEPT
```

## MTU Issues

VPN encapsulation adds overhead to each packet, which can cause fragmentation if the original MTU is
too large:

```text
Ethernet MTU:        1500 bytes
IP header:           20 bytes
UDP header:          8 bytes
WireGuard header:    32 bytes
---------------------------
VPN MTU:             1440 bytes (1500 - 20 - 8 - 32)
```

```bash
# Set MTU on WireGuard interface
# wg0.conf:
[Interface]
MTU = 1420  # conservative for most paths

# Detect MTU issues (connection works but large transfers hang)
ping -M do -s 1400 vpn-server  # should work
ping -M do -s 1500 vpn-server  # may fail (fragmentation needed)
```

## Troubleshooting

### MTU Issues

```bash
# Path MTU discovery
ping -M do -s <size> <host>
# Binary search for the largest size that works

# Fix: set appropriate MTU on the VPN interface
```

### NAT Traversal

WireGuard and OpenVPN may not work behind restrictive NAT/firewalls:

```bash
# WireGuard: PersistentKeepalive keeps the NAT mapping alive
PersistentKeepalive = 25

# OpenVPN: explicit NAT setting
nat yes  # in server config
```

### Keepalive

```bash
# SSH: keep the connection alive
ServerAliveInterval 60
ServerAliveCountMax 3

# WireGuard: keep NAT mappings alive
PersistentKeepalive = 25

# OpenVPN: keepalive
keepalive 10 120  # ping every 10s, restart after 120s silence
```

## Commercial vs Self-Hosted

| Solution          | Type        | Ease of Use | Privacy | Cost             |
| ----------------- | ----------- | ----------- | ------- | ---------------- |
| WireGuard         | Self-hosted | Medium      | Full    | Server cost      |
| OpenVPN           | Self-hosted | Medium      | Full    | Server cost      |
| Tailscale         | Managed WG  | Easy        | Partial | Free tier + paid |
| Headscale         | Self-hosted | Medium      | Full    | Server cost      |
| Cloudflare Tunnel | Managed     | Easy        | Partial | Free tier + paid |

### Tailscale

Tailscale builds on WireGuard with a coordination server for NAT traversal and key distribution:

```bash
# Install and connect
tailscale up

# List connected peers
tailscale status

# Advertise routes (for site-to-site)
tailscale up --advertise-routes=192.168.1.0/24

# ACLs configured in the admin console (Tailscale-specific)
```

### Headscale

Open-source, self-hosted Tailscale control server:

```bash
# Headscale provides the coordination server
# Clients use standard WireGuard
# ACLs defined in a config file
```

## Common Pitfalls

### Forgetting to Enable IP Forwarding

VPN servers must forward packets between interfaces:

```bash
# Enable IP forwarding (Linux)
sysctl -w net.ipv4.ip_forward=1

# Persistent: add to /etc/sysctl.conf
# net.ipv4.ip_forward = 1
```

### DNS Resolution Failure After VPN Connect

If DNS queries fail after connecting to the VPN, the client is not using the correct DNS server.
Configure the VPN to push the correct DNS settings, or manually configure the client's DNS resolver.

### Not Using PersistentKeepalive

Without `PersistentKeepalive`, NAT mappings expire and the VPN connection drops silently. This is
the most common cause of "VPN was working yesterday but stopped today."

### MTU Mismatch

If large file transfers work but web browsing hangs, or SSH works but SCP hangs, suspect MTU issues.
Reduce the MTU on the VPN interface to 1360-1420 and test.

### Using the Same Keys Across Environments

WireGuard private keys must be unique per peer. Reusing keys across servers or clients causes
routing conflicts and security vulnerabilities. Generate a new key pair for every peer.
