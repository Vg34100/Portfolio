# Reliability and High Availability

* "Everything fails, all the time." - Werner Vogels, CTO, Amazon.com
  * Plan for failure (application or workload downtime)
  * Architect applications to withstand failure

## Reliability

* Definition:
  * A measure of system's ability to provide functionality when desired by user
  * System includes all components: hardware, firmware, and software
  * Probability that entire system will function as intended for specified period

* Reliability Metrics:
  * Mean Time Between Failures (MTBF) = total time in service/number of failures
  * Mean Time To Failure (MTTF) = time until system fails
  * Mean Time To Repair (MTTR) = time to repair system after failure
  * MTBF = MTTF + MTTR

## Availability

* Definition:
  * Normal operation time / total time
  * Percentage of uptime over time (typically 1 year)
  * Measured in "number of 9s" (e.g., five 9s = 99.999% availability)

* Reduced by:
  * Scheduled interruptions
  * Unscheduled interruptions

## High Availability

* System can withstand some measure of degradation while remaining available
* Downtime is minimized
* Minimal human intervention required
* Quickly restores essential services when components fail (often < 1 minute)

## Availability Tiers

* Availability requirements vary by application type
* Common tiers:
  * 99% = 87.6 hours max disruption/year (batch processing, data extraction)
  * 99.9% = 8.76 hours max disruption/year (internal tools, knowledge management)
  * 99.95% = 4.38 hours max disruption/year (online commerce, point of sale)
  * 99.99% = 52.56 minutes max disruption/year (video delivery, broadcast systems)
  * 99.999% = 5.26 minutes max disruption/year (ATM transactions, telecommunications)

## Factors Influencing Availability

* Fault Tolerance:
  * Built-in redundancy of application components
  * Ability to remain operational despite component failures
  * Uses specialized hardware to detect failure and switch to redundant components
  * Does not address software failures (most common reason for downtime)

* Scalability:
  * Ability to accommodate increases in capacity needs without changing design
  * Contributes to availability but doesn't guarantee it

* Recoverability:
  * Process, policies, and procedures for restoring service after catastrophic events
  * Ability to restore service quickly without data loss

* Cost Consideration:
  * Improving availability usually increases cost
  * Important to balance cost of improvement with benefit to users
  * Consider whether goal is making application "always alive" or "servicing requests within acceptable performance levels"

Reliability and high availability are critical concepts in cloud architecture that ensure systems remain operational despite failures. By focusing on fault tolerance, scalability, and recoverability, architects can design systems that balance performance needs with cost considerations.