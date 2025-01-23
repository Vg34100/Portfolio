# Door Lock System Implementation

* Variable Setup
 - Created "is locked" boolean variable
   > Controls door access
   > Made instance editable for flexibility

* Door Function Logic
 - Open Door Check
   > Tests "is locked" before allowing movement
   > Branch node determines access
 - Lock Functions
   > Unlock: Sets "is locked" to false
   > Lock: Sets "is locked" to true

* Button Creation (BP_Button)
 - Components
   > Cube (visual)
   > Box collision (trigger)
 - Events
   > Button Triggered
   > Button Untriggered
     * Both check for player overlap

* Event Dispatcher System
 - "on button triggered" dispatcher created
   > Boolean input: "is triggered"
   > Called by button events
     * Triggered = true
     * Untriggered = false

* Door-Button Communication
 - Button "shouts" trigger state
 - Door listens for button calls
 - Instance Editable Implementation
   > Allows per-door lock settings
   > Multiple doors can have different states

Event dispatchers enable communication between separate blueprints for door-button interaction. System allows flexible control over multiple doors with individual lock states through instance editing.
