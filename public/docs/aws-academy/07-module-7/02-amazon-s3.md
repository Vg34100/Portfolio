# Amazon Simple Storage Service (S3)

* **S3 Overview**
  * Data stored as objects in buckets
  * Virtually unlimited storage
  * Single object limited to 5 TB
  * Designed for "11 9s of durability" (99.999999999%)
  * Granular access to bucket and objects
  * Managed cloud storage solution
  * Store "virtually as many objects" as you want
  * Bucket names must be "unique across all existing bucket names in Amazon S3"
  * Data stored redundantly across multiple facilities and devices

* **S3 Storage Management**
  * Store trillions of objects
  * Regular peaks at "millions of requests per second"
  * Objects can be almost any data file (images, videos, server logs)
  * Database snapshots can be stored as objects
  * Low-latency access via HTTP or HTTPS
  * Private access through VPC endpoint
  * Fine-grained access control through:
    * IAM policies
    * S3 bucket policies
    * Per-object access control lists
  * Data not shared publicly by default
  * Encryption options:
    * In transit
    * Server-side encryption

* **Storage Classes**
  * **Amazon S3 Standard**
    * High durability, availability, performance
    * For frequently accessed data
    * Good for cloud applications, dynamic websites, content distribution, mobile/gaming, big data
  * **Amazon S3 Intelligent-Tiering**
    * Automatically moves data to most cost-effective access tier
    * Small monthly monitoring fee per object
    * No retrieval fees
    * Good for long-lived data with unknown/unpredictable access patterns
  * **Amazon S3 Standard-Infrequent Access (S3 Standard-IA)**
    * For less frequently accessed data requiring rapid access
    * Low per-GB storage price and per-GB retrieval fee
    * Good for long-term storage, backups, disaster recovery
  * **Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)**
    * Lower cost than Standard-IA
    * Stores data in single Availability Zone rather than three
    * Good for secondary backups or easily re-creatable data
  * **Amazon S3 Glacier**
    * Secure, durable, low-cost for data archiving
    * Three retrieval options (minutes to hours)
    * Can upload directly or use lifecycle policies
  * **Amazon S3 Glacier Deep Archive**
    * Lowest-cost storage class
    * For long-term retention (7-10+ years)
    * For regulatory compliance requirements
    * Alternative to magnetic tape systems
    * Objects can be restored within 12 hours

* **Bucket and Object fundamentals**
  * **Buckets**
    * Prefix for set of files
    * Must be uniquely named across all of S3 globally
    * Control access for each bucket
    * View access logs
    * Choose geographical region for storage
  * **Objects**
    * Files stored in buckets
    * Composed of data and metadata
    * Referenced by URL
    * Can set permissions on data and metadata

* **Bucket URL styles**
  * Path-style: https://s3.region-code.amazonaws.com/bucket-name
  * Virtual hosted-style: https://bucket-name.s3-region-code.amazonaws.com

* **Data Storage Features**
  * Data redundantly stored across multiple facilities in selected Region
  * Designed to maintain durability even with concurrent data loss in two facilities
  * Automatic scaling of storage
  * No need to provision storage or throughput
  * Pay only for what you use

* **Access Methods**
  * AWS Management Console
  * AWS Command Line Interface
  * SDK
  * REST-based endpoints (HTTP/HTTPS)

* **Common Use Cases**
  * Application assets storage
  * Static web hosting
  * Backup and disaster recovery
  * Staging area for big data
  * Backup and storage services
  * Application hosting
  * Media hosting
  * Software delivery

* **Pricing Considerations**
  * Pay only for what you use
    * GBs per month
    * Transfer OUT to other Regions
    * PUT, COPY, POST, LIST, and GET requests
  * No charge for:
    * Transfers IN to S3
    * Transfers OUT to CloudFront or EC2 in same Region
  * Factors affecting cost:
    * Storage class type
    * Amount of storage
    * Number and type of requests
    * Data transfer out of region

Amazon S3 is a highly durable, scalable object storage service that allows virtually unlimited storage of files accessible from anywhere. It offers various storage classes to optimize costs based on access patterns and provides rich security controls for fine-grained access management.