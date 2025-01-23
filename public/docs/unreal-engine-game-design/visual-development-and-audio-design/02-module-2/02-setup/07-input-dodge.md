# Dodge Movement & Animation Setup

* Mixamo Asset Setup
 * Download "dodge forward" animation
   - Check "In place" & "Without Skin"
   - Save as "AS_dodge_forward"
 * Create Mobility Folder
   - Import with SK Mixamo Xbot skeleton
   - Duplicate for directional variations
     > back, left, right
     > forward right/left
     > back right/left

* Blend Space Configuration (BS_Dodge)
 * Axis Setup
   - Horizontal: Direction (-180 to 180)
     > 8 divisions with snap to grid
   - Vertical: Speed (0 to 1)
     > 1 division only

 * Animation Placement
   - Forward: middle (0)
   - Forward angles
     > Left: -45 degrees
     > Right: 45 degrees
   - Side dodges
     > Left: -90 degrees
     > Right: 90 degrees
   - Back angles
     > Center: ±180 degrees
     > Left: -135 degrees
     > Right: 135 degrees

 * Animation Adjustments
   - Dodge back: rate scale -1 (reverse)
   - Back left: 45 rotation
   - Back right: -45 rotation
   - Forward left: -45 rotation
   - Forward right: 45 rotation
   - Side dodges
     > Left: -90 rotation
     > Right: 90 rotation
   - All animations: rate scale 1.3 for speed

Created a comprehensive dodge system with eight directional variations, using blend space for smooth transitions. Animations adjusted for proper rotation and speed to create dynamic dodge rolls.


# Character Blueprint & Animation Interface Setup

* Blueprint Interface Communication
 - Create Interface_ABP_Mixamo_Xbot
   > Add to animation blueprint via class settings
   > Rename default to "Interface_Dodge"
   > Create "Enabled" input parameter
 - Animation Blueprint Implementation
   > Create "Dodge" variable from enabled input
   > Connect to blend poses by bool node
     • False: locomotion
     • True: dodge blend space
       ◦ Direction connected to top
       ◦ Speed set to 1

* Dodge Implementation
 - Key Binding Setup
   > Duplicate jump binding for dodge
   > Set to left shift in IMC default
   > Add IA_Dodge enhanced action events
 - Event System
   > Create CE_Dodge_Off custom event
     • Timer set to 0.5 seconds
   > Movement Speed Control
     • Top: 1200 (during dodge)
     • Bottom: 400 (default)
 - Animation Communication
   > Get mesh component > anime instance
   > Interface dodge connection
     • Top: true
     • Bottom: false
 - Polish
   > Set braking deceleration walking: 15000
     • Creates immediate stop on control release

The system creates a dodge roll mechanic through blueprint interface communication between character and animation blueprints. The setup enables quick directional movement with proper speed control and animation blending.

# Dodge Roll Polish & Refinement

* Character Movement Tuning
 - Max acceleration: 15,000
   > Creates burst speed for dodge
 - Reset child on activation in blend poses
   > Ensures dodge starts from beginning

* Dodge Control Logic
 - Prevent multiple dodges
   > Branch check: if dodge true, do nothing
   > Only triggers on press, not release
 - Input Management
   > Created Input_Enabled bool
     • Disables movement during dodge
     • Re-enables after dodge completion
   > Default setting: true

* Dodge Movement System
 - Velocity Control
   > Saves velocity to Dodge_Velocity variable
   > Custom event: ceDodge_Input
     • Timer set to 0.001, looping
     • Uses add movement input node
   > Max walk speed adjustment
     • Added 0.5 delay for realism

 - Animation Refinements
   > Blend space animations: rate scale 1.5
   > Standing still dodge
     • Length node checks zero velocity
     • Uses character's forward direction
     • Get actor rotation -> forward vector

 - Polish Details
   > Back penalty function: skips if dodging
   > Timer management with clear/invalidate
   > Clean blueprint organization

The dodge system now features smooth directional movement with proper speed control and animation timing. Standing dodges automatically move forward, while moving dodges maintain directional momentum with polished transitions.
