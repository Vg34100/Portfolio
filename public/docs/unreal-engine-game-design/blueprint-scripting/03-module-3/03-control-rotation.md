# Character Rotation & Camera Controls

* Third Person Character Setup
 * Added via:
   - Content Browser > Add Feature Pack
   - Third Person Template

* Two Types of Rotation:
 * Actor Rotation
   - Physical direction character faces
 * Control Rotation
   - Direction of controller/mouse/gamepad
   - Camera typically tied to this

* Critical Third Person Settings
 * Class Defaults:
   - "Turn OFF Use Controller Rotation"
     • Only for first person
     • Otherwise causes odd 1:1 rotation

 * Character Movement Component:
   - Rotation Settings:
     • Orient Rotation to Movement
       - Default 500 degrees/second turn rate
     • Use Controller Desired Rotation
       - Similar to Use Controller Rotation
       - Uses turn rate for smoother rotation

* Shooter-style Movement Setup:
 * Enable both rotation settings
   - Orient Rotation supersedes other
 * Movement Input Blueprint:
   - Set Orient Rotation to Movement
     • On Started: False
     • On Completed: True
   - Allows strafing while moving

Control rotation management is crucial for proper third-person character movement. The system uses two distinct rotation types - actor and control - which can be configured for different gameplay styles like strafing in shooters or standard third-person movement.
