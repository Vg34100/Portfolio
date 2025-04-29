# Amazon EC2 Auto Scaling

## Why is Scaling Important?

* Without scaling:
  * **Overprovisioning** = unused capacity = increased costs
  * **Underprovisioning** = poor performance = dissatisfied users

## EC2 Auto Scaling Overview

* **Maintains application availability**
* **Automatically adds/removes EC2 instances** based on defined conditions
* **Detects impaired instances** and replaces them without intervention
* **Provides several scaling options:**
  * Manual scaling
  * Scheduled scaling
  * Dynamic or on-demand scaling
  * Predictive scaling

## Auto Scaling Groups

* A collection of EC2 instances treated as a logical grouping
* Size depends on:
  * **Minimum size** - prevent group from going below this size
  * **Maximum size** - prevent group from exceeding this size
  * **Desired capacity** - target number of instances
* Scaling terminology:
  * **Scaling out** = launching instances
  * **Scaling in** = terminating instances

## How Amazon EC2 Auto Scaling Works

* **What you are scaling:**
  * Launch configuration - instance configuration template
    * AMI
    * Instance type
    * IAM role
    * Security groups
    * EBS volumes

* **Where you are scaling:**
  * VPC and subnets
  * Load balancer

* **When to scale:**
  * **Maintain current instance levels**
    * Health checks ensure unhealthy instances are replaced
  * **Manual scaling**
    * Specify changes to max, min, or desired capacity
  * **Scheduled scaling**
    * Performed automatically based on date and time
    * Useful for predictable workloads
  * **Dynamic scaling**
    * Define parameters that control scaling process
    * Uses scaling policies triggered by CloudWatch alarms
  * **Predictive scaling**
    * Capacity scales based on predicted demand
    * Uses machine learning models informed by historical data

## Implementing Dynamic Scaling

* Common configuration:
  * CloudWatch alarm monitors performance metrics
  * When threshold is breached, triggers automatic scaling event
  * Example process:
    * CloudWatch alarm monitors CPU utilization
    * If average CPU > 60% for 5 minutes, triggers scaling policy
    * Auto Scaling launches new EC2 instance per launch configuration
    * New instance registers with load balancer
    * Load balancer distributes traffic to new instance

## AWS Auto Scaling

* **Separate service** from EC2 Auto Scaling
* Monitors applications and automatically adjusts capacity
* Maintains steady, predictable performance at lowest possible cost
* Builds scaling plans for multiple resource types:
  * EC2 instances and Spot Fleets
  * ECS Tasks
  * DynamoDB tables and indexes
  * Aurora Replicas

## Key Takeaways

* Scaling enables quick response to changing resource needs
* EC2 Auto Scaling maintains availability by automatically adding/removing instances
* Auto Scaling groups contain collections of EC2 instances
* Launch configurations define instance templates
* Dynamic scaling combines EC2 Auto Scaling, CloudWatch and Elastic Load Balancing
* AWS Auto Scaling is a separate service that manages multiple resource types

Amazon EC2 Auto Scaling helps maintain optimal application performance by automatically adjusting compute capacity based on defined conditions. It enables cost optimization by ensuring you only run the instances you need when you need them.