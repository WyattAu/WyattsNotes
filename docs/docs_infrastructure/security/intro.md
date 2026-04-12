---
id: intro
title: Introduction to Security
description:
  Information security fundamentals — threat modeling, cryptography, authentication, web security,
  network security, and incident response.
slug: intro
sidebar_position: 1
---

## The Threat Landscape

Information security is not a feature you bolt on after the fact. It is a property of a system that
must be designed in from the start, validated continuously, and treated as a first-class engineering
concern alongside reliability, performance, and correctness.

The modern threat landscape is defined by scale and sophistication. Nation-state actors operate with
resources that rival the budgets of the organizations they target. Organized crime groups monetize
access through ransomware, data exfiltration, and credential resale. Insider threats — whether
malicious or negligent — account for a significant fraction of breaches. Supply chain attacks
compromise trusted software to reach thousands of downstream victims simultaneously.

The cost of failure is material. The average data breach costs organizations millions of USD, and
regulatory penalties under GDPR, HIPAA, and PCI-DSS can dwarf the direct technical cost of an
incident.

## Security as a Systems Engineering Discipline

Security failures are almost always systems failures. A buffer overflow in a C library, a
misconfigured S3 bucket, an overly permissive IAM policy, a leaked JWT secret — these are not crypto
problems or network problems or application problems. They are systems problems that manifest at a
particular layer.

The systems engineer's advantage is understanding how layers interact. When you understand how TLS
termination works, how DNS resolution chains to load balancers, how container isolation maps to
kernel namespaces, you can reason about where trust boundaries exist and where they might be
violated.

## The CIA Triad

Every security property ultimately reduces to one or more of:

| Property            | Question                                     | Failure Mode                     |
| ------------------- | -------------------------------------------- | -------------------------------- |
| **Confidentiality** | Can unauthorized parties read this data?     | Data breach, information leakage |
| **Integrity**       | Can unauthorized parties modify this data?   | Data tampering, code injection   |
| **Availability**    | Can authorized parties access this resource? | Denial of service, data deletion |

Most real-world incidents violate multiple triad elements simultaneously. A ransomware attack
compromises confidentiality (data exfiltration before encryption), integrity (file encryption), and
availability (system lockout) in a single operation.

## Defense in Depth

No single security control is sufficient. Defense in depth layers multiple independent controls so
that the failure of any one mechanism does not result in total compromise. A web application
protected by WAF, input validation, parameterized queries, and least-privilege database credentials
is resilient in ways that an application relying on any single one of those controls is not.

The key insight is **independence** — controls must fail independently. Two firewalls from the same
vendor with the same rule set are not two independent controls.

## The Security Mindset

Security engineering requires a particular mindset: assume components fail, assume configurations
drift, assume attackers have more information than you think, and assume that what you do not
explicitly deny is permitted.

This is adversarial thinking — not paranoia, but disciplined skepticism. The question is not "does
this work?" but "what happens when this is used in ways I did not intend?"

## Scope of This Section

This section covers the core security competencies expected of a systems engineer:

1. **Security Fundamentals** — CIA triad, threat modeling, risk assessment, least privilege
   ([security-fundamentals](./01-security-fundamentals/security-fundamentals.md))
2. **Cryptography** — Symmetric/asymmetric encryption, hashing, PKI, TLS
   ([cryptography](./02-cryptography/cryptography.md))
3. **Authentication and Authorization** — Passwords, MFA, OAuth 2.0, JWT, RBAC/ABAC
   ([authentication](./03-authentication/authentication.md))
4. **Web Security** — XSS, CSRF, injection, CORS, CSP, OWASP Top 10
   ([web-security](./04-web-security/web-security.md))
5. **Network Security** — Firewalls, VPNs, zero trust, DNS security, SIEM
   ([network-security](./05-network-security/network-security.md))
6. **Incident Response** — NIST IR lifecycle, forensics, containment, post-mortem
   ([incident-response](./06-incident-response/incident-response.md))

:::tip

These notes assume familiarity with networking fundamentals (TCP/IP, DNS, TLS) and basic systems
administration. The focus is on understanding how security controls work at the implementation level
and why they fail when they do.

:::
