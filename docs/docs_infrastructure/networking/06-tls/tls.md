---
id: tls
title: TLS
description:
  "Networking: TLS — TLS History and Versions; TLS 1.2 Handshake; TLS 1.2 Handshake Steps; Key Derivation, covering core concepts and practical techniques."
slug: tls
sidebar_position: 7
tags:
  - Networking
categories:
  - Networking
---

## Overview

Transport Layer Security (TLS) provides encryption, authentication, and integrity for data
transmitted over a network. TLS is the successor to Secure Sockets Layer (SSL), which was developed
by Netscape in the mid-1990s. SSL 3.0 (1996) was the last SSL version; TLS 1.0 (1999, RFC 2246) was
its successor. All SSL versions are now considered insecure and deprecated.

TLS operates between the transport layer and the application layer, encrypting application data
(HTTP, SMTP, IMAP, etc.) before it is sent over the network.

## TLS History and Versions

| Version | RFC      | Year | Status                                    |
| ------- | -------- | ---- | ----------------------------------------- |
| SSL 3.0 | RFC 6101 | 1996 | Deprecated (POODLE attack, CVE-2014-3566) |
| TLS 1.0 | RFC 2246 | 1999 | Deprecated (BEAST, RC4 attacks)           |
| TLS 1.1 | RFC 4346 | 2006 | Deprecated                                |
| TLS 1.2 | RFC 5246 | 2008 | Current (widespread support)              |
| TLS 1.3 | RFC 8446 | 2018 | Current (recommended)                     |

TLS 1.0 and 1.1 were officially deprecated by the IETF in June 2021 (RFC 8996). TLS 1.2 remains
widely supported and is the minimum acceptable version for any new deployment. TLS 1.3 is the
recommended version for all new deployments.

:::info

PCI DSS v4.0 (effective March 2025) requires TLS 1.2 or higher and deprecates TLS 1.0 and 1.1. Major
browsers and cloud providers have already removed support for TLS 1.0 and 1.1.

:::

## TLS 1.2 Handshake

TLS 1.2 uses a two-round-trip (2-RTT) handshake:

```
Client                              Server
  |                                   |
  |--- ClientHello ------------------>|    Supported TLS versions, cipher suites,
  |                                   |    extensions, random bytes
  |<-- ServerHello -------------------|    Chosen version, cipher suite,
  |                                   |    random bytes
  |<-- Certificate -------------------|    Server's X.509 certificate chain
  |<-- ServerKeyExchange ------------|    Key exchange parameters (for DH/ECDHE)
  |<-- ServerHelloDone --------------|    Server finished
  |                                   |
  |--- ClientKeyExchange ------------>|    Client's key exchange parameters
  |--- ChangeCipherSpec ------------->|    Switch to encrypted mode
  |--- Finished --------------------->|    Verify handshake integrity
  |                                   |
  |<-- ChangeCipherSpec --------------|    Switch to encrypted mode
  |<-- Finished ----------------------|    Verify handshake integrity
  |                                   |
  |==== Encrypted Application Data ===|
```

### TLS 1.2 Handshake Steps

1. **ClientHello:** The client sends its supported TLS versions, cipher suites, compression methods,
   extensions (SNI, ALPN, EC point formats), and 32 bytes of random data.
2. **ServerHello:** The server selects the TLS version and cipher suite (the highest mutually
   supported version and the server's preferred cipher suite). The server sends its own 32 bytes of
   random data.
3. **Certificate:** The server sends its X.509 certificate chain. The chain includes the server's
   leaf certificate and any intermediate certificates. The root certificate is not included (the
   client already trusts it).
4. **ServerKeyExchange:** For ephemeral Diffie-Hellman key exchange (DHE or ECDHE), the server sends
   its DH parameters and a signature proving ownership of the certificate's private key.
5. **ServerHelloDone:** Signals the end of the server's handshake messages.
6. **ClientKeyExchange:** For DHE/ECDHE, the client sends its DH public value. For RSA key exchange,
   the client encrypts a pre-master secret with the server's public key (RSA key exchange is now
   considered insecure and deprecated).
7. **ChangeCipherSpec:** Both sides signal the switch to encrypted communication.
8. **Finished:** Both sides send a hash of all handshake messages, encrypted with the negotiated
   keys. This verifies that the handshake was not tampered with.

### Key Derivation

The pre-master secret and both random values are combined to generate the **master secret**:

$$
\mathrm{master\_secret} = \mathrm{PRF}(\mathrm{pre\_master\_secret}, \mathrm{"master secret"}, \mathrm{ClientRandom} + \mathrm{ServerRandom})
$$

The master secret is then used to generate the symmetric encryption keys and MAC keys for the
session.

## TLS 1.3 Handshake

TLS 1.3 (RFC 8446) simplifies the handshake to 1-RTT and removes support for legacy algorithms:

```
Client                              Server
  |                                   |
  |--- ClientHello ------------------>|    Supported versions, key shares,
  |                                   |    extensions (all in first flight)
  |<-- ServerHello -------------------|    Chosen version, key share,
  |<-- EncryptedExtensions ----------|    Extensions (encrypted)
  |<-- Certificate -------------------|    Server certificate chain
  |<-- CertificateVerify -------------|    Signature over transcript
  |<-- Finished ----------------------|    Handshake complete
  |                                   |
  |--- [Application Data] ----------->|    Can send immediately after
  |--- Finished --------------------->|    Client handshake complete
  |                                   |
  |==== Encrypted Application Data ===|
```

### Key Improvements in TLS 1.3

1. **1-RTT handshake:** The server's response includes the certificate, key exchange, and finished
   message in a single flight. This reduces handshake latency by one RTT compared to TLS 1.2.

2. **0-RTT resumption:** On repeat connections with a pre-shared key (PSK), the client can send
   application data with the first flight (0-RTT data). This eliminates handshake latency entirely
   for returning clients.

```
Client                              Server
  |--- ClientHello + EarlyData ------>|    Application data in first flight
  |<-- ServerHello + Finished -------|    Server responds
  |==== Encrypted Application Data ===|
```

:::warning

0-RTT data is not protected against replay attacks. An attacker who captures a 0-RTT message can
replay it to the server. Do not use 0-RTT for non-idempotent requests (POST, PUT, DELETE). The
server should only accept 0-RTT data for idempotent operations (GET) and must implement replay
detection.

:::

3. **Removed insecure algorithms:** TLS 1.3 removes:
   - RSA key exchange (static RSA encryption)
   - All non-AEAD ciphers (CBC mode)
   - RC4, DES, 3DES, AES-CBC
   - SHA-1 and MD5 for HMAC
   - Compression (CRIME/BREACH attacks)
   - Renegotiation (for security reasons)
   - Custom cipher suites

4. **Encrypted handshake:** In TLS 1.3, the server's certificate and extensions are encrypted. In
   TLS 1.2, the certificate was sent in plaintext, allowing passive observers to see the server's
   identity.

5. **Simplified cipher suite format:** TLS 1.3 cipher suites only specify the AEAD algorithm and
   hash function, since all key exchange is ephemeral DH:

```
TLS_AES_256_GCM_SHA384
TLS_CHACHA20_POLY1305_SHA256
TLS_AES_128_GCM_SHA256
```

### Key Share in ClientHello

In TLS 1.3, the client sends its DH key share in the ClientHello, allowing the server to compute the
shared secret immediately without a separate key exchange round trip. This is called "key share" and
is the mechanism that enables the 1-RTT handshake.

If the server does not support the client's key share group, it responds with a HelloRetryRequest
asking the client to try a different group. This adds an extra RTT but is rare in practice.

## Cipher Suites

A cipher suite specifies the algorithms used for key exchange, authentication, bulk encryption, and
MAC.

### TLS 1.2 Cipher Suites

Format: `TLS_KEYEXCHANGE_WITH_CIPHER_MAC`

```
TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
```

**Key exchange (first part):**

- `ECDHE_RSA` or `ECDHE_ECDSA`: Ephemeral Elliptic Curve Diffie-Hellman. Provides forward secrecy.
  The `RSA` or `ECDSA` part indicates the certificate type used for authentication.
- `DHE_RSA` or `DHE_ECDSA`: Ephemeral finite-field Diffie-Hellman. Slower than ECDHE but supported
  by older hardware.
- `RSA`: Static RSA key exchange. **No forward secrecy.** Deprecated.

**Bulk encryption (middle part):**

- `AES_128_GCM` / `AES_256_GCM`: AES in Galois/Counter Mode. AEAD (Authenticated Encryption with
  Associated Data). Provides both encryption and integrity.
- `CHACHA20_POLY1305`: ChaCha20 stream cipher with Poly1305 MAC. AEAD. Designed by Daniel J.
  Bernstein. Faster than AES on hardware without AES-NI (e.g., mobile devices).

**MAC/hash (last part):**

- `SHA256` / `SHA384`: Hash function used for HMAC and key derivation.

### TLS 1.3 Cipher Suites

TLS 1.3 simplifies cipher suites to only specify AEAD and hash:

| Cipher Suite                   | AEAD              | Hash    | Key Size |
| ------------------------------ | ----------------- | ------- | -------- |
| `TLS_AES_256_GCM_SHA384`       | AES-256-GCM       | SHA-384 | 256-bit  |
| `TLS_CHACHA20_POLY1305_SHA256` | ChaCha20-Poly1305 | SHA-256 | 256-bit  |
| `TLS_AES_128_GCM_SHA256`       | AES-128-GCM       | SHA-256 | 128-bit  |

All TLS 1.3 cipher suites provide forward secrecy by default (ephemeral DH key exchange is
mandatory).

### AEAD (Authenticated Encryption with Associated Data)

AEAD combines encryption and integrity verification into a single operation. The ciphertext includes
an authentication tag that is verified during decryption. If the tag does not match, decryption
fails. This prevents padding oracle attacks and other chosen-ciphertext attacks that affected CBC
mode ciphers.

```
Plaintext + Additional Data + Nonce + Key -> Ciphertext + Authentication Tag
Ciphertext + Authentication Tag + Additional Data + Nonce + Key -> Plaintext (or error)
```

### Recommended Cipher Suite Order

```
TLS_AES_256_GCM_SHA384
TLS_CHACHA20_POLY1305_SHA256
TLS_AES_128_GCM_SHA256
```

Prefer AES-256-GCM for servers with AES-NI support. Prefer ChaCha20-Poly1305 for mobile or embedded
devices without AES hardware acceleration.

## Certificates

TLS certificates bind a public key to an identity (domain name, organization). The certificate
format is X.509 (ITU-T X.509), defined in RFC 5280.

### Certificate Structure

An X.509 certificate contains:

```
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number: 0x0a1b2c3d...
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: C=US, O=Let's Encrypt, CN=R3
        Validity:
            Not Before: 2024-01-01 00:00:00 UTC
            Not After : 2024-04-01 00:00:00 UTC
        Subject: CN=example.com
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
            RSA Public-Key: (2048 bit)
        Extensions:
            Subject Alternative Name: DNS:example.com, DNS:www.example.com
            Key Usage: Digital Signature, Key Encipherment
            Extended Key Usage: TLS Web Server Authentication
            Authority Information Access: CA Issuers - URI:...
            Certificate Transparency: SCT:...
            OCSP: http://r3.i.lencr.org
    Signature Algorithm: sha256WithRSAEncryption
    Signature: (base64-encoded signature)
```

**Critical fields:**

- **Subject:** The entity the certificate represents (e.g., `CN=example.com`).
- **Subject Alternative Name (SAN):** The list of domain names the certificate is valid for. Modern
  certificates use SAN exclusively; the CN field is deprecated for domain validation.
- **Issuer:** The CA that issued the certificate.
- **Validity:** The certificate is only valid between `Not Before` and `Not After`.
- **Public Key:** The server's public key, used for key exchange and authentication.
- **Signature:** The CA's digital signature over the certificate data.

### Certificate Formats

| Format        | Extension              | Contents                                                             | Encoding         |
| ------------- | ---------------------- | -------------------------------------------------------------------- | ---------------- |
| PEM           | `.pem`, `.crt`, `.cer` | Base64-encoded DER, ASCII-armored with `-----BEGIN CERTIFICATE-----` | Base64           |
| DER           | `.der`, `.crt`         | Binary X.509 certificate                                             | Binary           |
| PKCS#12 / PFX | `.p12`, `.pfx`         | Certificate chain + private key, encrypted                           | Binary           |
| PKCS#7 / P7B  | `.p7b`, `.p7c`         | Certificate chain (no private key)                                   | Base64 or Binary |

```bash
# Convert between formats
openssl x509 -in cert.pem -outform DER -out cert.der
openssl pkcs12 -export -out cert.pfx -inkey privkey.pem -in cert.pem -certfile chain.pem

# View certificate details
openssl x509 -in cert.pem -text -noout

# Extract public key from certificate
openssl x509 -in cert.pem -pubkey -noout > pubkey.pem
```

### Certificate Chain

A certificate chain links the server's certificate to a trusted root CA through intermediate
certificates:

```
Root CA (self-signed, trusted by the client)
  |
  +-- Intermediate CA (signed by Root CA)
        |
        +-- Server Certificate (signed by Intermediate CA)
```

The client must have the Root CA in its trust store. The server must send the full chain (server +
intermediate) during the TLS handshake. If intermediate certificates are missing, clients that do
not already have them cached will fail to validate the chain.

:::warning

The most common TLS configuration error is failing to include intermediate certificates in the
server's certificate chain. The server must send the complete chain (excluding the root). Test with:

```bash
openssl s_client -connect example.com:443 -servername example.com
```

Look for `Verify return code: 0 (ok)`. Any other return code indicates a chain problem.

:::

## Certificate Authorities (CAs)

CAs are trusted entities that issue certificates. The CA ecosystem is governed by the CA/Browser
Forum, which sets baseline requirements for certificate issuance.

### Major Public CAs

| CA            | Free Tier          | Notes                                   |
| ------------- | ------------------ | --------------------------------------- |
| Let's Encrypt | Yes (90-day certs) | Automated via ACME (certbot, acme.sh)   |
| DigiCert      | No                 | Enterprise-focused, wide browser trust  |
| GlobalSign    | No                 | Enterprise and IoT                      |
| Sectigo       | Yes (limited)      | Formerly Comodo                         |
| ZeroSSL       | Yes (90-day certs) | ACME support, Let's Encrypt alternative |

### ACME Protocol (RFC 8555)

The Automated Certificate Management Environment (ACME) protocol automates certificate issuance.
Let's Encrypt uses ACME to issue free certificates.

**ACME challenge types:**

1. **HTTP-01:** The CA sends a token to `http://example.com/.well-known/acme-challenge/TOKEN`. The
   server must respond with the correct value. Requires port 80 to be open and reachable from the
   CA.
2. **DNS-01:** The CA requires a TXT record at `_acme-challenge.example.com` with a specific value.
   Works behind NAT/firewalls. Does not require open ports. Ideal for internal services and
   automated infrastructure.

```bash
# Obtain certificate with certbot (HTTP-01 challenge)
certbot certonly --webroot -w /var/www/html -d example.com -d www.example.com

# Obtain certificate with certbot (DNS-01 challenge, Cloudflare)
certbot certonly --dns-cloudflare --dns-cloudflare-credentials /etc/cloudflare.ini -d example.com -d *.example.com

# Obtain wildcard certificate
certbot certonly --dns-cloudflare -d "*.example.com" -d example.com

# Automatic renewal (certbot installs a systemd timer or cron job)
certbot renew --dry-run  # Test renewal
```

### Self-Signed Certificates

Self-signed certificates are signed by the same entity whose identity they certify. They are not
trusted by default by browsers or operating systems. They are appropriate for:

- Internal services within a trusted network
- Development and testing environments
- Services where the client can be configured to trust the specific certificate

```bash
# Generate a self-signed certificate
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes \
  -subj "/CN=example.com" \
  -addext "subjectAltName=DNS:example.com,DNS:*.example.com"
```

## Certificate Revocation

When a certificate is compromised or no longer needed, it must be revoked. Three mechanisms exist:

### CRL (Certificate Revocation List, RFC 5280)

The CA publishes a list of revoked certificate serial numbers. Clients download the CRL and check if
the server's certificate is listed.

**Drawbacks:**

- Latency: CRLs are updated periodically (hours to days), so recently revoked certificates may still
  be accepted.
- Size: CRLs grow with the number of revoked certificates and can become large (megabytes).
- Distribution: The client must fetch the CRL from the CA's server, adding latency to the handshake.

```bash
# View CRL
openssl crl -in revoked.crl -text -noout
```

### OCSP (Online Certificate Status Protocol, RFC 6960)

The client sends a query to the CA's OCSP responder asking whether a specific certificate is still
valid. The responder returns "good," "revoked," or "unknown."

**Drawbacks:**

- Privacy: The CA's OCSP responder sees which certificates the client is checking, revealing
  browsing activity.
- Availability: If the OCSP responder is down, the client cannot verify the certificate status. Some
  clients "soft fail" (accept the certificate anyway), undermining security.
- Latency: An additional network round trip during the handshake.

### OCSP Stapling (RFC 6066, RFC 6961)

The server periodically queries its own CA's OCSP responder and **staples** (attaches) the OCSP
response to the TLS handshake. The client verifies the OCSP response without contacting the CA
directly.

**Advantages:**

- No additional latency for the client (the OCSP response comes with the handshake).
- The CA does not see which clients are checking certificates.
- No dependency on the CA's OCSP responder being available during the handshake.

```bash
# Check if OCSP stapling is enabled
openssl s_client -connect example.com:443 -servername example.com -status -tlsextdebug
# Look for "OCSP response:" in the output

# Verify OCSP response
openssl ocsp -respin ocsp_resp.der -text -noout
```

### Certificate Transparency (CT, RFC 6962)

CT is a public, append-only log of all issued certificates. CAs are required to submit certificates
to CT logs. Browser vendors (Chrome, Firefox) require certificates to appear in CT logs for trust.

CT enables:

- Detection of mis-issued certificates (security researchers can monitor CT logs)
- Detection of CA misbehavior (CAs cannot secretly issue certificates)
- Auditing of the certificate ecosystem

## Certificate Pinning

Certificate pinning associates a service with a specific certificate or public key, rejecting
connections that present a different certificate -- even if that certificate is valid and trusted by
the system's CA trust store.

### Types of Pinning

1. **Public Key Pinning:** Pin the public key (hash of the SubjectPublicKeyInfo). Survives
   certificate renewal because the same key can be reused.
2. **Certificate Pinning:** Pin the certificate (hash of the DER-encoded certificate). Does not
   survive certificate renewal.
3. **CA Pinning:** Pin to a specific CA. Accepts any certificate issued by that CA.

### Implementation

- **HTTP Public Key Pinning (HPKP):** A deprecated HTTP header (`Public-Key-Pins`). Removed from
  browsers due to the risk of misconfiguration causing permanent denial of service (pinning to a
  lost key makes the site permanently inaccessible).
- **Application-level pinning:** Implemented in the application code (e.g., `NSURLSession` pinning
  in iOS, `NetworkSecurityConfig` in Android, `ServicePointManager` in .NET). This is the current
  recommended approach.

```bash
# Extract a pin value for public key pinning
openssl x509 -in cert.pem -pubkey -noout | openssl pkey -pubin -outform DER | \
  openssl dgst -sha256 -binary | openssl enc -base64
```

## Forward Secrecy

Forward secrecy (perfect forward secrecy, PFS) ensures that compromising a server's long-term
private key does not compromise past session keys. If the private key is compromised, the attacker
cannot decrypt previously captured TLS sessions.

Forward secrecy is achieved by using **ephemeral** key exchange (DHE or ECDHE). The key exchange
produces a temporary key pair for each session, and the private key is discarded after the
handshake. The server's long-term key (from its certificate) is only used for authentication
(signing the key exchange parameters), not for key derivation.

| Key Exchange   | Forward Secrecy | Performance                      |
| -------------- | --------------- | -------------------------------- |
| RSA            | No              | Fast                             |
| DHE            | Yes             | Slow (large prime generation)    |
| ECDHE          | Yes             | Fast (elliptic curve operations) |
| ECDHE + P-256  | Yes             | Good balance                     |
| ECDHE + X25519 | Yes             | Best performance                 |

:::warning

TLS 1.3 mandates forward secrecy for all connections. There is no way to configure TLS 1.3 without
forward secrecy. If you are still using TLS 1.2, ensure you use ECDHE cipher suites (`TLS_ECDHE_*`).

:::

## Session Resumption

Session resumption allows a client to resume a previous TLS session without performing the full
handshake, saving a round trip and reducing computational cost.

### Session IDs (TLS 1.0-1.2)

The server assigns a session ID in the `New Session Ticket` message. The client includes this
session ID in subsequent ClientHello messages. The server looks up the session state (previously
negotiated cipher suite, master secret) and resumes the session.

**Drawback:** The server must maintain session state, which is problematic for distributed systems
(behind load balancers). Solutions include shared session caches (Redis, memcached) or session
ticket encryption with a shared key.

### Session Tickets (RFC 5077)

The server encrypts the session state and sends it to the client as a "ticket." The client presents
the ticket in subsequent connections. The server decrypts the ticket (using a key shared across all
server instances) and resumes the session without storing any state.

```bash
# Check if session resumption is working
openssl s_client -connect example.com:443 -servername example.com -reconnect 2>&1 | grep "Session-ID"
```

### Pre-Shared Key (TLS 1.3)

TLS 1.3 uses PSK (pre-shared key) for session resumption. The PSK is derived from a previous session
or configured out-of-band. TLS 1.3 supports external PSKs (configured manually, similar to API keys)
and resumption PSKs (derived from previous sessions).

## Common TLS Misconfigurations

### Checking TLS Configuration

```bash
# Basic TLS connection test
openssl s_client -connect example.com:443 -servername example.com

# Show supported cipher suites
nmap --script ssl-enum-ciphers -p 443 example.com

# Online TLS testing
# https://www.ssllabs.com/ssltest/
```

### Common Issues

1. **Expired certificates.** Set up monitoring and automated renewal. Let's Encrypt certificates
   expire every 90 days. Use certbot with a renewal timer.

2. **Missing intermediate certificates.** The server must send the full certificate chain (server +
   intermediate). Omitting intermediates causes "certificate chain incomplete" errors.

3. **Weak cipher suites.** Disable `TLS_RSA_*` (no forward secrecy), `TLS_*_CBC_*` (vulnerable to
   BEAST/LUCKY13), `TLS_*_3DES_*` (64-bit block cipher, Sweet32), and any suite with SHA-1 or MD5.

4. **TLS 1.0/1.1 enabled.** These versions have known weaknesses. Disable them on all servers and
   clients.

5. **No HSTS header.** The `Strict-Transport-Security` header tells the browser to always use HTTPS:

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

Without HSTS, the first HTTP request to a site is vulnerable to downgrade attacks.

6. **Mixed content.** HTTPS pages that load HTTP subresources (images, scripts, stylesheets) are
   vulnerable to injection. Browsers block mixed content by default.

7. **SNI missing.** Server Name Indication (SNI) is required for virtual hosting with TLS. Without
   SNI, the server cannot determine which certificate to present. All modern browsers send SNI, but
   some legacy clients (e.g., Windows XP, Java 6) do not.

8. **Certificate name mismatch.** The certificate must match the hostname the client connects to.
   Wildcard certificates (`*.example.com`) only match one level of subdomains (`sub.example.com`,
   not `a.b.example.com`).

## Practical Tools

### openssl s_client

```bash
# Test TLS connection and show certificate chain
openssl s_client -connect example.com:443 -servername example.com -showcerts

# Test with specific TLS version
openssl s_client -connect example.com:443 -tls1_2
openssl s_client -connect example.com:443 -tls1_3

# Test OCSP stapling
openssl s_client -connect example.com:443 -status -tlsextdebug

# Show supported groups
openssl s_client -connect example.com:443 -curves all

# Test with client certificate
openssl s_client -connect example.com:443 -cert client.pem -key client.key
```

### certbot

```bash
# Install certbot
apt install certbot python3-certbot-nginx  # For nginx
apt install certbot python3-certbot-apache  # For Apache

# Obtain certificate
certbot --nginx -d example.com -d www.example.com

# Test renewal
certbot renew --dry-run

# List certificates
certbot certificates

# Revoke certificate
certbot revoke --cert-path /etc/letsencrypt/live/example.com/cert.pem
```

### gnutls-cli

```bash
# Alternative TLS client (from GnuTLS)
gnutls-cli -p 443 example.com
```

## Common Pitfalls

1. **Self-signed certificates in production without proper trust configuration.** Self-signed
   certificates cause errors in all standard clients unless the certificate is manually trusted. For
   internal services, use an internal CA (e.g., step-ca, smallstep) or configure clients to trust
   the specific certificate.

2. **Certificate chain ordering.** Some servers send certificates in the wrong order (server first,
   then intermediate). The correct order is: server certificate, then intermediate certificates in
   order from leaf to root (closest to leaf first).

3. **Not monitoring certificate expiration.** Expired certificates cause immediate outages. Set up
   alerts 30, 14, and 7 days before expiration. Use ACME for automatic renewal.

4. **Disabling certificate verification in development.** Using `NODE_TLS_REJECT_UNAUTHORIZED=0`,
   `verify=False` in Python requests, or `-k`/`--insecure` in curl masks real certificate problems
   that will surface in production. Use locally-trusted certificates instead.

5. **TLS termination at the wrong layer.** Terminating TLS at a load balancer and re-encrypting to
   the backend (TLS passthrough/bridging) adds latency and creates a trust boundary that must be
   secured. Terminating TLS at the application server means the load balancer cannot inspect traffic
   for WAF or DDoS protection. Choose based on your security requirements.

6. **Assuming TLS 1.3 is universally supported.** TLS 1.3 is supported by all modern browsers and
   operating systems, but legacy clients (Java 8 without patches, Windows 7, Android &lt; 7.0) may
   not support it. If you need to support these clients, enable TLS 1.2 with forward secrecy as a
   fallback.

7. **Ignoring SCT (Signed Certificate Timestamp) requirements.** Chrome and other browsers require
   certificates to have embedded SCTs proving the certificate was logged in a Certificate
   Transparency log. Certificates without SCTs will be rejected by Chrome.

## TLS Internals

### Record Protocol

TLS operates on records. Each TLS record has a 5-byte header followed by the encrypted payload:

```
+---------------+
| Content Type  |  1 byte: 20=ChangeCipherSpec, 21=Alert, 22=Handshake, 23=Application
+---------------+
| Version       |  2 bytes: 0x0301=TLS 1.0, 0x0302=TLS 1.1, 0x0303=TLS 1.2
+---------------+
| Length        |  2 bytes: length of the payload
+---------------+
| Payload       |  Variable (encrypted with the negotiated cipher suite)
+---------------+
```

In TLS 1.3, the outer record header always uses TLS 1.2 version (0x0303) for compatibility with
middleboxes. The actual protocol version is negotiated inside the handshake.

Maximum record size is 16,384 bytes (2^14). Larger application data must be split across multiple
records. TLS 1.3 supports records up to 16,384 + 256 bytes (including content type byte and
padding).

### Alert Protocol

TLS alerts communicate errors and closure notifications. They are 2 bytes: alert level (1=warning,
2=fatal) and alert description.

Common alerts:

| Description           | Value | Meaning                                        |
| --------------------- | ----- | ---------------------------------------------- |
| `close_notify`        | 0     | Clean connection closure                       |
| `unexpected_message`  | 10    | Malformed message received                     |
| `bad_record_mac`      | 20    | Decryption failed (wrong key or tampered data) |
| `handshake_failure`   | 40    | Handshake negotiation failed                   |
| `certificate_expired` | 45    | Certificate has expired                        |
| `certificate_revoked` | 44    | Certificate has been revoked                   |
| `illegal_parameter`   | 47    | Invalid value in handshake field               |
| `decrypt_error`       | 51    | Handshake cryptographic operation failed       |

In TLS 1.3, most alerts result in immediate connection termination. The server cannot send an error
alert after the handshake completes (to prevent middleboxes from interpreting alerts as protocol
errors and closing connections).

### Random Values

Both the client and server generate 32 bytes of random data in their Hello messages. These random
values are used in the key derivation process and must be unpredictable. If an attacker can predict
the random values, they may be able to derive the session keys.

In TLS 1.2, the random values include the Unix timestamp in the first 4 bytes (deprecated practice
that leaks server clock information). In TLS 1.3, the random values must be generated using a
cryptographically secure random number generator with no structure.

## TLS Performance Considerations

### Session Resumption Overhead

Full TLS handshake requires:

- **TLS 1.2:** 2 RTTs + asymmetric crypto (RSA or ECDHE key exchange)
- **TLS 1.3:** 1 RTT + asymmetric crypto (ECDHE key exchange)
- **TLS 1.3 with 0-RTT:** 0 RTTs (but no replay protection)

For short-lived connections (HTTP/1.1 without keep-alive), the TLS handshake overhead can be
significant. A connection to a server with 100 ms RTT requires:

- **TLS 1.2:** 200 ms (handshake) + 100 ms (request/response) = 300 ms total
- **TLS 1.3:** 100 ms (handshake) + 100 ms (request/response) = 200 ms total
- **TLS 1.3 0-RTT:** 0 ms (handshake) + 100 ms (request/response) = 100 ms total

### Computational Overhead

Asymmetric crypto (ECDHE key exchange) is the most expensive part of the TLS handshake:

- **ECDHE with P-256:** ~1-2 ms on modern hardware (CPU-bound)
- **ECDHE with X25519:** ~0.5-1 ms (faster curve operations)
- **RSA-2048 key exchange:** ~2-5 ms (slower, no forward secrecy)
- **AES-256-GCM encryption:** ~1 GB/s per core (hardware-accelerated on x86 with AES-NI)

For servers handling thousands of new connections per second, the computational cost of TLS
handshakes can be significant. Solutions include:

- **Session resumption:** Reduces asymmetric crypto to zero on repeat connections.
- **TLS session tickets:** No server-side state required.
- **OCSP stapling:** Eliminates the OCSP lookup during the handshake.
- **Hardware acceleration:** AES-NI instructions on x86, ARM Crypto Extensions on mobile.
- **TLS offload:** Terminate TLS on a dedicated device (load balancer, SSL accelerator).

### TLS Termination Architectures

**Edge termination:** TLS is terminated at the load balancer/reverse proxy. The backend receives
plaintext HTTP.

```
Client --TLS--> Load Balancer --HTTP--> Backend
```

Advantages: Backend simplicity, centralized certificate management, WAF/DDoS protection at the edge.
Disadvantages: Backend traffic is unencrypted (requires trusted network), single point of failure
for TLS.

**End-to-end TLS:** TLS is terminated at the application server. The load balancer passes TCP
streams without decryption.

```
Client --TLS--> Load Balancer --TCP/TLS--> Backend
```

Advantages: End-to-end encryption, backend handles TLS. Disadvantages: No WAF/DDoS inspection at the
load balancer, certificates must be managed on every backend instance.

**TLS bridging:** TLS is terminated at the load balancer and re-established to the backend.

```
Client --TLS--> Load Balancer --TLS--> Backend
```

Advantages: End-to-end encryption, WAF/DDoS protection at the edge. Disadvantages: Double TLS
overhead, certificate management on both sides, more complex configuration.

## TLS Configuration Best Practices

### Recommended Cipher Suite Configuration

**TLS 1.3 (preferred):**

```
TLS_AES_256_GCM_SHA384
TLS_CHACHA20_POLY1305_SHA256
TLS_AES_128_GCM_SHA256
```

**TLS 1.2 (fallback):**

```
TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
```

### Nginx Configuration Example

```nginx
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256';
    ssl_prefer_server_ciphers off;

    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 1d;
    ssl_session_tickets off;

    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8 8.8.4.4;

    # HSTS
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    # OCSP stapling verification
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
}
```

### Apache Configuration Example

```apache
<VirtualHost *:443>
    ServerName example.com

    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/example.com/cert.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/example.com/privkey.pem
    SSLCertificateChainFile /etc/letsencrypt/live/example.com/chain.pem

    SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1
    SSLCipherSuite ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256
    SSLHonorCipherOrder off

    SSLUseStapling on
    SSLStaplingCache shmcb:/var/run/apache2/stapling-cache(128000)

    Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
</VirtualHost>
```

## PKI Overview

Public Key Infrastructure (PKI) is the framework for managing digital certificates and public-key
encryption. PKI includes:

1. **Certificate Authorities (CAs):** Organizations that issue certificates and vouch for the
   identity of certificate holders.
2. **Registration Authorities (RAs):** Organizations that verify the identity of certificate
   applicants before the CA issues the certificate.
3. **Certificate Repositories:** Publicly accessible databases where certificates and CRLs are
   published.
4. **Certificate Management Systems:** Systems that manage the lifecycle of certificates (issuance,
   renewal, revocation).
5. **Validation Authorities:** Entities that verify certificate validity and chain of trust.

### Certificate Validation Chain

When a client validates a server's certificate, it checks:

1. **Signature chain:** The server's certificate is signed by an intermediate CA, which is signed by
   a root CA. The root CA's certificate is in the client's trust store.
2. **Validity period:** The current time is within the certificate's Not Before and Not After.
3. **Revocation status:** The certificate has not been revoked (checked via CRL or OCSP).
4. **Name matching:** The certificate's Subject Alternative Name (SAN) matches the hostname the
   client connected to.
5. **Key usage:** The certificate's Key Usage and Extended Key Usage extensions allow the intended
   use (TLS Web Server Authentication).
6. **Path constraints:** Intermediate certificates do not violate path length or name constraints.

### Self-Managed PKI

For internal services, organizations can run their own CA:

- **step-ca (smallstep):** Open-source CA written in Go. Supports ACME, OIDC, SSH certificates, and
  X.509. Easy to set up and manage.
- **cfssl (Cloudflare):** PKI/TLS toolkit for Go. Includes CA, OCSP responder, and certificate
  bundler.
- **OpenSSL CA:** Manual CA operations using `openssl ca` command. Flexible but requires more
  scripting for automation.
- **HashiCorp Vault:** Secrets management platform that includes PKI as a secrets engine. Issues
  short-lived certificates automatically.

```bash
# step-ca quickstart
step ca init --name="Internal CA" --dns="ca.internal.example.com" --address=":8443"

# Issue a certificate with step CLI
step ca certificate api.internal.example.com cert.pem key.pem

# Install the CA root certificate on clients
step ca bootstrap --ca-url https://ca.internal.example.com:8443 --fingerprint $(step certificate fingerprint root_ca.crt)
```

### Trust Stores

Operating systems and browsers maintain trust stores containing root CA certificates:

- **Linux:** `/etc/pki/tls/certs/ca-bundle.crt` (RHEL), `/etc/ssl/certs/ca-certificates.crt`
  (Debian). Managed by the `ca-certificates` package.
- **macOS:** Keychain (System Roots keychain). Managed by `security` command.
- **Windows:** Certificate Store (Local Machine\Root). Managed by `certlm.msc`.
- **Java:** `$JAVA_HOME/lib/security/cacerts`. Managed by `keytool`.
- **Python:** Uses the system trust store (via `certifi` package or system certificates).
- **Node.js:** Uses the system trust store (via OpenSSL).
- **Go:** Uses the system trust store by default, or a custom CA pool.

## TLS Debugging Checklist

When TLS connections fail, check in this order:

1. **Certificate validity:** `openssl x509 -in cert.pem -text -noout` -- check dates, SAN, chain
2. **Certificate chain:** `openssl s_client -connect host:443 -servername host -showcerts` -- verify
   the chain is complete
3. **Cipher suite negotiation:** `openssl s_client -cipher 'ECDHE-RSA-AES256-GCM-SHA384'` -- test
   specific cipher suites
4. **OCSP stapling:** `openssl s_client -status -tlsextdebug` -- verify OCSP response
5. **TLS version:** `openssl s_client -tls1_2` or `openssl s_client -tls1_3` -- test specific
   versions
6. **SCT verification:** Check the certificate for embedded SCTs (Certificate Transparency)
7. **HSTS:** Check the `Strict-Transport-Security` response header
8. **Mixed content:** Ensure no HTTP resources are loaded from HTTPS pages
