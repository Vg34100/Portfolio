# Moving Door with Timeline & Positioning

* Timeline to Location
 - Changes cube location via relative position
   > Sets relative location on update
   > "Starts at 0,0,0 for proper timeline function"

* Location Types
 - Relative Position
   > Location relative to parent
   > Parent is actor (0,0,0 base)
 - World Position
   > Offset by relative amount
   > X axis = forward

* Door Movement Setup
 - Timeline Controls
   > Position multiplied by 250
     * Start: 0 × 250 = 0 (no change)
     * Middle: 0.5 × 250 = 125
     * End: 1 × 250 = 250
   > Y-axis used for side sliding

* Door Trigger Logic
 - Begin Overlap
   > Checks if overlapping actor is player
     * Branch node for condition
     * True = OpenDoor event
 - End Overlap
   > Same logic as begin overlap
   > Triggers CloseDoor when player exits

* Final Implementation
 - Event Flow
   > Player enters = door opens
   > Player exits = door closes
   > Creates automatic door behavior

Door movement implemented through timeline-controlled relative positioning, with player detection managing open/close states. System creates smooth automatic door functionality using overlap events and precise position calculations.
