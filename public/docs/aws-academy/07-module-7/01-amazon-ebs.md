# Amazon Elastic Block Store (Amazon EBS)

* **Persistent block storage** volumes for use with Amazon EC2 instances
  * Persistent storage retains data after power is shut off (non-volatile)
  * Each volume automatically replicated within its Availability Zone
  * Designed for high availability and durability
  * Provides consistent and low-latency performance
  * Scale usage up/down within minutes
  * Pay only for what you provision

* **Block storage vs. Object storage**
  * Block storage: Change only the block containing the character
  * Object storage: Entire file must be updated
  * Block storage solutions typically:
    * Faster
    * Use less bandwidth
    * Can cost more than object-level storage

* **Amazon EBS functionality**
  * Create individual storage volumes and attach to EC2 instance
  * Offers block-level storage
  * Volumes automatically replicated within Availability Zone
  * Can be backed up to Amazon S3 through snapshots
  * Use cases:
    * Boot volumes and storage for EC2 instances
    * Data storage with file system
    * Database hosts
    * Enterprise applications

* **Volume Types**
  * **Solid State Drives (SSD)**
    * General Purpose
      * 16 TiB maximum
      * 16,000 maximum IOPS/Volume
      * 250 MiB/s maximum throughput/volume
    * Provisioned IOPS
      * 16 TiB maximum
      * 64,000 maximum IOPS/Volume
      * 1,000 MiB/s maximum throughput/volume
  * **Hard Disk Drives (HDD)**
    * Throughput-Optimized
      * 16 TiB maximum
      * 500 maximum IOPS/Volume
      * 500 MiB/s maximum throughput/volume
    * Cold
      * 16 TiB maximum
      * 250 maximum IOPS/Volume
      * 250 MiB/s maximum throughput/volume

* **Use cases by volume type**
  * **SSD - General Purpose**
    * Recommended for most workloads
    * System boot volumes
    * Virtual desktops
    * Low-latency interactive applications
    * Development and test environments
  * **SSD - Provisioned IOPS**
    * Critical business applications requiring sustained IOPS performance
    * More than 16,000 IOPS or 250 MiB/second throughput per volume
    * Large database workloads
  * **HDD - Throughput-Optimized**
    * Streaming workloads requiring consistent, fast throughput at low price
    * Big data
    * Data warehouses
    * Log processing
    * Cannot be a boot volume
  * **HDD - Cold**
    * Throughput-oriented storage for large volumes of infrequently accessed data
    * Scenarios where lowest storage cost is important
    * Cannot be a boot volume

* **EBS Features**
  * **Snapshots**
    * Point-in-time snapshots
    * Recreate a new volume at any time
  * **Encryption**
    * Encrypted Amazon EBS volumes
    * No additional cost
  * **Elasticity**
    * Increase capacity
    * Change to different types

* **EBS Pricing considerations**
  * **Volumes**
    * Persist independently from instance
    * All volume types charged by amount provisioned per month
  * **IOPS**
    * General Purpose SSD: Charged by amount provisioned in GB per month
    * Magnetic: Charged by number of requests to volume
    * Provisioned IOPS SSD: Charged by amount provisioned in IOPS
  * **Snapshots**
    * Added cost per GB-month of data stored
  * **Data transfer**
    * Inbound data transfer is free
    * Outbound data transfer across Regions incurs charges

* **Key takeaways**
  * Persistent and customizable block storage for Amazon EC2
  * HDD and SSD types
  * Replicated in same Availability Zone
  * Easy and transparent encryption
  * Elastic volumes
  * Back up using snapshots

Amazon EBS provides persistent block storage with varying performance characteristics for EC2 instances. It offers different volume types to match workload requirements and features like snapshots, encryption, and elasticity to ensure data durability and flexibility.