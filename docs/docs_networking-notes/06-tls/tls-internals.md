---
id: tls-internals
title: TLS Internals
description:
  TLS protocol internals — record layer, handshake messages, cipher suites, key exchange mechanisms,
  and implementation details.
slug: tls-internals
tags:
  - Networking
categories:
  - Networking
---

## Overview

This document goes deeper into TLS internals than the TLS fundamentals document, covering the record
layer architecture, detailed handshake message formats for TLS 1.3, cipher suite construction, key
exchange mechanisms, and common implementation pitfalls. This is the material you need to understand
when debugging TLS connections, configuring servers, or evaluating cryptographic strength.

## TLS Architecture

TLS is structured as a layered protocol with four sub-protocols operating over a reliable transport
(TCP):

```
+-----------------------------------+
|          Application Data         |
+-----------------------------------+
|          Handshake Protocol       |
+-----------------------------------+
|        Change Cipher Spec         |
+-----------------------------------+
|          Alert Protocol           |
+-----------------------------------+
|          Record Layer             |
+-----------------------------------+
|              TCP                  |
+-----------------------------------+
```

### Record Layer

The TLS record layer fragments application data (and handshake messages) into records. Each record
has:

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|     Content Type (8)           |                              |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+          Version (16)         |
|                              +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                              |                              |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+          Length (16)          |
|                              +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                              |                              |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Fragment (variable)                       |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

Content types:

| Type               | Value | Description                                   |
| ------------------ | ----- | --------------------------------------------- |
| CHANGE_CIPHER_SPEC | 20    | Deprecated in TLS 1.3 (replaced by KeyUpdate) |
| ALERT              | 21    | Error or warning notifications                |
| HANDSHAKE          | 22    | Handshake protocol messages                   |
| APPLICATION_DATA   | 23    | Encrypted application data                    |

### Handshake Protocol

The handshake protocol is responsible for authentication, key exchange, and negotiation of
cryptographic parameters. Handshake messages are carried inside TLS records with content type 22.

### Alert Protocol

Alert messages convey errors and state changes:

| Level       | Description                     | Common Alerts                                      |
| ----------- | ------------------------------- | -------------------------------------------------- |
| Warning (1) | Non-fatal; connection continues | close_notify, no_certificate, bad_certificate      |
| Fatal (2)   | Connection must be terminated   | handshake_failure, decode_error, illegal_parameter |

### Change Cipher Spec Protocol

In TLS 1.2, this protocol signals the transition to encrypted communication. In TLS 1.3, it is
deprecated. Key changes are signaled within the handshake protocol itself.

## TLS 1.2 vs TLS 1.3

### Removed in TLS 1.3

| Feature                 | TLS 1.2   | TLS 1.3 | Reason                                    |
| ----------------------- | --------- | ------- | ----------------------------------------- |
| Renegotiation           | Supported | Removed | Complex, caused RC4 injection attacks     |
| Compression             | Supported | Removed | CRIME attack (compression oracle)         |
| Static RSA key exchange | Supported | Removed | No forward secrecy                        |
| Non-AEAD ciphers        | Supported | Removed | CBC ciphers vulnerable to padding oracles |
| Custom DHE groups       | Supported | Removed | Weak groups (e.g., export-grade)          |
| SHA-1 in signatures     | Supported | Removed | SHA-1 is cryptographically weak           |
| MD5 in signatures       | Supported | Removed | MD5 is broken                             |

### Added in TLS 1.3

| Feature                | Description                                                           |
| ---------------------- | --------------------------------------------------------------------- |
| 0-RTT data             | Send application data in the first flight (repeat connections)        |
| Signature algorithms   | Explicit negotiation of hash+signature pairs (RFC 8446 Section 4.2.3) |
| Key schedule           | Derived key hierarchy using HKDF (RFC 5869)                           |
| Post-handshake auth    | Server can request client certificate after the handshake             |
| Encrypted Server Hello | Server Hello is encrypted (hides server identity from observers)      |
| KeyUpdate              | In-band key rotation without renegotiation                            |

### Cipher Suite Simplification

TLS 1.2 cipher suites are complex strings like `TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256`. TLS 1.3
cipher suites only specify the AEAD algorithm:

| TLS 1.3 Cipher Suite         | AEAD Algorithm    | Hash (HKDF) |
| ---------------------------- | ----------------- | ----------- |
| TLS_AES_128_GCM_SHA256       | AES-128-GCM       | SHA-256     |
| TLS_AES_256_GCM_SHA384       | AES-256-GCM       | SHA-384     |
| TLS_CHACHA20_POLY1305_SHA256 | ChaCha20-Poly1305 | SHA-256     |
| TLS_AES_128_CCM_SHA256       | AES-128-CCM       | SHA-256     |
| TLS_AES_128_CCM_8_SHA256     | AES-128-CCM-8     | SHA-256     |

The key exchange algorithm is no longer part of the cipher suite. It is negotiated separately via
the `supported_groups` extension.

## TLS 1.3 Handshake in Detail

### Full Handshake (1-RTT)

```
Client                                          Server
  |                                                |
  |--- ClientHello -------------------------------->|  Flight 1
  |    supported_versions, supported_groups,        |
  |    signature_algorithms, key_share              |
  |                                                |
  |<-- ServerHello ---------------------------------|  Flight 2
  |    selected_version, selected_group,            |
  |    key_share                                    |
  |<-- EncryptedExtensions ------------------------|
  |<-- Certificate ---------------------------------|
  |<-- CertificateVerify ---------------------------|
  |<-- Finished ------------------------------------|
  |                                                |
  |--- Finished ----------------------------------->|  Flight 3
  |                                                |
  |==== Application Data =========================|
```

### ClientHello Fields

The ClientHello carries the client's capabilities and parameters:

| Field                      | Description                                         |
| -------------------------- | --------------------------------------------------- |
| legacy_version             | 0x0303 (TLS 1.2) for compatibility with middleboxes |
| random                     | 32 bytes of random (used in key derivation)         |
| legacy_session_id          | Session ID for compatibility (TLS 1.3 uses PSK)     |
| cipher_suites              | List of supported TLS 1.3 cipher suites             |
| legacy_compression_methods | [0x00] (no compression)                             |
| extensions                 | supported_versions, supported_groups, key_share,    |
|                            | signature_algorithms, psk_key_exchange_modes,       |
|                            | server_name (SNI), etc.                             |

### ServerHello Fields

| Field                     | Description                             |
| ------------------------- | --------------------------------------- |
| legacy_version            | 0x0303 (always, even for TLS 1.3)       |
| random                    | 32 bytes of random                      |
| legacy_session_id_echo    | Echo of client's session_id             |
| cipher_suite              | Selected cipher suite                   |
| legacy_compression_method | 0x00                                    |
| extensions                | supported_version (TLS 1.3), key_share, |
|                           | pre_shared_key (if PSK selected)        |

### EncryptedExtensions

After the ServerHello, all subsequent handshake messages are encrypted. EncryptedExtensions carries
server-side configuration that does not affect the cryptographic parameters:

- `server_name` indication (whether SNI was used)
- `max_fragment_length` (negotiate smaller records)
- `application_layer_protocol_negotiation` (ALPN)
- `early_data` (whether 0-RTT is accepted)

### Certificate

The server sends its certificate chain. In TLS 1.3, the Certificate message is sent encrypted. The
certificate chain includes:

1. **Leaf certificate:** The server's end-entity certificate
2. **Intermediate certificates:** One or more intermediate CA certificates
3. **Root certificate:** NOT included (the client must already trust it)

### CertificateVerify

This message proves that the server holds the private key corresponding to the certificate's public
key. It contains a digital signature over a transcript hash of all handshake messages so far.

```
Signature = Sign(private_key, Hash("TLS 1.3, server CertificateVerify" || 0x20...0x20 || transcript_hash))
```

The `0x20...0x20` is 64 bytes of spaces (0x20), a context string that binds the signature to TLS 1.3
specifically.

### Finished

Both sides send a Finished message, which contains a verify_data value derived from the handshake
transcript:

```
verify_data = HMAC(finished_key, Hash(transcript))
```

The Finished message is the first message encrypted with the newly derived traffic keys. If the
verify_data does not match, the handshake has been tampered with and the connection is terminated.

## Key Exchange Mechanisms

### ECDHE (Elliptic Curve Diffie-Hellman Ephemeral)

The most widely used key exchange in TLS 1.3. Both sides generate an ephemeral (temporary) key pair
on an elliptic curve, exchange public keys, and derive a shared secret.

```
Client generates: (priv_c, pub_c)
Server generates: (priv_s, pub_s)

Shared secret = ECDH(priv_c, pub_s) = ECDH(priv_s, pub_c) = x-coordinate of (priv_c * pub_s)
```

Supported curves (RFC 8446):

| Curve             | Key Size | Security Level |
| ----------------- | -------- | -------------- |
| X25519            | 256 bits | 128 bits       |
| secp256r1 (P-256) | 256 bits | 128 bits       |
| secp384r1 (P-384) | 384 bits | 192 bits       |
| secp521r1 (P-521) | 521 bits | 256 bits       |

X25519 is the recommended default. It is faster than NIST curves, has simpler implementation (fewer
edge cases), and uses a constant-time algorithm that is resistant to timing attacks.

### DHE (Finite Field Diffie-Hellman Ephemeral)

Traditional Diffie-Hellman over a finite field. Slower than ECDHE for equivalent security levels.
Supported groups:

| Group (ffdhe) | Prime Size | Security Level |
| ------------- | ---------- | -------------- |
| ffdhe2048     | 2048 bits  | 112 bits       |
| ffdhe3072     | 3072 bits  | 128 bits       |
| ffdhe4096     | 4096 bits  | 150 bits       |
| ffdhe6144     | 6144 bits  | 175 bits       |
| ffdhe8192     | 8192 bits  | 200+ bits      |

### PSK (Pre-Shared Key)

TLS 1.3 supports PSK-based key exchange, which can be used alone or combined with (EC)DHE (called
"PSK with (EC)DHE" or "psk_dhe_ke").

| PSK Mode      | Forward Secrecy | Use Case                              |
| ------------- | --------------- | ------------------------------------- |
| PSK only      | No              | IoT devices, resumption tickets       |
| PSK + (EC)DHE | Yes             | Recommended for resumption (security) |

PSKs are established either externally (configured on both sides) or via a previous TLS handshake
(session resumption via NewSessionTicket).

### PSK Key Exchange Modes

The client indicates which PSK modes it supports in the `psk_key_exchange_modes` extension:

- `psk_ke`: PSK-only key establishment (no forward secrecy)
- `psk_dhe_ke`: PSK combined with (EC)DHE (forward secrecy maintained)

:::info

TLS 1.3 implementations should prefer `psk_dhe_ke` for session resumption. This provides forward
secrecy even for resumed sessions. If the PSK is compromised, past traffic remains secure because
the (EC)DHE exchange was ephemeral.

:::

## Cipher Suites Breakdown

### AEAD Ciphers

AEAD (Authenticated Encryption with Associated Data) provides both confidentiality and integrity in
a single operation. TLS 1.3 requires AEAD ciphers exclusively.

**AES-GCM (Galois/Counter Mode):**

- AES-128-GCM: 128-bit key, 96-bit nonce, 128-bit authentication tag
- AES-256-GCM: 256-bit key, 96-bit nonce, 128-bit authentication tag
- Hardware-accelerated on most modern CPUs (AES-NI instruction set)
- The most widely deployed AEAD cipher

**ChaCha20-Poly1305:**

- 256-bit key, 96-bit nonce, 128-bit authentication tag
- Software-optimized design (no special hardware needed)
- Preferred on mobile devices and ARM platforms without AES-NI
- Designed by Daniel J. Bernstein

**AES-CCM:**

- AES-128-CCM: 128-bit key, CBC-MAC mode
- AES-128-CCM-8: Same but with truncated 64-bit tag (faster but weaker)
- Required for compatibility with constrained IoT devices (RFC 8446 mandates support for at least
  one CCM cipher)
- Slower than GCM

### Key Derivation: HKDF

TLS 1.3 uses HKDF (HMAC-based Extract-and-Expand Key Derivation Function, RFC 5869) for all key
derivation. The key schedule is:

```
                    0-RTT
                      |
Early Secret = HKDF-Extract(PSK or 0)
                      |
Handshake Secret = HKDF-Extract(DHE shared secret, Early Secret)
                      |
Master Secret = HKDF-Extract(DHE shared secret, Handshake Secret)
                      |
Application Traffic Secret 0
Application Traffic Secret 1  (after KeyUpdate)
...
```

Each secret is expanded into multiple keys:

```
Traffic Keys = {
    client_write_key,
    server_write_key,
    client_write_iv,
    server_write_iv
}
```

### Nonce Construction

The per-record nonce is derived from the IV and a sequence number:

```
nonce = IV XOR (sequence_number << 64)
```

The sequence number is a 64-bit counter that increments for each record. Since the sequence number
is included in the nonce, every record has a unique nonce, even with the same IV.

## Certificate Verification Path

### Chain Building

When the server presents a certificate chain, the client builds a verification path:

1. **Parse the leaf certificate** and extract the issuer's distinguished name
2. **Find the issuer** in the chain (or in the client's trust store)
3. **Repeat** until a trusted root certificate is reached
4. **Verify signatures** at each step (each certificate is signed by its issuer)

### Signature Validation

For each certificate in the chain:

1. Verify the signature algorithm is acceptable (not MD5, not SHA-1)
2. Verify the certificate is within its validity period (not_before to not_after)
3. Verify the certificate has not been revoked (OCSP or CRL)
4. Verify the certificate's intended purpose (serverAuth for TLS)
5. Verify the certificate's constraints (name constraints, path length)

### Revocation Checking

**OCSP (Online Certificate Status Protocol, RFC 6960):**

The client sends a query to the CA's OCSP responder asking whether a specific certificate is
revoked. The responder returns "good", "revoked", or "unknown".

```bash
# Check certificate revocation with openssl
openssl ocsp -issuer intermediate.pem -cert server.pem \
  -url http://ocsp.example.com/ -resp_text
```

**OCSP Stapling (RFC 6066):**

The server periodically obtains an OCSP response from the CA and "staples" it to the TLS handshake.
The client does not need to contact the CA directly, improving performance and privacy.

```bash
# Test OCSP stapling with openssl
openssl s_client -connect example.com:443 -status -servername example.com
```

**CRL (Certificate Revocation List):**

The CA publishes a list of revoked certificate serial numbers. The client downloads and checks the
list. CRLs can be large and are not updated frequently, making them less practical for real-time
revocation checking.

### CAA (Certification Authority Authorization, RFC 6844)

A DNS record that specifies which CAs are authorized to issue certificates for a domain:

```text
example.com.  IN  CAA  0 issue "letsencrypt.org"
example.com.  IN  CAA  0 issuewild "*.example.com" "letsencrypt.org"
```

## Record Layer Details

### Fragmentation

TLS records have a maximum size (configurable, default 16KB). Application data larger than this is
fragmented into multiple records. The receiver reassembles the fragments.

In TLS 1.3, the maximum record size is negotiated via the `max_fragment_length` extension:

| Value | Max Record Size   |
| ----- | ----------------- |
| 1     | 2^9 (512 bytes)   |
| 2     | 2^10 (1024 bytes) |
| 3     | 2^11 (2048 bytes) |
| 4     | 2^12 (4096 bytes) |

Smaller records reduce latency (the receiver can process data sooner) but increase overhead (more
records = more TLS record headers and MACs).

### MAC-then-Encrypt vs Encrypt-then-MAC

TLS 1.2 with CBC cipher suites uses MAC-then-Encrypt (MAC the plaintext, then encrypt both). This is
vulnerable to padding oracle attacks (Lucky13, POODLE).

TLS 1.3 uses AEAD ciphers exclusively, which combine encryption and authentication in a single
operation (effectively encrypt-then-MAC). This eliminates padding oracle attacks entirely.

## TLS Extensions

### SNI (Server Name Indication, RFC 6066)

The client sends the server hostname in the ClientHello's `server_name` extension. This allows a
single IP address to host multiple TLS-enabled websites (virtual hosting).

```bash
# Test SNI
openssl s_client -connect 93.184.216.1:443 -servername example.com
```

### ALPN (Application-Layer Protocol Negotiation, RFC 7301)

Negotiates the application protocol (HTTP/1.1, HTTP/2, h2c, etc.) during the TLS handshake:

```bash
# Test ALPN
openssl s_client -connect example.com:443 -alpn h2,http/1.1
```

### Session Tickets (RFC 5077)

The server encrypts the session state into a ticket and sends it to the client. On a subsequent
connection, the client presents the ticket, and the server decrypts it to resume the session without
storing state.

In TLS 1.3, session tickets are sent via the NewSessionTicket post-handshake message.

### supported_versions (TLS 1.3)

The client lists supported TLS versions in this extension. The server responds with the selected
version in the ServerHello. This extension allows TLS 1.3 to be negotiated without changing the
legacy_version field.

### pre_shared_key (TLS 1.3)

Contains the PSK identity and the binder value (an HMAC over the transcript up to this point, using
the PSK). The binder prevents a man-in-the-middle from substituting a different PSK.

## Forward Secrecy

### Why It Matters

Forward secrecy (also called perfect forward secrecy, PFS) ensures that compromising the server's
private key does not compromise past session keys. Each session uses an ephemeral key exchange, so
recording encrypted traffic and later obtaining the server's private key does not allow decryption
of past sessions.

Without forward secrecy (static RSA key exchange), the session key is encrypted with the server's
static RSA private key. If an attacker records the handshake and later obtains the private key
(through theft, court order, or cryptanalysis), they can decrypt all past sessions.

### Which Cipher Suites Provide Forward Secrecy

| Key Exchange  | Forward Secrecy |
| ------------- | --------------- |
| Static RSA    | No              |
| ECDHE         | Yes             |
| DHE           | Yes             |
| PSK only      | No              |
| PSK + (EC)DHE | Yes             |

:::warning

TLS 1.3 mandates forward secrecy for all handshakes. Every TLS 1.3 connection uses (EC)DHE, either
alone or in combination with PSK. Static RSA key exchange is not available in TLS 1.3.

:::

## Common Implementation Pitfalls

### BEAST (Browser Exploit Against SSL/TLS)

CVE-2011-3389. Exploits predictable IVs in TLS 1.0 CBC cipher suites to decrypt data block by block.

**Mitigation:** Use TLS 1.1+ (which uses explicit IVs), or TLS 1.2+ with RC4 (not recommended due to
RC4 biases), or TLS 1.2+ with AES-GCM (recommended). Modern browsers implement 1/n-1 splitting as a
client-side mitigation.

### Lucky13 (CVE-2013-0169)

A timing side-channel attack on CBC cipher suites in TLS 1.2. The decryption time varies depending
on whether the MAC is valid, leaking information about the plaintext.

**Mitigation:** Use AES-GCM or ChaCha20-Poly1305 (AEAD ciphers). If CBC must be used, implement
constant-time MAC verification.

### RC4 Biases

RC4 has statistical biases in its keystream that allow an attacker to recover plaintext after
observing sufficient ciphertext. RFC 7465 prohibits RC4 in TLS.

### Padding Oracles (CVE-2014-3566, POODLE)

Exploits the padding validation in CBC mode. When the server rejects incorrectly padded ciphertext,
the error response leaks information about the plaintext.

**Mitigation:** TLS 1.3 eliminates this by requiring AEAD ciphers. For TLS 1.2, disable CBC cipher
suites and use AES-GCM or ChaCha20-Poly1305.

### Renegotiation Attacks

TLS 1.2 renegotiation allows the client and server to renegotiate cipher suites mid-connection. A
man-in-the-middle can inject a renegotiation request and splice the attacker's session with the
victim's.

**Mitigation:** TLS 1.3 removed renegotiation entirely. TLS 1.2 supports the `renegotiation_info`
extension (RFC 5746) which cryptographically binds the renegotiated connection to the original
connection.

## Common Pitfalls

### 1. Mixing TLS 1.2 and TLS 1.3 Configuration

TLS 1.2 and TLS 1.3 cipher suites are configured separately. A server configured for
`TLS_AES_128_GCM_SHA256` in the TLS 1.2 cipher suite list will not work -- that cipher suite is TLS
1.3 only. Ensure your server configuration correctly separates the two.

```bash
# OpenSSL cipher configuration
# TLS 1.3 ciphers (separate)
openssl ciphers -v -s -tls1_3 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256'

# TLS 1.2 ciphers
openssl ciphers -v 'ECDHE+AESGCM:ECDHE+CHACHA20:DHE+AESGCM:DHE+CHACHA20'
```

### 2. Not Enabling OCSP Stapling

Without OCSP stapling, clients must contact the CA's OCSP responder directly. This adds latency (an
additional HTTP request per TLS handshake) and allows the CA to track which websites clients visit.
Enable OCSP stapling on your server.

### 3. Using Self-Signed Certificates in Production

Self-signed certificates provide encryption but not authentication. Any attacker can create a
self-signed certificate for your domain. Use certificates issued by a publicly trusted CA (Let's
Encrypt, DigiCert, etc.).

### 4. Not Rotating Session Tickets

Session tickets contain encrypted session state. If the ticket encryption key is compromised, an
attacker can forge tickets and impersonate clients. Rotate ticket keys regularly (at least daily).

### 5. Ignoring Certificate Expiry

Expired certificates cause TLS handshake failures. Implement monitoring to alert before certificates
expire. Use ACME (Automatic Certificate Management Environment, used by Let's Encrypt) for automatic
certificate renewal.

### 6. Disabling Certificate Verification in Code

```javascript
// NEVER do this in production
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
```

This disables all certificate verification, making the connection vulnerable to man-in-the-middle
attacks. Always verify certificates in production.

### 7. Not Supporting HSTS

HTTP Strict Transport Security (HSTS, RFC 6797) tells the browser to always use HTTPS for a domain,
preventing downgrade attacks and SSL stripping. Deploy HSTS with a long max-age and include
subdomains.

```text
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

## TLS 1.3 Post-Handshake Messages

### NewSessionTicket

After the handshake is complete, the server can send NewSessionTicket messages to the client. Each
ticket contains encrypted session state that the client can use to resume the connection later.

```text
Server -> Client:
  NewSessionTicket {
    ticket_lifetime: 7200 (seconds),
    ticket_age_add: random 32-bit value (obfuscates ticket age),
    ticket_nonce: per-ticket nonce for key derivation,
    ticket: encrypted session state,
    extensions: [early_data max early data size]
  }
```

The client stores the ticket and uses it in a subsequent handshake's `pre_shared_key` extension.
Tickets are single-use by default (the server deletes them after one use). For stateless resumption,
the server encrypts all session state into the ticket and does not store anything.

### KeyUpdate

Either side can request a key update to rotate the traffic keys without re-establishing the
connection. This is useful for long-lived connections (gRPC streaming, WebSocket over TLS) where the
same keys should not be used for too much data.

```text
Client -> Server:
  KeyUpdate {
    update_requested: 1    // server must also send KeyUpdate
  }

Server -> Client:
  KeyUpdate {
    update_requested: 0    // no response needed
  }
```

After receiving KeyUpdate, the receiver installs new write keys (derived from the next key in the
key schedule) and continues sending with the new keys. The read keys are updated after receiving
data encrypted with the peer's new keys.

### Post-Handshake Authentication

The server can request the client's certificate after the initial handshake is complete. This is
useful when the server does not know whether client authentication is needed until after processing
the request.

```text
Server -> Client (encrypted):
  CertificateRequest {
    certificate_request_context: ...,
    extensions: {
      signature_algorithms: [rsa_pss_rsae_sha256, ecdsa_secp256r1_sha256, ...],
      certificate_authorities: [DER-encoded CA DNs]
    }
  }

Client -> Server (encrypted):
  Certificate { certificate_chain }
  CertificateVerify { signature }
  Finished { verify_data }
```

## TLS Session Resumption

### Session Tickets (Stateless)

The server encrypts the session state into a ticket and sends it to the client. The client presents
the ticket on the next connection. The server decrypts the ticket and resumes the session.

Advantages: server does not store session state (scales horizontally). Disadvantages: ticket
encryption key must be rotated; tickets can be stolen.

### Pre-Shared Key (PSK) Resumption (TLS 1.3)

TLS 1.3 formalizes PSK-based resumption. The server sends a NewSessionTicket containing a PSK
derived from the connection. The client stores the PSK and uses it in the next handshake.

```text
First handshake:
  ClientHello  (no PSK)
  ServerHello  (no PSK selected)
  ... (full handshake)
  Server -> NewSessionTicket (contains PSK identity and key)

Second handshake (resumption):
  ClientHello  (pre_shared_key extension with PSK from ticket)
  ServerHello  (pre_shared_key selected)
  ... (abbreviated handshake, 1-RTT or 0-RTT)
```

### 0-RTT Resumption

With a valid PSK, the client can send application data in the first flight (0-RTT). This is useful
for repeat connections where latency is critical.

```bash
# Test 0-RTT with openssl
openssl s_client -connect example.com:443 -tls1_3 -early_data /tmp/request.txt
```

:::warning

0-RTT data is vulnerable to replay attacks. The server must not accept 0-RTT data for non-idempotent
operations. Common safe uses: GET requests, database reads, cache lookups. Unsafe: POST, PUT,
DELETE, financial transactions.

:::

## TLS Configuration Hardening

### Mozilla SSL Configuration Generator

Mozilla provides a configuration generator (https://ssl-config.mozilla.org/) with three profiles:

| Profile      | Clients Supported           | Cipher Suites                      |
| ------------ | --------------------------- | ---------------------------------- |
| Modern       | TLS 1.3 only                | AES-128-GCM, AES-256-GCM, ChaCha20 |
| Intermediate | TLS 1.2 + TLS 1.3           | Adds AES-128-CBC, ECDHE, DHE       |
| Old          | TLS 1.0 + TLS 1.1 + TLS 1.2 | Maximum compatibility              |

### nginx Configuration Example

```text
server {
    listen 443 ssl http2;
    server_name example.com;

    ssl_certificate     /etc/ssl/certs/example.com.pem;
    ssl_certificate_key /etc/ssl/private/example.com.key;

    # TLS 1.3 only (modern profile)
    ssl_protocols TLSv1.3;
    ssl_ciphers TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256;

    # TLS 1.2 + 1.3 (intermediate profile)
    # ssl_protocols TLSv1.2 TLSv1.3;
    # ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305;

    # Session resumption
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 1d;
    ssl_session_tickets off;    # stateless resumption via tickets

    # OCSP stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/ssl/certs/chain.pem;

    # HSTS
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    # DH parameters (for DHE cipher suites)
    ssl_dhparam /etc/ssl/dhparam.pem;
}
```

### OpenSSL Server Test

```bash
# Test TLS configuration
openssl s_client -connect example.com:443 -tls1_3
openssl s_client -connect example.com:443 -tls1_2

# Check supported cipher suites
nmap --script ssl-enum-ciphers -p 443 example.com

# Check certificate chain
openssl s_client -connect example.com:443 -servername example.com -showcerts

# Check OCSP stapling
openssl s_client -connect example.com:443 -status -servername example.com

# Check HSTS header
curl -sI https://example.com | grep -i strict-transport
```

## TLS Performance Considerations

### Handshake Cost

The TLS handshake is CPU-intensive due to the asymmetric key exchange (ECDHE) and signature
verification. Typical costs:

| Operation            | Time (approximate) |
| -------------------- | ------------------ |
| ECDHE key exchange   | 0.5-2ms (P-256)    |
| RSA signature verify | 0.5-1ms (2048-bit) |
| AES-128-GCM encrypt  | 0.001ms per KB     |
| Session resumption   | 0.1-0.5ms          |

On a server handling 10,000 new TLS connections per second, the handshake alone consumes significant
CPU. Session resumption reduces this cost dramatically.

### Hardware Acceleration

Modern CPUs support AES-NI (hardware-accelerated AES encryption). ChaCha20-Poly1305 is designed to
be fast without hardware acceleration and is preferred on ARM-based devices.

```bash
# Check if AES-NI is available
grep aes /proc/cpuinfo
openssl speed -evp aes-128-gcm
openssl speed -evp chacha20-poly1305
```

### TLS Termination

In high-traffic environments, TLS termination is often offloaded to dedicated hardware (F5, Citrix
ADC) or software (Envoy, nginx, HAProxy) in front of the application servers. This centralizes
certificate management and reduces CPU load on application servers.

## Common Pitfalls (Additional)

### 8. Incomplete Certificate Chains

The server must send the full certificate chain (leaf + intermediates). If intermediate certificates
are missing, clients that do not have the intermediate cached will fail to validate the chain. This
is the most common TLS deployment error.

```bash
# Verify certificate chain completeness
openssl s_client -connect example.com:443 -showcerts
# Count the certificates: should have at least 2 (leaf + intermediate)
```

### 9. Not Disabling TLS 1.0 and TLS 1.1

TLS 1.0 and 1.1 are deprecated (RFC 8996). Some clients may still require them for compatibility,
but they should be disabled wherever possible. PCI DSS v4.0 requires TLS 1.2 or higher.

### 10. Using Weak DH Parameters

If DHE cipher suites are used, the DH parameters must be at least 2048 bits. Generate strong DH
parameters:

```bash
openssl dhparam -out /etc/ssl/dhparam.pem 2048
```

### 11. Not Setting secure Renegotiation

In TLS 1.2, ensure the server supports secure renegotiation (RFC 5746) to prevent renegotiation
attacks. Modern servers enable this by default, but verify:

```bash
openssl s_client -connect example.com:443 | grep "Secure Renegotiation"
```

### 12. Mixed Content

HTTPS pages that load resources over HTTP are vulnerable to man-in-the-middle attacks on those
resources. Use the Content-Security-Policy header to enforce HTTPS for all subresources:

```text
Content-Security-Policy: upgrade-insecure-requests
```
