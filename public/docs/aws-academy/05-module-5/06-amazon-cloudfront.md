# Amazon CloudFront

* Content Delivery Challenges
  * Network performance affects user experience
  * Web requests routed through many networks to reach origin server
  * Number of network hops and distance impact website responsiveness
  * Network latency varies by geographic location

* Content Delivery Network (CDN)
  * Globally distributed system of caching servers
  * Caches copies of commonly requested files (static content)
    * HTML, CSS, JavaScript, images
  * Delivers content from nearby cache edge or Point of Presence
  * Accelerates dynamic content delivery
  * Improves application performance and scaling

* Amazon CloudFront
  * Fast, global, secure CDN service
  * Global network of edge locations and Regional edge caches
  * Self-service model
  * Pay-as-you-go pricing
  * No negotiated contracts, high prices, or minimum fees

* CloudFront Infrastructure
  * Edge locations
    * Network of data centers that serve popular content quickly
    * Provide lowest latency to users
  * Regional edge caches
    * Located between origin server and global edge locations
    * Cache less popular content
    * Larger cache than individual edge locations
    * Content remains closer to viewers longer
    * Reduces origin server requests

* CloudFront Benefits
  * Fast and global
    * Massively scaled and globally distributed
    * Low latency content delivery
  * Security at the edge
    * Network and application-level protection
    * Built-in AWS Shield Standard at no cost
    * Custom SSL certificates via AWS Certificate Manager
  * Highly programmable
    * Customizable for specific application requirements
    * Integrates with Lambda@Edge for custom code execution
    * DevOps tool integration
  * Deeply integrated with AWS
    * Physical locations connected to AWS Global Infrastructure
    * Integration with other AWS services
    * Programmable via API or AWS Management Console
  * Cost-effective
    * No minimum commitments
    * Pay only for what you use
    * Avoids expense of self-hosting cache servers
    * Eliminates need to overprovision for traffic spikes
    * Reduces origin server load
    * No data transfer charges between AWS origins and CloudFront

* CloudFront Pricing
  * Data transfer out
    * Volume of data transferred from edge locations to internet/origin
  * HTTP(S) requests
    * Number of HTTP(S) requests made to CloudFront
  * Invalidation requests
    * First 1,000 paths per month free
    * $0.005 per path thereafter
  * Dedicated IP custom SSL
    * $600 per month for each custom SSL certificate
    * Prorated by hour

Amazon CloudFront delivers content globally with low latency through its extensive network of edge locations, while providing security, programmability, and cost-effectiveness compared to traditional content delivery solutions.
