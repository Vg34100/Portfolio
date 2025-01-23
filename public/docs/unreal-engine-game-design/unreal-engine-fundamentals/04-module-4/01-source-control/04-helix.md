# Helix Core (Perforce) Setup & Usage

* Terminology Clarification
   * Originally just Perforce
       - Now called Helix Core
       - "Commonly referred to as Perforce"
   * Client Components
       - P4V = Helix client
       - P4D = Helix server distribution

* Helix Core Scale
   * Free Version
       - Up to 5 users
       - Up to 20 workspaces
   * Full Version Capabilities
       - Thousands of developers
       - "Millions of daily transactions"
       - Hundreds of terabytes
       - Thousands of concurrent commits

* System Structure
   * Centralized Server Setup
       - Acts as main depot
       - Developers get local copies
   * File Management
       - "Not working directly on server files"
       - Pull > modify locally > push changes
       - File locking system
           * Others can't access until released
           * Must wait for push/commit

* P4V Installation
   * Through perforce.com
       - Products > Helix Core
       - Download Helix Visual Client
   * Components
       - P4V (Visual Client)
       - P4Merge
       - P4Admin
       - Command Line Client
   
* Interface Overview
   * Main Controls
       - Getting latest
       - Submitting
       - Checking out
       - Adding/deleting
       - Reverting
   * Key Sections
       - Depot (project repository)
       - Workspaces
       - Files pending
       - View options

Helix Core provides robust version control through centralized server architecture. System enables secure file management while supporting both small teams and enterprise-scale operations through controlled local copies and systematic updates.

# Perforce Integration with UE5

* Creating Workspace
   * Components
       - Depot on left
       - Workspace on right
   * Streams
       - "Newest and most user-friendly way to work"
       - Default method unless legacy project
       - Usually one project per depot

* Workspace Setup
   * Naming Convention
       - Username_ComputerName_Project_Number
   * Important Notes
       - "Each computer needs its own workspace"
       - Separate sync for home/office machines
   * Location
       - Recommend P4V folder for all projects
   
* Project Structure Signs
   * Version Indicators
       - Orange triangle = not latest version
       - Green check = latest version
       - Numbers (e.g., "5 of 10") show current version
   * File Organization
       - Standard UE folders (binaries, content, etc)
       - Project file shows version status

* Best Practices
   * Daily Workflow
       - "Fresh pull every morning"
       - Check for latest files
       - Right-click > Get Latest
   * User Setup
       - P4V and UE credentials must match exactly
       - "Wrong username = download only, no editing"
   * Permissions
       - Respect admin locks
       - Don't edit project-level files without permission
       - "Check in files promptly for others"

Perforce integration with UE5 requires careful attention to workspace setup and version management. The system enforces strict user authentication and file control to maintain project integrity while enabling team collaboration.