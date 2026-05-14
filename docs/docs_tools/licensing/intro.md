---
id: intro
title: Introduction to Licensing
description:
  'Rigorous software tools notes covering Introduction to Licensing. Includes definitions,
  derivations, worked examples, and exam-style problems.'
slug: intro
sidebar_position: 1
---

## What Software Licensing Is

Every piece of software you write, compile, or deploy is subject to copyright law by default. Under
The Berne Convention (implemented in the US via the Copyright Act of 1976), copyright attaches
Automatically the moment an original work is fixed in a tangible medium of expression — no
Registration required, no notice required. This means that without an explicit license, nobody else
Has any legal right to copy, modify, distribute, or use your software. The default state of all
Software is "all rights reserved."

A software license is the legal instrument that grants specific permissions to others. It does not
Transfer ownership of the copyright; it grants a limited set of rights (a license) under specific
Conditions. Understanding this distinction is critical: the copyright holder retains ownership and
Can revoke the license (for non-perpetual grants) or enforce compliance with the license terms
Through copyright infringement claims.

Intellectual property (IP) law is the foundation. Software is protectable under copyright (the
Specific expression of code), potentially under patent law (novel algorithms or processes, though
This is jurisdiction-dependent and controversial), and under trade secret law (if the code is kept
Confidential). Licenses operate primarily within the copyright framework but increasingly include
Patent provisions to address the intersection of copyright and patent rights in software.

## The Licensing Spectrum

Software licensing exists on a spectrum defined by how much freedom the license grants to downstream
Users and what obligations it imposes in return:

**Proprietary** — All rights reserved. The copyright holder grants limited, specific permissions (
via an End User License Agreement, or EULA). No right to modify, redistribute, or in many Cases even
reverse-engineer. The license can be revoked and is often restricted to a specific number Of users,
machines, or use cases.

**Source-available** — Source code is published and readable, but modification and redistribution
Rights are restricted. The code is visible but not "open source" in the OSI (Open Source Initiative)
Sense. Examples: BSL (Business Source License), SSPL (Server Side Public License), Redis RSALv2.

**Permissive open source** — Redistribution and modification are allowed with minimal obligations (
attribution and license notice inclusion). Downstream works can be proprietary. Examples: MIT,
Apache 2.0, BSD, ISC.

**Weak copyleft** — Modified files must remain under the same license, but the copyleft obligation
Does not propagate to unrelated files that merely link to the licensed work. The boundary of the
"work" matters: only the covered files are subject to copyleft. Examples: LGPLv3 (linking boundary),
MPL 2.0 (file boundary).

**Strong copyleft** — Any derivative work must be distributed under the same copyleft license. The
Obligation propagates to the entire combined work, not just the modified files. Examples: GPLv2,
GPLv3.

**Network copyleft (AGPL)** — Extends strong copyleft obligations to network interactions. If users
Interact with the software over a network, you must provide the source to those users. This closes
The "ASP loophole" (Application Service Provider loophole) that existed in GPLv2 and GPLv3, where
Hosting software as a service did not trigger distribution requirements because no copy was being
Conveyed.

**Public domain** — The copyright holder waives all rights entirely. No restrictions, no
Obligations, no attribution required. The legal mechanism for achieving this varies by jurisdiction
— not all legal systems recognize copyright waiver, which is why "public domain dedication" licenses
Include fallback provisions.

## Copyleft vs Permissive: Philosophy and Practice

The philosophical divide between copyleft and permissive licensing mirrors a deeper disagreement
About the purpose of software freedom:

**Permissive licensing** (associated with the Open Source Initiative and the "open source" movement)
Treats software freedom as a practical benefit. The goal is maximal adoption and reuse. If a company
Takes MIT-licensed code, modifies it, and ships it in a closed-source commercial product, that is
Considered a success — the code is being used, the user community benefits from the original
Release, and the author's goal of broad adoption is served.

**Copyleft licensing** (associated with the Free Software Foundation and the "free software"
Movement) treats software freedom as a moral imperative. The goal is to ensure that software freedom
Is preserved in all downstream uses. If a company takes GPL-licensed code and ships it in a
Closed-source product without providing source, that is a violation of the license and a violation
Of the user's freedom.

In practice, this translates to different risk profiles for downstream consumers:

- Permissive licenses minimize downstream obligations, making them safer for corporate adoption but
  offering no protection against enclosure (someone taking your open-source work proprietary).
- Copyleft licenses ensure that modifications remain free but create compliance obligations that
  some organizations find operationally burdensome, especially at scale.

## Why Systems Engineers Need to Understand Licensing

Licensing is not a problem you can delegate entirely to legal. As a systems engineer, you make
Decisions that have licensing implications every day:

**Dependency audits.** Every package you pull from npm, PyPI, Maven Central, Go modules, or any
Other package registry carries a license. If you ship a product that includes a GPLv3-licensed
Dependency, your entire product may need to be distributed under GPLv3 — and if you cannot do that
(because your product includes proprietary components), you cannot ship the product at all. You need
To know what is in your dependency tree and what obligations those licenses impose. This is not a
Theoretical concern: companies have been forced to rewrite products to remove GPL dependencies after
Failing to audit their license obligations.

**Compliance.** Organizations that distribute software (or provide it as a service, in the AGPL
Case) must comply with license terms. This means including license notices in distributions,
Providing source code when required, not mixing incompatible licenses, and maintaining records of
What license applies to what code. Non-compliance is copyright infringement, which carries statutory
Damages of up to $150,000 per work infringed in the US.

**Contributor agreements.** If you contribute to an open-source project, you may be asked to sign a
Contributor License Agreement (CLA) or agree to a Developer Certificate of Origin (DCO). You need to
Understand what rights you are granting, whether your employer retains rights to your contribution
(check your employment contract — many employment agreements assign all intellectual property
Created during employment to the employer), and whether the project's license allows your employer
To use your contribution.

**Corporate policy.** Many organizations maintain approved license lists that categorize licenses
Into tiers (e.g., "green" for permissive, "yellow" for LGPL, "red" for GPL/AGPL). GPLv3 and AGPLv3
Are frequently banned or restricted in enterprise environments because of the risk they pose to
Proprietary products and SaaS deployments. Understanding why these restrictions exist helps you make
Better dependency choices and avoid introducing compliance risk.

**Containerization and distribution.** Shipping a Docker image that bundles multiple dependencies
Raises the question: does distributing a container count as distributing the software inside it? The
Answer is almost certainly yes — a container image is a distributable artifact that contains copies
Of the software. This triggers copyleft obligations for any GPL-licensed components in the image,
And it means license notices must be included.

## License Compatibility

License compatibility is the question of whether software under license A can be combined with
Software under license B to form a single work. Incompatibility arises when the obligations of one
License cannot be satisfied simultaneously with the obligations of the other.

The classic example: GPLv2 code cannot be combined with GPLv3 code into a single work, because GPLv3
Adds additional restrictions (patent retaliation, anti-Tivoization) that GPLv2 does not impose, and
GPLv2 Section 4 explicitly prohibits adding additional restrictions. Similarly, Apache 2.0 includes
A patent retaliation clause that adds restrictions that GPLv2 does not allow.

Compatibility is directional . GPLv3 is compatible with Apache 2.0 (you can combine Apache 2.0 code
into a GPLv3 project because GPLv3 permits the Apache 2.0 patent retaliation terms). But GPLv2 is
not compatible with Apache 2.0 (you cannot combine Apache 2.0 code into a GPLv2 project Because the
Apache 2.0 patent retaliation terms are "additional restrictions" that GPLv2 prohibits).

When licenses are incompatible, you cannot legally distribute the combined work. This is a hard
Constraint, not a soft guideline. Mixing incompatible licenses is one of the most dangerous things
You can do in a software project because it means either you must remove one of the incompatible
Components or you are committing copyright infringement.

## Key Terminology

**Derivative work.** A work based upon one or more preexisting works, such as a modification,
Enhancement, adaptation, or translation. In US copyright law (17 U.S.C. § 101), this is a term of
Art with specific legal meaning. For software, modifying source code unambiguously creates a
Derivative work. The critical ambiguity — and the source of enormous legal debate — is whether
Linking (static or dynamic) to a library creates a derivative work of that library. Copyleft
Licenses differ significantly in how they handle this ambiguity: GPL takes the strict view that
Linking creates a derivative work, LGPL explicitly creates an exception for dynamic linking, and MPL
Limits copyleft to the file level.

**Distribution (or conveyance).** The act of making copies of a work available to others. Under US
Copyright law, distribution is one of the exclusive rights of the copyright holder (17 U.S.C. §
106(3)). Under GPLv3, this concept is called "conveying" (Section 4), which is defined more
Precisely than GPLv2's "distribution" to cover any form of propagation that would make you directly
Or secondarily liable for infringement. Distribution involves transferring a copy, whether By
physical media, electronic download, or (under AGPL) making the software available over a Network.

**Sublicense.** To grant rights to a third party that are a subset of (or equal to) the rights you
Hold. Permissive licenses like MIT and Apache 2.0 allow sublicensing — you can take MIT-licensed
Code, modify it, and distribute the result under a different license (including a proprietary
License), as long as you comply with the attribution requirements. Copyleft licenses like GPL do not
Allow sublicensing in this sense — downstream recipients receive their license directly from the
Copyright holder, not from you. The distinction matters for license compatibility analysis.

**Patent grant.** A provision in a license that explicitly grants users a license to any patents
Held by the contributors that cover the software. MIT has no patent grant — it is silent on patents
Entirely, which means users have no explicit patent protection from contributors. Apache 2.0 has an
Explicit patent grant (Section 3) with retaliation provisions (Section 3.3). GPLv3 includes an
Implicit patent grant through its license conditions: the license grants permission to "do
Everything" with the code, which would be meaningless if contributors could sue for patent
Infringement of the code they contributed.

**Copyleft.** The principle that a license requires derivative works to be distributed under the
Same license terms. The term was coined by Richard Stallman in the 1980s. Copyleft licenses use
Copyright law to enforce the opposite of the usual copyright paradigm: instead of "all rights
Reserved," it is "some rights reserved, and you must pass those same rights along to downstream
Recipients." The mechanism relies on the fact that without a license, copying and distributing the
Work is copyright infringement — the copyleft license grants permission conditional on the copyleft
Requirement being met.

**Viral license.** A pejorative term for copyleft licenses, referring to the way copyleft
Obligations propagate from the licensed work to derivative works. While commonly used in industry
Discourse, the term is misleading. Copyleft is not a virus; it is a conditional grant of rights. If
You do not want the conditions (i.e., you do not want to release your derivative work under the same
License), you can decline the license — but then you have no right to copy, modify, or Distribute
the software at all.

**Contributor License Agreement (CLA).** A legal agreement in which a contributor grants the project
(or its sponsoring organization) additional rights beyond what the project's open-source license
Already provides. CLAs range from simple grants of permission to use the contribution (which is
Already implied by submitting it under the project's license) to full copyright assignment
(transferring ownership of the contribution to the project). CLAs are controversial because they
Create an asymmetry of rights between the project maintainers and individual contributors, and
Because they enable the project to relicense the contribution under different terms (including
Proprietary terms).

**Developer Certificate of Origin (DCO).** A lighter-weight alternative to CLAs. The contributor
Certifies ( by adding a `Signed-off-by:` line to the commit message) that they have the Legal right
to submit the contribution and that the contribution complies with the project's License. The Linux
kernel uses DCO (enforced by the `checkpatch` tool) instead of CLAs. Unlike CLAs, DCOs do not
transfer any additional rights — they verify that the contributor has the rights They are purporting
to grant under the project's license.

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
