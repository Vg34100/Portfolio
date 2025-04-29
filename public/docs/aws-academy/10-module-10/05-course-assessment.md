# AWS Quiz Questions

## Question 1
Which statement is an advantage of the platform as a service (PaaS) cloud service model?
- PaaS is the most similar to traditional on-premises models for IT resources.
- PaaS provides the greatest level of control over IT resources.
- PaaS avoids the need to manage operating systems. ✓
- PaaS reduces the need to handle application deployments.

## Question 2
Which statement describes the business perspective of the AWS Cloud Adoption Framework?
- Stakeholders can create a strong business case for cloud adoption and prioritize cloud adoption initiatives. ✓
- Stakeholders can use architectural dimensions and models to understand and communicate the nature of IT systems and their relationships.
- Stakeholders can evaluate organizational structures and roles, new skill and process requirements, and identify gaps.
- Stakeholders can focus on the skills and processes that are needed to align IT strategy and goals with business strategy and goals.

## Question 3
Which statement accurately describes how customers can use AWS Support?
- Customers are assigned a Technical Account Manager (TAM) for all AWS Support plans.
- Customers must choose one of three support plans: Basic Support, Business Support, and Enterprise Support.
- Customers should contact their Support Concierge to provide quick and efficient technical support.
- Customers can get AWS Support for both experimental non-production accounts and for business-critical production accounts. ✓

## Question 4
How does the AWS Billing Dashboard help companies analyze their AWS usage to find potential cost-saving opportunities?
- The billing dashboard lists all AWS accounts with activity in the previous 6 months and a summary of spending for each account.
- The billing dashboard lists the costs that were incurred over the past month by service, by AWS Region, and by linked accounts.
- The billing dashboard shows the pricing models for all the AWS services that are used in your account and where your usage falls in the AWS Free Tier.
- The billing dashboard shows the status of the month-to-date AWS expenditure and the AWS services that account for the majority of the overall expenditure. ✓

## Question 5
What is the relationship between AWS Regions, Availability Zones, and data centers?
- Each Region has a set of data centers. Each data center maps to one Availability Zone.
- Each Region has locations called Availability Zones. Each Availability Zone has data centers. ✓
- Each Availability Zone includes data centers. Each data center in an Availability Zone is located in a different geographical Region.
- A set of data centers in a geographical area create a Region. Availability Zones are connections between Regions.

## Question 6
Which statements about responsibility are accurate based on the AWS shared responsibility model? (Select TWO.)
- Customers are responsible for the installation, maintenance, and decommissioning of the hardware that they use in the AWS data center.
- AWS is responsible for the configuration of security groups.
- AWS is responsible for the physical security of data centers. ✓
- AWS is responsible for deciding what data to encrypt in customers' Amazon S3 buckets.
- Customers are responsible for managing their user data. ✓

## Question 7
Which statements about securing data in transit are true? (Select TWO.)
- Web traffic that runs over HTTP is encrypted using TLS.
- TLS certificates can be managed using AWS Certificate Manager (ACM). ✓
- Data moving between AWS services is encrypted using TLS and AWS Key Management Service (AWS KMS). ✓
- TLS is a proprietary protocol that's used to secure traffic between AWS virtual private clouds (VPCs).
- DTLS provides encryption of data in transit.

## Question 8
A network administrator wants to configure a public subnet and route incoming and outgoing traffic to and from an Amazon EC2 instance in the public subnet to the public internet. Which virtual private cloud (VPC) feature should they use?
- VPC sharing
- An internet gateway ✓
- A network access control list (ACL)
- A network address translation (NAT) gateway

## Question 9
Which requirement suggests configuring Amazon Route 53 with latency routing?
- A company wants to route traffic to the Region that provides the fastest experience based on performance measurements. ✓
- A company wants to detect website outages and automatically redirect customers to a healthy location.
- A company wants to perform A/B testing and route traffic to different locations based on a percentage of traffic.
- A company wants to route traffic to only locations where they have distribution rights.

## Question 10
A developer is testing a prototype on Amazon EC2. The instances are terminated after testing, but the application requires uninterrupted compute while processing. Which type of Amazon EC2 instance pricing meets the need at the lowest cost?
- Spot Instance
- Scheduled Reserved Instance
- Reserved Instance
- On-Demand Instance ✓

## Question 11
A developer needs temporary block storage for cache data on an Amazon EC2 instance. Which option should they choose?
- Amazon Elastic Block Store (Amazon EBS)
- Amazon Elastic File System (Amazon EFS)
- Amazon EC2 instance store ✓
- Amazon S3

## Question 12
Which scenario is a good fit for Amazon Elastic File System (Amazon EFS) storage?
- A company wants to build a petabyte-sized data lake for analytics.
- A company needs temporary file storage for its application running on Amazon EC2.
- A company wants to host a website.
- A company needs to give all Amazon EC2 instances in its virtual private cloud (VPC) read and write access to a network file system (NFS). ✓

## Question 13
A company uploads PDF forms to Amazon S3 that must be retained for 1 year. The forms are rarely accessed after 1 week, but they must be available within 1 day when they're requested. What lifecycle policy is the most cost-effective for their needs?
- Move objects from Amazon S3 Standard to Amazon S3 Standard-Infrequent Access after 7 days.
- Move objects from Amazon Standard-Infrequent Access to Amazon S3 Standard after 1 week.
- Move objects from Amazon S3 Standard to Amazon S3 One Zone-Infrequent Access after 7 days. Delete the objects after 365 days.
- Move objects from Amazon S3 Standard to Amazon S3 Glacier after 7 days. Delete them after 365 days. ✓

## Question 14
Which scenario describes a good use case for Amazon S3 Standard storage?
- Hosting website images ✓
- Running a relational database
- Act as an EC2 instance store
- Sharing an NFS file system

## Question 15
A company has an ecommerce site that requires storage and retrieval of unstructured customer metadata to support one of its microservices. Which database option is best suited to store this data?
- Amazon Redshift
- Amazon Aurora
- Amazon DynamoDB ✓
- Amazon RDS

## Question 16
What is an attribute in an Amazon DynamoDB table?
- A set of related data
- A data element that doesn't need to be broken down further ✓
- A key that uniquely identifies a set of data elements
- A data element that is shared by all items in a table

## Question 17
How does AWS Trusted Advisor assist a company getting started with AWS?
- AWS Trusted Advisor provides recommendations for migrating on-premises resources to the cloud.
- AWS Trusted Advisor prevents access to resources that have overly broad permissions.
- AWS Trusted Advisor automatically increases service limits (quotas) if you're near the limit.
- AWS Trusted Advisor provides recommendations on configuring your AWS resources. ✓

## Question 18
What type of alert might be provided by AWS Trusted Advisor?
- An alert of unusual API calls made in an AWS account
- An alert that multi-factor authentication (MFA) isn't activated on an AWS account ✓
- An alert that an AWS Identity and Access Management (IAM) user has requested service quota changes
- An alert of unauthorized access in an AWS account

## Question 19
A company has an application running on two Amazon EC2 instances. They want to reduce idle EC2 capacity. The application load is difficult to forecast, and they want to keep the CPU utilization close to 40 percent on all instances. Which type of Amazon EC2 Auto Scaling should they configure?
- Dynamic scaling ✓
- Scheduled scaling
- Manual scaling
- Predictive scaling

## Question 20
Which statement accurately describes how Amazon EC2 Auto Scaling is used?
- Amazon EC2 Auto scaling allows an application to automatically add resources, but it can't automatically scale them back down.
- Amazon EC2 Auto Scaling is useful for dynamic, unpredictable workloads but doesn't add much value for predictable workloads.
- Amazon EC2 Auto scaling is useful for predictable workloads. ✓
- The size of an Amazon EC2 Auto Scaling group will scale up and down automatically based on its configuration and the number of instances can't be manually adjusted.