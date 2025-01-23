# Time-Based Door Lock System

* Setting Up Button Timer
 - "Timer starts when leaving button"
 - Components:
   > Set Timer by Event node
     * Takes time input (variable)
     * Creates matching function
     * Can be set to loop
   > Time variable
     * Made instance editable
     * Set to 5 seconds default
   > Created "Timeout" function
     * Calls button untriggered
     * Sets triggered to false

* Timer Implementation Flow
 - Button Triggered Events
   > Starts timer on untrigger
   > Timer completion triggers timeout
 - Door Response
   > Unlocks on button true
   > Locks on button false
     * Added Close Door to Lock Door function
   > "Door closes automatically if timer expires"

* Instance Editing
 - Time variable editable in world
 - Can adjust per button/instance
   > Accessible in details panel
   > Modifiable during setup

Timers provide controlled time-based events for door locking mechanisms. The system allows for customizable timing per instance while maintaining automatic door closure on timeout, creating a more dynamic and secure door system.
