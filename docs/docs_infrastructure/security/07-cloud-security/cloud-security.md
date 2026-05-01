---
id: cloud-security
title: Cloud Security
description:
  Cloud Security — Shared Responsibility Model; IaaS (Infrastructure as a
  Service); PaaS (Platform as a Service); SaaS (Software as a Service).
slug: cloud-security
sidebar_position: 2
date: 2026-04-08T00:00:00.000Z
tags:
  - Security
categories:
  - Security
---

## Shared Responsibility Model

Cloud security is governed by a shared responsibility model. The division of responsibility between
the cloud provider and the customer depends on the service model (IaaS, PaaS, or SaaS).
Misunderstanding this boundary is the single most common cause of cloud security incidents.

### IaaS (Infrastructure as a Service)

In IaaS (e.g., EC2, VMs), the provider secures the physical infrastructure: the data center,
servers, storage hardware, and the hypervisor. The customer is responsible for everything above the
hypervisor: the operating system, runtime, application, data, and network configuration (security
groups, NACLs).

| Responsibility                             | Provider                            | Customer        |
| ------------------------------------------ | ----------------------------------- | --------------- |
| Physical security                          | Yes                                 | No              |
| Hardware (servers, storage, network)       | Yes                                 | No              |
| Hypervisor / virtualization                | Yes                                 | No              |
| Operating system                           | No                                  | Yes             |
| Network configuration (firewalls, routing) | No                                  | Yes             |
| Application security                       | No                                  | Yes             |
| Data encryption at rest and in transit     | Partial (infrastructure)            | Yes (your data) |
| Identity and access management             | No (they run IAM; you configure it) | Yes             |
| Client-side encryption                     | No                                  | Yes             |

### PaaS (Platform as a Service)

In PaaS (e.g., Lambda, App Engine, Azure Functions), the provider also manages the operating system
and runtime. The customer is responsible only for the application code, data, and access controls.

| Responsibility                    | Provider              | Customer |
| --------------------------------- | --------------------- | -------- |
| Physical security                 | Yes                   | No       |
| Hardware, hypervisor, OS, runtime | Yes                   | No       |
| Application code                  | No                    | Yes      |
| Data encryption                   | Partial               | Yes      |
| IAM configuration                 | No (runs the service) | Yes      |

### SaaS (Software as a Service)

In SaaS (e.g., Office 365, Salesforce, Gmail), the provider manages nearly everything. The customer
is responsible only for data and access.

| Responsibility                                           | Provider | Customer |
| -------------------------------------------------------- | -------- | -------- |
| Physical, hardware, hypervisor, OS, runtime, application | Yes      | No       |
| Data classification and governance                       | No       | Yes      |
| User access management                                   | Partial  | Yes      |
| Compliance verification                                  | No       | Yes      |

### The Key Principle

The provider secures the cloud. You secure what is in the cloud. Regardless of the service model,
you always own the responsibility for:

- Data classification and protection
- Identity and access management (configuring who can access what)
- Network configuration (where applicable)
- Application security
- Compliance with regulatory requirements

## Identity and Access Management (IAM)

IAM is the foundational security control in cloud environments. It determines who can do what to
which resources.

### Core Concepts

- **Principal:** An entity that can be authenticated (user, role, service account, group).
- **Policy:** A document that defines permissions (what actions are allowed or denied on which
  resources under what conditions).
- **Role:** An identity that can be assumed by a principal, a service, or an instance. Roles provide
  temporary credentials and are the primary mechanism for granting permissions to compute resources.
- **Group:** A collection of users that share the same permissions. Simplifies administration.
- **MFA (Multi-Factor Authentication):** Requires two or more verification factors. MFA should be
  enforced on all human accounts, especially those with elevated privileges.

### Least Privilege

Every principal should have only the permissions necessary to perform its intended function. This is
the principle of least privilege. In practice, this means:

- Use read-only permissions for workloads that do not need to write.
- Scope permissions to specific resources, not wildcards (`*`).
- Use roles instead of long-lived access keys for services.
- Regularly audit permissions and remove unused ones.
- Implement permission boundaries to prevent privilege escalation.

### Common IAM Anti-Patterns

1. **Over-privileged service accounts.** A Lambda function with `s3:*` on all buckets when it only
   needs `s3:GetObject` on one bucket.
2. **Using root accounts for daily operations.** The root account should be locked down with MFA and
   hardware key; all work should be done with IAM users or roles.
3. **Long-lived access keys.** Service accounts should use short-lived credentials (role assumption)
   rather than static access keys that never expire.
4. **No permission boundary.** Without boundaries, a user with `iam:PutUserPolicy` can grant
   themselves additional permissions, breaking least privilege.

## AWS Security

### IAM

AWS IAM is the central identity service. Key components:

- **Users:** Individual identities (human or service).
- **Roles:** Assumable identities for services (EC2, Lambda) or cross-account access.
- **Policies:** JSON documents with Effect (Allow/Deny), Action, Resource, and optional Condition.
- **Groups:** Collections of users with shared policies.
- **Instance profiles:** Containers for roles that EC2 instances can assume.

IAM policy evaluation follows a deterministic order:

1. Explicit deny (always wins)
2. Explicit allow
3. Default deny (implicit)

A policy that denies access to a resource will always override an allow, even if the allow comes
from a higher-priority policy.

### S3 Bucket Policies

S3 bucket policies are resource-based policies attached to S3 buckets. They define what principals
can access the bucket and under what conditions.

Common misconfigurations:

- **Public bucket.** `"Principal": "*"` with `"Effect": "Allow"` makes the bucket publicly
  accessible. This is how millions of records have been exposed.
- **Overly broad actions.** `"Action": "s3:*"` grants all S3 permissions, including `DeleteObject`.
- **Missing encryption requirements.** Without a condition that requires `aws:SecureTransport` (TLS)
  or server-side encryption, data can be accessed over HTTP or stored unencrypted.

Secure bucket policy example:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:*",
      "Resource": ["arn:aws:s3:::my-bucket", "arn:aws:s3:::my-bucket/*"],
      "Condition": {
        "Bool": { "aws:SecureTransport": "false" }
      }
    },
    {
      "Effect": "Allow",
      "Principal": { "AWS": "arn:aws:iam::123456789012:role/MyAppRole" },
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": "arn:aws:s3:::my-bucket/app/*"
    }
  ]
}
```

### Security Groups vs NACLs

| Property        | Security Groups                         | NACLs                                          |
| --------------- | --------------------------------------- | ---------------------------------------------- |
| Layer           | Instance-level                          | Subnet-level                                   |
| State           | Stateless (return traffic auto-allowed) | Stateful                                       |
| Allow/Deny      | Allow only (default deny)               | Both allow and deny                            |
| Rule evaluation | All rules evaluated (first match wins)  | Rules evaluated in order (lowest number first) |
| Applies to      | ENI (Elastic Network Interface)         | All instances in the subnet                    |

Security groups are the primary defense. NACLs provide an additional layer but should not be relied
upon as the sole defense mechanism.

### KMS (Key Management Service)

AWS KMS provides cryptographic key management. Key concepts:

- **Customer Master Key (CMK):** A logical key that is used to encrypt and decrypt data. The actual
  encryption is performed by the backing key material stored in HSMs (Hardware Security Modules).
- **Envelope encryption:** KMS does not encrypt data directly. Instead, it generates a data key,
  encrypts the data key with the CMK, and returns both the plaintext data key and the encrypted data
  key. The plaintext data key is used to encrypt the data and then discarded from memory. The
  encrypted data key is stored alongside the encrypted data.
- **Key rotation:** CMKs can be configured for automatic annual rotation. Rotating a CMK does not
  require re-encrypting existing data -- KMS maintains multiple key versions.

### CloudTrail

AWS CloudTrail records API calls made in your account. It is essential for:

- **Forensic investigation:** Determining who did what and when.
- **Compliance:** Providing an audit trail of all API activity.
- **Security monitoring:** Detecting anomalous API calls (e.g., creating a new user, changing a
  security group, deleting a log).

CloudTrail should be enabled in all regions with log file validation and multi-region trails.
Integrate with CloudWatch Logs or an external SIEM for real-time alerting.

### GuardDuty

GuardDuty is a threat detection service that uses ML and threat intelligence feeds to identify:

- Unauthorized behavior (e.g., unusual API calls, deployments in unusual regions)
- Compromised credentials (e.g., credential exfiltration, brute force)
- Instance compromise (e.g., cryptocurrency mining, port scanning from an EC2 instance)
- Reconnaissance (e.g., port probes, unusual DNS queries)

### AWS Config

AWS Config records configuration changes to AWS resources and evaluates them against compliance
rules. It provides a historical timeline of configuration changes and can trigger automated
remediation actions when a resource drifts from its desired state.

### WAF (Web Application Firewall)

AWS WAF provides rule-based HTTP request filtering. It integrates with CloudFront, ALB, and API
Gateway. Use managed rule groups (AWSManagedRulesCommonRuleSet, AWSManagedRulesSQLiRuleSet) and
custom rules to block common web attacks (SQL injection, XSS, LFI/RFI).

## Azure Security

### Azure AD (Entra ID)

Azure Active Directory (now Microsoft Entra ID) is the identity service for Azure and Microsoft 365.

- **Users, Groups, and Service Principals:** Equivalent to IAM users, groups, and roles.
- **App Registrations:** Represent applications that need to authenticate with Azure AD.
- **Managed Identities:** System-assigned or user-assigned identities for Azure resources
  (equivalent to IAM roles). They eliminate the need for stored credentials.
- **Conditional Access:** Policies that evaluate sign-in risk, device compliance, location, and
  other factors before granting access.

### RBAC

Azure RBAC defines permissions at the resource, resource group, or subscription scope.

- **Built-in roles:** Owner, Contributor, Reader, User Access Administrator, and many
  service-specific roles (e.g., Storage Blob Data Contributor).
- **Custom roles:** JSON-defined roles with `actions`, `notActions`, `dataActions`, and
  `assignableScopes`.
- **Key principle:** Use the most restrictive built-in role, and create custom roles only when
  necessary.

### Azure Policy

Azure Policy enforces organizational standards. It evaluates resources against policy definitions
and can enforce or audit compliance. Examples:

- Require encryption on storage accounts.
- Restrict VM sizes to approved SKUs.
- Require tags on all resources.
- Deny public IP addresses on certain resource types.

### Key Vault

Azure Key Vault stores secrets, keys, and certificates. Access is controlled through Azure RBAC or
Key Vault access policies. Key Vault supports:

- **Secrets management:** Store connection strings, API keys, and other sensitive values.
- **Key management:** Create and manage RSA and EC keys for encryption and signing.
- **Certificate management:** Provision and manage TLS/SSL certificates.
- **HSM-backed keys:** Premium tier uses FIPS 140-2 Level 2 HSMs for key storage.

### Microsoft Sentinel

Sentinel is a cloud-native SIEM (Security Information and Event Management) and SOAR (Security
Orchestration, Automation, and Response) service. It ingests logs from Azure services, Microsoft
365, AWS, GCP, and on-premises systems. Sentinel uses built-in workbooks, analytics rules, and
automation playbooks to detect and respond to threats.

## GCP Security

### IAM

GCP IAM follows a resource-hierarchy model: Organization > Folder > Project > Resource.

- **Primitive roles:** Owner, Editor, Viewer. These are overly broad and should be avoided in
  production.
- **Predefined roles:** Granular roles for specific services (e.g., `roles/storage.objectViewer`,
  `roles/cloudsql.client`).
- **Custom roles:** Define specific permissions for your organization's needs.
- **Service accounts:** Used by applications and compute resources. Should be configured with the
  minimum permissions required.

GCP IAM evaluation follows the same deny-override principle as AWS: if any policy denies an action,
the action is denied regardless of allow policies.

### VPC Service Controls

VPC Service Controls create a security perimeter around GCP resources (BigQuery, Cloud Storage, Data
ML). They prevent data exfiltration by restricting API access to resources within the perimeter,
even from authenticated users outside the perimeter.

Use cases:

- Prevent a compromised VM from copying data from BigQuery to an external storage bucket.
- Restrict access to sensitive datasets to specific VPC networks.
- Enforce that data can only flow between approved services.

### Security Command Center

Security Command Center (SCC) provides a centralized view of your GCP security posture. It includes:

- **Security Health Analytics:** Detects misconfigured resources (public buckets, open firewall
  rules, overly permissive IAM).
- **Web Security Scanner:** Scans web applications for vulnerabilities (XSS, SQL injection, etc.).
- **Event Threat Detection:** Identifies threats from audit logs (brute force, malware,
  cryptocurrency mining).

### GCP IAM Best Practices

GCP has specific patterns that differ from AWS and Azure:

- **Workload Identity:** For GKE workloads, use Workload Identity (GKE service account to GCP
  service account mapping) instead of exporting service account keys.
- **Service account key management:** Never export service account keys. If you must, set an
  expiration date and rotate regularly. Monitor key usage with audit logs.
- **Organization Policies:** Define constraints at the organization level (e.g., restrict VM
  creation to approved regions, disable public IP assignment, restrict service account creation).
- **Folder hierarchy:** Use folders to map organizational structure (e.g., Production, Staging,
  Development) and apply different policies at each level.

## Cloud-Specific Threats

### Misconfigured Storage

The most common cloud data breach is a publicly accessible storage bucket or blob container.

Attack vectors:

- S3 bucket policy with `"Principal": "*"` and `"Effect": "Allow"`
- Azure Blob container set to "Blob" or "Container" access level instead of "Private"
- GCP Cloud Storage bucket with `allUsers` granted `objectViewer` or `objectCreator` roles

Prevention:

- Block public access at the account level (AWS S3 Block Public Access)
- Use resource-based policies that require specific principals
- Enable server-side encryption by default
- Regularly audit storage configurations with CSPM tools

### Exposed Credentials

Credentials in code, configuration files, CI/CD pipelines, and public repositories.

Common sources:

- Hardcoded AWS access keys in source code committed to GitHub
- Service account keys stored in Docker images or Kubernetes ConfigMaps
- `.env` files committed to version control
- Credentials in CI/CD pipeline environment variables visible in build logs

Prevention:

- Use managed identities (IAM roles, Managed Identities, service accounts) instead of static keys
- Scan repositories for secrets (git-secrets, truffleHog, Gitleaks)
- Rotate keys regularly and revoke unused keys
- Use secret management services (AWS Secrets Manager, Azure Key Vault, GCP Secret Manager)

### Overprivileged IAM

Overprivileged identities are the gateway to most cloud attacks. An attacker who compromises a
single credential with broad permissions can pivot to compromise the entire environment.

Common patterns:

- Service accounts with `*:*` permissions
- Developers with `AdministratorAccess` or `Owner` roles
- CI/CD pipelines with production write access
- Cross-account roles with overly broad trust policies

Prevention:

- Conduct regular IAM access reviews
- Use permission boundaries to cap maximum permissions
- Implement just-in-time (JIT) access for elevated privileges
- Use AWS IAM Access Analyzer, Azure Permissions Management, or GCP IAM Recommender

### SSRF in Cloud

Server-Side Request Forgery (SSRF) is particularly dangerous in cloud environments because the cloud
metadata service is accessible from within the instance.

- **AWS:** `http://169.254.169.254/latest/meta-data/` provides instance metadata including IAM role
  credentials.
- **Azure:** `http://169.254.169.254/metadata/instance?api-version=2021-02-01`
- **GCP:** `http://metadata.google.internal/computeMetadata/v1/`

An attacker who can trigger an SSRF vulnerability in your application can query the metadata service
and steal IAM credentials.

Prevention:

- Use IMDSv2 (Instance Metadata Service v2) on AWS, which requires a session token obtained via a
  PUT request
- Restrict metadata service access with a hop count of 1 (prevents SSRF via proxies)
- Use network policies to restrict outbound access from application tiers
- Validate and sanitize all user-supplied URLs

### Data Exfiltration

Data exfiltration from cloud environments can occur through:

- Direct download from compromised storage
- DNS exfiltration (encoding data in DNS queries)
- Cloud API calls to external services
- Encrypted channels (HTTPS to attacker-controlled endpoints)

Detection:

- Monitor egress traffic patterns (unexpected volume or destinations)
- Use VPC Flow Logs, NSG Flow Logs, or VPC Flow Logs
- Implement DNS query logging and analysis
- Use GuardDuty, Sentinel, or Security Command Center for anomaly detection

### Supply Chain Attacks

Cloud environments are increasingly targeted by supply chain attacks that compromise dependencies or
infrastructure:

- **Container image poisoning.** An attacker pushes a malicious image to a public registry with a
  tag matching a legitimate image (e.g., `library/nginx:latest`). Automated deployments pull the
  poisoned image.
- **Dependency confusion.** An attacker publishes a package with the same name as an internal
  package to a public registry. Build systems that check public registries first will install the
  malicious version.
- **Terraform/IaC module tampering.** Compromised Terraform modules or providers that inject
  backdoor resources (e.g., a security group rule that allows SSH from any IP).

Prevention:

- Pin image digests (e.g., `nginx@sha256:abc123...`) instead of tags
- Use private registries and mirror approved images
- Configure package managers to check private registries before public ones
- Sign and verify images (cosign, Notary)
- Review IaC modules before use and pin module versions

## Container Security

### Docker Security

Docker containers share the host kernel. Container escape is possible if the container is
misconfigured.

Key security controls:

1. **Minimal base image.** Use `scratch`, `alpine`, or `distroless` images. Do not install
   unnecessary packages.
2. **Run as non-root.** The default Dockerfile `USER root` is dangerous. Always create a non-root
   user and use `USER <username>`.
3. **Read-only filesystem.** Use `--read-only` flag to prevent runtime modifications to the
   filesystem.
4. **Drop capabilities.** Use `--cap-drop ALL` and add only the specific capabilities needed
   (`--cap-add NET_BIND_SERVICE`, for example).
5. **Resource limits.** Set CPU and memory limits (`--cpus`, `--memory`) to prevent resource
   exhaustion.
6. **Network isolation.** Use user-defined bridge networks instead of the default bridge. Use
   network policies to restrict inter-container communication.
7. **Secret management.** Never store secrets in Docker images or environment variables. Use Docker
   secrets, HashiCorp Vault, or cloud secret management services.

### Kubernetes Security

Kubernetes adds its own security layer on top of containers.

- **RBAC:** Define ClusterRoles and Roles with the minimum permissions. Use RoleBindings to bind
  roles to specific namespaces.
- **Network Policies:** Default deny all ingress and egress. Explicitly allow only the traffic that
  is needed.
- **Pod Security Standards:** Enforce baseline, restricted, or privileged policies. The restricted
  profile requires non-root containers, read-only root filesystem, and dropped capabilities.
- **Image security:** Use a private registry with image signing (cosign, Notary). Scan images for
  vulnerabilities (Trivy, Grype, Snyk).
- **Service account tokens.** Disable automounting of service account tokens for pods that do not
  need them (`automountServiceAccountToken: false`).

### Image Scanning

Image scanning detects known vulnerabilities (CVEs) in container images.

- **Scan during build.** Integrate Trivy or Grype into CI/CD pipelines. Fail the build if critical
  or high vulnerabilities are found.
- **Scan in the registry.** Use registry-level scanning (AWS ECR, GCP Artifact Registry, Azure
  Container Registry) to detect vulnerabilities in images already pushed.
- **Scan at runtime.** Use admission controllers (OPA Gatekeeper, Kyverno) to prevent deployment of
  vulnerable images.

### Runtime Security

Runtime security detects anomalous behavior in running containers.

- **Falco:** Open-source runtime security tool that monitors system calls and detects suspicious
  behavior (shell spawned in a container, unexpected network connections, file system
  modifications).
- **Seccomp:** Restricts the system calls a container can make. Use the default Docker seccomp
  profile or create custom profiles.
- **AppArmor/SELinux:** Mandatory Access Control for containers. Confine the container's access to
  host resources.

## Serverless Security

### Threat Model

Serverless functions (AWS Lambda, Azure Functions, Google Cloud Functions) have a different threat
model than traditional compute:

- **Injection.** User input passed to eval, exec, or unsanitized queries.
- **Dependency vulnerabilities.** Malicious or vulnerable packages in the deployment package.
- **Permission issues.** Overprivileged execution roles that allow access to resources beyond what
  the function needs.
- **Event injection.** Malicious payloads in trigger events (S3 object uploads, SQS messages, API
  Gateway requests).
- **DoS via event flooding.** Triggering a function millions of times, exhausting the account's
  concurrency limit or running up costs.

### Lambda Security Best Practices

1. **Least privilege IAM role.** The Lambda execution role should have only the permissions the
   function needs. Use specific resource ARNs, not wildcards.
2. **Environment variable encryption.** Encrypt sensitive environment variables using KMS.
3. **VPC placement.** Place the function in a VPC with security groups that restrict its outbound
   access. If the function does not need VPC access, keep it outside the VPC for better performance.
4. **Code signing.** Use Lambda code signing to ensure only trusted code is deployed.
5. **Reserved concurrency.** Set reserved concurrency to prevent runaway cost from DoS or bugs.
6. **Input validation.** Validate and sanitize all input, including event payloads.
7. **Dependency scanning.** Scan the deployment package for vulnerabilities before deployment.

## Cloud Security Posture Management (CSPM)

CSPM tools continuously monitor cloud environments for misconfigurations and compliance violations.

### Capabilities

- **Asset discovery:** Inventory all cloud resources across accounts and regions.
- **Configuration assessment:** Evaluate resources against security benchmarks (CIS, NIST, vendor
  best practices).
- **Compliance monitoring:** Track compliance with regulatory frameworks (SOC 2, PCI DSS, HIPAA,
  FedRAMP).
- **Alerting and remediation:** Alert on misconfigurations and optionally auto-remediate.

### Tools

| Tool                        | Cloud(s)    | Notes                                                 |
| --------------------------- | ----------- | ----------------------------------------------------- |
| AWS Security Hub            | AWS         | Aggregates findings from GuardDuty, Config, Inspector |
| Azure Security Center       | Azure       | Renamed to Microsoft Defender for Cloud               |
| GCP Security Command Center | GCP         | Includes Event Threat Detection                       |
| Wiz                         | Multi-cloud | Agentless, agent-based scanning                       |
| Prisma Cloud (Palo Alto)    | Multi-cloud | CSPM + CWPP + CNAPP                                   |
| Orca Security               | Multi-cloud | Agentless, side-scanning                              |
| Lacework                    | Multi-cloud | Polygraph data platform                               |

### CSPM Implementation Strategy

Deploying CSPM in phases provides the best results:

1. **Discovery phase (week 1-2):** Enable the CSPM tool and let it discover all resources across all
   accounts and regions. Expect a large number of findings -- this is normal for a first scan.
2. **Triage phase (week 2-4):** Classify findings by severity and resource owner. Focus on critical
   and high findings first (public storage, open security groups, exposed credentials).
3. **Remediation phase (week 4-8):** Fix findings. Use automated remediation where possible (e.g.,
   close unused security groups, enable encryption on storage). Manual remediation for findings that
   require application changes.
4. **Prevention phase (ongoing):** Shift left by integrating CSPM checks into CI/CD pipelines.
   Prevent misconfigured resources from being deployed in the first place. Use policy-as-code tools
   (Open Policy Agent, Checkov, tfsec) to validate IaC before apply.
5. **Monitoring phase (ongoing):** Configure real-time alerts for new findings. Integrate CSPM
   alerts with your SIEM and incident response workflow.

## Compliance in Cloud

### SOC 2 (System and Organization Controls 2)

SOC 2 defines criteria for managing customer data based on five Trust Services Criteria:

1. **Security:** Protection against unauthorized access (logical and physical).
2. **Availability:** System availability for operation and use.
3. **Processing Integrity:** System processing is accurate, timely, and authorized.
4. **Confidentiality:** Information designated as confidential is protected.
5. **Privacy:** Personal information is collected, used, retained, and disposed of appropriately.

### ISO 27001

ISO 27001 is an international standard for information security management systems (ISMS). It
provides a framework for establishing, implementing, maintaining, and continually improving an ISMS.
Cloud providers (AWS, Azure, GCP) are ISO 27001 certified, but the customer's use of cloud services
must also comply.

### FedRAMP

The Federal Risk and Authorization Management Program (FedRAMP) is a US government program that
provides a standardized approach to security assessment for cloud products. Levels:

- **Low Impact:** Basic security controls.
- **Moderate Impact:** Additional controls for sensitive data.
- **High Impact:** Stringent controls for law enforcement, emergency services, and national
  security.

AWS GovCloud, Azure Government, and GCP FedRAMP programs provide compliant environments.

### GDPR and Cloud

The General Data Protection Regulation (GDPR) applies to any organization processing personal data
of EU residents, regardless of where the organization is located. In cloud environments, GDPR
compliance requires:

- **Data residency.** Know where data is stored and processed. Use region-locked deployments.
- **Data portability.** Ensure data can be exported in a machine-readable format.
- **Right to erasure.** Implement processes to delete all copies of personal data on request,
  including backups, logs, and replicas.
- **Data Processing Agreements (DPAs).** Ensure DPAs are in place with the cloud provider and any
  sub-processors.
- **Breach notification.** Report data breaches to the relevant authority within 72 hours.

All three major cloud providers offer GDPR-compliant services and provide DPAs, but compliance
ultimately depends on how the customer configures and uses the services.

## Common Pitfalls

### Trusting Default Configurations

Cloud services default to permissive settings for convenience, not security. S3 buckets, Azure
Storage accounts, and GCP Storage buckets do not default to private in all contexts. Security groups
default to allow all outbound traffic. Always review and harden defaults.

### Not Enabling Logging

Without CloudTrail, Azure Activity Logs, or GCP Audit Logs, you have no visibility into who is doing
what in your environment. After a breach, you will not be able to determine the scope or timeline of
the attack.

### Cross-Account Trust Misconfiguration

Cross-account IAM roles with wildcard principals (`"Principal": {"AWS": "*"}`) can be assumed by any
AWS account, not just the intended one. Always restrict trust policies to specific account ARNs.

### Ignoring Egress Traffic

Most cloud security focuses on ingress (blocking incoming attacks). But data exfiltration happens on
egress. Monitor and restrict outbound traffic, especially to unexpected IP ranges or regions.

### Stale Credentials

Service account keys, access keys, and certificates that are never rotated or revoked. A key that
was created 3 years ago and has not been used in 2 years should be deleted.

## Practice Problems

### Problem 1: Shared Responsibility

A company uses AWS Lambda to run an API backend. The Lambda function reads from an S3 bucket and
writes to a DynamoDB table. Who is responsible for patching the operating system? Who is responsible
for securing the API endpoint?

<details>
<summary>Answer</summary>

**OS patching:** AWS is responsible. Lambda is a PaaS service. AWS manages the underlying operating
system, runtime, and execution environment. The customer does not have access to the OS and cannot
patch it.

**API endpoint security:** The customer is responsible. This includes:

- Authentication and authorization of API requests (e.g., using Amazon Cognito, API Gateway
  authorizers, or JWT validation)
- Input validation and injection prevention
- Rate limiting and throttling
- TLS configuration on API Gateway
- The IAM execution role of the Lambda function (least privilege)

</details>

### Problem 2: IAM Policy Evaluation

A user has two policies attached:

Policy A (Allow): `s3:GetObject` on `arn:aws:s3:::prod-data/*` Policy B (Deny): `s3:GetObject` on
`arn:aws:s3:::prod-data/secret/*`

The user attempts to access `s3://prod-data/secret/report.pdf`. Is the access granted or denied?

<details>
<summary>Answer</summary>

**Denied.** IAM policy evaluation rules:

1. Explicit deny always wins.
2. If there is no explicit deny, explicit allow is evaluated.
3. If there is no allow, the default deny applies.

Policy B explicitly denies access to `prod-data/secret/*`. The resource
`prod-data/secret/report.pdf` matches this path. Even though Policy A allows access to
`prod-data/*`, the explicit deny in Policy B takes precedence. Access is denied.

</details>

### Problem 3: SSRF Prevention

An attacker discovers an SSRF vulnerability in a web application running on an EC2 instance. The
application takes a URL parameter and fetches the content. The attacker sends:

```
http://169.254.169.254/latest/meta-data/iam/security-credentials/
```

What information can the attacker obtain? How would you prevent this with IMDSv2?

<details>
<summary>Answer</summary>

**What the attacker obtains:** The metadata service responds with the name of the IAM role attached
to the EC2 instance. The attacker can then query:

```
http://169.254.169.254/latest/meta-data/iam/security-credentials/<role-name>
```

This returns the temporary AWS credentials (AccessKeyId, SecretAccessKey, Token) associated with the
instance's IAM role. With these credentials, the attacker can perform any action allowed by the
role's IAM policy, potentially accessing S3 buckets, DynamoDB tables, other EC2 instances, or even
modifying IAM policies.

**Prevention with IMDSv2:** IMDSv2 requires a two-step process:

1. Generate a session token: `PUT http://169.254.169.254/latest/api/token` with the header
   `X-aws-ec2-metadata-token-ttl-seconds: 21600`
2. Use the token: `GET http://169.254.169.254/latest/meta-data/...` with the header
   `X-aws-ec2-metadata-token: <token>`

The token is generated by the instance itself and is tied to the instance. An SSRF attack cannot
generate this token because the PUT request must originate from the instance (enforced by the
network stack and, optionally, a hop-count limit of 1).

Additional mitigations:

- Set `MetadataNoResponseHopLimit` to 1 (prevents token retrieval through a proxy on the instance)
- Use IAM policies to restrict the role's permissions (least privilege)
- Network-level restrictions to block egress to 169.254.169.254 from the application

</details>

### Problem 4: Container Escape Scenario

A Docker container is running with the following flags:

```
docker run --privileged -v /:/host-root alpine
```

An attacker gains code execution inside the container. What can they do?

<details>
<summary>Answer</summary>

With `--privileged`, the container has full access to all host devices (equivalent to
`--cap-add ALL` plus access to all `/dev` devices). Combined with `-v /:/host-root`, which mounts
the host's root filesystem into the container, the attacker can:

1. **Modify host files:** Write to `/host-root/etc/shadow` to add a backdoor user, or modify
   `/host-root/etc/sudoers` to grant root access.
2. **Install persistent access:** Add SSH keys to `/host-root/root/.ssh/authorized_keys`, install
   cron jobs, or modify systemd services.
3. **Access host secrets:** Read `/host-root/etc/shadow`, SSH keys, TLS certificates, and
   application credentials.
4. **Load kernel modules:** Since the container has full capabilities, it can use `insmod` to load
   malicious kernel modules, gaining kernel-level persistence.
5. **Escape completely:** The attacker effectively has root access on the host.

**Prevention:**

- Never use `--privileged` in production
- Never mount the host root filesystem into a container
- Use `--cap-drop ALL` and add only needed capabilities
- Run containers as non-root users
- Use user namespaces (`--userns-remap`) to map container root to an unprivileged host user
- Enable AppArmor or SELinux profiles for Docker

</details>

### Problem 5: CSPM Finding Interpretation

A CSPM tool reports the following finding in your AWS account:

"Security group sg-0abc1234 attached to EC2 instance i-0def5678 allows inbound SSH (TCP/22) from
0.0.0.0/0."

What is the risk, and what is the correct remediation?

<details>
<summary>Answer</summary>

**Risk:** Any host on the Internet can attempt SSH connections to this instance. This exposes the
instance to brute-force attacks, credential stuffing, and exploitation of SSH server
vulnerabilities. If the SSH credentials are weak or the SSH server has a known vulnerability, the
instance can be compromised.

**Remediation options (in order of preference):**

1. **Bastion host / VPN.** Remove the 0.0.0.0/0 rule entirely. Access the instance through a bastion
   host or VPN that has its own access controls.

   ```
   aws ec2 revoke-security-group-ingress \
     --group-id sg-0abc1234 \
     --protocol tcp --port 22 --cidr 0.0.0.0/0
   ```

2. **Restrict source IP.** If direct SSH access is necessary, limit it to specific IP ranges
   (corporate network, administrator IPs):

   ```
   aws ec2 authorize-security-group-ingress \
     --group-id sg-0abc1234 \
     --protocol tcp --port 22 --cidr 203.0.113.0/24
   ```

3. **Session Manager (AWS Systems Manager).** Replace SSH with AWS Session Manager, which provides
   secure, audited shell access without opening any inbound ports.

</details>

### Problem 6: S3 Bucket Policy Analysis

An S3 bucket policy contains the following statement:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::company-data/*"
    }
  ]
}
```

Identify the security issues and provide a corrected policy.

<details>
<summary>Answer</summary>

**Issues:**

1. `"Principal": "*"` -- Allows any AWS account (and anonymous users, if the bucket does not block
   public access) to read all objects in the bucket. This is a data exposure risk.
2. No deny for non-TLS access. Data can be accessed over HTTP, exposing it to interception.
3. No condition to enforce encryption at rest.
4. No condition to restrict access to specific IP ranges or VPC endpoints.

**Corrected policy:**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:*",
      "Resource": ["arn:aws:s3:::company-data", "arn:aws:s3:::company-data/*"],
      "Condition": {
        "Bool": { "aws:SecureTransport": "false" }
      }
    },
    {
      "Effect": "Allow",
      "Principal": { "AWS": "arn:aws:iam::123456789012:role/AppRole" },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::company-data/*",
      "Condition": {
        "StringEquals": {
          "aws:SourceVpce": "vpce-0abc1234"
        }
      }
    }
  ]
}
```

This restricts access to a specific IAM role through a specific VPC endpoint, and denies all non-TLS
access.

</details>
