# Using Items with Door Mechanics

- Door Modification for Key Requirements
 * Add DA_Item variable "RequiredKey"
   - Must be set editable
 * Door Unlock Logic:
   - If trigger & no key required
     > Unlocks normally
   - If key required:
     > Must check inventory system
     > Query for quantity of 1
     > Only unlocks if key found

- Key Usage System
 * New "destroy key on unlock" boolean variable
   - Controls if key gets consumed
   - Default typically set true
 * Unlock Process:
   - Check if key should be destroyed
   - Clear required key if consumed
   - Door remains unlocked after

- Implementation Details
 * Door Setup
   - Select keycard as required key
   - Set lever as trigger
   - Set initial locked state
 * Usage Flow:
   - Lever alone won't work
   - Must acquire keycard first
   - Door unlocks after having key
   - Can then be opened normally

The system creates a key-based door unlock mechanic where doors can require specific items before allowing access. Keys can be configured to be consumed upon use, providing classic key-door gameplay functionality.
