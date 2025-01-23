# Creating Door Mechanics - Basic Setup

* First Project Common: Door Creation
 - Popular first project due to:
   > Multiple operation methods possible
   > Good for learning mechanics
   > Tests various implementation skills

* Actor Setup Process
 - Creating the Blueprint:
   > Content Drawer > Right click > Blueprint class
   > Choose "Actor" type (non-controllable)
   > Name as "BP_door"
     * "Naming crucial for project organization"
     * Makes asset location easier

* Door Component Requirements
 - Visual Elements:
   > Add Cube component
   > Reshape for door dimensions
     * Scale adjustments only
     * No position changes initially
 - Detection System:
   > Box collision/trigger volume added
     * Determines player detection range
     * Acts as sensor area
     * Position near door floor

* Component Hierarchy
 - Proper Parenting Critical:
   > Box must detach from cube
     * "Like real life - sensor on frame, not door"
     * Drag box onto cube to detach
   > Allows independent movement
     * Door can move without affecting sensor
     * Mimics real-world door mechanics

Doors serve as an excellent introductory project for game development, combining basic mechanics with practical implementation. The setup focuses on proper component organization and realistic behavior simulation through careful parenting and collision detection.
