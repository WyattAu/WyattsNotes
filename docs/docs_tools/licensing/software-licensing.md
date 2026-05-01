---
title: Software Licensing
description:
  Software licensing: copyleft and permissive licences, GPL family, Apache, MIT,
  licence compatibility, and guidance on choosing open-source licences.
date: 2025-07-07T23:37:45.807Z
tags:
  - CS
categories:
  - CS
slug: software-licensing
---

## Copyleft Licenses

### AGPLv3 (Affero General Public License v3)

AGPLv3 is the GNU Affero General Public License version 3, published by the Free Software Foundation
in 2007. It is identical to GPLv3 with one critical addition: **Section 13, the "Network
Interaction" clause.**

Section 13 states that if you modify the program and offer users the ability to interact with it
remotely over a computer network, you must provide those users with the complete corresponding
source code of your version. This closes what is known as the **"ASP loophole"** (Application
Service Provider loophole) present in GPLv2 and GPLv3, where hosting software as a service did not
trigger the distribution requirement because no copy was being "distributed" or "conveyed" in the
traditional copyright law sense.

**What triggers AGPLv3 obligations:**

- Modifying AGPLv3-licensed code and making it available over a network (e.g., deploying it as a
  SaaS product)
- Distributing modified copies to third parties
- Distributing a combined work that incorporates AGPLv3 code

**Compliance obligations:**

- Provide complete source code (including all of your modifications) to network users, typically via
  a conspicuous notice and link embedded in the user interface
- Include all license notices, copyright notices, and attribution
- Ensure downstream recipients receive the same AGPLv3 license rights
- Comply with all GPLv3 requirements: anti-Tivoization provisions (Section 6), patent provisions
  (Section 11), and source distribution requirements (Section 4)

**Why it is the strongest copyleft in common use:**

AGPLv3 combines the strong copyleft of GPLv3 with the network interaction trigger of Section 13. No
other widely-used license requires source code distribution for network-accessible services. This
means AGPLv3 reaches situations where GPLv3 and GPLv2 do not: any SaaS deployment, any internal
microservice architecture where services communicate over HTTP, any web application.

**Real-world consequences:**

- **MongoDB** was originally licensed under AGPLv3. This was deliberately chosen to prevent cloud
  providers from offering MongoDB-as-a-Service without contributing back. When AWS launched
  DocumentDB (a MongoDB-compatible service) without contributing to MongoDB, MongoDB created the
  SSPL and eventually moved to a proprietary license entirely.
- **Mastodon** uses AGPLv3 to ensure that anyone hosting a Mastodon instance and making
  modifications must share those modifications. This preserves the federated, community-driven
  nature of the Fediverse.
- Many enterprise organizations maintain explicit policies prohibiting AGPLv3 dependencies because
  the network interaction trigger is broad enough that even internal network services could
  potentially trigger compliance obligations.

**Key nuance:** Section 13 applies to the _modified version_ of the program. If you deploy
unmodified AGPLv3 software as-is, you still must provide the source code to users under Section 13
(because the deployed software is still a version "based on" the Program). But the source you
provide is the upstream source, not a modified version, because there are no modifications.

### GPLv3 (GNU General Public License v3)

GPLv3 was published in June 2007 to address specific legal and technological developments since
GPLv2 (1991). It is the Free Software Foundation's flagship copyleft license and was drafted with
input from a large committee including representatives from corporate open-source contributors (IBM,
Red Hat, Novell, Google, and others).

**Distribution trigger:** GPLv3 obligations are triggered by **"conveying"** (the GPLv3 term,
defined in Section 4) — making copies available to others so that they can possess the software.
Internal use does not trigger the license. Hosting as a SaaS does **NOT** trigger GPLv3 obligations
— this is the ASP loophole that AGPLv3 was specifically designed to close.

**Key differences from GPLv2:**

- **Patent retaliation (Section 11):** If a user initiates patent litigation against any party
  alleging that the GPL-covered software constitutes patent infringement, that user's patent license
  for the software is terminated. This acts as both an implicit patent grant (the license grants
  permission to use the software, which would be meaningless if contributors could sue for patent
  infringement of their own contributions) and a deterrent against patent aggression.
- **Anti-Tivoization (Section 6):** If you distribute a consumer product containing GPLv3 software,
  and the product includes installation information that allows the user to reinstall modified
  software on the device, you must provide that installation information. If the product does not
  include such information, you must offer it in writing. This prevents hardware manufacturers from
  using GPLv3 code while cryptographically locking the device to prevent user modifications — the
  practice that gave "Tivoization" its name (TiVo used Linux but locked down the bootloader to
  prevent users from running modified firmware).
- **Compatibility with Apache 2.0:** GPLv3 was specifically designed to be compatible with Apache
  2.0, resolving a major incompatibility with GPLv2. The GPLv3 text explicitly permits the
  additional conditions imposed by Apache 2.0 (including its patent retaliation clause), which GPLv2
  does not permit.
- **Internationalization:** GPLv3 was drafted with international copyright frameworks in mind (Berne
  Convention, WIPO Copyright Treaty), while GPLv2's language was primarily oriented toward US
  copyright law.

**Compatibility with GPLv2:** GPLv3 is **NOT** compatible with "GPLv2 only" code. GPLv2 code that
carries the "or any later version" clause (e.g., "Licensed under the GNU General Public License,
version 2, or at your option any later version") can be relicensed under GPLv3. But code licensed
strictly under "GPLv2 only" cannot be combined with GPLv3 code into a single work, because GPLv3
adds restrictions (patent retaliation, anti-Tivoization) that GPLv2 Section 4 does not permit — you
may not add additional restrictions to GPLv2.

### LGPLv3 (GNU Lesser General Public License v3)

LGPLv3 is the "weak copyleft" license. It allows proprietary software to link to LGPL-licensed
libraries without being subject to copyleft obligations for the proprietary parts, while ensuring
that modifications to the LGPL-licensed code itself remain free.

**The linking boundary — the critical distinction:**

LGPLv3's copyleft obligation applies to modifications of the LGPL-licensed work and, in the case of
static linking, to the combined work as a whole. The specific rules:

- **Dynamic linking:** If a proprietary application dynamically links to an LGPL library at runtime,
  the proprietary application is generally NOT considered a derivative work of the LGPL library. The
  proprietary application can remain under its own license. However, you must still distribute the
  source code of the LGPL library (including any modifications you made to it), and you must provide
  the object files or a mechanism for the user to relink the proprietary application against a
  modified version of the LGPL library (Section 4(d)). This ensures users can replace the LGPL
  library with their own version.
- **Static linking:** If a proprietary application statically links to an LGPL library, the
  combination is generally considered a single work under copyright law, and the entire combined
  work (including the proprietary application code) must be distributed under LGPLv3. You can avoid
  this by providing object files for the proprietary parts and a mechanism for the user to relink
  (Section 4(d) allows this as a compliance mechanism).
- **Modifying the library:** Any modifications to the LGPL-licensed library source code must be
  distributed under LGPLv3, regardless of whether the application that uses the library is
  statically or dynamically linked.

**When proprietary apps CAN use LGPL libraries:** Dynamic linking is the safe path. If your
application loads the LGPL library at runtime (via `dlopen`, shared library loading, or equivalent),
your application can remain proprietary. You must still provide the LGPL library source and allow
relinking, but your own code is not subject to copyleft.

**FSF recommendation:** The FSF now recommends using GPLv3 with an explicit linking exception (e.g.,
the GCC Runtime Library Exception) over LGPLv3 for new libraries. A linking exception is more
precise than the generalized LGPL framework because it can define exactly which linking activities
are exempt from copyleft, rather than relying on the ambiguous legal concept of what constitutes
"linking" versus "derivative work."

### GPLv2 (GNU General Public License v2)

GPLv2 was published in June 1991 and remains one of the most significant licenses in open source,
primarily because the Linux kernel is licensed under it.

**Historical context:** GPLv2 replaced GPLv1 (1989). The key improvement in GPLv2 was the **"Liberty
or Death" clause (Section 7):** if conditions are imposed on you that require you to violate the
GPLv2 (e.g., a court order or legal requirement) in order to distribute the software, you may not
distribute the software at all. If you cannot distribute the software while simultaneously
satisfying both the GPLv2 and the other conditions, you must cease distribution. This was a response
to concerns that laws in some jurisdictions might restrict the freedom to redistribute.

**The "or later" clause:** Many GPLv2 projects include the language: "GNU General Public License as
published by the Free Software Foundation; either version 2 of the License, or (at your option) any
later version." This allows downstream recipients to choose to receive the code under GPLv3 (or any
later GPL version). The Linux kernel notably does **NOT** include this clause — Linus Torvalds
explicitly chose "GPLv2 only" for the kernel, which means the kernel remains under GPLv2 and cannot
incorporate code that is available only under GPLv3.

**Why GPLv2 is incompatible with GPLv3:** GPLv2 Section 4 states: "You may not copy, modify,
sublicense, or distribute the Program except as expressly provided under this License. Any attempt
otherwise to copy, modify, sublicense or distribute the Program is void, and will automatically
terminate your rights under this License." GPLv3 adds restrictions that are not present in GPLv2
(patent retaliation, anti-Tivoization, additional source distribution requirements). Since GPLv2
prohibits adding restrictions, and GPLv3 adds restrictions, GPLv2-only code cannot be combined with
GPLv3 code into a single work.

**No explicit patent grant:** GPLv2 is entirely silent on patents. There is no explicit patent grant
from contributors to users, and there is no patent retaliation clause. This is one of the primary
reasons the FSF created GPLv3 — to address the threat of patent litigation against open-source
projects, which became a significant concern after various patent disputes in the early 2000s (e.g.,
Microsoft's claims about Linux patent infringement in 2007).

### MPL 2.0 (Mozilla Public License 2.0)

MPL 2.0 is a file-level copyleft license. Its copyleft obligation applies only to the files that are
covered by MPL 2.0, not to the entire combined work or project.

**File-level copyleft in practice:**

- If you modify an MPL-licensed file, the modified file must be distributed under MPL 2.0 (Section
  3.3)
- If you add new files that are not derivative works of existing MPL-licensed files, those new files
  can be under any license whatsoever — including a proprietary license
- The copyleft does not propagate to unrelated code in the same project, repository, or binary

**Why Firefox uses MPL 2.0:** Firefox is a large project with contributions from many organizations,
including corporations that ship proprietary code alongside Mozilla's code. MPL 2.0 allows Mozilla
to keep its own code under copyleft while allowing third-party code in the same codebase to be under
different licenses. This is why Firefox's codebase can contain both MPL-licensed Mozilla code and
proprietary third-party code (e.g., Google-sourced code for the default search partnership, DRM
components for Widevine).

**Patent grant (Section 2.1(b)):** MPL 2.0 includes an explicit patent grant: "Each Contributor
hereby grants You a world-wide, royalty-free, non-exclusive license ... under Patent Claims of such
Contributor that are necessarily infringed by the Covered Software alone or by combination of the
Covered Software with Your Modifications." This is functionally similar to Apache 2.0's patent
grant, with one notable difference: the MPL patent grant terminates only for the specific patents
involved in litigation, whereas Apache 2.0 terminates the entire patent grant if the licensee
initiates litigation.

**GPL compatibility (Section 3.3):** MPL 2.0 includes a mechanism for declaring compatibility with
GPL. A downstream recipient may distribute Covered Software under the terms of the version of the
GNU General Public License specified in the MPL header block (the "Secondary License"). The default
MPL 2.0 boilerplate includes an optional "GPL Compatibility List" field. If the original contributor
enables this option (by specifying GPLv2 or later as the Secondary License), then the MPL-licensed
code can be incorporated into a GPL project. This is how Mozilla-licensed code can be used in GPL
projects.

## Permissive Licenses

### MIT / Expat License

The MIT License (also called the Expat License, after the Expat XML parser that popularized this
specific text) is the most widely used open-source license in the world. It is the default license
applied to new repositories on GitHub.

**Requirements:**

- Include the copyright notice in all copies or substantial portions of the software
- Include the license text (the permission grant and warranty disclaimer) in all copies or
  substantial portions of the software
- The license text must be included in any binary distribution (typically as a `LICENSE` file
  shipped alongside the binary)

**What you CAN do:**

- Use, copy, modify, merge, publish, distribute, sublicense, and sell copies of the software
- Use it in proprietary, closed-source products without any obligation to release your modifications
- Distribute it under a different license entirely (the "sublicense" right — you can take MIT code
  and redistribute it under Apache 2.0, GPL, or even a proprietary license)
- Use it in commercial products without payment or royalties of any kind

**What you CANNOT do:**

- Hold the copyright holders liable for any damages arising from the use of the software
- Remove or alter the copyright notice
- Represent that the copyright holders endorse your product (the license grants rights to the
  software, not to the authors' identities or reputation)

**Why it is the most popular:** The MIT License is extremely short (under 200 words of substantive
text), easy to understand, and imposes minimal obligations. Its simplicity is both a strength (low
cognitive overhead, minimal compliance burden) and a weakness (no patent grant, no trademark
provisions, ambiguous attribution requirements for partial use).

**Key nuance — "substantial portions":** The requirement to include the license applies to "all
copies or substantial portions of the Software." If you use a single MIT-licensed function in a
large project, you likely do not need to include the MIT license text for the entire project — but
you must still include the copyright notice for that specific code. If you copy a significant
portion (a module, a library, a substantial codebase), you must include the full license text. This
ambiguity is one reason some organizations prefer Apache 2.0, which has more explicit attribution
requirements tied to `NOTICE` files.

### Apache 2.0

The Apache License 2.0 is the preferred license for large organizations and enterprise open-source
projects. It is more comprehensive than MIT but remains permissive.

**Key provisions:**

- **Patent grant (Section 3):** Each contributor grants "a world-wide, royalty-free, non-exclusive
  ... irrevocable (except as stated in this section) patent license" covering their contributions.
  This explicitly protects users from patent infringement claims by the contributors themselves — a
  protection that MIT entirely lacks.
- **Patent retaliation (Section 3.3):** If you initiate patent litigation against the software
  (asserting that the software infringes one of your patents), your patent license under Section 3
  is automatically terminated. This is a defense mechanism that discourages contributors or users
  from filing patent suits against the project.
- **Trademark protection (Section 7):** The license does not grant any trademark rights whatsoever.
  You cannot use the names, trade names, trademarks, or service marks of any contributor to endorse
  or promote your product without separate written permission. MIT is silent on trademarks; Apache
  2.0 explicitly addresses them.
- **Attribution (Section 4):** If the work includes a `NOTICE` file, you must include a copy of the
  `NOTICE` file in your distribution and provide attribution as specified in the `NOTICE` file. This
  creates a clear, machine-readable mechanism for tracking attribution obligations across a large
  dependency tree.
- **State changes (Section 4(b)):** If you modify files, you must include a prominent notice stating
  that you changed the files. This creates an audit trail that makes it clear which code is original
  and which is modified.
- **Source distribution (Section 4(a)):** You must include a copy of the license in every
  distributed source file. This is typically implemented as a file header comment containing the
  Apache 2.0 boilerplate.

**Why large companies prefer Apache 2.0 over MIT:**

- Explicit patent grant reduces legal risk from contributors asserting patents against users
- Trademark protection prevents brand dilution and endorsement misrepresentation
- `NOTICE` file mechanism provides a clear, auditable system for tracking attribution across large
  dependency trees
- State changes requirement creates a compliance trail
- Explicit source-file notice requirement eliminates the ambiguity around "substantial portions" in
  MIT

**Compatibility note:** Apache 2.0 is compatible with GPLv3 but NOT with GPLv2. The patent
retaliation clause in Apache 2.0 Section 3.3 constitutes an "additional restriction" under GPLv2's
terms (GPLv2 Section 4 prohibits additional restrictions), which GPLv2 does not allow. GPLv3 was
specifically designed to accommodate Apache 2.0's patent retaliation terms.

### BSD 2-Clause and BSD 3-Clause

The BSD licenses are among the oldest open-source licenses in widespread use, originating at the
University of California, Berkeley Computer Systems Research Group (CSRG).

**BSD 2-Clause ("Simplified BSD"):**

- Redistribution and use in source and binary forms, with or without modification, are permitted
  provided that the copyright notice and this license text are included
- The names of the copyright holders may not be used to endorse or promote products derived from the
  software without prior written permission

**BSD 3-Clause ("New BSD" or "Modified BSD"):**

- All BSD 2-Clause requirements, plus:
- **Non-endorsement clause:** Redistributions in binary form must reproduce the copyright notice,
  the license conditions, and a disclaimer in the documentation and/or other materials provided with
  the distribution. In practice, this means if you ship a binary that includes BSD 3-Clause code,
  you must list the copyright holders and license terms in your product documentation or a `NOTICE`
  file.

**Historical context — the original 4-Clause BSD license:**

The original BSD license had four clauses. The third clause (the "advertising clause") required that
all advertising materials for products containing the software acknowledge that the software was
developed by UC Berkeley. This became impractical as the number of BSD-licensed components grew — a
single product might need to list dozens of institutions in its advertisements. The clause was
officially removed in 1999 by William Hoskins, Director of the Office of Technology Licensing at UC
Berkeley, after Richard Stallman of the FSF urged its removal on the grounds that it created an
impractical attribution burden.

**BSD 3-Clause vs MIT:** Functionally, BSD 3-Clause and MIT are very similar. Both grant broad
permission to use, modify, and redistribute, with attribution requirements. The primary difference
is that BSD 3-Clause explicitly prohibits using the copyright holders' names for endorsement, while
MIT handles this implicitly by not granting trademark rights. Many legal opinions consider them
effectively equivalent in practice.

**UC Berkeley / CSRG history:** The BSD licenses originated from the CSRG at UC Berkeley, which
developed BSD Unix. The settlement of the 1992 USL v. BSDi lawsuit (Unix System Laboratories, a
subsidiary of AT&T, vs. Berkeley Software Design, Inc.) was a pivotal moment in open-source history:
the settlement established that BSD-derived code could be freely distributed without AT&T license
fees, paving the way for the free BSD derivatives (FreeBSD, OpenBSD, NetBSD) and ultimately
influencing the licensing landscape for all open-source software.

### ISC License

The ISC License was created by the Internet Systems Consortium (ISC) for its software projects,
including BIND (the DNS server software), DHCP, and Kea. It is functionally equivalent to the MIT
License.

**Why it exists:** The MIT License's original wording includes a clause stating that the license is
governed by the laws of the Commonwealth of Massachusetts (where MIT is located). The ISC License
was created to provide a simpler, jurisdiction-neutral alternative. In practice, this distinction is
largely irrelevant — both licenses are interpreted the same way in all jurisdictions, and modern MIT
license texts often omit the jurisdiction clause.

**Text:** The ISC License is extremely short (under 80 words of substantive text beyond the
copyright notice) and is considered the simplest permissive license in common use that includes a
warranty disclaimer.

**Adoption:** OpenBSD uses the ISC License extensively for its base system code. Many Go standard
library packages are licensed under ISC. It is approved by both the Open Source Initiative and the
Free Software Foundation as a GPL-compatible permissive license.

### 0BSD License

0BSD is a minimal permissive license that is essentially a public domain dedication with a one-line
fallback license. It was created by Rob Landley as a response to the legal ambiguity of public
domain dedications in jurisdictions that do not recognize them.

**Text:** The entire substantive content is: "Permission to use, copy, modify, and/or distribute
this software for any purpose with or without fee is hereby granted. THERE IS NO WARRANTY."

**Key characteristics:**

- No copyright notice requirement (hence "0BSD" — zero substantive clauses beyond the bare
  permission grant)
- No requirement to include the license text in distributions
- No warranty disclaimer beyond the single "THERE IS NO WARRANTY" statement
- Functionally equivalent to placing the work in the public domain, with a fallback license for
  jurisdictions that do not recognize public domain dedication

**Adoption:** Some Go projects and utilities use 0BSD, particularly for trivial contributions. It is
OSI-approved. Its minimalism makes it suitable for very small code snippets where any non-trivial
license obligations would be disproportionate to the contribution.

## Public Domain

### CC0 (Creative Commons Zero)

CC0 is the Creative Commons public domain dedication tool. It is not technically a license — it is a
legal instrument that attempts to waive all copyright and related rights to the fullest extent
permitted by law.

**Legal standing varies by jurisdiction:**

- In jurisdictions that recognize public domain dedication (most common law countries, including the
  US), CC0 effectively places the work in the public domain — the author retains no copyright
- In jurisdictions that do not allow copyright waiver (some civil law countries in continental
  Europe, where authors' rights are considered inalienable), CC0 falls back to a broad, permissive
  license that grants all rights without requiring attribution or imposing any conditions
- CC0 explicitly disclaims all copyright and neighboring rights worldwide to the extent possible

**Limitations:**

- CC0 does NOT include a patent grant — it waives copyright only, not patent rights
- CC0 does NOT include a trademark license — you cannot use the author's trademarks
- CC0 is NOT OSI-approved — the OSI requires that open-source licenses include copyright notice and
  license text redistribution requirements, which CC0 explicitly does not impose
- CC0 is not formally GPL-compatible — the FSF considers public domain works to have "no license,"
  which can create theoretical problems in GPL compliance (in practice, public domain code can be
  included in GPL projects because there are no copyright restrictions to conflict with)

**Use case:** CC0 is most commonly used for data sets, documentation, images, and other creative
works where the author genuinely wants no restrictions whatsoever. It is less common for software,
where the lack of a patent grant and the lack of a license text (which can complicate compliance
tooling) are significant drawbacks.

### Unlicense

The Unlicense is a public domain dedication with a fallback license, created by Arto Bendiken.

**Mechanism:**

1. The author dedicates the work to the public domain using explicit, unambiguous legal language
2. If the public domain dedication is not legally effective in a given jurisdiction, a fallback
   all-permissive license grants the same rights (use, copy, modify, merge, publish, distribute,
   sublicense, and sell)

**Ambiguity in some jurisdictions:**

- Like CC0, the Unlicense faces the challenge that some jurisdictions do not recognize public domain
  dedication as a valid legal act
- The fallback license is less comprehensive than Apache 2.0 or MIT — it lacks explicit patent
  provisions and trademark provisions
- The Unlicense is NOT OSI-approved

**Practical note:** The Unlicense is more commonly used for small utilities and scripts than for
substantial software projects. Its lack of an explicit patent grant makes it riskier than Apache 2.0
for use in jurisdictions with active software patent litigation (notably the US).

### WTFPL (Do What The F\*ck You Want To Public License)

WTFPL is a public domain dedication written in deliberately informal language. It was created by Sam
Hocevar and is essentially a novelty license.

**Legal status:**

- Despite its informal language, WTFPL has been reviewed by legal scholars and is generally
  considered to grant the same practical rights as MIT or BSD
- However, its informal phrasing ("DO WHAT THE FUCK YOU WANT TO") may not be recognized as a valid
  legal instrument in all jurisdictions, particularly in courts that expect formal legal language in
  license documents
- It includes NO patent grant, NO trademark provisions, and NO warranty disclaimer beyond a brief
  statement

**Do not use for serious projects.** While technically functional, WTFPL's informal language creates
unnecessary legal ambiguity with no corresponding benefit. If you want a minimal permissive license,
use MIT, ISC, or 0BSD. If you want a public domain dedication, use CC0 or Unlicense. WTFPL is a
novelty, not a serious licensing choice for production software.

## Proprietary and Source-Available Licenses

### BSL (Business Source License)

The Business Source License was created by MariaDB Corporation (now MariaDB plc) in 2018. It is
**NOT open source** and is **NOT OSI-approved**.

**Mechanism:** BSL is a time-limited proprietary license with an automatic conversion to open
source. The software is distributed under a license that grants broad usage rights (use, modify,
distribute) but imposes restrictions on competitive use — typically, you may not use the software to
offer a competing product or service to the licensor's commercial offering. After a specified date
(the "Change Date"), the license automatically converts to an approved open-source license
(typically GPLv2 or Apache 2.0).

**Structure:**

- Grants use, modification, and distribution rights, subject to specific restrictions
- Restrictions typically prohibit using the software as a competitor to the licensor's commercial
  product or service
- After the Change Date (e.g., 3-5 years from publication), the software converts to the specified
  open-source license
- The licensor controls the Change Date, the fallback open-source license, and the specific use
  restrictions

**Why companies use it:**

- **Sentry** uses BSL for its core product, with a Change Date that converts to Apache 2.0
- **CockroachDB** adopted BSL (with an "Enterprise" use restriction to limit competitive cloud
  deployment), later moved to a custom BSL variant
- **HashiCorp** adopted BSL for Terraform, Consul, Vault, and other products in 2023, precipitating
  the creation of OpenTofu (a fork of the last MPL 2.0-licensed Terraform)

**Criticism:** BSL violates the Open Source Definition on multiple grounds. OSD 5 (No Discrimination
Against Persons or Groups) and OSD 6 (No Discrimination Against Fields of Endeavor) prohibit
licenses that restrict use based on the user's identity or field of use. BSL explicitly restricts
competitive use, which is discrimination based on the user's business activity. The OSI has
repeatedly declined to approve BSL.

### SSPL (Server Side Public License)

SSPL was created by MongoDB in 2018 as a direct response to cloud providers — specifically AWS —
offering MongoDB-compatible managed database services without contributing code or revenue back to
the MongoDB project.

**Mechanism:** SSPL is a modified version of AGPLv3. The critical change is in Section 13: instead
of merely requiring source code distribution for network users (as AGPLv3 does), SSPL requires that
if you "offer the functionality of the Program to users as a service," you must also provide the
source code of **all programs** you use to make that service available — including management tools,
monitoring systems, user interfaces, backup systems, and any other software that is part of the
service infrastructure.

**The practical effect:** SSPL effectively requires anyone offering the software as a managed cloud
service to open-source their entire operational infrastructure. This goes far beyond AGPLv3's
requirement to provide the source of the modified software — it reaches into the service provider's
deployment tooling, monitoring stack, and operational code. No company could comply with SSPL while
maintaining a competitive cloud service, which is precisely the intent.

**AWS reaction and downstream effects:**

- When MongoDB adopted SSPL, AWS responded by forking the last AGPLv3-licensed version of MongoDB
  and creating Amazon DocumentDB (a MongoDB-compatible API layer backed by a different storage
  engine)
- Red Hat removed MongoDB from its package repositories because SSPL is not an open-source license
  and therefore cannot be shipped as part of a distribution committed to open-source licensing
- Debian, Fedora, and several other Linux distributions followed suit
- The Linux kernel's `COPYING` file explicitly states that SSPL is not compatible with GPL

**OSI rejection:** The OSI has not approved SSPL and has stated that it does not meet the Open
Source Definition. The requirement to provide source code for all service-related software extends
the copyleft obligation far beyond the scope of the covered software, imposing conditions on
unrelated programs — which violates OSD 9 (License Must Not Restrict Other Software).

### Source-Available vs Open Source

This distinction is one of the most important and frequently misunderstood concepts in modern
software licensing.

**Open source** (OSI definition) means the software is licensed under a license that meets **all ten
criteria** of the Open Source Definition:

1. Free redistribution
2. Source code must be included or easily accessible
3. Derived works must be allowed
4. Integrity of the author's source code must be preserved (no restrictions on modification)
5. No discrimination against persons or groups
6. No discrimination against fields of endeavor
7. Distribution of license (license must apply to all who receive the software)
8. License must not be specific to a product
9. License must not restrict other software
10. License must be technology-neutral

If a license fails even one criterion, it is not open source by the OSI definition.

**Source-available** means the source code is published and readable, but the license does not meet
all ten criteria. Source-available licenses may restrict who can use the software, what they can use
it for, how they can distribute it, or what obligations they have regarding their own code. The code
is available for inspection, but the license does not grant the full set of freedoms that open
source requires.

**Why Redis and HashiCorp moved to source-available:**

- **Redis** moved from BSD 3-Clause to RSALv2 (Redis Source Available License 2.0) and SSPL in March
  2024, citing cloud providers — particularly AWS with ElastiCache — offering Redis-compatible
  managed services without contributing to the Redis project
- **HashiCorp** moved Terraform from MPL 2.0 to BSL in August 2023, and subsequently moved Consul,
  Vault, and other products to BSL, citing the same concern about cloud providers (AWS, Google
  Cloud, Microsoft Azure) offering managed versions of HashiCorp products without contributing
  commensurately

**The economic argument:** The core tension is between the open-source community's expectation of
unrestricted freedom and the economic reality that large cloud providers can monetize open-source
projects at massive scale without contributing code, bug fixes, or revenue back to the projects they
depend on. Source-available licenses are an attempt to preserve the open-source development model
(public repositories, community contributions, transparency) while restricting the specific use case
that the licensors consider exploitative.

Whether source-available licenses are a legitimate defense of open-source sustainability or a
betrayal of open-source principles depends on your position in the debate. The OSI's position is
clear: source-available is not open source, and using the term "open source" for source-available
licenses is misleading. The licensors' position is that the OSI definition is outdated and does not
account for the economic dynamics of cloud computing.

**Practical implications:** Source-available software is NOT open source. You cannot use it in a
context that requires OSI-approved licenses (e.g., some government procurement contracts, some
corporate open-source policies). You must comply with the specific restrictions of the
source-available license, which may include restrictions on competitive use, field of use, or
distribution.

## Compliance

### What "Distribution" Means Legally

"Distribution" (called "conveying" in GPLv3) is the act of making a copy of a work available to a
third party. Under US copyright law, distribution is one of the exclusive rights of the copyright
holder (17 U.S.C. § 106(3)). Key forms of distribution:

- **Physical distribution:** Shipping software on media (USB drives, optical discs)
- **Electronic distribution:** Making software available for download from a server or file share
- **Transferring a copy:** Giving a copy to another party on any medium
- **Container distribution:** Shipping a Docker image or other container that contains the software
  — a container image is a distributable artifact that embeds copies of the software
- **Application store distribution:** Publishing software through an app store, package repository,
  or similar distribution channel

**Internal use is NOT distribution.** Running software on your own servers, even if accessed by
employees or contractors, does not constitute distribution. The copyleft obligations of GPL and LGPL
are not triggered by internal use alone. This is why you can run GPL-licensed software internally
without being required to provide source code to your employees.

**Important caveat — AGPLv3 Section 13:** AGPLv3 creates a separate trigger (network interaction)
that operates independently of distribution. Even if no copy is distributed, AGPLv3 obligations can
be triggered by making the software available over a network to external users.

### Static Linking vs Dynamic Linking

This is one of the most contentious and practically important areas in open-source licensing. The
legal question is: does linking to a library create a "derivative work" of that library?

**Static linking:** The library code is compiled directly into the executable. The resulting binary
is a single combined work that incorporates the library's object code. Under both GPL and LGPL,
static linking is broadly accepted as creating a derivative work of the library, which triggers
copyleft obligations:

- Under GPL: the entire combined work must be distributed under GPL
- Under LGPL: the entire combined work must be distributed under LGPL, OR you must provide object
  files for the non-LGPL portions and a mechanism for the user to re-link

**Dynamic linking:** The library code is loaded at runtime from a separate shared object (`.so`,
`.dll`, `.dylib`). The executable and the library remain separate files. The legal status is
debated:

- **FSF position (for GPL):** Dynamic linking to a GPL library creates a derivative work, triggering
  copyleft obligations for the entire application. This is the FSF's interpretation, but it has
  never been tested in court in the US.
- **LGPL exception:** LGPL explicitly allows dynamic linking to proprietary applications without
  triggering copyleft for the proprietary application. The proprietary application can remain under
  its own license, but the LGPL library must be distributed with source and the user must be able to
  re-link the proprietary application against modified versions of the library.
- **Industry practice:** Most conservative legal advice treats dynamic linking to GPL libraries as
  creating a derivative work. Many organizations avoid dynamically linking to GPL libraries in
  proprietary applications for this reason. For LGPL libraries, dynamic linking is widely accepted
  as safe.

**Linux kernel syscall exception:** The Linux kernel's `COPYING` file includes an explicit NOTE that
user-space programs calling kernel system calls (the syscall interface) are NOT considered
derivative works of the kernel. This is a specific, limited exception for the kernel's syscall
interface only — it does not apply to dynamically linking to other GPL libraries.

### Docker and Container Implications

Shipping a Docker image that bundles software raises important licensing questions that are
increasingly relevant as containerization becomes the standard deployment model.

**Does shipping a container count as distributing the software inside it?**

Yes, in essentially all interpretations. A Docker image is a distributable artifact — when you push
an image to a registry (Docker Hub, ECR, GCR, etc.) and another party pulls it, you have distributed
copies of every piece of software in that image. This means:

- If the container includes GPL-licensed code, the copyleft obligations apply to the entire
  container image as a combined work
- If the container includes LGPL-licensed code, the dynamic linking analysis applies — but in
  practice, container images often bundle statically linked binaries (via multi-stage builds), which
  means static linking rules apply
- License notices must be included in the container image (typically as files in the image
  filesystem)
- For AGPLv3-licensed code in the container, network users must have access to the source code

**Practical guidance:**

- Audit the licenses of all packages (direct and transitive dependencies) in your Docker image
- Include `LICENSE` files for all dependencies in your container, either in a dedicated directory or
  alongside the relevant packages
- If your container includes AGPLv3 code, provide a mechanism for users to obtain the complete
  source (e.g., a link in the application UI, a `SOURCE` label on the image, or a `LICENSES`
  directory)
- Consider using permissively-licensed alternatives for any containerized service that will be
  distributed to third parties

### SaaS and AGPL Implications

AGPLv3 Section 13 is the only common open-source license that explicitly addresses SaaS deployments.
The relevant text:

> Notwithstanding any other provision of this License, if you modify the Program, your modified
> version must prominently offer all users interacting with it remotely through a computer network
> [...] an opportunity to receive the Corresponding Source of your version [...]

**What this means in practice:**

- If you deploy an AGPLv3 application (modified or unmodified) and external users interact with it
  over a network, you must provide the complete source code to those users
- "Interacting remotely" is broadly interpreted — any HTTP request, API call, WebSocket connection,
  or similar network communication likely qualifies
- The source must be provided "prominently" — a deeply buried link in a privacy policy footer would
  not satisfy this requirement; a conspicuous notice in the application's UI is expected
- You must provide the source of _your version_, including all modifications you have made

**Why companies fear AGPLv3:**

1. The network interaction trigger is broader than distribution — any network-accessible service
   triggers it, regardless of whether a copy is conveyed
2. The source code must be prominently offered to ALL users, not just those who explicitly request
   it
3. Compliance is operationally complex — you need to maintain a source distribution mechanism for
   every AGPLv3 service you deploy
4. The definition of "interaction" is broad enough that internal microservices calling each other
   could theoretically trigger the obligation, though most legal interpretations focus on
   user-facing interactions

**Common corporate policy:** Many organizations categorize AGPLv3 as "do not use" or "require legal
review." If your organization has an approved license list, AGPLv3 is almost certainly on the
restricted tier.

### Auditing Dependencies

Dependency license auditing is an essential operational practice for any organization that
distributes software. The goal is to maintain a complete, accurate inventory of every license in
your dependency tree and to identify compliance risks before they become legal problems.

**Automated tools:**

- **`licensee`** — GitHub's own tool for detecting the license of a repository. It analyzes the
  `LICENSE` file and provides the SPDX identifier.
- **`license-checker`** (npm) / **`pip-licenses`** (Python) / **`go-licenses`** (Go) —
  language-specific tools that scan your dependency tree and report the license of each package.
- **`licenserc`** — a tool that checks that all dependencies in a project comply with a configured
  allowlist. It can be run in CI/CD to prevent introduction of disallowed licenses.
- **SPDX (Software Package Data Exchange)** — a standard format (ISO/IEC 5962:2021) for
  communicating software bill of materials (SBOM) and license information. The SPDX License List at
  spdx.org/licenses/ provides canonical, standardized identifiers for every known license. These
  identifiers can be used in `package.json`, `Cargo.toml`, `pyproject.toml`, and other package
  manifests.
- **FOSSA, Snyk, Black Duck** — commercial dependency scanning tools that provide license compliance
  reports, vulnerability scanning, and SBOM generation.

**Manual approaches:**

- Check the `LICENSE` file in each dependency's source repository
- Review package manifest files for license metadata (`license` field in `package.json`, `license`
  field in `Cargo.toml`, `license` field in `go.mod`)
- Cross-reference with the SPDX License List to ensure the declared license matches the actual
  license text

**Best practices:**

- Maintain an organization-wide approved license list with clearly defined tiers (e.g., permitted,
  restricted, prohibited)
- Run automated license checks in CI/CD pipelines so that new dependencies are checked before they
  are merged
- Document the license of every direct and transitive dependency in a machine-readable format (SPDX
  SBOM)
- Review license changes when updating dependencies — a project CAN change its license between
  versions, and this can introduce compliance risk
- Treat license compliance as a continuous process, not a one-time audit

### When You Find a Conflicting License

If your dependency audit reveals a license conflict (e.g., a GPLv3 dependency in a proprietary
project, or an incompatible license combination), you have several options, in order of preference:

1. **Replace the dependency** with a permissively-licensed alternative. This is the preferred
   solution — it eliminates the compliance risk entirely. Check alternatives on GitHub,
   alternativeTo, or language-specific package registries.
2. **Isolate the dependency** so that it does not form a combined work with your proprietary code.
   For LGPL-licensed libraries, this means using dynamic linking and providing the library source
   separately. For GPL-licensed code, isolation is far more difficult because the FSF takes the
   position that any linking creates a derivative work.
3. **Relicense your project** to be compatible with the dependency. This is only viable if you own
   the copyright to all code in your project or if all contributors have agreed to a license change
   (e.g., via a CLA that grants relicensing rights).
4. **Obtain a commercial license** from the copyright holders. Some projects offer dual licensing
   (e.g., MySQL is available under GPL from the community or under a commercial license from
   Oracle). This is common for companies that want to use GPL software in proprietary products.
5. **Remove the dependency** if the functionality it provides is not essential.

## Comparison Table

| License      | Copyleft Strength         | Patent Grant              | Trademark               | Attribution       | Distribution Trigger   | SaaS Trigger   | OSI Approved | GPL Compatible     |
| ------------ | ------------------------- | ------------------------- | ----------------------- | ----------------- | ---------------------- | -------------- | ------------ | ------------------ |
| AGPLv3       | Strong + Network          | Implied (Sec 11)          | Not granted             | Yes               | Convey (Sec 4)         | Yes (Sec 13)   | Yes          | GPLv3 only         |
| GPLv3        | Strong                    | Implied (Sec 11)          | Not granted             | Yes               | Convey (Sec 4)         | No             | Yes          | —                  |
| LGPLv3       | Weak (linking exception)  | Inherited from GPLv3      | Not granted             | Yes               | Convey (Sec 4)         | No             | Yes          | GPLv3              |
| GPLv2        | Strong                    | None                      | Not granted             | Yes               | Distribution (Sec 3)   | No             | Yes          | —                  |
| MPL 2.0      | Weak (file-level)         | Yes (Sec 2.1(b))          | Not granted             | Yes               | Distribution (Sec 3.2) | No             | Yes          | GPLv2+ if enabled  |
| MIT          | None                      | No                        | No                      | Yes               | N/A                    | No             | Yes          | Yes (all versions) |
| Apache 2.0   | None                      | Yes (Sec 3) + retaliation | Limited (Sec 7)         | Yes (NOTICE file) | N/A                    | No             | Yes          | GPLv3 only         |
| BSD 2-Clause | None                      | No                        | No                      | Yes               | N/A                    | No             | Yes          | Yes (all versions) |
| BSD 3-Clause | None                      | No                        | Endorsement restriction | Yes               | N/A                    | No             | Yes          | Yes (all versions) |
| ISC          | None                      | No                        | No                      | Yes               | N/A                    | No             | Yes          | Yes (all versions) |
| 0BSD         | None                      | No                        | No                      | No                | N/A                    | No             | Yes          | Yes (all versions) |
| CC0          | None (public domain)      | No                        | No                      | No                | N/A                    | N/A            | No           | No                 |
| Unlicense    | None (public domain)      | No                        | No                      | No                | N/A                    | No             | No           | No                 |
| WTFPL        | None                      | No                        | No                      | No                | N/A                    | No             | No           | No                 |
| BSL          | Restricted (time-limited) | Varies                    | Varies                  | Yes               | Yes                    | No             | No           | No                 |
| SSPL         | Strong + Server-side      | No explicit               | No                      | Yes               | Distribution (Sec 13)  | Yes (de facto) | No           | No                 |

## Common Pitfalls

**Assuming MIT means "do whatever you want."** MIT is permissive, not public domain. You still must
include the copyright notice and license text in all copies or substantial portions of the software.
Removing the copyright notice is copyright infringement regardless of what MIT allows. The license
grants specific rights under specific conditions; it does not waive the copyright holder's rights
entirely. You cannot claim the MIT-licensed code as your own, and you must preserve the attribution.

**Thinking LGPL allows static linking into proprietary software.** Under the FSF's interpretation of
LGPLv3 and the prevailing legal consensus, static linking creates a derivative work, and the
combined work must be distributed under LGPLv3. To use an LGPL library in a proprietary application,
you should dynamically link it. Some organizations interpret LGPL as allowing static linking if
object files are provided for the proprietary portions (Section 4(d)), but this is a gray area —
consult legal counsel before relying on this interpretation.

**Using GPL libraries in a web service without understanding AGPL implications.** If you are
building a web service and want to use a GPL-licensed library, you may think you are safe because
you are not "distributing" the software (you are hosting it internally). This is correct for GPLv2
and GPLv3 — hosting as a service does not trigger their copyleft obligations. However, if the
library is AGPLv3 (not GPLv3), network interaction triggers the copyleft obligation under Section
13, and you must provide source code to your users. Always check the exact license version, not just
"GPL."

**Mixing GPL and Apache 2.0 code.** Apache 2.0's patent retaliation clause (Section 3.3) adds
restrictions that are incompatible with GPLv2. GPLv3 was specifically designed to accommodate Apache
2.0's terms, so GPLv3 + Apache 2.0 is fine. But GPLv2 + Apache 2.0 is not — the Apache 2.0 patent
retaliation terms are "additional restrictions" that GPLv2 Section 4 prohibits. If you are working
on a GPLv2-only project (like the Linux kernel), you cannot incorporate Apache 2.0-licensed code.

**Not including license notices in binary distributions.** Most permissive licenses (MIT, BSD,
Apache 2.0) require including the license text in binary distributions. This is not optional — it is
a condition of the license grant. Failing to include license notices in your shipped binaries means
your downstream recipients do not have a valid license to use the software, and you are committing
copyright infringement. In practice, your binary distribution must include a `LICENSE` file, a
`NOTICE` file (for Apache 2.0), or equivalent documentation containing all applicable license texts
and copyright notices. Automate this — tools like `licensee`, `go-licenses`, and `pip-licenses` can
generate license notice bundles for your distribution.

## Further Reading

- [Choose a License](https://choosealicense.com) — straightforward guide to selecting a license for
  your project, maintained by GitHub
- [SPDX License List](https://spdx.org/licenses/) — canonical reference for standardized license
  identifiers and full license text
- [tl;drLegal](https://tldrlegal.com) — plain-English summaries of common software licenses with key
  provisions highlighted
- [GNU License Recommendations](https://www.gnu.org/licenses/license-recommendations.html) — the
  Free Software Foundation's guidance on choosing a license
- [OSI Approved Licenses](https://opensource.org/licenses) — the definitive list of OSI-approved
  open-source licenses and the Open Source Definition
