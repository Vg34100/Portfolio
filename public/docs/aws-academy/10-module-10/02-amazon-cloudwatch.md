# Amazon CloudWatch

## Monitoring AWS Resources

* Need insight into AWS resources to use them efficiently
  * **When to launch more EC2 instances?**
  * Is application performance/availability affected by insufficient capacity?
  * How much infrastructure is actually being used?

## CloudWatch Overview

* **Monitoring and observability service**
  * Built for DevOps engineers, developers, SREs, IT managers
* **Monitors in real time:**
  * AWS resources
  * Applications that run on AWS
* **Collects and tracks:**
  * Standard metrics
  * Custom metrics
* **Alarms:**
  * Send notifications to Amazon SNS topics
  * Perform EC2 Auto Scaling or EC2 actions
* **Events:**
  * Define rules to match changes in AWS environment
  * Route events to targets for processing

## CloudWatch Alarms

* **Create alarms based on:**
  * Static threshold
  * Anomaly detection
  * Metric math expression
* **Specify:**
  * Namespace - Contains CloudWatch metric (e.g., AWS/EC2)
  * Metric - Variable to measure (e.g., CPU Utilization)
  * Statistic - Average, sum, min, max, sample count, percentile
  * Period - Evaluation period (aggregated into one data point)
  * Conditions - Greater, Greater/Equal, Lower/Equal, Lower than threshold
  * Additional configuration - Number of data points, handling missing data
  * Actions - SNS notifications, Auto Scaling or EC2 actions

## Key Takeaways

* Amazon CloudWatch monitors AWS resources and applications in real time
* Enables collecting and tracking standard and custom metrics
* Set alarms to automatically send notifications or perform actions
* Define rules to match changes and route events for processing

Amazon CloudWatch provides comprehensive monitoring for AWS infrastructure and applications, allowing you to respond to performance changes and operational events. With CloudWatch, you gain system-wide visibility into resource utilization, application performance, and operational health.