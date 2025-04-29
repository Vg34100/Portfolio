# Amazon DynamoDB

* **Relational vs Non-relational databases**
  * Relational (SQL):
    * Data storage: Rows and columns
    * Schemas: Fixed
    * Querying: Uses SQL
    * Scalability: Vertical
  * Non-Relational (NoSQL):
    * Data storage: Key-value, document, graph
    * Schemas: Dynamic
    * Querying: Focuses on collection of documents
    * Scalability: Horizontal

* **What is Amazon DynamoDB?**
  * Fast and flexible NoSQL database service for any scale
  * Consistent, single-digit-millisecond latency at any scale
  * AWS manages underlying data infrastructure
  * Redundantly stores data across multiple facilities
  * Features:
    * Create tables and items
    * System automatically partitions data
    * "No practical limit on items stored in a table"
    * Items in same table can have different attributes
    * Data stored on SSDs
    * Simple query language for consistent low-latency performance
    * Provision read/write throughput needed for table
    * Scale to handle increased requests (manual provisioning or automatic scaling)

* **Core components**
  * Tables: collection of data
  * Items: group of attributes uniquely identifiable among others
  * Attributes: fundamental data element
  * Primary key types:
    * Partition key (simple primary key): one attribute called sort key
    * Partition key and sort key (composite primary key): composed of two attributes

* **Partitioning**
  * As data grows, table data partitioned and indexed by primary key
  * Two ways to retrieve data:
    * Query operation: uses partitioning to locate items by primary key
    * Scan: locates items by matching conditions on non-key attributes
      * More flexible but less efficient - scans all items in table

* **Items in a table must have a key**
  * Simple primary key: based on single attribute with uniform distribution
    * Example: Product ID, GUID, random identifiers
  * Compound key: composed of partition key and secondary key
    * Example: Book table with author + title as unique identifier
    * Useful for frequently looking up items by first part of key

* **Key features**
  * Runs exclusively on SSDs
  * Supports document and key-value store models
  * Replicates tables automatically across choice of AWS Regions
  * Works well for mobile, web, gaming, adtech, IoT applications
  * Accessible via console, AWS CLI, and API calls
  * Consistent, single-digit millisecond latency at any scale
  * No limits on table size or throughput
  * Global Tables feature: replicates across Regions, resolves update conflicts
  * Encryption at rest and item Time-to-Live (TTL)

Amazon DynamoDB is a fully managed NoSQL database service that offers consistent performance at any scale. It features flexible schema design, automatic scaling, and global distribution capabilities, making it ideal for applications requiring high throughput and low latency.
