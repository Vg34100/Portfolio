# Interface System for Interactions

* Interfaces allow common functions across unrelated objects
 * Example: E key pressing
   - Apple: pick up and eat
   - Door: open
   - "Same interaction (E key), different outcomes"

* Creating Interface Blueprint
 * Content drawer > Blueprint > Blueprint Interface
   - Denoted as "BPI"
   - Interface is collection of defined functions
 * Two main functions needed
   - LookAt function
     > Outputs: verb (text), noun (text)
     > "Verb + noun = instructions" (eat apple, open door)
   - InteractWith function
     > Input: PlayerCharacter (Object Reference)

* Implementing Interfaces
 * Add to objects via Class Settings
   - Interfaces section > Add BPI_Interact
   - Creates new interface section under functions
 * Function types
   - Events: Cannot return information
   - Functions: Can return info (like LookAt)

* Implementation Details
 * Interface symbol on nodes
   - Indicates "safe" interface call
   - No errors if interface missing
 * LookAt usage
   - Returns verb/noun combo
   - Can include logic (e.g. open/close door)
 * Format text setup
   - Uses curly brackets {0} {1}
   - Inserts verb and noun values

Interfaces provide a flexible way to handle different object interactions with the same input. They enable consistent player interaction while allowing unique object behaviors through a structured blueprint system.
