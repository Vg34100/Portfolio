# Creating Animation Stance System

* Create Enumeration (e_animation_stance)
 - Add 6 options in order:
   * unarmed, shield, two-handed, rifle, bow, stealth

* Player Character Setup
 - Create variables:
   * animation_stance (enum type)
   * animation_stance_options (array)
     - Set 6 default options matching enum order
 - Build keybind system:
   * Use '1' key event
   * Get array index from animation_stance_current
   * Increment counter, reset to -1 if >= array length
   * Connect to set animation_stance

* Animation Blueprint Interface
 - Add interface_animation_stance function
   * Input: animation_stance (enum type)
 - Implementation:
   * Promote to variable with underscore
   * Use "blend by enum" node
   * Add options: shield, two-handed, rifle, bow, stealth
   * Connect blend spaces to corresponding nodes
   * Set unarmed as default pose

* Final Connection
 - In character blueprint:
   * Copy mesh and anim instance nodes
   * Add interface animation stance message
   * Connect animation stance variable
 - Result: Press '1' to cycle stances
   * Order: unarmed → shield → two-handed → rifle → bow → stealth

The system creates a blend space switching mechanism using enums, allowing stance changes through gameplay. Pressing '1' cycles through different animation stances, with the interface handling communication between blueprints.
