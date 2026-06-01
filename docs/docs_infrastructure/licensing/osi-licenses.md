---
title: 'Open Source Licenses'
slug: licensing/osi-licenses
date: 2026-05-30
tags:
  - Licensing
categories:
  - Licensing
description:
  'Open source licenses explained: MIT, Apache 2.0, LGPL, MPL 2.0, GPL v3, AGPL v3, BSD, ISC.
  Compatibility, copyleft requirements, and choosing the right.'
---

## License Classification

Open source licenses fall on a spectrum from permissive to copyleft. Permissive licenses place
minimal restrictions on how the code can be used — they require attribution but do not impose
conditions on derivative works. Copyleft licenses require that derivative works carry the same
license, ensuring that modifications remain open source.

The Open Source Initiative (OSI) maintains the definitive list of OSI-approved licenses. Approval
requires that the license comply with the Open Source Definition: free redistribution, access to
source code, allowance for modifications, no discrimination against persons or fields of endeavor,
and no restriction on other software distributed alongside the licensed code.

| Category         | Mechanism                       | Examples                  |
| ---------------- | ------------------------------- | ------------------------- |
| Permissive       | Attribution only                | MIT, Apache 2.0, BSD, ISC |
| Weak copyleft    | Same license for modified files | LGPL v3, MPL 2.0          |
| Strong copyleft  | Same license for the whole work | GPL v3                    |
| Network copyleft | Extends strong copyleft to SaaS | AGPL v3                   |

The practical difference matters most when you combine code from multiple projects. Permissive code
can be incorporated into proprietary software. Copyleft code forces openness. The wrong choice of
license can make a project unshippable or expose a company to legal risk.

## MIT License

The MIT License is the most popular open source license. It is short — a single paragraph — and
unambiguous. You can do almost anything with MIT-licensed code as long as you include the original
copyright notice and license text.

### Terms

- Permission to use, copy, modify, merge, publish, distribute, sublicense, and sell
- The license text and copyright notice must be included in all copies or substantial portions
- No warranty — the software is provided "as is"

### Requirements

1. Include the original copyright notice
2. Include the MIT license text
3. That is the entire list

### Notable Projects

React, Angular, Vue.js, Rails, Django, Node.js, Go, Rust standard library, jQuery, .NET Core, most
npm packages, most Cargo crates, most GitHub projects by count

### When to Use

Use MIT when you want maximum adoption with minimal friction. The license is so short and
well-understood that it rarely creates legal uncertainty. It is the default choice for libraries,
tools, and frameworks that serve as infrastructure for other projects.

## Apache 2.0 License

The Apache 2.0 License is a permissive license with explicit patent protections that MIT lacks. It
is the standard license for large organizations and projects where patent risk is a realistic
concern.

### Patent Grant

Section 3 of Apache 2.0 grants contributors a patent license covering the code they contribute. If a
contributor holds a patent that the contributed code necessarily infringes, they grant every
licensee a non-exclusive, worldwide, royalty-free license to use that patent. Section 3 also
includes a patent retaliation clause: if a licensee sues any contributor for patent infringement
over the software, that licensee loses its patent license.

This is significant. MIT and BSD do not address patents at all. Without an explicit patent grant, a
contributor could theoretically contribute code and later sue users for patent infringement on the
same code. Apache 2.0 prevents this.

### NOTICE File

Apache 2.0 requires that derivative works preserve a NOTICE file if the original work includes one.
The NOTICE file contains additional attribution — names of contributors, copyright holders, and
specific attribution notices. This is more burdensome than MIT's single requirement.

### Notable Projects

Android, Kubernetes, TensorFlow, Apache ecosystem (HTTP Server, Kafka, Spark), Swift, Terraform,
Docker (not all components), Podman

### When to Use

Use Apache 2.0 when patent protection matters. This includes projects with corporate contributors,
projects that implement standardized protocols or formats (where patent claims are common), and
projects that want to be compatible with Apache Foundation governance.

## LGPL v3

The GNU Lesser General Public License v3 is a weak copyleft license. It applies copyleft
requirements to the LGPL-licensed code itself but not to software that merely uses it. This makes
LGPL suitable for libraries — code that is linked into larger applications — where requiring the
entire application to be GPL-licensed would be impractical.

### Weak Copyleft Mechanism

LGPL v3 requires that modifications to the LGPL-licensed library itself must be published under LGPL
v3 or GPL v3. However, a proprietary application that dynamically links to an unmodified LGPL
library is not subject to copyleft. The boundary is:

- **Modifying the library** — must release modifications under LGPL/GPL
- **Linking against the library** — no copyleft obligation for the linking application
- **Static linking** — may trigger copyleft (debated; safest to use dynamic linking)
- **Distributing the library** — must provide source or an offer for source

### Notable Projects

GNU C Library (glibc), Qt (LGPL), OpenSSL (dual-licensed, formerly), FLTK, many GNOME libraries

### When to Use

Use LGPL when you want to ensure that improvements to your library remain open source, but you do
not want to force proprietary applications that depend on it to open-source their entire codebase.
This is the right choice for shared libraries, frameworks, and runtime components.

## MPL 2.0

The Mozilla Public License 2.0 is a file-level copyleft license. Modifications to MPL-licensed files
must remain under MPL, but new files in the same project can use any license. This makes MPL less
restrictive than GPL but more protective than MIT or Apache.

### File-Level Copyleft

The defining feature of MPL 2.0 is that copyleft applies at the file level, not the project level.
If you modify an MPL-licensed file, your modifications must be distributed under MPL 2.0. If you add
a new file to the project, you can license that file however you want — MIT, Apache, proprietary. A
larger work that includes MPL files alongside other-licensed files is not subject to copyleft as a
whole.

This makes MPL 2.0 practical for mixed-license codebases and for projects that want to protect core
files while allowing proprietary extensions.

### Notable Projects

Firefox (historically; now MPL/GPL/LGPL tri-license), LibreOffice, MariaDB, HashiCorp Vault
(transitioned to BSL — see lessons in license changes)

### When to Use

Use MPL 2.0 when you want a middle ground between permissive and copyleft — protect your core code
while allowing proprietary additions. It is well-suited for applications with extensible plugin
architectures where you want the core to remain open but do not want to restrict what third parties
build on top.

## GPL v3

The GNU General Public License v3 is a strong copyleft license. Any work that contains GPL-licensed
code — linked statically or dynamically, combined into a single executable, or distributed as a
whole — must be distributed under GPL v3. This is the "viral" nature of GPL: the copyleft
requirement propagates to the entire combined work.

### Strong Copyleft Mechanism

GPL v3 applies to "covered works" — works that are based on the GPL-licensed program or that
incorporate it. The boundary is clear for static linking and direct inclusion. For dynamic linking,
the FSF considers it a combined work; others disagree. The safest approach is to assume GPL copyleft
applies to any form of linking.

Key requirements of GPL v3:

1. Source code must be provided with any distribution of the program or an offer valid for at least
   3 years
2. Modifications must be evidently marked
3. The GPL license notice and copyright notices must be preserved
4. No additional restrictions may be imposed beyond GPL v3
5. Anti-Tivoization provision (Section 6): if the product includes installation information, you
   must provide that information to users so they can modify and reinstall the software

### Notable Projects

Linux kernel (GPL v2), GCC, GNU Coreutils, Git, WordPress, VLC, OBS Studio, many command-line tools

### When to Use

Use GPL v3 when you want to ensure that all derivative works remain free software. This is the right
choice when you believe that software freedom is a non-negotiable requirement, not a preference. It
prevents corporations from taking your code proprietary. It also means that many companies will not
use your code in proprietary products.

## AGPL v3

The Affero General Public License v3 extends GPL v3 with a network interaction clause (Section 13).
If you modify AGPL-licensed software and offer users the ability to interact with it over a network
— such as hosting it as a web service — you must provide those users with the complete source code
of your version.

### Network Copyleft

GPL v3 triggers source distribution only when the software is distributed. Hosting software as a
service (SaaS) does not count as distribution under traditional copyright law, so GPL v3 did not
reach SaaS deployments. AGPL v3 closes this loophole: network use is treated as equivalent to
distribution.

This makes AGPL v3 the strongest copyleft license in common use. It is the license that prevents
companies from hosting your code as a paid service without contributing back.

### Notable Projects

MongoDB (historically; transitioned to SSPL), Mastodon, Nextcloud, Plausible Analytics,
Matrix/Synapse, Gitea, Many open-source SaaS alternatives

### When to Use

Use AGPL v3 when you want to prevent commercial appropriation through SaaS. This is the right choice
for web applications, APIs, and backend services that are in most cases consumed over a network.
Companies that would freely use MIT or Apache-licensed code as a SaaS foundation will hesitate
before using AGPL-licensed code, because doing so would force them to open-source their
modifications.

## BSD and ISC

The BSD and ISC licenses are minimalist permissive licenses that differ from MIT in minor wording
and historical context rather than substance.

### BSD (2-Clause)

The BSD 2-Clause (Simplified BSD) license is functionally equivalent to MIT. It grants permission to
use, modify, and distribute with attribution. The primary difference is wording — BSD uses
"Redistribute and use in source and binary forms" while MIT uses "Permission is hereby granted."

### BSD (3-Clause)

The BSD 3-Clause (New BSD) license adds a non-endorsement clause:

```
Neither the name of the copyright holder nor the names of its contributors may be used
to endorse or promote products derived from this software without specific prior
written permission.
```

This prevents downstream users from using the project name or contributor names for marketing
without permission. It is a minor restriction that has no practical impact in most cases.

### ISC

The ISC license was originally written for the Internet Software Consortium (BIND, DHCP). It is
functionally equivalent to the BSD 2-Clause license with even shorter text. Some projects prefer it
purely for brevity.

### Notable Projects

BSD: FreeBSD, OpenBSD, NetBSD, SQLite (public domain / blessing), nginx (BSD-like), Go (BSD-style
with patent grant in additional file) ISC: OpenSSH, ncurses, many OpenBSD utilities

### When to Use

Use BSD or ISC when you want a permissive license that is functionally equivalent to MIT but prefer
different wording. The choice between MIT, BSD-2, BSD-3, and ISC is largely aesthetic — all four are
permissive, well-understood, and compatible with each other. Pick the one your community uses and
move on.

## License Compatibility Matrix

License compatibility determines which licenses can be combined in a single project. When you
include code under different licenses, the result must satisfy all license requirements
simultaneously. Some combinations are impossible.

| Downstream \ Dependency | MIT | Apache 2.0 | BSD | LGPL v3 | MPL 2.0 | GPL v3 | AGPL v3 |
| ----------------------- | --- | ---------- | --- | ------- | ------- | ------ | ------- |
| **Proprietary**         | Yes | Yes        | Yes | Yes¹    | Yes²    | No     | No      |
| **MIT**                 | Yes | No³        | Yes | No³     | No³     | No     | No      |
| **Apache 2.0**          | Yes | Yes        | Yes | No³     | No³     | No     | No      |
| **GPL v3**              | Yes | No³        | Yes | Yes     | Yes⁴    | Yes    | Yes     |
| **AGPL v3**             | Yes | No³        | Yes | Yes     | Yes⁴    | Yes    | Yes     |

¹ Via dynamic linking only; static linking may trigger copyleft. ² MPL copyleft applies only to
modified MPL files; the larger work can be proprietary. ³ Apache 2.0 and GPL v3 are incompatible in
one direction: Apache-licensed code cannot be included in a GPL v3 project because Apache 2.0 has
additional restrictions (patent retaliation, NOTICE file) that GPL v3 does not permit. GPL-licensed
code can be included in an Apache 2.0 project. ⁴ MPL 2.0 is explicitly compatible with GPL v3 by
virtue of its secondary license clause (Section 13).

## Choosing a License

The choice of license is a strategic decision, not a legal optimization. The license you choose
communicates what you want to happen with your code.

### Decision Framework

**Do you want anyone to use your code in any way, with minimal restrictions?** → MIT, BSD-2-Clause,
or ISC

**Do you want anyone to use your code but with explicit patent protection?** → Apache 2.0

**Do you want to protect your library but allow proprietary applications to link against it?** →
LGPL v3

**Do you want to protect your code at the file level while allowing proprietary additions?** → MPL
2.0

**Do you want to ensure all derivative works remain open source?** → GPL v3

**Do you want to prevent commercial SaaS appropriation without contribution?** → AGPL v3

### Common Scenarios

| Scenario                                        | Recommended License |
| ----------------------------------------------- | ------------------- |
| Developer tool or CLI utility                   | MIT or Apache 2.0   |
| Library or framework for others                 | MIT or Apache 2.0   |
| Library where you want changes contributed back | LGPL v3             |
| Application with plugin architecture            | MPL 2.0             |
| Standalone application, free software ideology  | GPL v3              |
| Web service / SaaS, want to prevent enclosure   | AGPL v3             |
| Corporate open-source project                   | Apache 2.0          |

### One License Per File

A project can contain files under different licenses, but this adds complexity. Every contributor
must understand which license applies to their contributions. Every user must audit the license
headers. For simplicity, use one license for the entire project unless there is a specific reason
not to.

## Common Pitfalls

1. **Assuming "open source" means "public domain."** Public domain and open source are different
   concepts. Open source licenses retain copyright; they grant permissions that copyright law would
   otherwise deny. Public domain means no copyright at all. Using the Creative Commons Zero (CC0)
   declaration is the closest practical equivalent for software.

2. **Mixing incompatible licenses.** Including GPL v3 code in an Apache 2.0 project is not possible
   — the combined work must satisfy both licenses simultaneously, and the additional restrictions in
   Apache 2.0 (patent retaliation, NOTICE requirement) conflict with GPL v3's "no additional
   restrictions" clause. Always check compatibility before combining code.

3. **Not including license headers in every file.** Some licenses (MIT, BSD) require the license
   text to appear in "all copies or substantial portions." This means every source file should carry
   the copyright notice and a license reference. A LICENSE file at the root is necessary but not
   sufficient for most permissive licenses.

4. **Assuming GPL only applies to static linking.** The Free Software Foundation's position is that
   dynamic linking creates a combined work under GPL. Not everyone agrees. If your business model
   depends on dynamically linking to GPL code while keeping your code proprietary, you are relying
   on an interpretation that has never been tested in court and that the license authors explicitly
   reject.

5. **Ignoring contributor license agreements.** If you accept contributions from others without a
   CLA or DCO, you do not have a clear record of who holds copyright to what. This becomes a problem
   when you want to change the license, enforce it, or relicense the code. A DCO (Developer
   Certificate of Origin) is the lightweight option — contributors certify they have the right to
   submit their contribution under the project's license.

6. **Choosing AGPL v3 for libraries.** AGPL v3's network copyleft is designed for network services,
   not libraries. If you ship an AGPL library, any application that uses it and is offered over a
   network must release its full source code. This is likely stronger protection than you intend and
   will deter adoption. Use LGPL v3 for libraries and AGPL v3 for server applications.

7. **Changing licenses without consent.** You cannot unilaterally relicense code contributed by
   others unless they signed a CLA granting you that right. If you accepted contributions under MIT
   and later want to switch to GPL, you need permission from every contributor — or you must rewrite
   the code yourself. Plan the license from the start.

## Summary

Open source licenses exist on a spectrum from permissive (MIT, Apache, BSD, ISC) to copyleft (LGPL,
MPL, GPL, AGPL). Permissive licenses maximize adoption by placing minimal conditions on use.
Copyleft licenses ensure that modifications remain open, with varying scope: file-level (MPL),
library-level (LGPL), project-level (GPL), and network-level (AGPL). Apache 2.0 is the permissive
license of choice when patent protection matters. GPL v3 is the strong copyleft standard. AGPL v3
extends GPL v3 to network services. License compatibility is not automatic — incompatible
combinations make projects legally unshippable. Choose a license based on what you want to happen to
your code, verify compatibility before combining code, and include proper license headers in every
file.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.
