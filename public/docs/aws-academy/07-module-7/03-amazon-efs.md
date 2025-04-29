# Amazon Elastic File System (Amazon EFS)

* **Amazon EFS Overview**
  * Provides "file storage in the AWS Cloud"
  * Implements storage for EC2 instances that "multiple virtual machines can access at the same time"
  * Uses Network File System (NFS) protocol
  * "Simple, scalable, elastic file storage" for AWS services and on-premises resources
  * Simple interface for quick file system creation and configuration
  * Dynamically scales on demand without disrupting applications
  * Grows and shrinks automatically as files are added/removed
  * Applications get storage they need, when needed

* **Key Features**
  * Fully managed service
  * Ideal for:
    * Big data and analytics
    * Media processing workflows
    * Content management
    * Web serving
    * Home directories
  * Create file systems accessible to EC2 instances through file system interface
  * Supports full file system access semantics:
    * Strong consistency
    * File locking
  * Automatic scaling from gigabytes to petabytes
  * No need to provision storage
  * "Thousands of Amazon EC2 instances can access an Amazon EFS file system at the same time"
  * Designed for consistent performance to each EC2 instance
  * Designed to be highly durable and highly available
  * No minimum fee or setup costs
  * Pay only for storage used

* **Architecture**
  * File system mounted in VPC through NFS v4.0 and v4.1
  * Access concurrently from EC2 instances in VPC
  * EC2 instances across multiple AZs within same Region can mount file system
  * Many users can access and share common data source
  * Components:
    * VPC with multiple Availability Zones
    * Private subnets
    * Mount targets (one per AZ)
    * Network interfaces
    * Elastic File System

* **Implementation Steps**
  1. Create Amazon EC2 resources and launch EC2 instance
  2. Create Amazon EFS file system
  3. Create mount targets in appropriate subnets
  4. Connect EC2 instances to mount targets
  5. Verify resources and protection of AWS account

* **EFS Resources**
  * **File system** (primary resource)
    * Properties: ID, creation token, creation time, size, number of mount targets, state
  * **Mount target** (subresource)
    * Required to access file system
    * Properties: ID, subnet ID, file system ID, IP address, state
    * IP address or DNS name can be used in mount command
  * **Tags** (subresource)
    * Help organize file systems
    * Key-value pairs

* **Resource Guidelines**
  * One or more mount targets per file system
  * Create in VPC subnet
  * One mount target per Availability Zone
  * Must be in same VPC

* **Key Takeaways**
  * Provides file storage over network
  * Perfect for big data analytics, media processing, content management, web serving, home directories
  * Fully managed service eliminating storage administration tasks
  * Accessible from console, API, or CLI
  * Scales up/down as files added/removed
  * Pay only for what you use

Amazon EFS is a fully-managed file storage service that enables sharing files across multiple EC2 instances simultaneously. It automatically scales with usage, provides consistent performance, and eliminates the need for storage administration tasks.