# Securing Data on AWS

* Encryption of data at rest
  * Encryption encodes data with secret key, making it unreadable
  * Only those with secret key can decode data
  * AWS KMS manages your secret keys
  * Data at rest = Data stored physically (on disk or tape)
  * Can encrypt data in any AWS KMS-supported service:
    * Amazon S3
    * Amazon EBS
    * Amazon EFS
    * Amazon RDS managed databases
  * Uses AES-256 encryption algorithm
  * Encryption/decryption handled automatically and transparently

* Encryption of data in transit
  * Data in transit = Data moving across a network
  * Transport Layer Security (TLS) - formerly SSL - is open standard protocol
  * AWS Certificate Manager provides way to manage, deploy, renew TLS/SSL certificates
  * Secure HTTP (HTTPS) creates secure tunnel
    * Uses TLS/SSL for bidirectional exchange of data
    * Protected against eavesdropping and man-in-the-middle attacks
  * AWS services support data in transit encryption
  * Examples:
    * EC2 to EFS communication using TLS
    * AWS Storage Gateway to S3 communication using TLS

* Securing Amazon S3 buckets and objects
  * "Newly created S3 buckets and objects are private and protected by default"
  * When sharing data objects on S3:
    * Essential to manage and control data access
    * Follow principle of least privilege
    * Consider using S3 encryption
  * Tools and options for controlling S3 access:
    * Amazon S3 Block Public Access feature
      * Simple to use
      * Override any other policies or object permissions
      * Enable for all buckets not meant to be public
    * IAM policies
      * Good option when user can authenticate using IAM
    * Bucket policies
      * Define access to specific buckets or objects
      * Used when user/system can't authenticate via IAM
    * Access control lists (ACLs)
      * Legacy access control mechanism
      * Less commonly used (predates IAM)
    * AWS Trusted Advisor bucket permission check
      * Free feature
      * Discovers buckets with global access permissions

AWS provides comprehensive data protection mechanisms through encryption services for both stored and transmitted information. These security controls, combined with granular access permissions, ensure data remains protected according to the principle of least privilege throughout its lifecycle.
