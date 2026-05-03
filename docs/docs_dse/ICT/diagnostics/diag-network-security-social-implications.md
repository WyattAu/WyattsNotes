---
title: "Network Security and Social Implications -- Diagnostic Tests"
description: "DSE ICT diagnostic tests for network security and social implications: malware, encryption, data protection, legal/ethical issues, privacy."
slug: diag-network-security-social-implications
hide_table_of_contents: true
---

# Network Security and Social Implications — Diagnostic Tests

## Unit Tests

### UT-1: Types of Malware and Attack Vectors
**Question:** (a) Compare and contrast viruses, worms, trojans, and ransomware. (b) Explain how a phishing attack works and describe two indicators that can help identify a phishing email. (c) Describe the concept of a DDoS attack and explain how it differs from a DoS attack. (d) Explain two methods used to prevent unauthorised access to a network.

**Solution:**

(a) **Virus:** Malicious code that attaches to a legitimate program and requires user action to execute (e.g., opening an infected file). Spreads by infecting other files on the same system.

**Worm:** Self-replicating malware that spreads automatically over networks without user intervention. Does not need to attach to a host program. Exploits network vulnerabilities to propagate.

**Trojan:** Malware disguised as legitimate software. Does not self-replicate. Tricks users into installing it (e.g., fake software download). May create backdoors for attackers.

**Ransomware:** Encrypts the victim's files and demands payment (usually cryptocurrency) for the decryption key. Can spread as a worm (e.g., WannaCry) or be delivered via phishing.

(b) **Phishing:** Attackers send fraudulent emails (or messages) appearing to be from trusted sources (banks, colleagues, services) to trick recipients into revealing sensitive information (passwords, credit card numbers) or clicking malicious links.

Two indicators: (1) The sender's email address does not match the claimed organisation (e.g., support@bank-security-update.com instead of support@bank.com). (2) The email creates urgency ("Your account will be suspended in 24 hours") and contains links to suspicious URLs (hover to check before clicking).

(c) **DoS (Denial of Service):** A single source floods a target with traffic to overwhelm its resources and make it unavailable to legitimate users.

**DDoS (Distributed DoS):** Multiple compromised devices (botnet) simultaneously attack the target, making it much harder to block because the traffic comes from many different IP addresses. DDoS attacks generate far higher volumes of traffic than a single-source DoS.

(d) Two methods: (1) **Firewall:** Filters incoming and outgoing network traffic based on predetermined security rules. Can block unauthorised access while permitting legitimate communication. (2) **Intrusion Detection System (IDS):** Monitors network traffic for suspicious patterns and known attack signatures, alerting administrators to potential breaches.

### UT-2: Encryption and Data Security
**Question:** (a) Explain the difference between symmetric and asymmetric encryption. Give one example of each. (b) In asymmetric encryption, if Bob wants to send a confidential message to Alice, explain the encryption and decryption process using public and private keys. (c) Explain what a digital signature is and how it provides authentication and non-repudiation. (d) Calculate the number of possible keys for a 128-bit encryption key.

**Solution:**

(a) **Symmetric encryption:** Uses the same key for both encryption and decryption. Both parties must share the secret key securely. Faster than asymmetric encryption. Examples: AES (Advanced Encryption Standard), DES (obsolete).

**Asymmetric encryption:** Uses a pair of keys -- a public key (shared openly) and a private key (kept secret). Data encrypted with the public key can only be decrypted with the private key, and vice versa. Slower but solves the key distribution problem. Examples: RSA, ECC (Elliptic Curve Cryptography).

(b) Bob encrypts the message using **Alice's public key** (which Alice has published). Only Alice's private key can decrypt this message. Even if the encrypted message is intercepted, it cannot be read without Alice's private key. Alice decrypts using her private key.

(c) A **digital signature** is created by hashing a message and encrypting the hash with the sender's **private key**. The recipient decrypts the signature using the sender's **public key** and compares the result with their own hash of the message.

- **Authentication:** Only the sender's private key could have produced the signature, verifying the sender's identity.
- **Non-repudiation:** The sender cannot deny sending the message because only they possess their private key.
- **Integrity:** If the message was altered, the hashes would not match.

(d) A 128-bit key has $2^{128} \approx 3.4 \times 10^{38}$ possible combinations. At $10^{12}$ keys per second, it would take approximately $10^{26}$ years to try all combinations -- far longer than the age of the universe.

### UT-3: Legal and Ethical Issues
**Question:** (a) Explain the difference between the Data Protection Principle and the purpose limitation principle. (b) Describe two ethical issues related to artificial intelligence. (c) Under typical data protection legislation (e.g., GDPR or Hong Kong PDPO), what rights do individuals have regarding their personal data? (d) A company collects location data from its app users. Explain two ethical concerns and two legal obligations.

**Solution:**

(a) **Data Protection Principle:** Personal data must be collected and processed fairly, lawfully, and with the data subject's consent. Data should be accurate, kept up-to-date, and not held longer than necessary.

**Purpose Limitation Principle:** Personal data collected for one specified purpose cannot be used for a different, incompatible purpose without further consent. For example, email addresses collected for account verification cannot be used for marketing without separate consent.

(b) Two ethical issues: (1) **Bias and discrimination:** AI systems trained on biased data may perpetuate or amplify existing societal biases (e.g., hiring algorithms that discriminate against certain groups). (2) **Privacy and surveillance:** AI-powered facial recognition and data analysis can enable mass surveillance, eroding individual privacy and autonomy.

(c) Individual rights typically include: (1) Right of access -- to know what personal data is held. (2) Right to rectification -- to correct inaccurate data. (3) Right to erasure ("right to be forgotten") -- to request deletion of data. (4) Right to data portability -- to receive data in a structured, machine-readable format. (5) Right to object -- to processing based on legitimate interests or for direct marketing.

(d) **Ethical concerns:** (1) Continuous location tracking enables detailed profiling of users' movements, habits, and associations without meaningful consent. (2) Users may not fully understand or appreciate the extent of surveillance, making "consent" questionable.

**Legal obligations:** (1) The company must obtain informed, explicit consent for location data collection. (2) Data must be stored securely and for no longer than necessary. (3) Users must be informed about who has access to the data and for what purposes. (4) Users must have the right to opt out and request deletion.

---

## Integration Tests

### IT-1: Security in System Design (with Computer Systems)
**Question:** A hospital is upgrading its patient record system to be accessible via the internet while maintaining security. (a) Describe a multi-layered security approach covering: network, application, and data layers. (b) The system uses AES-256 for data at rest and TLS 1.3 for data in transit. Explain why both are necessary. (c) If a doctor accesses the system from a public Wi-Fi network, explain the specific risks and how a VPN provides protection.

**Solution:**

(a) **Network layer:** Firewall to filter traffic; IDS/IPS to detect intrusion attempts; network segmentation to isolate patient records from the public-facing network; DDoS protection.

**Application layer:** Input validation to prevent SQL injection and XSS; authentication (multi-factor authentication); session management (timeout, secure cookies); role-based access control (doctors see different data than administrators); regular security audits and penetration testing.

**Data layer:** AES-256 encryption for stored patient records; field-level encryption for sensitive fields (diagnoses, mental health records); regular backups with encryption; audit logging of all data access.

(b) **AES-256 (data at rest):** Protects patient records stored on the server's hard drives. If an attacker gains physical access to the server or steals backup drives, the data remains encrypted and unreadable.

**TLS 1.3 (data in transit):** Encrypts all data transmitted between the doctor's browser and the server. Prevents eavesdropping on the network, man-in-the-middle attacks, and tampering with data during transmission.

Both are necessary because they protect against different attack vectors: AES against storage compromise, TLS against network interception.

(c) **Risks on public Wi-Fi:** (1) Packet sniffing -- other users on the same network can capture unencrypted traffic. (2) Evil twin attack -- a rogue access point mimics the cafe's Wi-Fi to intercept traffic. (3) Session hijacking -- stealing session cookies to impersonate the doctor.

**VPN protection:** A VPN creates an encrypted tunnel between the doctor's device and a trusted VPN server. All traffic (including the TLS connection to the hospital) passes through this tunnel. Even if traffic is captured on the public Wi-Fi, it is encrypted and unreadable. The VPN hides the hospital's IP address from potential attackers on the same network.

### IT-2: Privacy and Data Protection in Practice (with Data Representation)
**Question:** A social media platform stores user data as follows: username (plain text), password (hashed with salt), email (AES encrypted), posts (plain text), location metadata (encrypted). (a) Explain why passwords are hashed rather than encrypted. (b) If the hashing algorithm produces a 256-bit output and the salt is 128 bits, calculate the total storage per user record for the password field. (c) The platform suffers a data breach and the posts database is stolen. Explain why this is a greater privacy concern than the password database breach. (d) Describe the principle of data minimisation and how the platform could apply it.

**Solution:**

(a) Passwords are hashed (one-way) rather than encrypted (reversible) because: (1) The system never needs to know the actual password -- it only needs to verify that a user-entered password matches. Hashing allows verification without storing the password. (2) If the database is compromised, attackers cannot reverse the hash to recover passwords (unlike encryption, where having the key allows decryption). (3) Each password is salted (random data added before hashing) to prevent rainbow table attacks and ensure identical passwords produce different hashes.

(b) Salt: 128 bits $= 16$ bytes. Hash output: 256 bits $= 32$ bytes. Total per user $= 16 + 32 = 48$ bytes.

(c) Posts are in plain text, so the breach immediately exposes all user content -- opinions, personal information shared in posts, conversations, photos with metadata. This is a greater privacy concern because: (1) Posts contain rich personal information that users chose to share selectively (not with the entire world or attackers). (2) Posts cannot be "changed" by the user after the breach -- the data is already in the attacker's hands. (3) The breached password hashes (while concerning) require significant computational effort to crack, and users can change their passwords.

(d) **Data minimisation:** Only collect and retain the minimum data necessary for the specified purpose. The platform could apply this by: (1) Not collecting location metadata at all (or making it opt-in rather than default). (2) Automatically deleting old posts after a configurable period. (3) Not storing the IP addresses of login sessions beyond what is needed for security. (4) Anonymising or aggregating analytics data so it cannot be linked to individual users.

### IT-3: Cyber Law and Responsible Use (with Programming and Databases)
**Question:** (a) A student writes a program to check if their school's website has SQL injection vulnerabilities without authorisation. Explain whether this is legal and ethical. (b) Describe the Computer Misuse Act's key offences. (c) A company's employee database is leaked, containing names, addresses, salaries, and bank details. Identify which data protection principles have been violated and what the legal consequences might be. (d) Explain the concept of "responsible disclosure" in cybersecurity.

**Solution:**

(a) **Legality:** Scanning for vulnerabilities without authorisation is likely illegal under computer misuse legislation (unauthorised access to a computer system). Even if the intent is benevolent, the act of probing the system without permission constitutes unauthorised access.

**Ethics:** The intent may be ethical (to help the school improve security), but the method is unethical because: (1) The school was not informed or asked for consent. (2) The scanning could disrupt services or be misinterpreted as an attack. (3) There are proper channels (responsible disclosure) for reporting vulnerabilities.

**Correct approach:** Inform the school's IT department of the potential vulnerability and offer to assist in a controlled, authorised test.

(b) Key offences under the Computer Misuse Act (or equivalent):
1. **Unauthorised access to computer material:** Accessing a system without permission, even if no data is altered.
2. **Unauthorised access with intent to commit a further offence:** Accessing a system to facilitate another crime (e.g., fraud, theft).
3. **Unauthorised modification of computer material:** Altering data or programs without permission (e.g., installing malware, deleting files).
4. **Making, supplying, or obtaining tools for cybercrime:** Possessing or distributing hacking tools with intent to use them for unauthorised access.

(c) Violated principles: (1) **Security principle** -- data was not kept secure against unauthorised access. (2) **Storage limitation** -- if bank details were retained beyond necessity. (3) **Integrity and confidentiality** -- data was disclosed to unauthorised parties.

Legal consequences: The company may face substantial fines (under GDPR, up to 4% of global turnover), lawsuits from affected employees, regulatory investigation, mandatory notification to affected individuals, and reputational damage.

(d) **Responsible disclosure** is the practice of reporting security vulnerabilities to the affected organisation privately, giving them a reasonable timeframe to fix the issue before public disclosure. The process typically involves: (1) Discovering a vulnerability. (2) Notifying the organisation through a secure channel. (3) Allowing adequate time (typically 30--90 days) for a fix. (4) Not exploiting the vulnerability or sharing details publicly before the fix is deployed. This balances the need for public awareness with the organisation's ability to protect its users.
