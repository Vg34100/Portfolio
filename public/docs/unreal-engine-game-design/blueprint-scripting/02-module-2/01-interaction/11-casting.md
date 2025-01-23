# Casting & Score System Implementation

* Player Character Score System
 - Add score variable (integer)
 - Create "add score" function
   > Takes current score + points
   > Set back to score variable
   > Debug: Print string shows points gained

* Casting Process
 - Problem: Other actor pin = actor object reference
   > Can't directly access first person character functions
 - Solution: "Cast parent reference to child reference"
   > Drag from other actor
   > Cast to first person character
   > Enables access to child object functions

* Coin Implementation
 - Begin overlap event
   > Cast other actor to first person character
   > If successful:
     * Destroy actor
     * Add score (10 points)
 - Cast failed pin
   > Appears when inheritance not shared
   > Not issue with actor objects

* Practical Applications
 - Hide coins around level
 - Create platforming challenges
 - Use with:
   > Door systems
   > Button mechanics
   > Puzzles
   > Marketplace assets

Casting enables object type conversion for accessing specific functions, demonstrated through a coin collection system. This foundational concept allows for creation of score-based gameplay mechanics and level design.
