---
id: intro
title: Introduction to Licensing
description: Open-source licenses, compliance, and legal considerations for software projects.
slug: /intro
sidebar_position: 1
---

## What Software Licensing Is

Every piece of software you write, compile, or deploy is subject to copyright law by default. Under
the Berne Convention (implemented in the US via the Copyright Act of 1976), copyright attaches
automatically the moment an original work is fixed in a tangible medium of expression — no
registration required, no notice required. This means that without an explicit license, nobody else
has any legal right to copy, modify, distribute, or use your software. The default state of all
software is "all rights reserved."

A software license is the legal instrument that grants specific permissions to others. It does not
transfer ownership of the copyright; it grants a limited set of rights (a license) under specific
conditions. Understanding this distinction is critical: the copyright holder retains ownership and
can revoke the license (for non-perpetual grants) or enforce compliance with the license terms
through copyright infringement claims.

Intellectual property (IP) law is the foundation. Software is protectable under copyright (the
specific expression of code), potentially under patent law (novel algorithms or processes, though
this is jurisdiction-dependent and controversial), and under trade secret law (if the code is kept
confidential). Licenses operate primarily within the copyright framework but increasingly include
patent provisions to address the intersection of copyright and patent rights in software.

## The Licensing Spectrum

Software licensing exists on a spectrum defined by how much freedom the license grants to downstream
users and what obligations it imposes in return:

**Proprietary** — All rights reserved. The copyright holder grants limited, specific permissions
(typically via an End User License Agreement, or EULA). No right to modify, redistribute, or in many
cases even reverse-engineer. The license can be revoked and is often restricted to a specific number
of users, machines, or use cases.

**Source-available** — Source code is published and readable, but modification and redistribution
rights are restricted. The code is visible but not "open source" in the OSI (Open Source Initiative)
sense. Examples: BSL (Business Source License), SSPL (Server Side Public License), Redis RSALv2.

**Permissive open source** — Redistribution and modification are allowed with minimal obligations
(typically attribution and license notice inclusion). Downstream works can be proprietary. Examples:
MIT, Apache 2.0, BSD, ISC.

**Weak copyleft** — Modified files must remain under the same license, but the copyleft obligation
does not propagate to unrelated files that merely link to the licensed work. The boundary of the
"work" matters: only the covered files are subject to copyleft. Examples: LGPLv3 (linking boundary),
MPL 2.0 (file boundary).

**Strong copyleft** — Any derivative work must be distributed under the same copyleft license. The
obligation propagates to the entire combined work, not just the modified files. Examples: GPLv2,
GPLv3.

**Network copyleft (AGPL)** — Extends strong copyleft obligations to network interactions. If users
interact with the software over a network, you must provide the source to those users. This closes
the "ASP loophole" (Application Service Provider loophole) that existed in GPLv2 and GPLv3, where
hosting software as a service did not trigger distribution requirements because no copy was being
conveyed.

**Public domain** — The copyright holder waives all rights entirely. No restrictions, no
obligations, no attribution required. The legal mechanism for achieving this varies by jurisdiction
— not all legal systems recognize copyright waiver, which is why "public domain dedication" licenses
include fallback provisions.

## Copyleft vs Permissive: Philosophy and Practice

The philosophical divide between copyleft and permissive licensing mirrors a deeper disagreement
about the purpose of software freedom:

**Permissive licensing** (associated with the Open Source Initiative and the "open source" movement)
treats software freedom as a practical benefit. The goal is maximal adoption and reuse. If a company
takes MIT-licensed code, modifies it, and ships it in a closed-source commercial product, that is
considered a success — the code is being used, the user community benefits from the original
release, and the author's goal of broad adoption is served.

**Copyleft licensing** (associated with the Free Software Foundation and the "free software"
movement) treats software freedom as a moral imperative. The goal is to ensure that software freedom
is preserved in all downstream uses. If a company takes GPL-licensed code and ships it in a
closed-source product without providing source, that is a violation of the license and a violation
of the user's freedom.

In practice, this translates to different risk profiles for downstream consumers:

- Permissive licenses minimize downstream obligations, making them safer for corporate adoption but
  offering no protection against enclosure (someone taking your open-source work proprietary).
- Copyleft licenses ensure that modifications remain free but create compliance obligations that
  some organizations find operationally burdensome, especially at scale.

## Why Systems Engineers Need to Understand Licensing

Licensing is not a problem you can delegate entirely to legal. As a systems engineer, you make
decisions that have licensing implications every day:

**Dependency audits.** Every package you pull from npm, PyPI, Maven Central, Go modules, or any
other package registry carries a license. If you ship a product that includes a GPLv3-licensed
dependency, your entire product may need to be distributed under GPLv3 — and if you cannot do that
(because your product includes proprietary components), you cannot ship the product at all. You need
to know what is in your dependency tree and what obligations those licenses impose. This is not a
theoretical concern: companies have been forced to rewrite products to remove GPL dependencies after
failing to audit their license obligations.

**Compliance.** Organizations that distribute software (or provide it as a service, in the AGPL
case) must comply with license terms. This means including license notices in distributions,
providing source code when required, not mixing incompatible licenses, and maintaining records of
what license applies to what code. Non-compliance is copyright infringement, which carries statutory
damages of up to $150,000 per work infringed in the US.

**Contributor agreements.** If you contribute to an open-source project, you may be asked to sign a
Contributor License Agreement (CLA) or agree to a Developer Certificate of Origin (DCO). You need to
understand what rights you are granting, whether your employer retains rights to your contribution
(check your employment contract — many employment agreements assign all intellectual property
created during employment to the employer), and whether the project's license allows your employer
to use your contribution.

**Corporate policy.** Many organizations maintain approved license lists that categorize licenses
into tiers (e.g., "green" for permissive, "yellow" for LGPL, "red" for GPL/AGPL). GPLv3 and AGPLv3
are frequently banned or restricted in enterprise environments because of the risk they pose to
proprietary products and SaaS deployments. Understanding why these restrictions exist helps you make
better dependency choices and avoid introducing compliance risk.

**Containerization and distribution.** Shipping a Docker image that bundles multiple dependencies
raises the question: does distributing a container count as distributing the software inside it? The
answer is almost certainly yes — a container image is a distributable artifact that contains copies
of the software. This triggers copyleft obligations for any GPL-licensed components in the image,
and it means license notices must be included.

## License Compatibility

License compatibility is the question of whether software under license A can be combined with
software under license B to form a single work. Incompatibility arises when the obligations of one
license cannot be satisfied simultaneously with the obligations of the other.

The classic example: GPLv2 code cannot be combined with GPLv3 code into a single work, because GPLv3
adds additional restrictions (patent retaliation, anti-Tivoization) that GPLv2 does not impose, and
GPLv2 Section 4 explicitly prohibits adding additional restrictions. Similarly, Apache 2.0 includes
a patent retaliation clause that adds restrictions that GPLv2 does not allow.

Compatibility is directional in many cases. GPLv3 is compatible with Apache 2.0 (you can combine
Apache 2.0 code into a GPLv3 project because GPLv3 permits the Apache 2.0 patent retaliation terms).
But GPLv2 is not compatible with Apache 2.0 (you cannot combine Apache 2.0 code into a GPLv2 project
because the Apache 2.0 patent retaliation terms are "additional restrictions" that GPLv2 prohibits).

When licenses are incompatible, you cannot legally distribute the combined work. This is a hard
constraint, not a soft guideline. Mixing incompatible licenses is one of the most dangerous things
you can do in a software project because it means either you must remove one of the incompatible
components or you are committing copyright infringement.

## Key Terminology

**Derivative work.** A work based upon one or more preexisting works, such as a modification,
enhancement, adaptation, or translation. In US copyright law (17 U.S.C. § 101), this is a term of
art with specific legal meaning. For software, modifying source code unambiguously creates a
derivative work. The critical ambiguity — and the source of enormous legal debate — is whether
linking (static or dynamic) to a library creates a derivative work of that library. Copyleft
licenses differ significantly in how they handle this ambiguity: GPL takes the strict view that
linking creates a derivative work, LGPL explicitly creates an exception for dynamic linking, and MPL
limits copyleft to the file level.

**Distribution (or conveyance).** The act of making copies of a work available to others. Under US
copyright law, distribution is one of the exclusive rights of the copyright holder (17 U.S.C. §
106(3)). Under GPLv3, this concept is called "conveying" (Section 4), which is defined more
precisely than GPLv2's "distribution" to cover any form of propagation that would make you directly
or secondarily liable for infringement. Distribution typically involves transferring a copy, whether
by physical media, electronic download, or (under AGPL) making the software available over a
network.

**Sublicense.** To grant rights to a third party that are a subset of (or equal to) the rights you
hold. Permissive licenses like MIT and Apache 2.0 allow sublicensing — you can take MIT-licensed
code, modify it, and distribute the result under a different license (including a proprietary
license), as long as you comply with the attribution requirements. Copyleft licenses like GPL do not
allow sublicensing in this sense — downstream recipients receive their license directly from the
copyright holder, not from you. The distinction matters for license compatibility analysis.

**Patent grant.** A provision in a license that explicitly grants users a license to any patents
held by the contributors that cover the software. MIT has no patent grant — it is silent on patents
entirely, which means users have no explicit patent protection from contributors. Apache 2.0 has an
explicit patent grant (Section 3) with retaliation provisions (Section 3.3). GPLv3 includes an
implicit patent grant through its license conditions: the license grants permission to "do
everything" with the code, which would be meaningless if contributors could sue for patent
infringement of the code they contributed.

**Copyleft.** The principle that a license requires derivative works to be distributed under the
same license terms. The term was coined by Richard Stallman in the 1980s. Copyleft licenses use
copyright law to enforce the opposite of the usual copyright paradigm: instead of "all rights
reserved," it is "some rights reserved, and you must pass those same rights along to downstream
recipients." The mechanism relies on the fact that without a license, copying and distributing the
work is copyright infringement — the copyleft license grants permission conditional on the copyleft
requirement being met.

**Viral license.** A pejorative term for copyleft licenses, referring to the way copyleft
obligations propagate from the licensed work to derivative works. While commonly used in industry
discourse, the term is misleading. Copyleft is not a virus; it is a conditional grant of rights. If
you do not want the conditions (i.e., you do not want to release your derivative work under the same
license), you can simply decline the license — but then you have no right to copy, modify, or
distribute the software at all.

**Contributor License Agreement (CLA).** A legal agreement in which a contributor grants the project
(or its sponsoring organization) additional rights beyond what the project's open-source license
already provides. CLAs range from simple grants of permission to use the contribution (which is
already implied by submitting it under the project's license) to full copyright assignment
(transferring ownership of the contribution to the project). CLAs are controversial because they
create an asymmetry of rights between the project maintainers and individual contributors, and
because they enable the project to relicense the contribution under different terms (including
proprietary terms).

**Developer Certificate of Origin (DCO).** A lighter-weight alternative to CLAs. The contributor
certifies (typically by adding a `Signed-off-by:` line to the commit message) that they have the
legal right to submit the contribution and that the contribution complies with the project's
license. The Linux kernel uses DCO (enforced by the `checkpatch` tool) instead of CLAs. Unlike CLAs,
DCOs do not transfer any additional rights — they simply verify that the contributor has the rights
they are purporting to grant under the project's license.

## What This Section Covers

This licensing section is divided into two parts:

- **This page** — conceptual foundations: what licensing is, why it matters, the spectrum of license
  types, the philosophical and practical differences between copyleft and permissive approaches, and
  the terminology you need to understand license texts.
- **[Software Licensing](software-licensing.md)** — a detailed reference covering specific licenses
  (AGPLv3, GPLv3, LGPLv3, GPLv2, MPL 2.0, MIT, Apache 2.0, BSD 2/3-Clause, ISC, 0BSD, CC0,
  Unlicense, WTFPL, BSL, SSPL), compliance obligations for distribution, linking, containers, and
  SaaS, practical guidance for dependency auditing, a comparison table across all major dimensions,
  and common pitfalls.
