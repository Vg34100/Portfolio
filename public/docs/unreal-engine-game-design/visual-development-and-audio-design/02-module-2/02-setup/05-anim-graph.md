# Animation Graph & State Machine Setup

* State Machine Creation
 * Right click > Search "state machine"
   - Named "locomotion"
 * Created States
   - Idle state (initial)
   - Locomotion state
   - Both states connected bi-directionally

* Idle State Configuration
 * Asset Browser Tab
   - Dragged idle animation to graph
   - Character changes from TPose to idle loop

* Locomotion State Setup
 * Implemented blend space
   - Connected direction & speed variables
   - Uses "fast path" optimization (lightning bolt)
     > More performant due to event graph variables

* State Transition Rules
 * Idle to Locomotion
   - Uses "is moving" variable
   - Must be true to transition
 * Locomotion to Idle
   - Uses "not boolean" of "is moving"
   - Transitions when character stops

* Character Blueprint Setup
 * Created BP_Character_Coursera_Master
   - Copied from BP_Third person character
 * Created Child Blueprint
   - Named BP_Character_Coursera_Player
   - Set Skeletal mesh to Mixamo Xbot
   - Set animation blueprint to ABP_Mixamo_Xbot
 * Applied to Default Pawn Class in world settings

The animation system uses state machines to control movement flow between idle and locomotion states. Fast path optimization and proper blueprint hierarchy ensure efficient animation transitions and character management.
