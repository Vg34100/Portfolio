# Character Input & Strafe Implementation

* Transfer Input Controls
 - Move from master to player blueprint
   > Cut with Control X
   > Paste to player blueprint event graph
 - Master blueprint
   > Holds code for all characters
   > NPCs/enemies don't need input controls

* Strafe Movement Setup
 - Details Panel Adjustments
   > Check "use controller Yaw rotation"
   > Uncheck "Orient rotation to movement"
     • Better for NPCs/PCs, not player strafe
   > Set max walk speed: 400
 - Results in
   > Left/right strafe movement
   > Diagonal movement with forward + direction

* Backward Animation Enhancement
 - Create New Animations
   > Duplicate AS_Walk_Back
     • Add _left version (Z value: 45)
     • Add _right version (Z value: -45)
   > Place in blendspace
     • Walk back left: -135 direction, 200 speed
     • Walk back right: opposite placement

* Movement Speed Control
 - Add move_speed_back_penalty variable
   > Float type, default: 1
 - Create F_move_speed_back_penalty_set function
   > True branch = 1
   > False branch = 0.25
 - Connect to movement input
   > Add multiply node
   > Apply to both directional movements

* Final Adjustments
 - Mesh Position
   > Changed Z location from -89 to -93
   > Character now properly ground-aligned

The setup creates an eight-directional movement system with proper animations and speed penalties. Character now moves smoothly with adjusted values for different directions, including proper backward movement restrictions.
