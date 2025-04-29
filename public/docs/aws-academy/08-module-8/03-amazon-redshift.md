# Amazon Redshift

* **Introduction**
  * Fast, fully managed data warehouse service
  * Simple and cost-effective to set up, use, and scale
  * Enables complex analytic queries against petabytes of structured data
  * Uses:
    * Sophisticated query optimization
    * Columnar storage on high-performance local disks
    * Massively parallel data processing
  * Most results come back in seconds

* **Parallel processing architecture**
  * Leader node:
    * Manages communications with client programs
    * Manages communication with compute nodes
    * Parses and develops plans for database operations
    * Compiles code for query plan elements
    * Assigns code to individual compute nodes
  * Compute nodes:
    * Run compiled code
    * Send intermediate results to leader node for final aggregation
  * Cost-effective:
    * Start for as little as 25 cents per hour
    * At scale: approximately $1,000 per terabyte per year (3-Year Partial Upfront Reserved Instance)
  * Redshift Spectrum: run queries against exabytes directly in Amazon S3

* **Automation and scaling**
  * Automates common administrative tasks:
    * Manage
    * Monitor
    * Scale
  * Intrinsic scalability: cluster can be scaled up/down with few clicks
  * Built-in security: strong encryption for data at rest and in transit

* **Compatibility**
  * Compatible with standard SQL and tools
  * Supports standard SQL
  * Provides high-performance JDBC and ODBC connectors
  * Works with SQL clients and BI tools of your choice

* **Use cases**
  * Enterprise data warehouse (EDW):
    * Migrate at comfortable pace
    * Experiment without large upfront cost/commitment
    * Respond faster to business needs
  * Big data:
    * Low price point for small customers
    * Managed service for easy deployment/maintenance
    * Focus more on data, less on database management
  * Software as a service (SaaS):
    * Scale data warehouse capacity as demand grows
    * Add analytic functionality to applications
    * Reduce hardware and software costs
    * Deploy cluster per customer, use tagging for SLAs/billing

* **Key features summary**
  * Fast, fully managed data warehouse service
  * Easily scale with no downtime
  * Columnar storage and parallel processing architectures
  * Automatically and continuously monitors cluster
  * Encryption built in

Amazon Redshift is a fully managed, petabyte-scale data warehouse service that makes it simple and cost-effective to analyze data using standard SQL and existing BI tools. It combines high performance, scalability, and automation to provide a complete data warehousing solution in the cloud.
