# VPC Security

* Security Groups
  * Act as virtual firewall for instances
  * Control inbound and outbound traffic
  * Function at the instance level (not subnet level)
    * Each instance in subnet can have different security groups
  * Properties:
    * Have rules controlling traffic
    * Default security groups:
      * Deny all inbound traffic
      * Allow all outbound traffic
    * Are stateful
      * Remember request state
      * Response traffic automatically allowed regardless of rules
  * Custom security groups:
    * Can specify allow rules only (not deny rules)
    * All rules evaluated before traffic decision
    * Examples:
      * Allow HTTP/HTTPS from all IPv4 addresses
      * Allow SSH from specific network IP range
      * Allow outbound access to specific database servers

* Network Access Control Lists (Network ACLs)
  * Optional security layer for VPC
  * Acts as firewall for subnets
  * Function at the subnet level
  * Properties:
    * Each subnet must associate with one network ACL
      * Default association if not explicitly set
    * Network ACL can associate with multiple subnets
    * Subnet can associate with only one network ACL
    * Separate inbound and outbound rules
      * Each rule can allow or deny traffic
    * Default network ACLs allow all inbound/outbound IPv4 traffic
    * Are stateless
      * No request state information maintained
      * Return traffic must be explicitly allowed
  * Custom network ACLs:
    * Deny all inbound/outbound traffic by default
    * Can specify both allow and deny rules
    * Rules evaluated in number order (lowest first)

* Security Groups vs Network ACLs

  | Attribute | Security Groups | Network ACLs |
  |-----------|----------------|--------------|
  | Scope | Instance level | Subnet level |
  | Rules | Allow rules only | Allow and deny rules |
  | State | Stateful (return traffic auto-allowed) | Stateless (return traffic needs explicit rules) |
  | Rule Order | All rules evaluated | Rules evaluated in number order |

* VPC Security Design Considerations
  * Isolate subnets when possible
  * Choose appropriate gateway/VPN for your needs
  * Use multiple firewall options (security groups + network ACLs)
  * Build security into architecture from start

VPC security features provide multiple layers of protection for your AWS resources, allowing you to implement defense in depth through instance-level security groups and subnet-level network ACLs with fine-grained traffic control.
