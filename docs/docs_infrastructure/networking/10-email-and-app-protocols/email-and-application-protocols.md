---
title: Email and Application Protocols
date: 2026-04-09T00:00:00.000Z
tags:
  - Networking
categories:
  - Networking
slug: email-and-application-protocols
---

# Email and Application Protocols

Electronic mail and application-layer protocols form the backbone of human communication over the
internet. This document examines the architecture, protocols, and security mechanisms that enable
reliable message delivery, file transfer, directory services, and time synchronization across
distributed systems.

## Email Architecture

### Core Components

The email system is composed of three principal agent types, each operating at different stages of
the message lifecycle.

**MUA — Mail User Agent**

The MUA is the software interface that end users interact with to compose, read, and manage email
messages. Examples include command-line tools like `mutt` and `mailx`, desktop clients such as
Mozilla Thunderbird and Microsoft Outlook, and web-based interfaces like Gmail and Roundcube. The
MUA handles message composition, MIME encoding, submission to an MTA via SMTP on port 587, and
retrieval from a message store via IMAP on port 993 or POP3 on port 995. The MUA is also responsible
for local message rendering, attachment handling, and the application of local filtering rules.

**MTA — Mail Transfer Agent**

The MTA is responsible for routing and relaying messages between mail systems. MTAs implement the
SMTP protocol (RFC 5321) and communicate with each other on port 25. Well-known MTAs include
Postfix, Exim, Sendmail, and Microsoft Exchange. An MTA performs DNS MX record lookups to determine
the destination mail server for a given domain, manages message queues for retry on transient
failures, and applies routing policies. The MTA-to-MTA path may involve multiple relay hops before
the message reaches its final destination MTA.

**MDA — Mail Delivery Agent**

The MDA accepts messages from the MTA and writes them into the recipient's mailbox store. This may
involve writing to a local filesystem format such as mbox (all messages concatenated into one file)
or Maildir (one file per message in a directory hierarchy), or delivering to a specialized storage
backend via LMTP to a Dovecot or Cyrus IMAP server. Procmail and Sieve (RFC 5228) are commonly used
as local delivery agents or filtering languages. The MDA is the final step in the delivery chain
before the message becomes available for retrieval by the MUA.

### Email Message Format

Email messages are defined by RFC 5322 (the successor to RFC 2822 and RFC 822). The format consists
of a header section and a body section, separated by a single blank line (CRLF CRLF).

**Headers**

Each header line takes the form `Name: Value`. Headers are case-insensitive in the field name but
conventionally use PascalCase. Long header values may be folded across multiple lines by inserting a
CRLF followed by at least one whitespace character (folding whitespace).

Key headers include:

| Header                      | Purpose                                                          |
| --------------------------- | ---------------------------------------------------------------- |
| `From`                      | The author's mailbox. Must be a single address per RFC 5322.     |
| `To`                        | Primary recipients. One or more addresses.                       |
| `Cc`                        | Carbon copy recipients.                                          |
| `Bcc`                       | Blind carbon copy. Stripped from the message during transit.     |
| `Subject`                   | The topic or summary of the message.                             |
| `Date`                      | Origination timestamp in RFC 2822 format.                        |
| `Message-ID`                | Globally unique identifier, typically `uuid@domain`.             |
| `In-Reply-To`               | References the `Message-ID` of the message being replied to.     |
| `References`                | Thread history as a list of `Message-ID` values.                 |
| `Reply-To`                  | Overrides the `From` address for reply purposes.                 |
| `Content-Type`              | MIME type of the body (RFC 2045).                                |
| `Content-Transfer-Encoding` | Encoding method: `7bit`, `8bit`, `quoted-printable`, `base64`.   |
| `Content-Disposition`       | Inline or attachment with optional filename parameter.           |
| `Received`                  | Trace header added by each MTA hop with timestamp and host info. |

**Body**

The body section follows the headers after a blank line. In the simplest case (no MIME), the body is
plain US-ASCII text. With MIME (RFC 2045–2049), the body can contain multipart structures,
alternative representations, and binary attachments.

### MIME — Multipurpose Internet Mail Extensions

MIME, defined across RFC 2045 through RFC 2049, extends the RFC 5322 message format to support
non-ASCII text, multimedia content, and multi-part message bodies.

**Multipart Messages**

The `Content-Type: multipart/mixed` header (and variants `multipart/alternative`,
`multipart/related`) divides the body into multiple parts, each separated by a boundary delimiter.
The boundary string is specified in the `boundary` parameter of the `Content-Type` header.

```
Content-Type: multipart/mixed; boundary="boundary123"

--boundary123
Content-Type: text/plain; charset="utf-8"

This is the plain text part.
--boundary123
Content-Type: application/pdf; name="document.pdf"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename="document.pdf"

JVBERi0xLjUK...
--boundary123--
```

Common multipart subtypes:

| Subtype                 | Purpose                                                                           |
| ----------------------- | --------------------------------------------------------------------------------- |
| `multipart/mixed`       | Independent parts of different types (e.g., text + attachment).                   |
| `multipart/alternative` | Same content in different formats; last part is preferred.                        |
| `multipart/related`     | Parts that reference each other (e.g., HTML with inline images via `Content-ID`). |
| `multipart/signed`      | A two-part body for S/MIME or PGP signatures.                                     |
| `multipart/report`      | Delivery status notifications (DSN, MDN).                                         |

**Base64 Encoding**

Base64 (RFC 4648) encodes binary data as ASCII text using a 64-character alphabet (`A–Z`, `a–z`,
`0–9`, `+`, `/`) with `=` padding. Each group of 3 bytes maps to 4 ASCII characters, producing a 33%
size overhead. Base64 is specified via the `Content-Transfer-Encoding: base64` header. For text that
is mostly ASCII but contains some non-ASCII characters, `quoted-printable` encoding is more
efficient because it encodes only non-printable and non-ASCII bytes using `=XX` hex notation.

**Attachments**

Attachments are conveyed as body parts within a `multipart/mixed` message. The
`Content-Disposition: attachment` header signals to the MUA that the part should be presented as a
downloadable file. The `filename` parameter provides the suggested name. The `Content-Type` header
indicates the MIME type of the attachment data.

### Email Flow

The complete lifecycle of an email message involves five stages:

1. **Compose**: The user creates a message in the MUA, specifying recipients, subject, and body. The
   MUA assigns a `Message-ID`, sets the `Date` header, and performs MIME encoding as needed.

2. **Submit**: The MUA connects to the submission MTA (typically on port 587) and sends the message
   using SMTP with authentication (RFC 4954) and TLS (STARTTLS, RFC 3207). The submission MTA
   validates the sender's credentials and accepts or rejects the message.

3. **Relay**: The submission MTA resolves the destination domain's MX records via DNS, establishes
   an SMTP connection to the destination MTA on port 25, and transmits the message. Intermediate
   relay MTAs may be involved. Each MTA adds a `Received` trace header. If delivery fails with a 4xx
   response, the MTA queues the message for retry according to an exponential backoff schedule
   (typically retrying at 5 min, 15 min, 1 h, 4 h, then every 4 h for up to 5 days per RFC 5321).

4. **Deliver**: The destination MTA accepts the message and passes it to the MDA, which writes it to
   the recipient's mailbox store. If the recipient is local, the MDA may apply Sieve scripts for
   filtering and sorting into subfolders.

5. **Retrieve**: The recipient's MUA connects to the mail store using IMAP or POP3 to read and
   manage messages. IMAP allows server-side mailbox manipulation, while POP3 is limited to
   downloading messages to the client.

## SMTP — Simple Mail Transfer Protocol

### Overview

SMTP is defined in RFC 5321 (obsoleting RFC 2821 and RFC 821). It is a text-based, request-response
protocol using TCP. SMTP is traditionally used on port 25 for MTA-to-MTA relay and on port 587 for
MUA-to-MTA submission (RFC 6409). Port 465 (SMTPS) is a deprecated implicit TLS variant that remains
in widespread use despite not having a formal RFC for that purpose.

SMTP uses a strict command-response model. The client sends commands, and the server responds with a
three-digit status code followed by explanatory text. Commands and responses are terminated by CRLF.
The protocol is line-oriented; there are no binary commands.

### MX Record Resolution

Before an MTA can relay a message, it must determine the destination mail server. This is
accomplished through DNS MX (Mail Exchanger) record lookups. The MTA queries DNS for MX records of
the recipient's domain (e.g., `example.com`). MX records contain a preference value (lower is more
preferred) and a hostname.

```
example.com.    IN MX  10 mail1.example.com.
example.com.    IN MX  20 mail2.example.com.
```

The MTA attempts delivery to the lowest-preference MX first. If unreachable, it falls back to the
next preference value. If no MX records exist, the MTA falls back to an A or AAAA record lookup on
the domain name itself (RFC 5321, Section 5). MX records enable mail routing that is independent of
the domain's web server address and allow backup mail servers to accept mail when the primary is
unavailable.

### SMTP Session

A typical SMTP session proceeds through the following phases:

```
S: 220 mail.example.com ESMTP Postfix
C: EHLO sender.example.org
S: 250-mail.example.com
S: 250-PIPELINING
S: 250-SIZE 10485760
S: 250-STARTTLS
S: 250-AUTH PLAIN LOGIN
S: 250 8BITMIME
C: STARTTLS
S: 220 Ready to start TLS
[ TLS handshake negotiated ]
C: EHLO sender.example.org
S: 250-mail.example.com
S: 250-AUTH PLAIN LOGIN
S: 250 8BITMIME
C: AUTH PLAIN AGFkbWluAHBhc3N3b3Jk
S: 235 2.7.0 Authentication successful
C: MAIL FROM:<alice@example.org>
S: 250 2.1.0 Ok
C: RCPT TO:<bob@example.com>
S: 250 2.1.5 Ok
C: DATA
S: 354 End data with <CR><LF>.<CR><LF>
C: From: alice@example.org
C: To: bob@example.com
C: Subject: Test Message
C: Date: Thu, 09 Apr 2026 12:00:00 +0000
C: Message-ID: <12345@example.org>
C:
C: This is the message body.
C: .
S: 250 2.0.0 Ok: queued as ABC123
C: QUIT
S: 221 2.0.0 Bye
```

**Session Commands**

- `EHLO` (Extended HELO): Identifies the client and requests the server's supported extensions.
  Replaced the original `HELO` command. The server responds with a multi-line 250 reply listing all
  advertised extensions.

- `MAIL FROM:`: Specifies the envelope sender address (reverse-path). This address is used for
  bounce messages (NDRs) and is separate from the `From` header in the message body. The `BODY=`
  parameter specifies the message body encoding (`7BIT` or `8BITMIME`). The `SIZE=` parameter
  declares the message size in bytes.

- `RCPT TO:`: Specifies a single envelope recipient (forward-path). Multiple recipients require
  multiple `RCPT TO` commands.

- `DATA`: Initiates the message data transfer. The server responds with `354` and expects the
  message content terminated by a line containing only a period (`.`). Lines in the message body
  that begin with a period are dot-stuffed (an extra period is prepended) to prevent premature
  termination. The receiving MTA removes the extra period during processing.

- `QUIT`: Terminates the session.

- `RSET`: Resets the current mail transaction, discarding any `MAIL FROM`, `RCPT TO`, and `DATA`
  state without closing the connection.

- `VRFY`: Verifies that a mailbox name is valid (often disabled on production servers to prevent
  directory harvesting).

- `NOOP`: No operation; used to keep the connection alive or test server responsiveness.

### SMTP Extensions

SMTP extensions are advertised in the `EHLO` response and are defined in various RFCs.

**STARTTLS (RFC 3207)**

The `STARTTLS` command upgrades the plaintext TCP connection to TLS. The client sends `STARTTLS`,
the server responds with `220`, and a standard TLS handshake follows. All subsequent commands are
transmitted over the encrypted channel. STARTTLS provides opportunistic encryption on port 25 and
should be mandatory on port 587 (submission). After the TLS handshake, the client must re-issue
`EHLO` to discover extensions available under encryption.

**AUTH (RFC 4954)**

The `AUTH` extension provides SASL (Simple Authentication and Security Layer, RFC 4422)
authentication mechanisms. Common mechanisms include `PLAIN` (username and password sent in base64),
`LOGIN` (similar to PLAIN but non-standard), `CRAM-MD5` (challenge-response, now deprecated due to
cryptographic weakness), and `XOAUTH2` (OAuth 2.0 bearer tokens, used by Gmail and others). The
command syntax is `AUTH mechanism [initial-response]`.

**SIZE (RFC 1870)**

The `SIZE` extension allows the client to declare the message size with `MAIL FROM: SIZE=nnnn` and
allows the server to advertise its maximum message size limit in the `EHLO` response
(`250-SIZE 10485760`). This prevents the server from accepting a `DATA` command only to reject the
message after receiving the entire body due to size limits.

**PIPELINING (RFC 2920)**

`PIPELINING` allows the client to send multiple commands without waiting for each response. This
reduces round-trip latency, especially over high-latency links. A pipelining client might send
`MAIL FROM`, `RCPT TO` (for all recipients), and `DATA` in rapid succession, then read all
responses. The client must be prepared to handle errors from any command and roll back accordingly.
For example, if the first `RCPT TO` is rejected but the second is accepted, the client should not
send the `DATA` body since at least one recipient was rejected.

**8BITMIME (RFC 6152)**

Allows transmission of 8-bit data (octets with the high bit set) in message bodies. The client
advertises this with `MAIL FROM: BODY=8BITMIME`. Without this extension, only 7-bit ASCII is
permitted in the mail body.

**DSN (RFC 3461)**

Delivery Status Notifications extend the envelope to request delivery receipts, failure reports, and
delayed delivery notifications. The `ORCPT` parameter on `RCPT TO` specifies the original recipient
address, and `NOTIFY=SUCCESS,FAILURE,DELAY` controls which DSN events are generated. DSN reports are
structured as `multipart/report` messages with a machine-readable `message/delivery-status` part and
an optional human-readable `text/plain` part.

**CHUNKING (RFC 3030)**

The `BDAT` command (used with the `CHUNKING` extension) transmits the message body in fixed-size
chunks instead of requiring the entire body after a single `DATA` command. Each chunk is sent with
`BDAT size [LAST]`. This avoids the need for dot-stuffing and allows the server to reject oversized
messages early, after receiving only the first chunk.

### SMTP Response Codes

SMTP uses three-digit reply codes grouped by the first digit:

| First Digit | Meaning                                                                                |
| ----------- | -------------------------------------------------------------------------------------- |
| `2xx`       | Success. The requested action was completed.                                           |
| `3xx`       | Intermediate success. Further information is required (e.g., `354` for `DATA`).        |
| `4xx`       | Temporary failure. The command failed but may succeed if retried later.                |
| `5xx`       | Permanent failure. The command should not be retried without correcting the condition. |

Common response codes:

| Code  | Meaning                                                           |
| ----- | ----------------------------------------------------------------- |
| `211` | System status or system help reply.                               |
| `214` | Help message (informational).                                     |
| `220` | Service ready.                                                    |
| `221` | Service closing transmission channel.                             |
| `235` | Authentication successful.                                        |
| `250` | Requested mail action okay, completed.                            |
| `252` | Cannot VRFY user, but will accept message for delivery.           |
| `334` | AUTH challenge (base64-encoded).                                  |
| `354` | Start mail input; end with `.`.                                   |
| `421` | Service not available, closing connection.                        |
| `450` | Requested mail action not taken: mailbox unavailable (temporary). |
| `451` | Requested action aborted: local error in processing.              |
| `452` | Requested action not taken: insufficient system storage.          |
| `455` | Server unable to accommodate parameters.                          |
| `500` | Syntax error, command unrecognized.                               |
| `501` | Syntax error in parameters or arguments.                          |
| `502` | Command not implemented.                                          |
| `503` | Bad sequence of commands.                                         |
| `530` | Authentication required.                                          |
| `535` | Authentication credentials invalid.                               |
| `550` | Requested action not taken: mailbox unavailable (permanent).      |
| `551` | User not local; try a different forwarding path.                  |
| `552` | Requested action aborted: exceeded storage allocation.            |
| `553` | Requested action not taken: mailbox name not allowed.             |
| `554` | Transaction failed (general permanent failure).                   |

The enhanced mail status codes (RFC 3463) extend the three-digit code with an `x.y.z` structure
providing granular information about the subject (x), detail (y), and action (z). For example,
`5.7.1` indicates a security or policy status with a delivery not authorized message.

### Bounce Messages

When an MTA cannot deliver a message (permanent 5xx failure or retry exhaustion), it generates a
bounce message (Non-Delivery Report, or NDR). The bounce is sent to the envelope sender address from
the original `MAIL FROM` command. Bounce messages use the `multipart/report` MIME type with a
`message/delivery-status` part containing structured fields (per-message and per-recipient DSN
fields defined in RFC 3464) and an optional human-readable explanation.

DSN per-recipient fields include `Action` (failed, delayed, delivered, relayed), `Status` (the
enhanced status code), `Diagnostic-Code` (the SMTP response), `Final-Recipient`, and `Remote-MTA`.
These fields allow automated systems and administrators to diagnose delivery failures
programmatically.

## IMAP — Internet Message Access Protocol

### Overview

IMAP is defined in RFC 3501 (obsoleting RFC 2060) and operates on port 143 for plaintext and port
993 for implicit TLS (IMAPS). IMAP provides remote access to mailbox contents, allowing clients to
manipulate server-side mailboxes, search messages, set and clear flags, and manage attachments
without downloading entire messages.

IMAP is a stateful, long-lived protocol. The client maintains a selected mailbox and operates on
messages within that context. The server preserves message state (flags, folder assignments,
sequence numbers) across sessions. This design enables seamless access from multiple devices, as
each device sees the same server-side state.

### IMAP vs POP3

| Feature              | IMAP                              | POP3                           |
| -------------------- | --------------------------------- | ------------------------------ |
| Port (TLS)           | 993                               | 995                            |
| Port (plain)         | 143                               | 110                            |
| Mailbox model        | Hierarchical, multiple folders    | Single flat inbox              |
| Message state        | Server-side flags, persistent     | Client-side only               |
| Partial fetch        | Yes (byte ranges, MIME sections)  | No (entire message only)       |
| Search               | Server-side, flexible criteria    | No server-side search          |
| Folder operations    | Create, rename, delete, subscribe | Not supported                  |
| Concurrent access    | Yes, multiple clients             | No, locks mailbox on access    |
| Offline mode         | Limited, designed for online use  | Full, designed for offline use |
| Bandwidth efficiency | High (fetch what is needed)       | Low (downloads everything)     |
| Quota support        | Yes (RFC 2087)                    | No                             |
| Push notifications   | Yes (IDLE, RFC 2177)              | No                             |

IMAP is the preferred protocol for users who access email from multiple devices or need server-side
organization. POP3 remains suitable for simple, single-device use cases where messages are
downloaded and stored locally.

### IMAP Model

**Mailboxes**

IMAP mailboxes are hierarchical containers for messages, analogous to directories in a filesystem.
The hierarchy separator is configurable per server (commonly `/` or `.`). Special mailboxes include
`INBOX` (the required primary mailbox), and implementations typically provide `Drafts`, `Sent`,
`Trash`, and `Junk`. The `LIST` command enumerates mailboxes, and `LSUB` lists subscribed mailboxes.
Mailboxes can be shared between users with ACL-based permissions.

**Messages**

Each message has a unique identifier (UID) that is assigned when the message is delivered to the
mailbox and never changes, even if other messages are expunged. UIDs are monotonically increasing
32-bit integers that are unique within a UID validity window (the `UIDVALIDITY` value, which changes
if the mailbox is deleted and recreated). The server also assigns a sequence number to each message
based on its position in the mailbox (1-based index). Sequence numbers change when messages are
expunged; UIDs do not. Clients should use UIDs for persistent references and sequence numbers for
operations within a single session.

**Flags**

IMAP defines system flags that convey message state:

| Flag        | Meaning                                                     |
| ----------- | ----------------------------------------------------------- |
| `\Seen`     | Message has been read.                                      |
| `\Answered` | Message has been replied to.                                |
| `\Flagged`  | Message is marked as important (starred).                   |
| `\Deleted`  | Message is marked for deletion (removed on EXPUNGE).        |
| `\Draft`    | Message is a draft.                                         |
| `\Recent`   | Message arrived since the last session (session-only flag). |

Servers may also support custom keywords (user-defined flags) for additional categorization. These
keywords are prefixed with `$` by convention (e.g., `$Junk`, `$NonJunk`, `$Phishing`).

### IMAP Commands

IMAP uses tagged commands: each client command is prefixed with an arbitrary tag (typically an
incrementing string like `A001`, `A002`), and the server's response includes the same tag. Untagged
responses (`*`) convey unsolicited data or status updates.

```
C: A001 LOGIN user@example.com password
S: A001 OK LOGIN completed
C: A002 SELECT INBOX
S: * 42 EXISTS
S: * 0 RECENT
S: * FLAGS (\Answered \Flagged \Deleted \Seen \Draft)
S: * OK [PERMANENTFLAGS (\Answered \Flagged \Deleted \Seen \Draft \*)]
S: * OK [UIDVALIDITY 1234567890] UIDs valid
S: * OK [UIDNEXT 500] Predicted next UID
S: A002 OK [READ-WRITE] SELECT completed
C: A003 FETCH 1:5 (FLAGS BODY[HEADER.FIELDS (FROM SUBJECT DATE)])
S: * 1 FETCH (FLAGS (\Seen) BODY[HEADER.FIELDS (FROM SUBJECT DATE)] {123}
S: From: alice@example.org
S: Subject: Test
S: Date: Thu, 09 Apr 2026 12:00:00 +0000
S: )
S: * 2 FETCH (FLAGS (\Seen \Answered) BODY[HEADER.FIELDS (...) ] {145}
S: ...
S: )
S: A003 OK FETCH completed
C: A004 STORE 6:10 +FLAGS (\Flagged)
S: * 6 FETCH (FLAGS (\Seen \Flagged))
S: * 7 FETCH (FLAGS (\Seen \Flagged))
S: A004 OK STORE completed
C: A005 EXPUNGE
S: * 3 EXPUNGE
S: * 5 EXPUNGE
S: A005 OK EXPUNGE completed
C: A006 IDLE
S: + idling
[ Server pushes unsolicited EXISTS, FETCH, EXPUNGE as mail arrives ]
C: DONE
S: A006 OK IDLE terminated
```

**Command Reference**

- `LOGIN username password`: Authenticates the user. Prefer `AUTHENTICATE` with SASL mechanisms over
  plaintext `LOGIN`. On TLS-protected connections, PLAIN and LOGIN are acceptable. The
  `AUTHENTICATE` command supports CRAM-MD5, SCRAM-SHA-1/256, XOAUTH2, and other SASL mechanisms.

- `SELECT mailbox`: Opens a mailbox for read-write access. The server returns message count
  (`EXISTS`), recent count (`RECENT`), flags, UID validity, and other mailbox metadata. `EXAMINE`
  opens the mailbox read-only.

- `FETCH message-set data-items`: Retrieves message content or metadata. The message set can be a
  single number, a range (`1:100`), a comma-separated list, or UID references (e.g., `UID 100:200`).
  Data items include `FLAGS`, `ENVELOPE`, `BODYSTRUCTURE`, `BODY[section]`, `BODY[section]` with
  partial offsets (e.g., `BODY[1]` for the first MIME part), `BODY.PEEK[section]` (fetches without
  setting `\Seen`), `RFC822.SIZE`, and `INTERNALDATE`.

- `STORE message-set data-items`: Modifies message flags or other metadata. Uses `+FLAGS` (add),
  `-FLAGS` (remove), or `FLAGS` (replace) followed by a parenthesized list. `+FLAGS.SILENT`
  suppresses the untagged `FETCH` response for performance.

- `EXPUNGE`: Permanently removes all messages marked with `\Deleted` from the mailbox. Sequence
  numbers are renumbered after expunge. This command is irreversible.

- `IDLE`: Enters an idle state where the server pushes unsolicited updates (new messages, flag
  changes, expunges) to the client. The client sends `DONE` to exit idle mode. IDLE (RFC 2177)
  enables real-time notification without polling. The server may terminate IDLE after a timeout
  (typically 29 minutes, to stay below the 30-minute TCP keepalive threshold).

- `SEARCH criteria`: Searches messages in the selected mailbox based on criteria such as `FROM`,
  `SUBJECT`, `SINCE`, `BEFORE`, `LARGER`, `SMALLER`, `UNSEEN`, `DELETED`, `FLAGGED`, `ALL`, and
  logical operators (`AND`, `OR`, `NOT`). The server returns matching sequence numbers or UIDs if
  the `UID` variant is used.

- `COPY message-set mailbox`: Copies messages to another mailbox. Not atomic with respect to flag
  changes.

- `APPEND mailbox [flags] [date] literal`: Appends a message to a mailbox, optionally with flags and
  a date. Used for uploading draft messages or moving messages between accounts.

- `LIST reference mailbox-pattern`: Lists mailboxes matching a pattern using `*` and `%` wildcards
  (`*` matches across hierarchy separators, `%` matches within a single level). `RLIST` returns
  listing extensions (RFC 5258).

- `CREATE mailbox`, `DELETE mailbox`, `RENAME old new`: Manage mailbox creation, deletion, and
  renaming.

### IMAP Extensions

**IMAP4rev1 (RFC 3501)** is the base specification. Several extensions enhance functionality:

- **IDLE (RFC 2177)**: Push notifications for new mail and flag changes, eliminating the need for
  polling.

- **UIDPLUS (RFC 4315)**: Provides `UID EXPUNGE` to expunge specific messages by UID without
  affecting other messages' sequence numbers. Also extends `COPY` and `APPEND` to return the
  assigned UID via the `COPYUID` and `APPENDUID` response codes.

- **ACL (RFC 4314)**: Access Control Lists allow granular permission management on shared mailboxes.
  Permissions include `l` (lookup), `r` (read), `s` (set seen/unseen flag), `w` (write flags other
  than `\Seen` and `\Deleted`), `i` (insert), `p` (post), `c` (create sub-mailboxes), `d` (delete
  messages), `a` (administer ACLs).

- **LITERAL+ (RFC 7888)**: Allows non-synchronizing literals, where the client sends the literal
  data immediately without waiting for a continuation request from the server, reducing round trips.

- **ENABLE (RFC 5161)**: Allows clients to enable specific extensions selectively (e.g.,
  `ENABLE CONDSTORE QRESYNC`).

- **MOVE (RFC 6851)**: Adds the `MOVE` command to atomically move messages between mailboxes,
  equivalent to `COPY` + `STORE +FLAGS (\Deleted)` + `EXPUNGE` but atomic and more efficient.

- **SORT (RFC 5256)**: Server-side sorting of search results by date, subject, from, size, arrival,
  and other criteria using the `SORT` command.

- **THREAD (RFC 5256)**: Server-side threading of messages into conversation threads using
  `REFERENCES` (matches `In-Reply-To` and `References` headers) or `ORDEREDSUBJECT` (groups by
  normalized subject) algorithms.

- **URLAUTH (RFC 4467)**: Generates authenticated URLs that grant time-limited, scoped access to
  specific message parts (e.g., `IMAP URLAUTH ... EXPIRE 20260409T120000`). Used for embedded
  content in webmail without requiring the viewer to be authenticated to the IMAP server.

- **QRESYNC (RFC 5162)**: Efficient resynchronization of a client's mailbox state after a
  disconnection. The client sends its last known `MODSEQ` and `UIDVALIDITY`, and the server responds
  with only the changes that occurred since that point.

- **CONDSTORE (RFC 7162)**: Stores a modification sequence number (mod-sequence) for each flag
  change, enabling clients to detect changes since their last checkpoint efficiently. Combined with
  `FETCH (CHANGEDSINCE modseq)`, the client receives only messages that have been modified.

- **OBJECTID (RFC 8474)**: Assigns server-generated, globally unique object identifiers to mailboxes
  and messages, independent of UIDs and UIDVALIDITY, for robust synchronization.

## POP3 — Post Office Protocol version 3

### Overview

POP3 is defined in RFC 1939 and operates on port 110 for plaintext and port 995 for implicit TLS
(POP3S). POP3 is a simple protocol designed for downloading messages from a server to a local
client. It has three phases: authorization, transaction, and update.

POP3 is stateless between sessions. It does not support server-side folder management, partial
message retrieval beyond `TOP`, or concurrent access by multiple clients. Its simplicity makes it
suitable for environments where messages are processed locally after download and removed from the
server.

### POP3 Modes

POP3 supports two primary usage modes:

**Download-and-Delete (default)**

After the client retrieves messages with `RETR`, it issues `DELE` to mark messages for deletion.
When the client sends `QUIT`, the server permanently removes all marked messages. This is the
traditional POP3 model where the server acts as a temporary holding area. Once the client downloads
the messages and the server deletes them, the server has no record of the messages.

**Download-and-Keep**

The client retrieves messages but does not issue `DELE` commands. Messages remain on the server
after `QUIT`. This allows the client to re-download messages in a future session, but the POP3
protocol itself provides no mechanism to track which messages have already been downloaded. Clients
must implement their own tracking, typically by examining `Message-ID` headers or using the `UIDL`
command to correlate messages across sessions.

### POP3 Commands

```
C: USER user@example.com
S: +OK
C: PASS password
S: +OK logged in
C: STAT
S: +OK 3 12540
C: LIST
S: +OK
S: 1 4200
S: 2 5100
S: 3 3240
S: .
C: RETR 1
S: +OK 4200 octets
S: [full message content including headers and body]
S: .
C: DELE 2
S: +OK message 2 marked for deletion
C: QUIT
S: +OK POP3 server signing off (maildrop empty)
```

**Command Reference**

- `USER username`: Initiates authentication with the plaintext username.

- `PASS password`: Sends the plaintext password. Combined with `USER`, this forms the `USER/PASS`
  authentication mechanism. The `APOP` command provides an alternative using MD5 digest
  authentication: the server provides a timestamp in its greeting, and the client computes
  `MD5(timestamp + shared-secret)`. Note that MD5 is now considered cryptographically weak.

- `STAT`: Returns the count of messages and total size in octets (e.g., `+OK 3 12540` means 3
  messages totaling 12,540 bytes).

- `LIST [message-number]`: Without an argument, returns a scan listing of all messages (number and
  size), terminated by a line containing only a period. With an argument, returns the size of the
  specified message.

- `RETR message-number`: Retrieves the full content of the specified message, including headers and
  body, terminated by a line containing only a period. Lines beginning with a period in the message
  are byte-stuffed (an extra period is prepended).

- `DELE message-number`: Marks the specified message for deletion. The deletion is not permanent
  until the `QUIT` command is issued. `RSET` clears all deletion marks.

- `NOOP`: No operation. The server responds with `+OK`.

- `RSET`: Unmarks all messages marked for deletion by `DELE` and resets the session state.

- `TOP message-number n`: Retrieves the headers plus the first `n` lines of the body. Useful for
  previewing messages without downloading the entire body. Not universally supported (advertised via
  `CAPA`).

- `QUIT`: Ends the session. If in the transaction phase, the server permanently deletes all messages
  marked with `DELE`, releases any locks, and closes the connection.

### POP3 Extensions

- **CAPA (RFC 2449)**: Returns a list of server capabilities, similar to SMTP's `EHLO` response.
  Capabilities include `TOP`, `USER`, `SASL`, `RESP-CODES`, `LOGIN-DELAY`, `PIPELINE`, `EXPIRE`,
  `UIDL`, and `STLS`.

- **UIDL (RFC 1939)**: Returns a unique identifier listing for each message. The unique-id is
  typically a hash or server-assigned token. This allows clients to track which messages they have
  already downloaded across sessions.

- **STLS (RFC 2595)**: Upgrades the connection to TLS, analogous to SMTP's `STARTTLS`. Must be
  issued before authentication.

- **SASL (RFC 5034)**: Supports SASL authentication mechanisms beyond `USER/PASS` and `APOP`,
  including `PLAIN`, `CRAM-MD5`, and `SCRAM-SHA-1`.

### POP3 Limitations Compared to IMAP

POP3 lacks several features that IMAP provides. It offers no server-side folder management (all
messages exist in a single flat inbox). It has no partial message retrieval (except `TOP` for
headers plus a limited number of body lines). There is no server-side search; clients must download
messages to search locally. Persistent message flags are absent (the `\Seen` state is not preserved
across sessions). Concurrent access is impossible because POP3 locks the mailbox for the duration of
the session. Server-side sorting, threading, and push notifications are not available; clients must
poll using `STAT` or `UIDL`. There is no access control for shared folders and no quota reporting.

These limitations make POP3 unsuitable for multi-device scenarios or any use case requiring
server-side message management.

## Other Application Protocols

### FTP / FTPS / SFTP

**FTP (File Transfer Protocol)** — RFC 959

FTP uses two separate TCP connections: a control connection (port 21) for commands and responses,
and a data connection for file transfers. FTP is a plaintext protocol; credentials are transmitted
in cleartext, making it inherently insecure without additional encryption.

FTP operates in two data transfer modes:

_Active mode_: The client opens a random port and communicates it to the server via the `PORT`
command. The server initiates the data connection from port 20 to the client's specified port. This
mode typically fails when the client is behind a NAT or firewall because the server-initiated
connection is blocked.

_Passive mode_: The client sends the `PASV` command. The server opens a random port and returns its
IP and port number. The client initiates the data connection to the server. Extended Passive Mode
(`EPSV`, RFC 2428) supports IPv6 by returning only a port number without an IP. Passive mode is the
default in modern clients because it works through NAT and firewalls.

**FTPS (FTP over TLS/SSL)** — RFC 4217

FTPS adds TLS encryption to FTP. Explicit TLS uses the `AUTH TLS` command on port 21, where the
client requests the TLS upgrade. Implicit TLS negotiates TLS immediately on connection to port 990.
FTPS can secure the control channel, the data channel, or both independently via the `PROT` command
(`PROT C` for clear, `PROT S` for safe/encrypted, `PROT E` for confidential). FTPS is complex to
configure through firewalls because the data connection uses dynamically negotiated ports.

**SFTP (SSH File Transfer Protocol)** — draft-ietf-secsh-filexfer

Despite the name, SFTP is not FTP over SSH. It is an entirely separate protocol that runs over the
SSH transport (port 22). SFTP provides file transfer, directory listing, file removal, and remote
file system operations. It supports resumable transfers, file locking, and symbolic link
manipulation. SFTP is preferred over FTP/FTPS in modern environments because it provides encryption,
integrity, and authentication through SSH without requiring separate TLS configuration, and it works
through firewalls with a single port (22).

### SSH — Secure Shell

SSH (RFC 4250–4254) provides secure remote access over an untrusted network. It operates on port 22
and provides three core services: user authentication, remote command execution, and encrypted
tunneling.

**Key Exchange**

SSH uses a Diffie-Hellman key exchange (or ECDH variants like curve25519-sha256) to establish a
shared secret without transmitting it. The server presents its host key (RSA, ECDSA, or Ed25519) to
prove its identity. The client verifies the host key against a known-hosts file
(`~/.ssh/known_hosts`). On first connection, the user is prompted to accept and store the host
fingerprint. The key exchange produces session encryption keys and MAC keys. SSH supports key
exchange algorithms with "curve25519-sha256@libssh.org" and "sntrup761x25519-sha512@openssh.com"
(post-quantum hybrid) as modern choices.

**Authentication**

SSH supports multiple authentication methods: public key authentication (the client proves
possession of a private key corresponding to a public key authorized in `~/.ssh/authorized_keys`),
password authentication, keyboard-interactive (challenge-response), GSSAPI (Kerberos), and
host-based authentication. Public key authentication is the most secure and widely used method. The
server may offer multiple methods and the client selects one, or the server may require specific
methods.

**Encryption**

SSH supports symmetric ciphers including AES-256-GCM, AES-128-GCM, and ChaCha20-Poly1305. Older
ciphers (3DES, AES-CBC, Blowfish) are deprecated due to cryptographic weakness. In modern protocol
versions, AEAD (Authenticated Encryption with Associated Data) ciphers provide both encryption and
integrity in a single operation, replacing the older encrypt-then-MAC approach. Key exchange
produces separate keys for each direction (client-to-server and server-to-client).

**Port Forwarding**

SSH supports local port forwarding (`ssh -L localport:remotehost:remoteport`), remote port
forwarding (`ssh -R`), and dynamic port forwarding (`ssh -D` for SOCKS proxy). These features allow
secure tunneling of arbitrary TCP traffic through the encrypted SSH connection, commonly used to
access internal services securely.

### NTP — Network Time Protocol

NTP (RFC 5905) synchronizes system clocks across a network with sub-millisecond accuracy over LAN
and tens of milliseconds over WAN. It operates on UDP port 123. SNTP (Simple Network Time Protocol,
RFC 4330) is a subset of NTP designed for clients that do not need the full Marzullo intersection
algorithm.

**Stratum Hierarchy**

NTP organizes time sources into a stratum hierarchy. Stratum 1 servers are directly synchronized to
a reference clock (GPS receiver, atomic clock, or radio clock such as WWVB). Stratum 2 servers
synchronize to stratum 1 servers, stratum 3 to stratum 2, and so on. The maximum recommended stratum
is 15; stratum 16 indicates an unsynchronized clock (the `INSYNC` bits are clear in the NTP packet's
`LI` field). Each server reports its stratum level, allowing clients to select the best available
source.

**NTP Algorithm**

The NTP daemon (`ntpd` or `chronyd`) continuously samples time from multiple upstream servers
(typically 3 to 5). For each sample, it computes three key values: the offset (difference between
local and remote clock), the round-trip delay (total transit time for the NTP packet pair), and the
dispersion (estimated error bound that increases with time since the last sample). The Marzullo
algorithm selects the most consistent subset of samples (the intersection of all intervals), and a
weighted average computes the final clock correction. The clock discipline algorithm adjusts the
system clock using a phase-locked loop (PLL) for small offsets (less than 128 ms) or a step
correction for large offsets. The slew rate is limited to 500 ppm to avoid disrupting applications
that depend on monotonic time progression.

**Security Considerations**

Unauthenticated NTP is vulnerable to man-in-the-middle attacks where an attacker can shift the
target clock arbitrarily. NTP Authentication (RFC 5905 Appendix C) provides message integrity using
symmetric key cryptography (MD5 or SHA1-based MAC, though SHA1 is deprecated). Network Time Security
(NTS, RFC 8915) adds TLS-based key exchange and authenticated encryption to NTP, providing both
integrity and authentication without pre-shared symmetric keys. NTS uses a separate TLS handshake
(on port 443) to establish key material, then uses AEAD (AES-SIV-CMAC-256 or ChaCha20-Poly1305) to
authenticate NTP packets.

**NTP Packet Structure**

An NTP packet is 48 bytes for the basic NTPv4 format. Key fields include the `LI` (Leap Indicator, 2
bits) for announcing upcoming leap seconds, `VN` (Version Number, 3 bits), `Mode` (3 bits: client=3,
server=4), `Stratum` (8 bits), `Poll` (log2 of polling interval), `Precision` (log2 of system clock
precision), root delay and root dispersion (32-bit fixed-point seconds), reference ID, reference
timestamp, originate timestamp, receive timestamp, and transmit timestamp. The client copies the
server's transmit timestamp into its next request's originate field, and the server uses this to
compute the round-trip delay and offset.

### LDAP — Lightweight Directory Access Protocol

LDAP (RFC 4510–4519) is an application-layer protocol for accessing and maintaining distributed
directory information services. It operates on port 389 for plaintext and port 636 for LDAPS (LDAP
over TLS). LDAP is designed for read-heavy workloads with infrequent writes, making it well-suited
for user authentication, address books, organizational directories, and configuration management.

**Data Model**

LDAP organizes data as a Directory Information Tree (DIT). Each entry has a Distinguished Name (DN)
that uniquely identifies its position in the tree. A DN is a sequence of Relative Distinguished
Names (RDNs), for example: `uid=jdoe,ou=People,dc=example,dc=com`. Each entry consists of a set of
attributes, each with one or more values. Attributes are defined by an object class schema that
specifies which attributes are required and which are optional.

**Common Operations**

- `BIND`: Authenticates the client to the directory server. Supports simple authentication
  (plaintext password, must only be used over TLS), SASL authentication (e.g., GSSAPI for Kerberos),
  and anonymous binding.

- `SEARCH`: Queries the directory for entries matching a filter. The search scope can be `base`
  (single entry), `one` (one level of children), or `sub` (entire subtree). Search filters use
  prefix notation with parentheses. For example, `(&(objectClass=person)(uid=jdoe))` is an AND of
  two equality tests. `(|(uid=jdoe)(uid=asmith))` is an OR. `(!(uid=admin))` is a NOT. Substring
  filters use `cn=John*` and presence filters use `objectClass=*`.

- `ADD`, `MODIFY`, `DELETE`: Insert, update, or remove directory entries. `MODIFY` supports add,
  replace, and delete operations on individual attributes within an entry.

- `COMPARE`: Tests whether an entry contains a specific attribute value without returning the entry
  itself. Useful for password verification (the server hashes the comparison value and checks
  against the stored hash).

- `MODIFY DN`: Moves or renames an entry in the DIT (changes the entry's RDN or parent).

**Schema**

The LDAP schema defines the structure of directory entries through object classes and attribute
types. Object classes define required and optional attributes. Common object classes include
`inetOrgPerson` (organizational person with email, phone, title), `organizationalUnit` (`ou`), and
`groupOfNames` (group membership). Attribute syntaxes include `DirectoryString` (UTF-8 text),
`Integer`, `GeneralizedTime` (for timestamps), `OctetString` (binary data), and `DN` (distinguished
name reference). Schema rules enforce structural, auxiliary, and abstract class inheritance.

**Performance and Indexing**

LDAP servers maintain indexes on frequently searched attributes to achieve sub-millisecond query
performance. Common index types include presence (does the attribute exist), equality (exact match),
substring (prefix, suffix, or infix matching), approximate (phonetic matching for names), and range.
Complex nested filters and unindexed searches (e.g., `(!(someUnindexedAttr=value))`) can trigger
full database scans on large directories, causing severe performance degradation. Administrators
should monitor slow queries and ensure appropriate indexes are in place.

### SMB/CIFS — Server Message Block / Common Internet File System

SMB (originating from IBM, then Microsoft, with IETF drafts) is a file-sharing protocol primarily
used in Windows environments. CIFS is an older dialect of SMB. Modern implementations use SMB 2.0
(introduced with Windows Vista / Server 2008) or SMB 3.0/3.1.1 (introduced with Windows 8 / Server
2012).

**Transport**

SMB historically used NetBIOS over TCP/IP on ports 137 (name service), 138 (datagram service), and
139 (session service). Modern SMB operates directly over TCP on port 445 (Direct Hosting of SMB over
TCP/IP). SMB 3.1.1 supports SMB over QUIC (port 443) for internet-facing file shares in Windows
Server 2022 and later, providing encryption over public networks without requiring VPN
infrastructure.

**Protocol Features**

SMB 2.0/3.0 introduced significant improvements over SMB 1.0. Compound requests batch multiple
operations into a single request-response, reducing round trips. Durable handles allow file handles
to survive temporary network disconnections (useful for VM live migration). Leasing enables
aggressive client-side caching with server-issued guarantees. Multichannel aggregates bandwidth
across multiple network interfaces simultaneously. SMB 3.0 encryption (AES-128-CCM or AES-128-GCM)
encrypts all data in transit, protecting against eavesdropping. Continuous availability provides
transparent failover in clustered server environments. SMB 3.1.1 adds pre-authentication integrity
(AES-CMAC) to prevent downgrade attacks.

**Authentication**

SMB supports NTLMv2 and Kerberos authentication. Active Directory domains use Kerberos by default
(via SPNEGO negotiation), providing mutual authentication and constrained delegation. NTLMv2 is used
in workgroup environments without a domain controller. SMB signing (HMAC-SHA256) provides message
integrity but not confidentiality; it is mandatory in SMB 3.0 by default.

**Linux Support**

Samba provides SMB/CIFS client and server functionality on Linux and other Unix systems. The
`cifs-utils` package provides mount helpers, and the kernel includes the `cifs.ko` filesystem driver
for mounting SMB shares. Samba implements an Active Directory domain controller, file server, print
server, and Winbind (for Linux-to-Windows authentication integration).

### NFS — Network File System

NFS, developed by Sun Microsystems, allows remote filesystem access over a network. Current versions
are NFSv4.1 (RFC 8881) and NFSv4.2 (RFC 7862). NFS is RPC-based (Remote Procedure Call, RFC 5531)
and historically used UDP or TCP on port 2049. NFSv4 uses TCP exclusively.

**NFSv4 Features**

NFSv4 represents a major redesign of the protocol. Key features include stateful operation (file
locking via `LOCK`, `LOCKU` operations, open delegation where the server grants a client exclusive
or shared access rights), a single port (2049) and single protocol (no separate `mountd`, `statd`,
`lockd` daemons required), strong security with mandatory `RPCSEC_GSS` using Kerberos v5,
firewall-friendly operation (all traffic on one TCP port), compound procedures (batch multiple RPC
operations into a single request via `COMPOUND`), internationalization (UTF-8 filenames via `UTF8`
attribute), and Access Control Lists (both POSIX.1e ACLs and NFSv4-style ACLs).

**NFSv4.2 Additions**

NFSv4.2 adds server-side copy (the `COPY` operation copies data between server-side files without
routing data through the client), space reservation (the `ALLOCATE` and `DEALLOCATE` operations
reserve or release space to prevent `ENOSPC` errors during writes), application I/O advice (the
`READ_PLUS` operation returns both file data and hole information, enabling efficient backup of
sparse files), labeled NFS (RFC 8661, security labels on files for mandatory access control), and
pNFS (parallel NFS, RFC 8661) which separates the metadata server (MDS) from multiple storage
servers for scalable parallel data access.

**Exports and Security**

The NFS server controls access through the `exports` configuration file, specifying which clients
may mount which filesystems and with what options (rw/ro, root squashing, subtree checking,
sync/async, sec= flavor). Security mechanisms include `AUTH_SYS` (the client reports the UID/GID
directly; insecure but simple, suitable for trusted LANs), `AUTH_NONE` (anonymous access, rarely
used), and `RPCSEC_GSS` (Kerberos v5-based authentication providing three security flavors: `krb5`
for authentication only, `krb5i` for authentication plus integrity, and `krb5p` for authentication
plus integrity plus privacy/encryption).

## Email Security

### SPF — Sender Policy Framework

SPF (RFC 7208) allows a domain owner to specify which mail servers are authorized to send email on
behalf of the domain. The policy is published as a DNS TXT record on the domain.

**DNS Record Format**

```
example.com. IN TXT "v=spf1 ip4:192.0.2.0/24 include:_spf.google.com ~all"
```

**Mechanisms**

| Mechanism        | Meaning                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| `all`            | Matches all senders. Always placed at the end as the default policy.          |
| `include:domain` | Includes the SPF policy of the specified domain recursively.                  |
| `a`              | Matches if the sender's IP matches an A record of the domain.                 |
| `mx`             | Matches if the sender's IP matches an MX record of the domain.                |
| `ip4:cidr`       | Matches if the sender's IP is within the specified IPv4 CIDR range.           |
| `ip6:cidr`       | Matches if the sender's IP is within the specified IPv6 CIDR range.           |
| `ptr`            | Matches if the reverse DNS of the sender resolves to the domain (deprecated). |
| `exists:domain`  | Matches if the specified domain resolves to any address.                      |

**Qualifiers**

Each mechanism may be prefixed with a qualifier: `+` (default, pass), `-` (fail, unauthorized), `~`
(softfail, probably unauthorized but do not reject), `?` (neutral, no assertion).

**SPF Limitations**

SPF validates only the envelope sender domain (the domain in the `MAIL FROM` command), not the
`From` header that users see in their MUA. This mismatch is addressed by DMARC's alignment
mechanism. SPF also breaks when email is forwarded through a mailing list or a `.forward` file,
because the forwarding server's IP address is unlikely to be listed in the original sender's SPF
record. Additionally, SPF has a 10-lookup limit to prevent DNS abuse; complex `include` chains can
exhaust this limit.

### DKIM — DomainKeys Identified Mail

DKIM (RFC 6376) provides cryptographic assurance that a message was sent by an authorized
representative of the signing domain and that the message content has not been modified in transit.

**Signing Process**

The sending MTA selects the appropriate signing key for the domain in the `From` header. The MTA
computes a hash of selected headers and the message body, creates a signature over those hashes
using the domain's private key (typically RSA-2048 or Ed25519), and inserts a `DKIM-Signature`
header into the message.

```
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
    d=example.com; s=selector1;
    h=from:to:subject:date:message-id;
    bh=2jUSOH9NhtXRTHo1h9fHxRMW+rE=;
    b=dzdVyOfAKCdLXdJOc9G2q8LoXSlEniSbav+yuU4zGeeruD...
```

**Key Fields**

- `v`: DKIM version (always `1`).
- `a`: Signing algorithm (`rsa-sha256`, `ed25519-sha256`).
- `c`: Canonicalization for header and body (`simple`, `relaxed`).
- `d`: The signing domain.
- `s`: The selector used to look up the public key in DNS.
- `h`: Signed header fields, listed in the order signed.
- `bh`: Body hash (base64-encoded SHA-256).
- `b`: The signature data (base64-encoded).

**Verification Process**

The receiving MTA extracts the signing domain (`d=`) and selector (`s=`) from the `DKIM-Signature`
header. It performs a DNS TXT query for `selector._domainkey.domain` to retrieve the public key
record. The public key record contains the key data (`p=`), the key type (`k=rsa` or `k=ed25519`),
and optional service types and hash algorithms. The verifier then canonicalizes the headers and body
according to the `c=` algorithm, recomputes the hash, and verifies the signature using the public
key. If the body hash in `bh=` does not match, the body has been altered; if the signature
verification fails, the headers have been altered.

**Canonicalization**

Canonicalization normalizes minor variations in message formatting before signing and verification.

_Simple_ (`s`): Headers and body are passed through with minimal processing. Any modification (even
an extra space or trailing newline) invalidates the signature. Body canonicalization removes all
trailing empty lines.

_Relaxed_ (`r`): Header names are lowercased, whitespace in header values is collapsed to single
spaces, and unfolding whitespace is normalized. The body canonicalization ignores trailing
whitespace on each line and removes all trailing empty lines. This is more tolerant of modifications
made by intermediate MTAs that may reflow or rewrap headers.

The `c=` field specifies header and body canonicalization separately (e.g., `c=relaxed/relaxed` is
the most common and forgiving combination).

### DMARC — Domain-based Message Authentication, Reporting, and Conformance

DMARC (RFC 7489) builds on SPF and DKIM to provide a policy framework that aligns the visible `From`
header domain with the authenticated domain. DMARC also provides reporting mechanisms so domain
owners can monitor authentication performance.

**Policy Alignment**

DMARC requires alignment between the domain in the `From` header and either the SPF-authenticated
domain (envelope sender from `MAIL FROM`) or the DKIM-authenticated domain (the `d=` tag in
`DKIM-Signature`). At least one must pass alignment for DMARC to pass.

_Strict alignment_: The domains must match exactly (case-insensitive).

_Relaxed alignment_: The organizational domains must match. For example, `news.example.com` and
`example.com` align under relaxed mode. The `From` domain must be equal to or a subdomain of the
authenticated domain.

**DNS Record Format**

```
_dmarc.example.com. IN TXT "v=DMARC1; p=reject; rua=mailto:dmarc@example.com; pct=100; adkim=r; aspf=r"
```

**Policy Tags**

| Tag              | Purpose                                                             |
| ---------------- | ------------------------------------------------------------------- |
| `v=DMARC1`       | Protocol version.                                                   |
| `p=none`         | Monitor mode. No action on failures; reports generated.             |
| `p=quarantine`   | Failing messages treated as suspicious (spam folder).               |
| `p=reject`       | Failing messages rejected at SMTP (550 response).                   |
| `sp=`            | Policy for subdomains (defaults to `p` value).                      |
| `pct=100`        | Percentage of messages the policy applies to (for gradual rollout). |
| `rua=mailto:...` | Aggregate report destination (XML, daily).                          |
| `ruf=mailto:...` | Forensic report destination for individual failures (ARF format).   |
| `ri=86400`       | Reporting interval in seconds (default 86400).                      |
| `adkim=s`        | DKIM alignment mode: `s` (strict) or `r` (relaxed).                 |
| `aspf=s`         | SPF alignment mode: `s` (strict) or `r` (relaxed).                  |

**Reporting**

DMARC defines two report types. Aggregate reports (RUA) are sent periodically (default daily) and
contain statistics about authentication results for the domain: total message count, SPF pass/fail
counts, DKIM pass/fail counts, DMARC disposition applied, and the source IP addresses. Forensic
reports (RUF) are sent immediately for each failing message and include the original message headers
for forensic analysis. Many domain operators start with `p=none` and `rua` reporting during an
initial monitoring phase (typically 2 to 4 weeks) to assess their email ecosystem, then escalate to
`p=quarantine` and finally `p=reject` once the data shows a clean authentication profile.

### STARTTLS and SMTP TLS

**STARTTLS (RFC 3207)**

STARTTLS upgrades an existing plaintext SMTP connection to TLS. The client sends the `STARTTLS`
command, the server responds with `220`, and a standard TLS handshake follows. After the handshake,
the client must re-issue `EHLO` to discover extensions available over the encrypted channel.
STARTTLS provides opportunistic encryption on port 25 (the client uses it if available) and should
be mandatory on port 587 (submission).

**TLS Requirements**

RFC 8314 recommends TLS 1.2 or higher for email submission and access (IMAP, POP3, SMTP submission).
TLS 1.0 and 1.1 have been deprecated by the IETF. Modern configurations should use TLS 1.3, which
provides forward secrecy by default (all key exchange uses ephemeral Diffie-Hellman), eliminates
legacy cipher suites (no RC4, DES, 3DES, or CBC-mode ciphers), and reduces handshake latency to one
round trip (0-RTT with session resumption).

**MTA-STS (SMTP MTA Strict Transport Security, RFC 8461)**

MTA-STS allows a receiving domain to signal that sending MTAs must use TLS when delivering mail to
it. The policy is published at `https://mta-sts.example.com/.well-known/mta-sts.txt`. The DNS TXT
record `_mta-sts.example.com` enables the mechanism. The policy specifies the TLS mode (`enforce`,
`testing`, or `none`), the minimum TLS version (`TLSv1.1` or `TLSv1.2`), and the list of MX
hostnames. If MTA-STS is in `enforce` mode and a sending MTA cannot establish a TLS connection with
the required version to any of the listed MX hosts, the message should not be delivered and should
be queued for retry.

**DANE for SMTP (RFC 7672)**

DANE (DNS-Based Authentication of Named Entities) allows a domain to publish TLSA records in
DNSSEC-signed DNS that specify the expected TLS certificate for its SMTP servers. This provides
certificate pinning without relying on CA (Certificate Authority) validation, eliminating the risk
of compromised or fraudulent CA-issued certificates. DANE for SMTP uses the `_smtp._tcp.example.com`
DNS name for TLSA record lookup. The TLSA record specifies the certificate association type (e.g.,
usage 3: DANE-EE, trust anchor or certificate), the selector (e.g., 0: full certificate, 1: public
key), and the matching type (e.g., 0: exact match, 1: SHA-256 hash, 2: SHA-512 hash).

### PGP and S/MIME for End-to-End Encryption

**PGP (Pretty Good Privacy) / OpenPGP (RFC 4880)**

PGP uses a web of trust model for public key distribution. Each user generates a public/private key
pair and signs the public keys of other users they have personally verified. Trust is transitive: if
Alice trusts Bob and Bob has signed Charlie's key, Alice may choose to extend partial trust to
Charlie. OpenPGP encrypts messages using a hybrid scheme: the message content is encrypted with a
symmetric cipher (AES-256), and the symmetric session key is encrypted with each recipient's public
key (RSA or Elliptic Curve). PGP/MIME (RFC 3156) encapsulates OpenPGP-encrypted and signed data
within MIME structures.

PGP message formats in MIME:

`multipart/encrypted` contains the OpenPGP-encrypted session key (`application/pgp-encrypted`) and
the symmetrically encrypted data (`application/octet-stream`). `multipart/signed` contains the
message content and a detached signature (`application/pgp-signature`) that covers the content using
the same signing algorithms as DKIM but applied to the full message rather than selected headers.

PGP provides confidentiality (encryption), integrity (MDC — Modification Detection Code),
authentication (digital signatures), and non-repudiation. Key revocation is handled via revocation
certificates that are published to keyservers.

**S/MIME (Secure/Multipurpose Internet Mail Extensions, RFC 5751)**

S/MIME uses X.509 certificates issued by Certificate Authorities (CAs) for public key distribution,
following the PKI (Public Key Infrastructure) model. S/MIME messages use `application/pkcs7-mime`
with `smime-type=enveloped-data` for encrypted content and `multipart/signed` with
`application/pkcs7-signature` for signed content. S/MIME supports the same cryptographic algorithms
as PGP (AES-256-CBC, AES-256-GCM, RSA, ECDSA, Ed25519) but relies on hierarchical CA trust rather
than a web of trust.

S/MIME is widely deployed in enterprise environments because it integrates with existing PKI
infrastructure and is natively supported by Microsoft Outlook, Apple Mail, iOS Mail, and other
enterprise MUAs. Certificate provisioning can be automated via Microsoft Active Directory
Certificate Services, with certificates auto-enrolled through Group Policy, or via third-party CAs
such as IdenTrust, DigiCert, and GlobalSign.

**Comparison of PGP and S/MIME**

| Aspect              | PGP/OpenPGP                         | S/MIME                             |
| ------------------- | ----------------------------------- | ---------------------------------- |
| Trust model         | Web of trust                        | PKI (X.509 CAs)                    |
| Certificate format  | OpenPGP transferable public key     | X.509 certificate                  |
| Key distribution    | Keyservers, direct exchange, WKD    | CA-issued certificates             |
| Enterprise adoption | Lower                               | Higher (Outlook, Active Directory) |
| Interoperability    | GPG, Thunderbird, K-9 Mail          | Native in Outlook, iOS, macOS      |
| Flexibility         | Higher (user-controlled trust)      | Lower (CA-dependent)               |
| Revocation          | Revocation certificates, keyservers | CRL, OCSP                          |
| Key discovery       | WKD (Web Key Directory, RFC 7929)   | LDAP, S/MIME certificate attribute |

Both PGP and S/MIME require the sender and recipient to have compatible software and key material.
Neither is widely deployed for general internet email due to key management complexity and lack of
native MUA support in popular webmail interfaces, but both are mandatory in certain regulated
industries (government, defense, healthcare, finance). Google, Microsoft, and Apple have made
progress on S/MIME support in their respective email platforms, and the Autocrypt standard
(RFC 8551) provides an automated key discovery and exchange mechanism for OpenPGP that reduces user
friction.

### DNS Records for Email — Summary

A complete email domain configuration requires DNS records for mail routing and authentication:

```
; Mail routing
example.com.      IN MX  10 mail1.example.com.
example.com.      IN MX  20 mail2.example.com.

; SPF
example.com.      IN TXT "v=spf1 ip4:192.0.2.0/24 mx -all"

; DKIM (for selector "s1")
s1._domainkey.example.com. IN TXT (
  "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC..."
)

; DMARC
_dmarc.example.com. IN TXT "v=DMARC1; p=reject; rua=mailto:dmarc@example.com"

; MTA-STS (DNS enablement)
_mta-sts.example.com. IN TXT "v=STSv1; id=2026040901"
```

### Protocol Port Reference

| Protocol          | Port (Plain) | Port (TLS)     | Transport |
| ----------------- | ------------ | -------------- | --------- |
| SMTP (relay)      | 25           | —              | TCP       |
| SMTP (submission) | 587          | 465 (implicit) | TCP       |
| IMAP              | 143          | 993            | TCP       |
| POP3              | 110          | 995            | TCP       |
| FTP (control)     | 21           | 990 (implicit) | TCP       |
| FTPS (data)       | dynamic      | dynamic        | TCP       |
| SFTP              | —            | 22 (SSH)       | TCP       |
| SSH               | 22           | —              | TCP       |
| NTP               | 123          | —              | UDP       |
| LDAP              | 389          | 636            | TCP       |
| SMB               | 445          | —              | TCP       |
| NFS               | 2049         | —              | TCP       |
| DNS               | 53           | 853 (DoT)      | UDP/TCP   |
