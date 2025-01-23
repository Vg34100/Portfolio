# Implementing Block Montages

* Create Block Animation Montages
 - Search block animations in folder
 - Select and create montages via right-click
 - Montage Adjustments:
   * Open both montages
   * Green bar settings:
     - Change loop count to max (99)
     - "Results in 32 loops"

* Character Blueprint Setup
 - Copy from attack keybind:
   * Animation stance
   * Switch node
   * Plain montage nodes
 - Connections:
   * Connect to started pin (not triggered)
   * Set montages:
     - Shield section: shield block
     - Two-handed: block montage
   * Use reroute node:
     - Connect non-shield pins
     - "Gives each pose block option"

* Block Keybind Configuration
 - In block IA file:
   * Add release trigger (plus under triggers)
 - Character Blueprint:
   * Expand block keybind
   * From completed pin:
     - Add Stop Anim Montage
     - "Stops animation on button release"

The system implements blocking animations with proper looping and release mechanics. Blocks can now be held and released naturally, with animations stopping appropriately when the player releases the button.
