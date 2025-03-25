# AWS Pricing Fundamentals

* Three fundamental drivers of cost with AWS:
  * Compute
    * Charged per hour/second (Linux only)
    * Varies by instance type
  * Storage
    * Charged typically per GB
  * Data transfer
    * Outbound is aggregated and charged
    * Inbound has no charge (with some exceptions)
    * Charged typically per GB

* How do you pay for AWS?
  * "Pay for what you use"
    * Pay only for services you consume
    * No large upfront expenses
    * No long-term contracts required
    * Lower variable costs
    * Quickly adapt to changing business needs
  * "Pay less when you reserve"
    * Reserved Instances (RIs) save up to 75%
    * Options:
      * All Upfront Reserved Instance (AURI) → largest discount
      * Partial Upfront Reserved Instance (PURI) → lower discounts
      * No Upfront Payments Reserved Instance (NURI) → smaller discount
  * "Pay less when you use more" (volume-based discounts)
    * Savings as usage increases
    * Tiered pricing for services like S3, EBS, EFS
    * Multiple storage services deliver lower costs based on needs
  * "Pay even less as AWS grows"
    * AWS focuses on lowering cost of doing business
    * Passes savings from economies of scale to you
    * Since 2006, AWS lowered pricing 75 times (as of September 2019)
    * Future higher-performing resources replace current ones at no extra charge

* Custom pricing
  * Available for high-volume projects with unique requirements

* AWS Free Tier
  * Free hands-on experience with AWS platform, products, services
  * Free for 1 year for new customers

* Services with no charge:
  * Amazon VPC
  * AWS Identity and Access Management (IAM)
  * Consolidated Billing
  * AWS Elastic Beanstalk**
  * AWS CloudFormation**
  * Auto Scaling**
  * AWS OpsWorks
  * **Note: There might be charges for other AWS services used with these services

* Key takeaways:
  * No charge (with some exceptions) for:
    * Inbound data transfer
    * Data transfer between services within same AWS Region
  * Pay for what you use
  * Start and stop anytime
  * No long-term contracts required
  * Some services are free, but other AWS services they provision might not be

AWS pricing philosophy focuses on pay-as-you-go with no long-term commitments, while offering discounts for reservation and volume. Costs are driven primarily by compute, storage, and outbound data transfer.
