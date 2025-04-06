# AWS Global Infrastructure

* AWS Global Infrastructure designed for:
  * **Flexibility**
  * **Reliability** 
  * **Scalability**
  * **Security**
  * High-quality global network performance

* For current infrastructure information:
  * AWS Global Infrastructure Map: aws.amazon.com/about-aws/global-infrastructure
  * Regions and Availability Zones: aws.amazon.com/about-aws/global-infrastructure/regions_az/

## Regions
* AWS has 22 Regions worldwide
* Each Region:
  * Physical geographical location
  * Contains one or more Availability Zones
  * **Regions are isolated from one another**
    * Resources not automatically replicated across Regions
    * "It is your responsibility to replicate data across Regions"
  * Regions introduced after March 20, 2019 are disabled by default
  * Some Regions have restricted access:
    * Amazon AWS (China) - Beijing and Ningxia Regions only
    * AWS GovCloud (US) - For US government agencies

## Selecting a Region
* Factors to consider:
  * **Data governance and legal requirements**
    * Local laws might require information kept within geographical boundaries
  * **Proximity to customers (latency)**
    * Run applications/store data close to users
    * Can test latency using CloudPing (cloudping.info)
  * **Services available within Region**
    * Not all services available in all Regions
  * **Costs** (vary by Region)
    * Example: t3.medium EC2 instance
      * US East (Ohio): $0.0416/hour
      * Asia Pacific (Tokyo): $0.0544/hour

## Availability Zones
* Each Region has multiple Availability Zones
* Each Availability Zone:
  * Fully isolated partition of AWS infrastructure
  * Consists of discrete data centers
  * Designed for fault isolation
  * Has own power infrastructure
  * Physically separated (but within 100 km of other AZs)
  * Interconnected with high-speed private networking
    * High-bandwidth, low-latency
    * Synchronous replication between zones
  * **You choose your Availability Zones**
  * AWS recommends replicating across zones for resiliency

## Data Centers
* Foundation for AWS infrastructure
* Customers don't specify data centers (AZ is most granular specification)
* Features:
  * Secure design
  * Redundant design to tolerate failure
  * Critical systems backed up across multiple AZs
  * Continuous monitoring for capacity planning
  * Locations not disclosed
  * Automated processes move traffic away from affected areas
  * Custom network equipment from multiple ODMs
  * Each typically has 50,000 to 80,000 physical servers

## Points of Presence
* Amazon CloudFront: content delivery network (CDN)
* Amazon Route 53: Domain Name System (DNS) service
* Edge locations:
  * Requests routed to nearest edge location to lower latency
  * Located in most major cities around the world
* Regional edge caches:
  * Used by default with CloudFront
  * For content not accessed frequently enough to remain in edge location

## AWS Infrastructure Features
* **Elasticity and scalability**
  * Dynamic adaptation of capacity
  * Adapts to accommodate growth
* **Fault-tolerance**
  * Continues operating despite failed components
  * Built-in redundancy
* **High availability**
  * Minimal downtime
  * Minimal to no human intervention

## Key Takeaways
* AWS Global Infrastructure consists of Regions and Availability Zones
* Region choice typically based on compliance requirements or to reduce latency
* Each Availability Zone physically separate with redundant power, networking, connectivity
* Edge locations and Regional edge caches improve performance by caching content closer to users

The AWS Global Infrastructure provides the foundation for AWS services, delivering a reliable, scalable, and secure environment with global reach and local presence.
