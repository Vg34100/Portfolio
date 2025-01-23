# Implementing Air Dash & Double Jump

* Mixamo Setup
 - Download female locomotion pose
   * Name: AS_AirDash_Forward
   * Create animation montage
   * Set loops to 99

* Air Dash Implementation
 - Character Blueprint Setup
   * Use Dodge button for both ground/air
     - Ground: dodge roll
     - Air: air dash
   * isfalling branch controls behavior

 - Movement Configuration
   * Copy and modify dodge roll elements:
     - Timer
     - Custom events
     - Add movement input
   * Movement settings:
     - Forward vector (x,y only, no z)
     - Timer_Airdash_Velocity variable
     - "CE_AirDash_Velocity" custom event
     - "CE_AirDash_Off" event (0.75 timer)

 - Movement Mode & Variables
   * Air_Dash bool controls states
     - True: Flying mode
     - False: Walking mode
   * Character settings
     - Enable Can Fly
     - Max fly speed: 2000
     - Breaking deceleration: 15000

* Animation Setup
 - Montage Configuration
   * Create "full body" slot
   * Connect to dodge roll blend

 - Additional Features
   * Clear/validate timer for air dash
   * Stop Movement Immediately after dash
   * Collision handling with CE_AirDash_Off

* Double Jump Addition
 - Simple configuration
   * Search Jump in character component
   * Set Jump Max Count to 2

System combines air dash and double jump mechanics for enhanced mobility. Uses existing dodge button intelligently with ground/air state detection for seamless parkour movement.
