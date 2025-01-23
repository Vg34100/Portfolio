# Adding Jump Animations & Logic

* Mixamo Animation Downloads
 - Fall idle: arms spread at angle
   > Named "AS_Fall_Idle"
 - Jump up: bird-like arm flapping
   > Named "AS_jump_up"
 - Falling to landing
   > Trimmed first 22 frames
   > Only kept ground impact
   > Named "AS_Jump_land"

* Animation Blueprint Setup
 - Added 3 new states in locomotion
   > Jump state
     • Connected to AS_Jump_up
   > Fall state
     • Connected to Fall_Idle
   > Land state
     • Connected to jump_land
   > Connected in circular pattern

 - Transition Rules
   > Jump to Fall
     • Uses time remaining ratio
     • Transitions at 0.2 remaining
   > Fall to Land
     • Uses NOT Boolean
     • Triggers when "is_falling" changes
   > Land to Locomotion
     • Jump land remaining ratio
     • Set to 0.5 for quick impact
   > First rule
     • Connected to "is_falling" variable
     • Activates on spacebar/jump

 - Final Polish
   > Jump land animation
     • Rate scale increased to 2.5
     • Creates smoother landing feel

The jump system utilizes three distinct animations with smooth transitions between states. The implementation allows for a natural-feeling jump cycle with proper landing impact and timing controls.
