# Amazon S3 Glacier

* **Overview**
  * Secure, durable, extremely low-cost cloud storage service
  * For "data archiving and long-term backup"
  * Data stored at extremely low cost (cheaper than S3)
  * "Data can take several hours to retrieve" - not immediate access
  * Designed for "11 9s of durability" for objects
  * Encryption support:
    * In transit via SSL/TLS
    * At rest (automatic)
  * "Vault Lock feature enforces compliance through policy"

* **Key Concepts**
  * **Archive**
    * Base unit of storage in Amazon S3 Glacier
    * Any object (photo, video, file, document)
    * Each has unique ID and optional description
  * **Vault**
    * Container for storing archives
    * Specify vault name and Region when creating
  * **Vault Access Policy**
    * Controls who can access vault data and what operations they can perform
    * One vault access policy per vault
    * Vault lock policy ensures vault cannot be altered
    * Each vault can have one vault access policy and one vault lock policy

* **Retrieval Options**
  * **Expedited**
    * Available within 1-5 minutes
    * Highest cost
  * **Standard**
    * Complete within 3-5 hours
    * Medium cost and time
  * **Bulk**
    * Complete within 5-12 hours
    * Lowest cost

* **Use Cases**
  * **Media asset archiving**
    * Video and news footage
    * Move to S3 for distribution when needed
  * **Healthcare information archiving**
    * Patient records (LIS, PACS, EHR)
    * Meet regulatory requirements for decades
  * **Regulatory and compliance archiving**
    * Financial services and healthcare
    * Vault Lock for compliance controls (e.g., SEC Rule 17a-4(f))
  * **Scientific data archiving**
    * Research organizations
    * Reduce hardware/facility management complexities
  * **Digital preservation**
    * Libraries and government agencies
    * Systematic data integrity checks
    * Automatically self-healing
  * **Magnetic tape replacement**

* **Access Methods**
  * AWS Management Console (limited operations)
    * Creating/deleting vaults
    * Creating/managing archive policies
  * For most operations, must use:
    * S3 Glacier REST APIs
    * AWS Java or .NET SDKs
    * AWS CLI
  * Lifecycle policies to archive data from S3

* **Lifecycle Policies**
  * Automate data movement between storage types
  * Reduces cost as data becomes less important over time
  * Can set per object or per bucket
  * Example flow:
    * Amazon S3 Standard → S3 Standard-Infrequent Access → S3 Glacier → Delete
    * Move based on age of data (e.g., 30 days, 60 days, 365 days)

* **Comparison with Amazon S3**
  * **Data volume**: Both unlimited
  * **Average latency**: 
    * S3: milliseconds
    * Glacier: minutes/hours
  * **Item size**:
    * S3: 5 TB maximum
    * Glacier: 40 TB maximum
  * **Cost/GB per month**:
    * S3: Higher cost
    * Glacier: Lower cost
  * **Billed requests**:
    * S3: PUT, COPY, POST, LIST, GET
    * Glacier: UPLOAD and retrieval
  * **Retrieval pricing**:
    * S3: ¢ per request
    * Glacier: ¢¢ per request and per GB

* **Security**
  * S3 Glacier encrypts data by default
  * Control access with IAM
  * S3 Glacier encrypts data with AES-256
  * S3 Glacier manages keys for you

* **Key Takeaways**
  * Data archiving service designed for security, durability, extremely low cost
  * Pricing based on Region
  * Ideal for long-term archiving
  * Designed for 11 9s of durability

Amazon S3 Glacier is a highly secure, durable, and extremely low-cost storage service designed specifically for data archiving and long-term backup. With multiple retrieval options and strong compliance features, it's ideal for preserving rarely accessed data while minimizing storage costs.