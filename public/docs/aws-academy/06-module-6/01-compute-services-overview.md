# Compute Services Overview

* AWS offers many compute services:
  * **Amazon EC2** - provides resizable virtual machines
  * **Amazon EC2 Auto Scaling** - supports application availability
    * Defines conditions to automatically launch/terminate EC2 instances
  * **Amazon ECR** - stores and retrieves Docker images
  * **Amazon ECS** - container orchestration service for Docker
  * **VMware Cloud on AWS** - enables hybrid cloud without custom hardware
  * **AWS Elastic Beanstalk** - simple way to run and manage web applications
  * **AWS Lambda** - serverless compute solution
    * Pay only for compute time used
  * **Amazon EKS** - runs managed Kubernetes on AWS
  * **Amazon Lightsail** - simple-to-use service for building applications/websites
  * **AWS Batch** - tool for running batch jobs at any scale
  * **AWS Fargate** - run containers without managing servers/clusters
  * **AWS Outposts** - run select AWS services in on-premises data center
  * **AWS Serverless Application Repository** - discover/deploy/publish serverless applications

* Compute services fall into four categories:
  * **Virtual Machines (IaaS)** - EC2
    * Infrastructure as a service
    * Instance-based
    * Provision VMs you manage as you choose
    * Familiar concept to IT professionals
  * **Serverless** - Lambda
    * Function-based
    * Low-cost
    * Write/deploy code that runs on schedule or triggered by events
    * "Use when possible (architect for the cloud)"
    * Newer concept but easy to use after learning
  * **Container-based** - ECS, EKS, Fargate, ECR
    * Instance-based
    * Spin up and run jobs more quickly
    * Fargate reduces administrative overhead
  * **Platform as a Service (PaaS)** - Elastic Beanstalk
    * For web applications
    * Focus on your code (building your application)
    * Can easily tie into other services—databases, DNS, etc.
    * Fast and easy to get started

* Choosing optimal compute service depends on use case:
  * Consider application design, usage patterns, configuration preferences
  * Selecting wrong compute solution can lower performance efficiency
  * Start by understanding the available compute options

* Best practices:
  * Evaluate available compute options
  * Understand configuration options
  * Collect compute-related metrics
  * Use available elasticity of resources
  * Re-evaluate compute needs based on metrics

AWS compute services offer flexible options from traditional VMs to serverless functions, letting you choose the right tool based on your workload characteristics and management preferences.