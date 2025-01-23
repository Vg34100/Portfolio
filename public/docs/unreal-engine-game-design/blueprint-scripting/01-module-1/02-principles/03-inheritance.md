# Inheritance & Object-Oriented Programming

* Object-Oriented Concepts
 * Inheritance = "actors/classes inherit properties, functions & variables from parent"
 * Parent Class Selection
   - Chosen when creating new blueprint class
   - Determines inherited capabilities
 * Inheritance Chain
   - Actor (base class)
     > Pawn (inherits from Actor)
       - Can be possessed/receive inputs
     > Character (inherits from Pawn)
       - Includes walking abilities
       - Gets everything from Actor & Pawn

* Standard Events
 * Begin Play
   - Fires when game starts
 * Actor Begin Overlap
   - Triggers when actors overlap
 * Event Tick
   - Runs every frame
   - "60 times per second at 60fps"

* Child Classes
 * Creation
   - Right-click parent > Create Child Blueprint Class
 * Inheritance Properties
   - Gets all parent components
     > Can't delete inherited components
     > Can modify properties (size/location)
   - Can add new components
 * Event Handling
   - Orange nodes = parent event calls
   - Options:
     > Extension: Add to parent behavior
     > Override: Replace parent behavior
       - Skip/delete parent node

* Practical Application
 * Example Structure
   - Parent: Weapon
     > Children: Gun, Sword, Laser Rifle
       - Each counts as weapon
       - Each has unique subclass properties

Inheritance forms the backbone of object organization in Unreal, allowing for efficient code reuse while maintaining flexibility through extensions and overrides. This hierarchical structure enables creating complex game systems from simple parent-child relationships.
