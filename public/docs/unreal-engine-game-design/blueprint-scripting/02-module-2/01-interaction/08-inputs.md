# Setting Up Enhanced Input Actions

* Creating Interaction Input
 * First Person > Input folder > Actions
   - Right click > Input > Input Action
   - Name: "IA_Interact"
   - Default: Boolean (interact or not)

* Input Mapping Context (IMC_Default)
 * Maps keys to inputs
   - Plus button to add interact
   - Two ways to set key:
     > Dropdown search
     > Orange button (press desired key)
   - Set to E key

* Implementation in First Person Character
 * Event Graph setup
   - Add IA_Interact event
   - Need target storage for interaction
     > Promote hit actor to variable
     > Name: "look_at_actor"
     > Set when looking at object
     > Unset when looking away

 * Validation System
   - Convert to validated get
     > Prevents errors when no target
     > Only fires if value exists
   - Player character reference
     > Use "self" for first person character

Interaction system enables dynamic object interaction through enhanced input, with validation to prevent errors. System allows for flexible interactions like doors, pickups, and character dialogue through a single key press.
