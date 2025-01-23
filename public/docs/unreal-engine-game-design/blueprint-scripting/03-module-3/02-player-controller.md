# Player Controller & Game Mode Relationship

* Game Mode creates on launch:
 * Character
 * Controller
   - Controller possesses assigned character

* World Settings tab controls:
 - Game Mode Override
 - Default Pawn Class
 - PlayerController Class
   • All customizable based on game type

* Controller = "puppeteer to pawn's puppet"
 * Persistent in level
   - Remains when character dies
   - Changes who it controls
   • Useful for:
     - Getting in vehicles
     - Mounting creatures
     - Keeping player stats persistent

* Custom Controller Recommendation
 * First Person Template example:
   - Handles inputs
   - Settings include:
     • Click/touch events
     • Camera system settings
   - Has possess/unpossess functions
     • Can control different pawns
     • Triggers events on pawns

Player Controller acts as the persistent brain behind character control, managing both inputs and character possession. Creating custom controllers allows for deeper control over game mechanics while maintaining player state across different possessed pawns.
