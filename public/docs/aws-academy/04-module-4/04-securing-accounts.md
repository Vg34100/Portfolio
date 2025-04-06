# Securing AWS Accounts

* AWS Organizations
  * Enables consolidation of multiple AWS accounts for central management
  * Security features:
    * Group AWS accounts into organizational units (OUs)
      * Attach different access policies to each OU
    * Integration and support for IAM
      * Permissions to user are intersection of AWS Organizations and IAM permissions
    * Service control policies (SCPs)
      * Establish control over AWS services and API actions each account can access
      * Offer centralized control over accounts
      * Limit permissions available in member accounts
      * Ensure accounts comply with access control guidelines
      * Similar to IAM permissions policies (similar syntax)
      * "Never grants permissions" - only specify maximum permissions
      * Only available in organization with all features enabled

* AWS Key Management Service (AWS KMS)
  * Features:
    * Create and manage encryption keys
    * Control use of encryption across AWS services and in applications
    * Integrates with CloudTrail to log all key usage
    * Uses hardware security modules (HSMs) validated by FIPS 140-2
  * Customer master keys (CMKs) control access to data encryption keys
  * Integrates with most AWS services

* Amazon Cognito
  * Features:
    * Adds user sign-up, sign-in, and access control to web/mobile applications
    * Scales to millions of users
    * Supports sign-in with:
      * Social identity providers (Facebook, Google, Amazon)
      * Enterprise identity providers (Microsoft Active Directory via SAML 2.0)
  * Uses common identity management standards like SAML 2.0
  * Helps meet security and compliance requirements
    * Eligible for HIPAA compliance
    * Can be used for PCI DSS compliant workloads
    * Compliant with SOC, ISO/IEC standards

* AWS Shield
  * Features:
    * Managed distributed denial of service (DDoS) protection service
    * Safeguards applications running on AWS
    * Provides always-on detection and automatic inline mitigations
    * Minimizes application downtime and latency
  * AWS Shield Standard enabled at no additional cost
  * AWS Shield Advanced is optional paid service
    * To contact DDoS Response Team, need Enterprise or Business Support

AWS provides multiple specialized services to secure accounts at scale. Organizations enables centralized multi-account management, KMS handles encryption key management, Cognito provides identity management for applications, and Shield offers DDoS protection - creating comprehensive security coverage across all AWS resources.
