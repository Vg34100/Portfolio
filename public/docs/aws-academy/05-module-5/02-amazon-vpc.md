# Amazon VPC (Virtual Private Cloud)

* Amazon VPC
  * Enables "logically isolated section of AWS Cloud" 
  * Launch AWS resources in a virtual network you define
  * Gives you control over:
    * IP address range selection
    * Subnet creation
    * Route table configuration
    * Network gateway setup
  * Customizable network configuration
  * Multiple security layers

* VPCs and Subnets
  * VPCs:
    * Logically isolated from other VPCs
    * Dedicated to your AWS account
    * Belong to a single AWS Region
    * Can span multiple Availability Zones
  * Subnets:
    * Range of IP addresses that divide a VPC
    * Belong to a single Availability Zone
    * Classified as public or private
      * Public subnets: direct internet access
      * Private subnets: no direct internet access

* IP Addressing
  * When creating VPC, assign IPv4 CIDR block (range of private IPv4 addresses)
    * Cannot change address range after creation
    * Largest size: /16 (65,536 addresses)
    * Smallest size: /28 (16 addresses)
  * IPv6 also supported (different block size limit)
  * CIDR blocks of subnets cannot overlap
  * Reserved IP addresses:
    * 5 IPs reserved in each subnet:
      * Network address
      * VPC local router (internal communications)
      * DNS resolution
      * Future use
      * Network broadcast address
    * Example: 10.0.0.0/24 has 256 IPs, but only 251 available

* Public IP Address Types
  * Public IPv4 address
    * Manually assigned through Elastic IP
    * Automatically assigned via subnet settings
  * Elastic IP address
    * Associated with AWS account
    * Can be allocated and remapped anytime
    * Additional costs may apply

* Elastic Network Interface
  * Virtual network interface that can be:
    * Attached to an instance
    * Detached and attached to another instance
  * Attributes follow when reattached
  * Each instance has default network interface with private IPv4

* Route Tables and Routes
  * Route table: set of rules (routes) to direct network traffic
  * Each route specifies:
    * Destination: where traffic goes (CIDR block)
    * Target: how traffic gets there
  * Default includes local route for VPC internal communication
  * Each subnet must be associated with one route table
  * Main route table automatically assigned to VPC

Amazon VPC provides the foundation for your AWS network infrastructure, allowing you to create isolated environments with precise control over connectivity, routing, and security for your cloud resources.
