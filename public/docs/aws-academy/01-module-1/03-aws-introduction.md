# Introduction to Amazon Web Services (AWS)

* Web services defined:
  * Any software that makes itself available over internet/intranet networks
  * Uses standardized format (XML or JSON) for API interactions
  * Not tied to any operating system or programming language
  * Self-describing via interface definition file
  * Discoverable

* What is AWS?
  * "A secure cloud platform that offers a broad set of global cloud-based products"
  * Provides "on-demand access" to compute, storage, network, database, IT resources, management tools
  * Offers "flexibility"
  * "Pay only for individual services you need, for as long as you use them"
  * Services "work together" like building blocks

* AWS services categories:
  * Multiple categories including: Compute, Storage, Database, Networking, Security, Management, Analytics, etc.
  * Each category contains one or more services
  * Services from different categories can be combined to build solutions

* Example solution:
  * Amazon EC2 instances (compute) receive data from customers
  * Data batched and stored in Amazon S3 (storage)
  * Nonrelational database like Amazon DynamoDB powers application
  * All services run inside Amazon VPC (networking)

* AWS compute service examples (based on needs):
  * Amazon EC2: Complete control over computing resources
  * AWS Lambda: Run code without managing/provisioning servers
  * AWS Elastic Beanstalk: Service that deploys, manages, scales web applications
  * Amazon Lightsail: Lightweight cloud platform for simple web applications
  * AWS Batch: Run hundreds of thousands of batch workloads
  * AWS Outposts: Run AWS infrastructure in on-premises data center
  * Amazon ECS/EKS/Fargate: Implement containers or microservices architecture
  * VMware Cloud on AWS: Migrate on-premises virtualization platform to AWS

* Common service categories covered in AWS course:
  * Compute services (EC2, Lambda, Elastic Beanstalk, etc.)
  * Storage services (S3, S3 Glacier, EFS, EBS)
  * Database services (RDS, DynamoDB, Redshift, Aurora)
  * Networking and Content Delivery services (VPC, Route 53, CloudFront, etc.)
  * Security, Identity, and Compliance services (IAM, Cognito, Shield, etc.)
  * Management and Governance services (Trusted Advisor, CloudWatch, etc.)
  * AWS Cost Management services (Cost & Usage Report, Budgets, Cost Explorer)

* Three ways to interact with AWS:
  * AWS Management Console: Rich graphical interface for most features
  * AWS Command Line Interface (CLI): Suite of utilities for command scripts in Linux, macOS, Windows
  * Software Development Kits (SDKs): Packages for accessing AWS in popular programming languages
  * All built on common REST-like API foundation

AWS provides a comprehensive cloud platform with numerous services across multiple categories that work together as building blocks for solutions. Services can be accessed through console, CLI, or SDKs to create flexible, scalable applications that meet business and technical requirements.
