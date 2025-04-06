# AWS Shared Responsibility Model

* Security and compliance are "shared between AWS and the customer"
  * AWS responsible for security "of" the cloud
  * Customer responsible for security "in" the cloud

* AWS responsibilities:
  * Physical security of data centers
    * Controlled, need-based access
    * Located in nondescript facilities
    * 24/7 security guards
    * Two-factor authentication
    * Access logging and review
    * Video surveillance
    * Disk degaussing and destruction
  * Hardware infrastructure (servers, storage, appliances)
  * Software infrastructure (operating systems, service applications, virtualization)
  * Network infrastructure
    * Routers, switches, load balancers, firewalls, cabling
    * Continuous monitoring at external boundaries
    * Securing access points
    * Redundant infrastructure with intrusion detection
  * Virtualization infrastructure
  * Instance isolation

* Customer responsibilities:
  * EC2 instance operating systems
    * "Including patching and maintenance"
  * Applications
    * Passwords, role-based access, etc.
  * Security group configuration
  * OS or host-based firewalls
    * Including intrusion detection/prevention systems
  * Network configurations
  * Account management
    * Login and permission settings for each user
  * Data encryption (both at rest and in transit)
  * Data integrity authentication

* Service models and responsibilities:
  * Infrastructure as a Service (IaaS)
    * "Customer has more flexibility" over configuring networking and storage
    * Customer responsible for managing more security aspects
    * Customer configures all access controls
    * Examples: EC2, EBS, VPC
  * Platform as a Service (PaaS)
    * Customer doesn't need to manage underlying infrastructure
    * AWS handles OS patching, database patching, firewall config, disaster recovery
    * Customer focuses on managing code or data
    * Examples: RDS, Elastic Beanstalk, Lambda
  * Software as a Service (SaaS)
    * Software centrally hosted and licensed on subscription basis
    * Accessed via web browser, mobile app, or API
    * Customer doesn't manage the infrastructure
    * Examples: AWS Trusted Advisor, AWS Shield, Amazon Chime

The AWS Shared Responsibility Model clearly delineates security duties between AWS and customers. AWS secures the infrastructure while customers must protect their data, applications, and access mechanisms operating within the AWS environment.
