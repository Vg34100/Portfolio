# Blueprint Functions Basics

* Events can call functions
 * Functions are lists of instructions for the game to run
   * Can create custom or use existing functions
     - Line trace by channel is an example (has 'f' in corner)
     - Takes input parameters, processes them, outputs results

* Creating Custom Functions
 * Located in My Blueprint section > Functions list > plus button
 * Function Data Panel shows:
   - Inputs (parameters on left side)
     > Can set variables like integers
   - Outputs (results on right side)
   - Processing happens between input/output

* Function Connections
 * Pins can only connect to matching types
   - Integer pins connect to integer pins
 * Can call functions by:
   - Right clicking and searching
   - Dragging from function list
 * Begin play event triggers at game start

* Important Function Rules
 * Functions must execute completely in same call
   - Cannot use latent functions (clock icon)
   - No delay nodes allowed
 * Can be called from other actors with reference
 * Conversions happen automatically between some types
   - Example: Integer to string for print string

Functions form the basic building blocks for game logic, taking inputs and producing outputs through a series of instructions. They must complete execution immediately and can be referenced across different actors in the game.
