# Amazon EC2 Cost Optimization

* EC2 pricing models:
  * **Per second billing**
    * Available for On-Demand, Reserved, and Spot Instances
    * Only for Amazon Linux or Ubuntu
  
  * **On-Demand Instances**
    * Pay by the hour
    * No long-term commitments
    * Eligible for AWS Free Tier
    * Best for: short-term, spiky, unpredictable workloads
  
  * **Dedicated Hosts**
    * Physical server dedicated to your use
    * Use existing per-socket, per-core, or per-VM licenses
    * Best for: license restrictions, compliance requirements
  
  * **Dedicated Instances**
    * Run in VPC on hardware dedicated to single customer
    * Physically isolated at host hardware level
  
  * **Reserved Instances**
    * Reserve capacity for 1-year or 3-year term
    * Discounted hourly rate fixed for term
    * Payment options: full, partial, or no upfront
    * Best for: steady-state or predictable workloads
  
  * **Scheduled Reserved Instances**
    * Purchase capacity reservations on recurring schedule
    * 1-year term
  
  * **Spot Instances**
    * Bid on unused EC2 capacity
    * Can be significantly less expensive
    * Run as long as bid exceeds Spot price
    * Can be interrupted with 2-minute notification
    * Best for: flexible start/end times, applications feasible only at low compute prices

* Benefits of pricing models:
  * On-Demand Instances: Low cost and flexibility
  * Spot Instances: Large scale, dynamic workload
  * Reserved Instances: Predictability ensures compute capacity when needed
  * Dedicated Hosts: Save on licensing costs, meet compliance requirements

* Four pillars of cost optimization:
  1. **Right size**
     * Provision instances to match needs (CPU, memory, storage, network)
     * Use CloudWatch metrics to identify underutilized instances
     * Best practice: Right size, then reserve
  
  2. **Increase elasticity**
     * Stop or hibernate EBS-backed instances not actively used
     * Use automatic scaling to match needs based on usage
     * Target 20-30% of instances as On-Demand or Spot
  
  3. **Optimal pricing model**
     * Consider usage patterns
     * Combine purchase types
     * Examples:
       * Use On-Demand and Spot for variable workloads
       * Use Reserved Instances for predictable workloads
     * Consider serverless solutions (AWS Lambda)
  
  4. **Optimize storage choices**
     * Resize EBS volumes to actual needs
     * Change EBS volume types (e.g., st1 typically costs half as much as gp2)
     * Delete unneeded EBS snapshots
     * Identify appropriate destination for specific data types

* Ongoing optimization:
  * Cost optimization is continuous process
  * Define and enforce cost allocation tagging
  * Define metrics, set targets, review regularly
  * Encourage teams to architect for cost
  * Assign responsibility to individual or team

EC2 provides multiple pricing models to optimize costs based on workload characteristics. Implementing the four pillars of cost optimization—right sizing, increasing elasticity, choosing optimal pricing models, and optimizing storage—helps minimize expenses while maintaining performance.