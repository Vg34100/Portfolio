# Setting Up Mixamo Blendspace

* Mixamo Animation Downloads
 * Happy Idle
   - Variation 1
   - Set to "Without Skin"
   - Named "AS_idle"
 * Running Animations
   - "Happy Run" forward
     > Must check "Inplace" option
     > Named "AS_run_forward"
   - Strafe animations for left/right
     > Named "AS_run_left/right"
 * Walking Animations
   - Forward walk (in place)
     > Named "AS_walk_forward"
   - Backward walk
     > Named "AS_walk_back"
   - Strafe walks
     > Named "AS_walk_left/right"

* Project Organization
 * Created "Unarmed" folder in Animations
 * Imported all animations
   - Selected Mixamo Xbot Skeleton
   - Import All

* Blendspace Creation (BS_unarmed)
 * Axis Setup
   - Horizontal: Direction (-180 to +180)
     > 8 grid points
   - Vertical: Speed (0 to 400)
     > 2 grid points
 * Animation Placement
   - Running (400 speed)
     > Forward: 0 degrees
     > Left: -90 degrees
     > Right: 90 degrees
   - Walking (200 speed)
     > Forward: 0 degrees
     > Left: -90 degrees
     > Right: 90 degrees
   - Back movement
     > Placed at ±180 degrees
     > 200 speed
     > Added 4 times for penalty

The blendspace setup creates a smooth transition system between different movement animations. Using proper naming conventions (AS_ prefix) and careful placement of animations ensures proper blending based on direction and speed values.
