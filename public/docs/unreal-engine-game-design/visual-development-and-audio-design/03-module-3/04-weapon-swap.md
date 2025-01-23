# Weapon Swapping Blueprint Setup

* Variable Creation
 * sk_sword (skeletal mesh)
   - Compile first
   - Set to chosen weapon
 * sm_shield (static mesh)
   - Copy shield mesh to variable

* Function Implementation
 * f_weapon_swap function
   - Added after interface message
   - Uses animation stance variable
   - Connected to switch node

* Weapon Component Setup
 * Right Hand Item
   - Set skeleton mesh for each section
   - Connect sk_sword variable
 * Shield Visibility
   - True for shield section
   - False for other sections
   - "Set shield default visibility to false"
   - "Clear right hand item entry"

* Testing Process
 * Press 1 to cycle animations
   - Shows sword/shield in shield stance
   - Hides for other stances

Weapon swapping system uses variables and visibility toggles to manage equipment states. Blueprint setup allows for seamless transitions between different weapon configurations based on animation stance.
