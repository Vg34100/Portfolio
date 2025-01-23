# Creating Interactive Coin Pickup

* Blueprint Setup
 * New blueprint class: BP coin
 * Components:
   - Static mesh (cylinder)
     > Gold material
     > Thinner shape for coin look
   - Rotating movement
     > 180 degrees/second on z-axis
     > Makes coin spin continuously

* Collision & Positioning
 * Collision settings
   - Change from "block all dynamic" to "overlap all"
   - Enables walking through object
 * Position adjustment
   - Root at grid center
   - Mesh hovering above ground
     > Move up to prevent floor clipping
     > Creates floating effect

* Interaction Logic
 * Event graph setup
   - Use actor begin overlap
   - Simple destroy actor node
   - "Destroys self when player walks through"

This system creates a basic pickup mechanic using overlaps and automatic destruction. The coin rotates continuously until player contact triggers its removal, demonstrating fundamental interaction principles.
