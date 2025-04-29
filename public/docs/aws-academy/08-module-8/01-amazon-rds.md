# Amazon Relational Database Service

* **Managed vs Unmanaged Services**
  * Unmanaged:
    * Scaling, fault tolerance, and availability managed by you
    * User must manage response to load changes, errors, unavailability
    * Benefit: more fine-tuned control
  * Managed:
    * Scaling, fault tolerance, availability built into service
    * Require less configuration
    * Example: Amazon S3 handles scaling, fault-tolerance automatically

* **Challenges of running relational databases**
  * Server maintenance and energy footprint
  * Software installation and patches
  * Database backups and high availability
  * Limits on scalability
  * Data security
  * OS installation and patches

* **Amazon RDS Overview**
  * Managed service that sets up and operates relational database in cloud
  * Automates time-consuming administrative tasks
  * Primary focus: data and optimizing application

* **Transitioning from on-premises to RDS**
  * On-premises: admin responsible for everything
  * Database on EC2: hardware/data center managed by AWS, admin handles software/OS
  * RDS: admin only handles application optimization
    * AWS manages: OS installation/patches, database software installation/patches, backups, high availability, scaling, server maintenance
  
* **RDS DB Instances**
  * Basic building block is database instance
  * Resources determined by database instance class
  * Storage type dictated by disk types
  * Supported engines:
    * MySQL
    * Amazon Aurora
    * Microsoft SQL Server
    * PostgreSQL
    * MariaDB
    * Oracle

* **RDS in a VPC**
  * Run instances using Amazon VPC
  * Control over virtual networking environment
  * Select IP address range, create subnets, configure routing/access
  * Database typically isolated in private subnet
  * Only directly accessible to indicated application instances

* **High Availability with Multi-AZ Deployment**
  * Automatically generates standby copy in another Availability Zone
  * Transactions synchronously replicated to standby
  * Enhances availability during planned maintenance
  * Protects against instance failure and Availability Zone disruption
  * If main instance fails, standby becomes new main instance
  * Synchronous replication minimizes data loss
  * Applications reference database by name using RDS DNS endpoint

* **Read Replicas**
  * Supports creation for MySQL, MariaDB, PostgreSQL, Amazon Aurora
  * Updates asynchronously copied to read replica instance
  * Reduces load on source by routing read queries to replica
  * Can scale beyond capacity constraints for read-heavy workloads
  * Can be promoted to primary (requires manual action due to asynchronous replication)
  * Can be created in different Region (disaster recovery, latency reduction)

* **Use Cases**
  * Web and mobile applications
    * High throughput
    * Massive storage scalability
    * High availability
  * Ecommerce applications
    * Low-cost database
    * Data security
    * Fully managed solution
  * Mobile and online games
    * Rapidly grow capacity
    * Automatic scaling
    * Database monitoring

* **When to Use Amazon RDS**
  * Use when application requires:
    * Complex transactions or complex queries
    * Medium to high query/write rate (up to 30,000 IOPS)
    * No more than a single worker node or shard
    * High durability
  * Don't use when application requires:
    * Massive read/write rates (e.g., 150,000 writes/second)
    * Sharding due to high data size/throughput demands
    * Simple GET/PUT requests handled by NoSQL database
    * RDBMS customization

* **Cost Considerations**
  * Clock-hour billing: resources incur charges when running
  * Database characteristics: engine, size, memory class
  * DB purchase type:
    * On-Demand: compute capacity by hour
    * Reserved Instances: upfront payment for 1 or 3-year term
  * Number of DB instances: provision multiple for peak loads
  * Storage:
    * No charge for backup up to 100% of database storage (active DB)
    * Charge for backup storage of terminated instances
    * Charge for additional backup storage beyond provisioned amount
  * Deployment type affects storage/I/O charges:
    * Single Availability Zone
    * Multiple Availability Zones
  * Data transfer:
    * No charge for inbound
    * Tiered charges for outbound

Amazon RDS provides a fully managed relational database service that handles the heavy lifting of database administration. It allows users to focus on application optimization while AWS manages the underlying infrastructure, scaling, backups, and high availability.
