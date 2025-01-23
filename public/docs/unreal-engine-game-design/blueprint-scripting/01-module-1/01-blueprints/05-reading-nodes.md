# Reading Blueprint Nodes

* Events (Red Nodes)
 * Starting blocks in event graph
   - Trigger subsequent code
   - Example: Enhanced input action for movement
   * "Event driven gameplay" concept
     - Player does action → code responds

* Blueprint Node Structure
 * Top: Name
 * Target: Function ownership
   - Example: Pawn function affects pawns
   - Works with child classes (character -> pawn)
 * Split Layout:
   - Left side: Inputs
   - Right side: Outputs
   * Parameters/Pins types:
     - Execute pin
     - Object pin
     - Vector pin
     - Float pin
     - Boolean pin

* Function Execution (Blue Nodes)
 * Requires white execute line connection
 * "Left to right" reading direction
   - Follows arrow direction
   - Triggers next function after completion
 * Example: Movement code
   - Event triggers → calls add movement input
   - Target = pawn
   - Direction = get actor right vector
   - Scale value from movement input event

* Advanced Node Features
 * Structure pins (dark blue)
   - Bundles of variables
   - Can break apart for details
 * Down arrow options
   - Reveals uncommon settings
   - Example: Debug visualization

* Finding/Adding Nodes
 * Right click in empty space
 * Context sensitive search (default)
   - Shows class-specific functions/variables
   - Can disable for all engine options
 * Reference dragging
   - Drag from pin for context options
   - Shows available functions for specific type

Blueprint nodes form a visual programming system with color-coded elements and directional flow. Understanding node types, connections, and context sensitivity enables efficient blueprint creation and modification.
