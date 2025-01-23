# Light Types & Mobility Core Concepts

* Finding Lights
 - Create button > Lights
 - Place actors panel > Lighting icon

* Light Types
 - Directional Light
   > Functions like sun
   > Only affected by rotation
   > "Ctrl + L" opens lighting gizmo
   > Best with sky atmosphere
 - Skylight
   > Main ambient lighting
   > Captures scene in real-time
   > Can use HDRI/cube maps instead
 - Point Light
   > Omni-directional
   > Position affects lit area
   > "Hold L to quick-place"
   > Rotation has no effect
 - Spotlight
   > Cone-shaped emission
   > Inner cone: main brightness
   > Outer cone: light falloff
   > Good for flashlights/stage lighting
 - Rectangular (Rec) Light
   > Projects from rectangle shape
   > "6x more expensive than point lights"
   > Shows in reflections
   > Limited platform consistency

* Light Mobility
 - Static
   > No runtime updates
   > Fully baked
   > Lowest performance cost
 - Stationary
   > Hybrid static/movable
   > "Max 4 lights per object"
   > Dynamic shadows for movable objects
 - Movable
   > Full runtime control
   > Only dynamic shadows
   > Highest performance cost

Lighting types provide different tools for scene illumination, from global sun simulation to precise area lighting. Mobility settings determine runtime behavior and performance impact, with static being most efficient but least flexible, and movable offering full control at higher cost.