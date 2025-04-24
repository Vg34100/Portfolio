# Amazon Route 53

* Amazon Route 53
  * Highly available and scalable Domain Name System (DNS) web service
  * Translates names (www.example.com) into numeric IP addresses (192.0.2.1)
  * Fully compliant with IPv4 and IPv6
  * Connects user requests to:
    * Infrastructure running in AWS 
    * Infrastructure outside AWS
  * Additional capabilities:
    * Resource health checking
    * Traffic flow management
    * Domain name registration

* DNS Resolution Process
  * User requests website (www.example.com)
  * DNS resolver checks with Route 53 for IP address
  * Route 53 returns IP address (e.g., 192.0.2.0)
  * Resolver returns IP to user

* Supported Routing Policies
  * Simple routing
    * Use in single-server environments
  * Weighted round robin routing
    * Assign weights to resource record sets to specify frequency
    * Useful for A/B testing (e.g., weight 3 vs weight 1 = 75%/25% split)
  * Latency routing
    * Route to AWS Region with best latency for user
    * Based on actual performance measurements
  * Geolocation routing
    * Route based on user location
    * Localize content/language
    * Restrict distribution by region
    * Balance load predictably
  * Geoproximity routing
    * Route based on resource location
    * Optionally shift traffic between locations
  * Failover routing
    * Configure active-passive failover
    * Detect outages and redirect users to alternate locations
  * Multivalue answer routing
    * Return up to 8 healthy records randomly selected
    * Not a substitute for load balancer but improves availability

* Use Case: Multi-Region Deployment
  * Route 53 directs users to closest Elastic Load Balancer
  * Benefits:
    * Latency-based routing to the Region
    * Load balancing routing to Availability Zone

* DNS Failover
  * Improves application availability by:
    * Configuring backup and failover scenarios
    * Enabling highly available multi-region architectures
    * Creating health checks to monitor:
      * Health of specific resources (e.g., web server)
      * Status of other health checks
      * Status of Amazon CloudWatch alarms

* Example: DNS Failover for Multi-Tiered Web Application
  * Primary route: Load balancer to EC2 Auto Scaling group
  * Secondary route: Static S3 website (backup)
  * Health checks ensure primary is running
  * Failover triggered by web server or database failure

Amazon Route 53 provides reliable DNS services with advanced routing capabilities that improve application availability and performance for global audiences through intelligent traffic management.
