# Securing a New AWS Account

* AWS account root user vs IAM access
  * "Do not use the AWS account root user except when necessary"
  * Root user access requires email address and password used to create account
  * Actions only possible with root user:
    * Update account root user password
    * Change AWS Support plan
    * Restore IAM user's permissions
    * Change account settings (contact info, allowed Regions)
  * AWS strongly recommends using IAM for day-to-day interactions

* Step 1: Stop using account root user ASAP
  * Root user has unrestricted access to all resources
  * To stop using root user:
    1. While logged in as root, create IAM user for yourself with admin permissions
    2. Create IAM group with full administrator permissions, add IAM user to group
    3. Disable and remove account root user access keys (if they exist)
    4. Enable password policy for users
    5. Sign in with new IAM user credentials
    6. Store account root user credentials in secure place

* Step 2: Enable multi-factor authentication (MFA)
  * Require MFA for account root user and all IAM users
  * Can also use MFA to control access to AWS service APIs
  * Options for retrieving MFA token:
    * Virtual MFA-compliant applications
      * Google Authenticator
      * Authy Authenticator
    * U2F security key devices (e.g., YubiKey)
    * Hardware MFA options (key fob or display card by Gemalto)

* Step 3: Use AWS CloudTrail
  * Tracks user activity on your account
  * Logs all API requests to resources in supported services
  * "Basic AWS CloudTrail event history is enabled by default and is free"
    * Contains management event data for latest 90 days
  * To access CloudTrail:
    1. Log in to AWS Management Console and choose CloudTrail service
    2. Click Event history to view/filter/search last 90 days of events
  * To enable logs beyond 90 days and event alerting:
    1. From CloudTrail Console trails page, click Create trail
    2. Name it, apply to all Regions, create new S3 bucket for log storage
    3. Configure access restrictions on S3 bucket

* Step 4: Enable billing reports (AWS Cost and Usage Report)
  * Provides information about AWS resource usage and estimated costs
  * AWS delivers reports to specified S3 bucket
  * Report updated at least once per day
  * Tracks usage and provides estimated charges by hour or day

Securing a new AWS account involves immediately limiting root user access, implementing MFA, enabling comprehensive activity logging, and setting up cost monitoring. These steps establish a secure foundation for AWS operations with proper authentication, authorization, and auditing capabilities.
