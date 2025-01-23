# Door Visual Feedback & Construction Scripts

* Construction Script Purpose
 - Runs when object first created
   > Includes editor creation
   > "Visualizes changes immediately"

* Light Component Setup
 - Added point light to door
   > Parented to cube
   > Adjustable radius
   > Position at door front

* Changing Light Values
 - Access through Details Panel
   > "Click component to see changeable values"
 - Two Methods:
   > Branch Method
     * True = red (locked)
     * False = green (unlocked)
   > Select Node Method
     * More efficient
     * Single node solution
     * "Cleaner and easier to read"

* Runtime Light Updates
 - Construction script only runs at start
 - Implementation in Functions
   > Copy construction script logic
   > Paste into unlock/lock functions
     * Remove is_locked portion
     * Connect to set light color
   > Updates during gameplay

Construction scripts provide immediate visual feedback in editor, while function implementation ensures runtime updates. Select nodes offer cleaner solutions than branching for simple value switches.
