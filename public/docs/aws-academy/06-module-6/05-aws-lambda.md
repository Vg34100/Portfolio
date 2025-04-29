# Introduction to AWS Lambda

* **AWS Lambda basics**:
  * Serverless compute service
  * Run code without provisioning/managing servers
  * Run on schedule or in response to events
  * Pay only for compute time used
  * Code runs only when triggered
  * Code you run is a Lambda function

* **Benefits of Lambda**:
  * Supports multiple programming languages
    * Java, Go, PowerShell, Node.js, C#, Python, Ruby
    * Use any library (native or third-party)
  * Completely automated administration
    * AWS manages infrastructure
    * Focus on building differentiated services
    * AWS handles administration, maintenance, security patches
    * Built-in logging and monitoring through CloudWatch
  * Built-in fault tolerance
    * Maintains compute capacity across multiple Availability Zones
    * Protection against machine/data center failures
    * No maintenance windows or scheduled downtimes
  * Supports orchestration of multiple functions
    * Build workflows with AWS Step Functions
    * Define sequential, parallel, branching, error-handling steps
    * Create stateful, long-running processes
  * Pay-per-use pricing
    * Pay only for requests served and compute time required
    * Billing metered in 100-millisecond increments
    * Cost-effective and scalable

* **AWS Lambda event sources**:
  * AWS services or applications that trigger Lambda functions
  * Services that invoke Lambda asynchronously:
    * Amazon S3
    * Amazon SNS
    * Amazon CloudWatch Events
  * Services Lambda can poll:
    * Amazon SQS
    * Amazon DynamoDB
  * Services that invoke Lambda directly:
    * Elastic Load Balancing (Application Load Balancer)
    * Amazon API Gateway
  * Direct invocation:
    * Lambda console
    * Lambda API
    * AWS SDK
    * AWS CLI
    * AWS toolkits

* **Lambda function configuration**:
  * Name the function
  * Specify runtime environment (Python, Node.js, etc.)
  * Define execution role (IAM permissions)
  * Configure function:
    * Add trigger (event source)
    * Add function code
    * Specify memory allocation (128MB to 10,240MB)
    * Optional settings: environment variables, description, timeout, VPC, tags

* **Example use cases**:
  * **Schedule-based example**: Start and stop EC2 instances
    * CloudWatch event scheduled to run Lambda function
    * Function triggered with IAM role permissions
    * EC2 instances started/stopped at defined times
  
  * **Event-based example**: Create thumbnail images
    * User uploads object to S3 bucket
    * S3 detects object-created event
    * S3 invokes Lambda function with event data
    * Function runs with execution role
    * Function reads object, creates thumbnail, saves to target bucket

* **AWS Lambda quotas**:
  * Soft limits per Region:
    * Concurrent executions = 1,000
    * Function and layer storage = 75GB
  * Hard limits for individual functions:
    * Maximum memory allocation = 10,240MB
    * Function timeout = 15 minutes
    * Deployment package size = 250MB unzipped
    * Container image code package size = 10GB

AWS Lambda provides serverless compute capabilities that automatically scale without server management. It enables you to run code in response to events or on a schedule while only paying for the actual execution time, making it cost-effective for many application patterns.