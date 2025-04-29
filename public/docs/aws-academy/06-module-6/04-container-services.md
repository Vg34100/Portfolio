# Container Services

* **Container basics**:
  * Method of operating system virtualization
  * Run applications and dependencies in resource-isolated processes
  * Benefits:
    * Repeatable
    * Self-contained environments
    * Software runs the same in different environments
    * Faster to launch/stop than virtual machines
  * Contains everything application needs:
    * Libraries
    * System tools
    * Code
    * Runtime

* **Docker**:
  * Software platform to build, test, deploy applications quickly
  * Packages software into containers
  * Installed on servers hosting containers
  * Provides commands to build, start, stop containers
  * Best used for:
    * Standardizing environments
    * Reducing conflicts between language stacks/versions
    * Using containers as a service
    * Running microservices with standardized deployments
    * Portability for data processing

* **Containers vs Virtual Machines**:
  * Containers run on Linux OS with kernel feature support and Docker daemon
  * Containers are more portable (can run on laptop, VM, EC2 instance, bare metal)
  * Container-based deployment:
    * One EC2 instance running a VM
    * Docker engine installed on Linux guest OS
    * Multiple containers run on single EC2 instance
    * Processes communicate directly to kernel in Linux guest OS
  * VM-based deployment:
    * Each app runs on its own VM for isolation
    * Each VM runs directly on hypervisor

* **Amazon Elastic Container Service (ECS)**:
  * Highly scalable, fast container management service
  * Benefits:
    * Orchestrates running Docker containers
    * Maintains and scales fleet of nodes
    * Removes infrastructure complexity
    * Integrates with familiar EC2 features (ELB, security groups, EBS, IAM)
  * Key components:
    * Task definition - Blueprint describing containers for application
    * Task - Instantiation of task definition within cluster
    * ECS cluster - Group of EC2 instances running the ECS container agent
    * ECS scheduler - Places tasks within cluster

* **Amazon ECS cluster options**:
  * Two main approaches:
    * **EC2 launch type**: You manage Amazon ECS cluster
      * More granular control over infrastructure
      * Specify On-Demand or Spot Instances
      * You manage the EC2 instances
    * **Fargate launch type**: AWS manages the cluster
      * Only package application in containers
      * Specify CPU/memory requirements
      * Define networking and IAM policies
      * No need to provision, configure, or scale cluster

* **Kubernetes**:
  * Open source software for container orchestration
  * Works with containerization technologies like Docker
  * Deploy and manage containerized applications at scale
  * Same toolset for on-premises and cloud
  * Manages cluster of compute instances (nodes)
  * Runs containers in logical groupings called pods
  * Features:
    * Container provisioning
    * Networking
    * Load distribution
    * Scaling

* **Amazon Elastic Kubernetes Service (EKS)**:
  * Managed Kubernetes service
  * Run Kubernetes on AWS without managing control plane
  * Certified Kubernetes conformant
  * Supports Linux and Windows containers
  * Compatible with Kubernetes community tools and add-ons
  * Automatically manages availability and scalability

* **Amazon Elastic Container Registry (ECR)**:
  * Fully managed Docker container registry
  * Store, manage, deploy Docker container images
  * Integrated with Amazon ECS
  * Supports Docker Registry HTTP API v2
  * Transfer container images via HTTPS
  * Images automatically encrypted at rest

Container services provide a lightweight approach to application deployment by packaging everything needed to run applications in isolated units. AWS offers managed services like ECS, EKS, and ECR that simplify container orchestration, management, and storage.