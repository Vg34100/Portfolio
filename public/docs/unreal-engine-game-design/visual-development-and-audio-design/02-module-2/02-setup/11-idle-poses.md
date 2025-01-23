# Adding Idle Poses to Stances

* Download Mixamo Animations (without skin)
 - Save to respective folders:
   * Shield: shield idle
   * Two-handed: great sword idle
   * Rifle: idle with arms up in aiming
   * Bow: idle with arms downward
   * Stealth: male crouch pose
     - One hand touching ground in running start position

* Animation Blueprint Setup
 - In locomotion state:
   * Copy blend poses node
   * Place in idle state
 - Connect Idle Poses:
   * Base idle remains default
   * Hook respective idles to corresponding nodes
 - Important Settings:
   * For each idle pose:
     - Ensure "loop animation" is enabled in bottom right

* Usage
 - Press '1' to cycle through idle poses
   * Changes stance and corresponding idle animation

The system adds distinct idle animations for each combat stance using Mixamo animations. By copying the blend pose setup and ensuring proper looping, pressing '1' now smoothly transitions between both stances and their idle states.
