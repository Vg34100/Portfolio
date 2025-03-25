# AWS Organizations

* Introduction to AWS Organizations
  * Free account management service
  * Consolidate multiple AWS accounts into one organization
  * Includes consolidated billing and account management
  * Helps meet budgetary, security, and compliance needs
  * Main benefits:
    * Centrally managed access policies across multiple accounts
    * Controlled access to AWS services
    * Automated AWS account creation and management
    * Consolidated billing across multiple accounts

* AWS Organizations terminology
  * Organization/root: Basic structure containing accounts
  * Organizational Units (OUs): Containers for accounts within root
    * Can contain other OUs
    * Creates hierarchy like upside-down tree
    * Root at top, branches are child OUs, accounts are leaves
    * Policies attached to nodes flow down to branches and leaves
  * Each OU can have only one parent
  * Each account can be member of exactly one OU

* Key features and benefits
  * Policy-based account management
    * Create service control policies (SCPs) to centrally control AWS services
  * Group-based account management
    * Create groups of accounts and attach policies to groups
  * APIs that automate account management
    * Simplify account management using APIs
  * Consolidated billing
    * Set up single payment method for all accounts
    * Combined view of charges
    * Take advantage of pricing benefits from aggregated usage

* Security with AWS Organizations
  * IAM policies vs. Service Control Policies
    * IAM policies allow/deny access to AWS services for users, groups, roles
    * SCPs allow/deny access to AWS services for accounts or groups of accounts
    * IAM policies cannot restrict AWS account root user
    * SCPs affect all IAM users, groups, roles AND root user

* Organizations setup (4 steps)
  * Step 1: Create Organization
    * Use current AWS account as primary account
    * Invite one account and create another as member
  * Step 2: Create organizational units
    * Create two OUs and place member accounts in them
  * Step 3: Create service control policies
    * Apply restrictions to delegated actions
  * Step 4: Test restrictions
    * Sign in as different roles and test policy impact
    * Can use IAM policy simulator

* Limits of AWS Organizations
  * Name restrictions: Unicode characters, 250 character limit
  * Entity limits include:
    * Number of accounts (varies)
    * Number of roots (1)
    * Number of OUs (1,000)
    * Number of policies (1,000)
    * Max size of control policy document (5,120 bytes)
    * Max nesting of OUs (5 levels under root)

* Accessing AWS Organizations
  * AWS Management Console: Browser-based interface
  * AWS Command Line Interface (CLI): Commands at system command line
  * Software Development Kits (SDKs): Access services from code (Java, Python, etc.)
  * HTTPS Query API: Programmatic access requiring digital signatures

AWS Organizations enables centralized management of multiple AWS accounts with policy-based controls and consolidated billing. It provides a hierarchical structure with organizational units to organize accounts and apply consistent governance.
