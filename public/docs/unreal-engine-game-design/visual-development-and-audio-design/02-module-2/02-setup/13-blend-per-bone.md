# Animation Blend Per Bone Implementation

* Split Animation Layering Setup
 - Issue: Full animation plays during movement (gliding effect)
 - Solution: Split animations between body parts
   * Top: plays attack animation
   * Bottom: plays locomotion

* Animation Blueprint Configuration
 - Create cache for locomotion state
   * Drag locomotion pin → search "cache"
   * Name: cache_locomotion
   * Rearrange default slot before dodge
     - "Ensures montages don't play during dodge roll"

 - Layer Blend Per Bone Setup
   * Search/add "layer blend per bone"
   * Connect to dodge roll's false pose
   * Configure bone settings:
     - Add branch filter
     - Copy spine bone name from Skeleton tab
     - Paste name in options
   * Connections:
     - Default slot → blend pose zero pin
     - cache_locomotion → bass pose

* Standing Animation Enhancement
 - Use ismoving variable with blend by bool
   * Place before dodge roll
   * Save default slot to cache_defaultslot
   * Connections:
     - Layer bone node → true path
     - cache_defaultslot → false path
     - "Full animation plays when standing"
     - "Split animation plays when moving"

This system creates a more polished animation by splitting body movements between top and bottom, while maintaining full animations during stationary attacks. Small adjustments significantly improve overall animation fluidity.
