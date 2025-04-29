# Elastic Load Balancing

* Elastic Load Balancing
  * **Distributes incoming application or network traffic** across multiple targets
    * In a single Availability Zone or across multiple Availability Zones
  * **Scales your load balancer** as traffic to your application changes over time
  * Distributes traffic to targets including:
    * IP addresses
    * EC2 instances
    * Containers
    * Lambda functions

## Types of Load Balancers

* **Application Load Balancer**
  * Operates at application level (OSI model layer 7)
  * Routes traffic based on content of the request
  * Ideal for HTTP and HTTPS traffic
  * Provides advanced request routing for microservices and container-based applications
  * Ensures latest SSL/TLS ciphers and protocols

* **Network Load Balancer**
  * Operates at network transport level (OSI model layer 4)
  * Routes connections based on IP protocol data
  * Works well for TCP and UDP traffic
  * Capable of handling millions of requests per second with ultra-low latencies
  * Optimized for sudden and volatile traffic patterns

* **Classic Load Balancer**
  * Provides basic load balancing across multiple EC2 instances
  * Operates at both application and network levels
  * Supports HTTP, HTTPS, TCP, and SSL
  * Older implementation - AWS recommends using Application or Network Load Balancer when possible

## How Elastic Load Balancing Works

* Load balancer accepts incoming traffic from clients
* **Listeners** check for connection requests
  * Configured with protocol and port number
* Load balancer routes traffic to healthy targets
* **Health checks** monitor the health of registered targets
  * Only sends requests to healthy instances
* Configuration differences:
  * Application and Network Load Balancers: register targets in **target groups**
  * Classic Load Balancers: register instances directly with the load balancer

## Elastic Load Balancing Use Cases

* **Highly available and fault-tolerant applications**
  * Balances traffic across multiple Availability Zones
  * Routes traffic away from unhealthy targets automatically
  
* **Containerized applications**
  * Load balance across multiple ports on same EC2 instance
  * Deep integration with Amazon ECS
  
* **Elasticity and scalability**
  * Works with CloudWatch and EC2 Auto Scaling
  * Automatically registers new instances as they're provisioned
  
* **Virtual private cloud (VPC)**
  * Create public entry point into VPC
  * Route traffic between application tiers
  * Can be public or internal
  
* **Hybrid environments**
  * Load balance across AWS and on-premises resources
  * Support for DNS-based weighted load balancing
  
* **Invoke Lambda functions over HTTP(S)**
  * Support for serverless applications
  * Use content-based routing rules to direct requests

## Load Balancer Monitoring

* **Amazon CloudWatch metrics**
  * Publishes data points to CloudWatch
  * Create alarms when metrics exceed thresholds
  
* **Access logs**
  * Capture detailed information about requests
  * Store as log files in Amazon S3
  * Use for analyzing traffic patterns and troubleshooting
  
* **AWS CloudTrail logs**
  * Capture API call information
  * Store as log files in Amazon S3
  * Determine who made calls, when, from where

## Key Takeaways

* Elastic Load Balancing distributes traffic across multiple targets in one or more Availability Zones
* Supports three types of load balancers: Application, Network, and Classic
* Offers comprehensive monitoring and logging capabilities

Elastic Load Balancing helps you build highly available applications by distributing traffic across healthy instances and across multiple Availability Zones. It integrates with other AWS services for monitoring, auto-scaling, and hybrid deployments.