# Basic Attack Animation Downloads

* Shield Stance Animations
 - Shield Attack
   * Sword & shield slash with planted feet
   * Named: "Shield attack 01"
 - Shield Block
   * Sword & shield block idle animation
   * Named: "Shield Idle Block"

* Two-Handed Animations
 - Attack Animation
   * Great sword slash with planted feet
   * Named: "two handed attack 01"
 - Block Animation
   * Great sword blocking
   * Named: "two handed idle block"

* Range Weapon Animations
 - Rifle
   * Firing rifle animation
   * Named: "rifle shoot"
 - Bow
   * Standing aim recoil animation
   * Named: "Bow attack 01"

* Stealth Animation
 - Single attack option: stab
   * Stabbing animation
   * Named: "stealth attack 01"

* Final Steps
 - Import all to respective folders
 - Save all

The system expands combat stances with basic attack animations, focusing on planted-feet attacks for melee and appropriate shooting animations for ranged weapons. Each stance receives unique attack animations with consistent naming conventions for organization.

# Basic Attack Montage Implementation

* Key Binding Setup
 - IMC Default Folder:
   * Duplicate IA_dodge to create:
     - IA_attack_01
     - IA_block
   * Set keys in IMC default file:
     - Left mouse button: attack
     - Right mouse button: block

* Character Blueprint Configuration
 - Add events:
   * Search and add IA_attack and IA_block
   * Use animation stance variable
     - Connect to switch node
   * Add mesh component
     - Search for play montage

* Montage Creation
 - For Attack Animations:
   * Select all attack animations
   * Right click > Create > Create Anim Montage
   * Repeat for rifle shot animation
 - Connect montages:
   * Shield section: add shield attack montage
   * Repeat for each stance's attack montage

* Animation Blueprint Setup
 - Anim Graph adjustments:
   * Move output pose right
   * Add default slot
     - Connect both sides
 - Advanced option:
   * Use blend per bone node
     - "Splits montage between top/bottom of character"
     - "Top: plays montage"
     - "Bottom: keeps locomotion"

The system implements basic attack montages with key bindings and proper animation blueprint setup. The blend per bone node allows for seamless combination of attack animations with movement, creating a more polished combat system.
