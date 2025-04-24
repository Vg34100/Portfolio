# VPC Networking

* Internet Gateway
  * Scalable, redundant, highly available VPC component
  * Allows communication between VPC instances and internet
  * Serves two purposes:
    * Target in route tables for internet-routable traffic
    * Performs network address translation for instances with public IPv4
  * Makes a subnet public when attached to VPC with proper route table entry
    * Route table entry: 0.0.0.0/0 → internet gateway

* Network Address Translation (NAT) Gateway
  * Enables instances in private subnet to connect to internet
  * Prevents internet from initiating connections to those instances
  * Requirements:
    * Must specify public subnet for NAT gateway location
    * Requires Elastic IP address
    * Update private subnet route table to point internet traffic to NAT gateway
  * Alternative: NAT instance (less recommended)
    * NAT gateway provides better availability, bandwidth, less admin effort

* VPC Sharing
  * Enables customers to share subnets with other AWS accounts in same organization
  * Account that owns VPC (owner) shares subnets with other accounts (participants)
  * Participants can:
    * Create/modify/delete their resources in shared subnets
    * Cannot view/modify resources of other participants or VPC owner
  * Benefits:
    * Separation of duties - centrally controlled VPC structure
    * Ownership - application owners maintain resource control
    * Security groups - participants can reference each other's security group IDs
    * Efficiencies - higher subnet density, efficient VPN/Direct Connect use
    * Avoid hard limits - simplified network architecture
    * Cost optimization - reuse of NAT gateways, VPC endpoints, etc.

* VPC Peering
  * Networking connection between two VPCs for private traffic routing
  * Can create connections between:
    * Your own VPCs
    * VPCs in another AWS account
    * VPCs in different AWS Regions
  * Setup requires route table rules in both VPCs
  * Restrictions:
    * IP spaces cannot overlap
    * Transitive peering not supported (A→B→C requires explicit A→C)
    * Only one peering resource between same two VPCs

* AWS Site-to-Site VPN
  * Connects VPC to remote network
  * Setup process:
    * Create virtual private gateway and attach to VPC
    * Define customer gateway (provides info about your VPN device)
    * Create custom route table for remote-bound traffic
    * Establish Site-to-Site VPN connection
    * Configure routing for traffic

* AWS Direct Connect
  * Provides dedicated private network connection from on-premises to AWS
  * Benefits:
    * Reduced network costs
    * Increased bandwidth throughput
    * More consistent network experience than internet connections
  * Uses open-standard 802.1q VLANs

* VPC Endpoints
  * Virtual device to privately connect VPC to supported AWS services
  * No need for internet gateway, NAT, VPN, or Direct Connect
  * Traffic stays within Amazon network
  * Two types:
    * Interface endpoints (powered by AWS PrivateLink)
      * Connect to services via AWS PrivateLink
      * Charged for creation and usage
    * Gateway endpoints (Amazon S3 and DynamoDB)
      * No additional charge

* AWS Transit Gateway
  * Simplifies network architecture
  * Acts as central hub connecting VPCs and on-premises networks
  * Benefits over point-to-point connections:
    * Only need one connection from central gateway to each network
    * Hub-and-spoke model reduces management complexity
    * New VPCs automatically available to all connected networks
    * Easier to scale as network grows

VPC networking options provide various ways to connect your VPC resources to other networks, services, and the internet, giving you flexibility to design secure and efficient network architectures.
