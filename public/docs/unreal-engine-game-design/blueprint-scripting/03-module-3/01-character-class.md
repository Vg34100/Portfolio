# Character Class Components & Movement

* Character class = perceptible pawn with unique components
 * Has character movement component
   - Contains pre-built functionality:
     • Walking, swimming, flying, jumping controls
     • Already replicated for multiplayer

* Key Movement Settings:
 * Max Walk Speed (default 600)
   - Can be modified for sprint functionality:
     • Example: Set to 8000 with left shift press
     • Return to 600 on release

 * Jump Settings
   - Jump Z Velocity controls height (default 420)
     • Example: 840 for higher jumps
   - Gravity Scale affects fall speed
     • Higher value (1.7) = snappier landing

 * Air Control (default 0.05)
   - Controls mid-air movement ability
   - Higher values (0.8) allow better platform alignment

* Best Practices:
 - Hover mouse over options for descriptions
 - Experiment with value changes
 - Test changes in-game for desired feel

Character movement component provides robust pre-built movement functionality with highly customizable settings. Key aspects focus on walk speed, jump mechanics, and air control which can be modified via blueprints or component settings.
