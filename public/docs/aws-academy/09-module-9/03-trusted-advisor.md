# AWS Trusted Advisor

* Definition:
  * Online tool providing real-time guidance to provision resources following AWS best practices
  * Examines entire AWS environment and gives real-time recommendations

* Five Categories of Recommendations:
  * Cost Optimization
    * Identifies unused/idle resources
    * Suggests opportunities for reserved capacity
    * Shows potential monthly savings
  * Performance
    * Checks service limits
    * Ensures advantage of provisioned throughput
    * Monitors for overutilized instances
  * Security
    * Identifies security gaps
    * Recommends enabling AWS security features
    * Examines permissions
  * Fault Tolerance
    * Suggests improvements for availability and redundancy
    * Recommends auto-scaling, health checks, Multi-AZ deployments
    * Advises on backup capabilities
  * Service Limits
    * Checks for service usage >80% of service limit
    * Shows limit and usage data (may take up to 24 hours to reflect changes)

## Common Trusted Advisor Recommendations

* Security Recommendations:
  * MFA on Root Account
    * Warns if multi-factor authentication not enabled on root account
    * Recommended action: Log in to root account and activate MFA device
  
  * IAM Password Policy
    * Checks if password policy is enabled with content requirements
    * Alerts when policy exists but content requirements not fully enabled
    * Recommended action: Enable all content requirements or create policy if none exists
  
  * Security Groups - Unrestricted Access
    * Checks for rules allowing unrestricted access to resources
    * Alerts for security groups with source IP /0 suffix for ports other than 25, 80, or 443
    * Recommended action: Restrict access to only required IP addresses (use /32 suffix)

* Fault Tolerance Recommendations:
  * Amazon EBS Snapshots
    * Checks age of snapshots for EBS volumes
    * Yellow alert: Most recent snapshot 7-30 days old
    * Red alert: Most recent snapshot >30 days old or no snapshot exists
    * Recommended action: Create weekly or monthly snapshots of volumes
  
  * Amazon S3 Bucket Logging
    * Checks logging configuration of S3 buckets
    * Yellow alert: Bucket doesn't have server access logging enabled
    * Yellow alert: Target bucket permissions don't include owner account
    * Recommended action: Enable bucket logging for most buckets

AWS Trusted Advisor helps optimize your AWS environment from the moment you begin implementing architecture designs. By providing actionable recommendations across five key categories, it helps improve security, reduce costs, enhance performance, and increase system reliability.