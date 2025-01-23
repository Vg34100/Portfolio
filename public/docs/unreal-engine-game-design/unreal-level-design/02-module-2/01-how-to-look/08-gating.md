# Level Gating Types & Implementation

* Types of Gates
 - Inventory/Key Gate
   * Requires specific item to progress
   * Must prep player about needed item
   * Can approach from:
     > Finding key first
     > Finding door first (more frustrating but rewarding)
 
 - Exploration Gate
   * Makes player look around area
   * "Stops progress until area fully explored"
 
 - Player Gates
   * Skill Gate
     > Based on player ability/mastery
     > Combat/platforming challenges
   * Ability Gate  
     > Based on character abilities
     > Example: Double jump, grappling hook
 
 - Knowledge/Puzzle Gates
   * Puzzle: Can solve when reached
   * Knowledge: Requires prior info
     > Diegetic: In-game knowledge
     > Non-diegetic: Player's real knowledge
 
 - Other Gate Types
   * Narrative: Must experience story/cutscene
   * Time: Based on time passage/specific moments
   * Emotional: Confront player feelings
   * Success: Complete specific achievement
 
* Gate Mechanics
 - Shortcuts
   * Opens after gate cleared
   * "Don't force repeated gate clearing"
 
 - Valves
   * One-way gates
   * "Be careful not to block incomplete areas"

* Example Level Implementation
 - Narrative gate: Guard interaction
 - Inventory gate: Misdirect area
 - Ability gate: Traversal section
 - Skill gate: Boss fight
 - Valves: One-way cliff descent

Gating mechanisms control player progression while maintaining engagement. Strategic placement of different gate types creates structured gameplay flow while avoiding frustration.