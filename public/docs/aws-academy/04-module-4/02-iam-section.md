# AWS Identity and Access Management

* IAM allows you to control access to AWS resources
  * A resource is an entity in AWS account that you can work with
  * Examples: EC2 instance, S3 bucket
  * Control who can perform actions (e.g., terminate EC2 instances)
  * Define "fine-grained access rights"
    * Who can access the resource
    * Which resources can be accessed and what users can do
    * How resources can be accessed
  * IAM is a no-cost AWS account feature

* Essential IAM components:
  * IAM user
    * A "person or application" that can authenticate with AWS account
    * Each user must have unique name (no spaces)
    * Security credentials not shared with other users
    * Defined in one and only one AWS account
  * IAM group
    * Collection of IAM users granted identical authorization
    * Simplifies managing permissions for multiple users
  * IAM policy
    * Document that defines permissions
    * Typically grants access to specific resources
    * Can explicitly deny access
  * IAM role
    * Tool for granting temporary access to specific AWS resources

* Authentication methods:
  * Programmatic access
    * Authenticate using:
      * Access key ID
      * Secret access key
    * Provides AWS CLI and SDK access
  * AWS Management Console access
    * Authenticate using:
      * 12-digit Account ID or alias
      * IAM user name
      * IAM password
      * If enabled, MFA prompts for authentication code

* Multi-factor authentication (MFA)
  * Provides increased security
  * Requires username, password, and unique authentication code
  * Options for generating MFA tokens:
    * Virtual MFA-compliant applications (Google Authenticator, Authy)
    * U2F security key devices
    * Hardware MFA devices

* Authorization principles:
  * All permissions implicitly denied by default
  * If explicitly denied, never allowed
  * "Follow the principle of least privilege"
  * IAM settings apply globally across all AWS Regions

* IAM policies:
  * Formal statement of permissions granted to entity
  * Can be attached to any IAM entity
  * Specify allowed actions, resources, and conditions
  * Two types:
    * Identity-based policies - attached to users, groups, roles
      * Managed policies (standalone, can attach to multiple entities)
      * Inline policies (embedded directly in single entity)
    * Resource-based policies - attached to resources like S3 buckets
  * Policy evaluation order doesn't affect outcome
  * Explicit deny always overrides any allow

* IAM groups:
  * Collection of IAM users
  * Convenient way to specify permissions for multiple users
  * Characteristics:
    * Group can contain many users; user can belong to multiple groups
    * Groups cannot be nested (no groups within groups)
    * No default group that includes all users automatically

* IAM roles:
  * IAM identity with specific permissions
  * Similar to IAM user but not associated with one person
  * Intended to be "assumable" by person, application, or service
  * Provides temporary security credentials
  * Used to delegate access:
    * By IAM user in same AWS account
    * By AWS service in same account
    * By IAM user in different AWS account

IAM provides comprehensive access control for AWS resources through users, groups, roles, and policies. It ensures secure authentication and fine-grained authorization, allowing organizations to implement least-privilege security models while maintaining flexibility.
