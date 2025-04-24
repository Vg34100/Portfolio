# Networking Basics

* Computer networks
  * Two or more client machines connected to share resources
  * Can be logically partitioned into subnets
  * Requires networking device (router/switch) to connect clients

* IP addresses
  * Unique numerical identifier for each client in a network
  * Example: 192.0.2.0
  * Each of the four dot-separated numbers represents 8 bits in octal format
    * Each number can be 0-255
    * Combined total: 32 bits in binary

* IPv4 and IPv6
  * IPv4: 32-bit address (e.g., 192.0.2.0)
  * IPv6: 128-bit address (e.g., 2600:1f18:22ba:8c00:ba86:a05e:a5ba:00FF)
    * Composed of eight groups of four letters/numbers separated by colons
    * Each group represents 16 bits in hexadecimal format (0-FFFF)
    * Total: 128 bits in binary format

* Classless Inter-Domain Routing (CIDR)
  * Method to describe networks
  * Format: IP address + slash + number of fixed bits
    * Example: 192.0.2.0/24
      * First 24 bits are fixed
      * Last 8 bits are flexible
      * Results in 2^8 (256) available IP addresses (192.0.2.0 to 192.0.2.255)
  * Special cases:
    * Fixed IP addresses: every bit fixed (e.g., 192.0.2.0/32)
    * Internet: every bit flexible (0.0.0.0/0)

* OSI Model (Open Systems Interconnection)
  * Conceptual model explaining data travel over networks
  * Seven layers with protocols and addresses:
    * Layer 7: Application (HTTP(S), FTP, DHCP, LDAP)
    * Layer 6: Presentation (ASCII, ICA)
    * Layer 5: Session (NetBIOS, RPC)
    * Layer 4: Transport (TCP, UDP)
    * Layer 3: Network (IP) - routers work here
    * Layer 2: Data link (MAC) - switches work here
    * Layer 1: Physical (Signals) - hubs work here

Networking basics provide the foundation for understanding AWS networking services like Amazon VPC. These concepts help explain how cloud networks are organized and how communication occurs between resources.
