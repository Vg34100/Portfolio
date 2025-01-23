# Object Channel Traces & Types

* Line Trace for Objects vs Trace Channels
 * Objects can use arrays (multiple triggers)
   - Created via "make array"
   - Default types:
     > World static/dynamic
     > Pawn
     > Physics body
     > Vehicle
     > Destructible
     > Projectile (from FPS template)

* Object Types System
 * Every object has:
   - Trace channels
   - Object type
     > Can be changed in collision presets
     > Example: Physics body, World static
 * Useful for:
   - Multiple collision types
   - Organizing objects by collision behavior

* Custom Object Channels
 * Created like trace channels
   - Edit > Project settings > Collision
   - Example: "player character"
   - Set default response
 * Must compile to see new channels

* Additional Trace Settings
 * Trace Complex
   - Simple: Uses simplified collision shape
   - Complex: Follows actual mesh shape
 * Utility options:
   - Actors to ignore (array)
   - Draw debug type
   - Ignore self (auto-adds casting actor)
 * Advanced:
   - Debug draw colors customizable
   - Helps differentiate trace types

Object traces provide more flexibility than trace channels through arrays and custom types. The system allows for both simple and complex collision detection with various customization options for debugging and organization.
