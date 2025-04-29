# Amazon EC2

* Amazon Elastic Compute Cloud (Amazon EC2)
  * Provides virtual machines in the cloud
  * Secure, resizable compute capacity
  * Common uses include:
    * Application servers
    * Web servers
    * Database servers
    * Game servers
    * Mail servers
    * Media servers
    * Catalog servers
    * File servers
    * Computing servers
    * Proxy servers

* EC2 = Elastic Compute Cloud
  * **Elastic** - easily increase/decrease number of servers or size of existing servers
  * **Compute** - host running applications or process data (CPU and RAM)
  * **Cloud** - hosted in AWS cloud

* Key features:
  * Full administrative control over Windows or Linux operating system
  * Launch any number of instances of any size into any Availability Zone
  * Launch from Amazon Machine Images (AMIs)
  * Control traffic to/from instances using security groups
  * Build solutions using multiple AWS services

* Launch Instance process:
  * Use Launch Instance Wizard in AWS Management Console
  * 9 key decisions when creating an EC2 instance:
    1. **Select an AMI**
       * Template used to create instance
       * Contains Windows or Linux operating system
       * Often has software pre-installed
       * Options: Quick Start, My AMIs, AWS Marketplace, Community AMIs
    
    2. **Select an instance type**
       * Consider your use case needs
       * Determines memory (RAM), processing power (CPU), storage, network performance
       * Categories: general purpose, compute optimized, memory optimized, storage optimized, accelerated computing
       * Instance type naming convention (example: t3.large)
         * t = family name
         * 3 = generation number
         * large = size
       
    3. **Network settings**
       * Specify VPC and optionally subnet
       * Choose whether to assign public IP address
    
    4. **Attach IAM role (optional)**
       * For EC2 instances needing to interact with other AWS services
       * Kept in an instance profile
       * Can attach role to existing instances
    
    5. **User data script (optional)**
       * Automate installations/configurations at instance launch
       * Runs with root privileges during boot process
       * Default: runs only first time instance starts
    
    6. **Storage options**
       * Configure root volume (where OS is installed)
       * Attach additional storage volumes
       * For each volume, specify size, volume type, deletion on termination, encryption
       * Storage options:
         * **Amazon EBS** - durable block-level storage
         * **EC2 Instance Store** - ephemeral storage on host computer
         * **Amazon EFS** - scalable file system
         * **Amazon S3** - object storage
    
    7. **Add tags**
       * Key-value pairs attached to AWS resources
       * Metadata for EC2 instances
       * Benefits: filtering, automation, cost allocation, access control
    
    8. **Security group settings**
       * Acts as virtual firewall controlling traffic
       * Exists outside guest OS
       * Create rules specifying source and ports for communication
    
    9. **Key pair**
       * Used for secure connections to instance
       * Public key stored by AWS, private key file you store
       * For Windows: use private key to obtain administrator password
       * For Linux: use private key for SSH connection

* EC2 instance lifecycle:
  * States: pending, running, rebooting, shutting down, terminated, stopping, stopped
  * Only Amazon EBS-backed instances can be stopped

* Networking considerations:
  * Public IP address changes when instance is stopped/started
  * For persistent public IP address, use Elastic IP address
  * Access instance metadata at http://169.254.169.254/latest/meta-data/

* Monitoring:
  * Use Amazon CloudWatch to monitor EC2 instances
  * Provides near-real-time metrics
  * Maintains 15 months of historical data
  * Basic monitoring (5-minute intervals, no cost)
  * Detailed monitoring (1-minute intervals, fixed monthly fee)

Amazon EC2 provides flexible virtual machines in the cloud with full control over the operating system and configurations. It supports various instance types, storage options, and networking capabilities to meet diverse workload requirements.