# Amazon Aurora

* **Overview**
  * Enterprise-class relational database
  * Compatible with MySQL or PostgreSQL
  * Built for the cloud
  * Combines performance/availability of high-end commercial databases with simplicity/cost-effectiveness of open-source
  * Reduces database costs while improving reliability and availability
  * Automates time-consuming tasks:
    * Provisioning
    * Patching
    * Backup
    * Recovery
    * Failure detection and repair

* **Service benefits**
  * Highly available with fast, distributed storage subsystem
  * Straightforward to set up
  * Uses SQL queries
  * "Drop-in compatibility" with MySQL and PostgreSQL database engines
    * Use most existing database tools with little/no change
  * Pay-as-you-go service
  * Managed service that integrates with:
    * AWS Database Migration Service (AWS DMS)
    * AWS Schema Conversion Tool
    * Helps move dataset into Aurora

* **High availability**
  * Stores multiple copies of data across multiple Availability Zones
  * Continuous backups to Amazon S3
  * Up to 15 read replicas to reduce possibility of data loss
  * Designed for instant crash recovery if primary database becomes unhealthy

* **Resilient design**
  * After database crash:
    * Doesn't need to replay redo log from last checkpoint
    * Performs this on every read operation
    * Reduces restart time to less than 60 seconds in most cases
  * Buffer cache moved out of database process
    * Available immediately at restart
    * Reduces need to throttle access until cache repopulated

* **Key features summary**
  * High performance and scalability
  * High availability and durability
  * Multiple levels of security:
    * Network isolation using Amazon VPC
    * Encryption at rest using keys created/controlled through AWS KMS
    * Encryption of data in transit using SSL
  * Compatible with MySQL and PostgreSQL
  * Fully managed
    * Automates database management tasks:
      * Hardware provisioning
      * Software patching
      * Setup
      * Configuration
      * Backups

Amazon Aurora is a high-performance, highly available managed relational database service that combines the reliability of commercial databases with the cost-effectiveness of open-source. It offers automatic scaling, self-healing storage, and simplified management while maintaining compatibility with MySQL and PostgreSQL.
