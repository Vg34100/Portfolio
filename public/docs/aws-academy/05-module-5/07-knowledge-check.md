# AWS Networking & Content Delivery Quiz

## Question 1
With Amazon Virtual Private Cloud (Amazon VPC), what is the smallest size subnet you can have in a VPC? (Select the best answer.)
- /26
- /24
- /30
- /28 ✓

## Question 2
With Amazon Virtual Private Cloud (Amazon VPC), what is the maximum size IP address range you can have in a VPC? (Select the best answer.)
- /16 ✓
- /30
- /28
- /24

## Question 3
You need to allow resources in a private subnet to access the internet. Which of the following must be present to enable this access? (Select the best answer.)
- Network access control lists
- NAT gateway ✓
- Security groups
- Route tables

## Question 4
Which AWS networking service enables a company to create a virtual network within AWS? (Select the best answer.)
- AWS Config
- Amazon Virtual Private Cloud (Amazon VPC) ✓
- Amazon Route 53
- AWS Direct Connect

## Question 5
True or False? Private subnets have direct access to the internet.
- True
- False ✓

## Question 6
Which component of AWS Global Infrastructure does Amazon CloudFront use to ensure low-latency delivery? (Select the best answer.)
- AWS Availability Zones
- AWS edge locations ✓
- AWS Regions
- Amazon Virtual Private Cloud (Amazon VPC)

## Question 7
Which of the following is an optional security control that can be applied at the subnet layer of a VPC? (Select the best answer.)
- Network ACL ✓
- Web application firewall
- Firewall
- Security group

## Question 8
What happens when you use Amazon Virtual Private Cloud (Amazon VPC) to create a new VPC? (Select the best answer.)
- An internet gateway is created by default.
- Three subnets are created by default in one Availability Zone.
- Three subnets are created by default: one for each Availability Zone.
- A main route table is created by default. ✓

## Question 9
Which of the following can be used to protect Amazon Elastic Compute Cloud (Amazon EC2) instances hosted in AWS? (Select the best answer.)
- Security group ✓
- AMI
- All of the above
- Internet Gateway

## Question 10
You are a solutions architect who works at a large retail company that is migrating its existing infrastructure to AWS. You recommend that they use a custom VPC. When you create a VPC, you assign it to an IPv4 Classless Inter-Domain Routing (CIDR) block of 10.0.1.0/24 (which has 256 total IP addresses). How many IP addresses are available? (Select the best answer.)
- 251 ✓
- 246
- 250
- 256

# AWS Networking Quiz Key Points

* VPC subnet size limits:
  * Smallest allowed: /28 (16 IP addresses)
  * Largest allowed: /16 (65,536 IP addresses)

* Private subnet internet access requires a NAT gateway

* Amazon VPC is the service that enables creating virtual networks within AWS

* Private subnets do NOT have direct internet access (by definition)

* CloudFront uses AWS edge locations for low-latency content delivery

* Network ACLs operate at the subnet level, while security groups operate at the instance level

* When creating a VPC, a main route table is created by default (but not an internet gateway)

* Security groups are used to protect EC2 instances

* In a VPC with CIDR block of /24 (256 addresses), only 251 IP addresses are available because AWS reserves 5 addresses in every subnet
