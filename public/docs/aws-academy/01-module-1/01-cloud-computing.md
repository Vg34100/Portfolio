# Introduction to Cloud Computing

* Cloud computing is the "on-demand delivery" of compute power, database, storage, applications, and other IT resources
  * Delivered via the internet with "pay-as-you-go pricing"
  * Resources run on servers in large data centers globally

* Cloud computing enables infrastructure as software rather than hardware
  * Traditional computing model views infrastructure as hardware
    * Requires space, staff, physical security, planning, capital expenditure
    * Long hardware procurement cycle
    * Must provision capacity by guessing theoretical maximum peaks
      * Pay for expensive idle resources if peak not met
      * Insufficient capacity if peak exceeded
      * Changes require time, effort, money
    * Example: New website requires buying hardware, racking, stacking, data center placement, management

  * Cloud computing model views infrastructure as software
    * Software solutions are flexible
    * Select services that best match needs
    * Provision and terminate resources on-demand
    * Pay for what you use
    * Scale resources elastically in automated fashion
    * Treat resources as temporary and disposable
    * Implement new solutions quickly with low upfront costs
    * Changes can occur quickly, easily, cost-effectively
    * Helps avoid undifferentiated work (procurement, maintenance, capacity planning)

* Three main cloud service models:
  * Infrastructure as a Service (IaaS)
    * Basic building blocks for cloud IT
    * Access to networking, computers, data storage
    * Highest level of flexibility and management control
    * Most similar to existing IT resources
  
  * Platform as a Service (PaaS)
    * Reduces need to manage underlying infrastructure
    * Focus on deployment and management of applications
  
  * Software as a Service (SaaS)
    * Completed product run and managed by service provider
    * Typically refers to end-user applications
    * No need to think about maintenance or infrastructure
    * Example: web-based email

* Three main cloud computing deployment models:
  * Cloud: Fully deployed in cloud, all parts run in cloud
    * Created in cloud or migrated from existing infrastructure
    * Can use low-level infrastructure or higher-level services
  
  * Hybrid: Connection between cloud-based resources and non-cloud resources
    * Common method: between cloud and on-premises infrastructure
    * Enables extension and growth into cloud while connecting to internal systems
  
  * On-premises (private cloud): Resources deployed on-premises
    * Uses virtualization and resource management tools
    * Doesn't provide many cloud computing benefits
    * Sought for dedicated resources
    * Similar to legacy IT infrastructure

* AWS has many similarities to traditional on-premises IT:
  * Security groups, network ACLs, IAM ≈ firewalls, ACLs, administrators
  * Elastic Load Balancing, Amazon VPC ≈ routers, network pipelines, switches
  * AMIs and EC2 instances ≈ on-premises servers
  * EBS, EFS, S3, RDS ≈ DAS, SAN, NAS, RDBMS

Cloud computing transforms infrastructure from physical equipment to flexible software-based resources. It offers various service and deployment models to match different organizational needs while providing capabilities similar to traditional IT but with greater flexibility and scalability.
