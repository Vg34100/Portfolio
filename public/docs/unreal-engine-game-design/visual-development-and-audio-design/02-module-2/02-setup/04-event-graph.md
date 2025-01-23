# Animation Blueprint: Event Graph Setup

* Creating Animation Blueprint
 * Location: Mixamo folder > Animation Category
   - Select "SK Mixamo XBot Skeleton"
   - Name: "ABP_Mixamo_XBot"

* Graph Types
 * Animation Graph
   - Handles animation blending states
 * Event Graph
   - Manages code functionality
   - Sets animation states

* Event Setup Chain
 * Event Initialize Begin Play
   - Get Owning Actor > Cast to Character
     > Promoted to "character" variable
     > Used as reference for active character
 * Character Movement Processing
   - Get Velocity > Vector Length
     > Promoted to "speed" variable
   - Speed Check
     > If speed > 0 = character moving
     > Promoted to "is moving" variable
   - Is Falling Check
     > Promoted to "is falling" variable
     > Will be used for jump mechanics

* Direction Calculation
 * Get Actor Rotation Process
   - Velocity > Rotation from X vector
   - Delta Node Connection
     > A part: Actor rotation
     > B part: Rotation from X vector
   - Z-axis Inversion
     > Promoted to "direction" variable

The event graph setup creates a chain of calculations that process character movement and state. This system handles speed, direction, and state variables that will be used to control animation blending.
