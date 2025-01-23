# Importing & Setting Up Weapons

* Weapon Import Process
 * From Marketplace:
   - Search "Infinity Blade Weapons"
   - Move to MP folder & fix redirectors

* Socket Setup
 * In Character Blueprint:
   - Open skeleton via magnifying glass
   - Add sockets for attachment points
     > S_Shield on left forearm
     > S_RightHandItem in right palm
   - "Set exact location/rotation in top right window"

* Weapon Implementation
 * Add Components:
   - Skeletal mesh for weapon
   - Static mesh for shield
   - "Attach both to mesh"
   - Set parent sockets to corresponding points
 * Rotation Fixes:
   - Y rotation: 90 degrees
   - Z rotation: -180 degrees
   - "Check animation for sword clipping"

* Infinity Blade Weapon Design
 * "Origin location at middle of handle"
   - Results in consistent weapon placement
   - "Good workflow from asset to game"
   - Prevents need for individual adjustments

* Shield Creation
 * Using Egypt stacked meshes
   - Ornaments as shield options
   - "Reset location and rotation"
 * Setup Process:
   - Add preview asset
   - Adjust rotation/position
   - Scale on character blueprint

Importing and setting up weapons requires precise socket placement and rotation adjustments. Infinity Blade weapons' consistent origin points demonstrate good asset workflow, while creative use of existing meshes can fill equipment gaps.
