# Setting Up Shield Animation Blendspace

* Folder & Animation Setup
 - Created shield folder in animations
 - Mixamo downloads require:
   > "In-place" checked
   > "Without skin" selected
 - Shield animations work with:
   > One-handed weapons (Mace, Axe, Wand)
   > Using "AS_Shield" naming convention

* Required Animations
 - Run animations
   > Forward, left, right strafes
 - Walk animations
   > Forward, back, left, right
 - Created additional variations through duplication
   > Run: forward left/right
   > Walk: forward left/right, back left/right

* Animation Adjustments
 - Import rotation changes
   > Forward animations
     • Left: -45 Z rotation
     • Right: 45 Z rotation
   > Back animations
     • Left: 45 Z rotation
     • Right: -45 Z rotation

* Blendspace Configuration
 - Copied from unarmed blendspace
   > Named "bs_shield"
   > Snap to grid enabled
 - Speed settings
   > Run animations: 400 speed
   > Walk animations: 200 speed
 - Direction placements
   > Forward: 0 degrees
   > Forward angles: ±45 degrees
   > Side movements: ±90 degrees
   > Back angles: ±135 degrees

The shield blendspace setup mirrors the unarmed system but with shield-specific animations. This creates a foundation for one-handed weapon combat with proper directional movement and speed control.
