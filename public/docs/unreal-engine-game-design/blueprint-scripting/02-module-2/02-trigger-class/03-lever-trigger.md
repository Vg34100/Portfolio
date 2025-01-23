# Interactive Lever Creation & Animation

* Lever's Unique Functionality
 - Can be thrown forwards/backwards
 - Result controlled by player vs timer-based
 - "Player decides state rather than automatic timeout"

* Visual Components Setup
 - Core Components:
   > Base model (flattened cube)
   > Lever model (thin cube)
   > Scene component as proxy/hinge
 - Scene Component Solution:
   > Acts as intermediary hinge point
   > Starts at (0,0,0) for clean animation
   > Solves pivot point issues
     * Prevents center-point rotation
     * Enables proper hinge movement

* Interaction Implementation
 - Interface Setup
   > Added BPI_Interact
   > Verb set to "pull lever"
 - Animation System:
   > Timeline created:
     * 1 second length
     * Float position track (0,0 to 1,1)
   > Rotation:
     * Uses RLerp for smooth transition
     * 0 to 90 degrees over timeline
   > Direction Handling:
     * Forward = OnTriggered(true)
     * Backward = OnTriggered(false)

* State Management
 - IsActive variable tracks current state
 - Branch logic:
   > If active: reverse movement
   > If inactive: play forward

Created an interactive lever system using a scene component for smooth hinge animation. System allows for bi-directional movement with proper state tracking, providing a more complex trigger type than previous pressure pad or button implementations.
