# Setting Up Door Functions & Timelines

* Custom Events & Functions Created
 - Events
   > OpenDoor (custom event)
   > CloseDoor (custom event)
 - Functions
   > UnlockDoor
   > LockDoor
     * "Planning ahead for needed functionality"

* Timeline System
 - Purpose
   > Changes property over set time
   > Accessed through timeline node
 - Control Options
   > Play: continues from current position
   > Play from Start: restarts timeline
   > Stop: halts timeline
   > Reverse: plays backwards
   > Reverse from End: reverses from end point

* Timeline Track Setup
 - Float Track Creation
   > Named "position"
   > Uses pins to create movement curve
     * Shift + left click adds pins
     * Time/Value adjustable
       - First pin: 0 time, 0 value
       - Second pin: 1 second, 1 value
 - Normalized Graph
   > "0 to 1 over 1 second"
   > Length changed from 5s to 1s
     * "Normalized means length of 1"
     * Easily scalable with multiplication

* Timeline Properties
 - Multiple Track Types Available
   > Vector
   > Events
   > Color
 - Output Pins
   > Update
   > Finished execute
   > Direction enumeration
   > Position

Timelines serve as the core mechanism for smooth door movement, using normalized values for flexible scaling. The system provides precise control over property changes over time through a visual graph interface.
