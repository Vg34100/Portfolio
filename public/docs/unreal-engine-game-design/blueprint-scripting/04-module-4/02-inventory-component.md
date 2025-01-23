# Creating Inventory Components & Functions

- Actor Component Setup
 * Create new blueprint class as actor component
 * Actor vs Scene Component:
   - Both similar, but scene components have transform
   - Scene components can be placed in level relative to owner

- Inventory System Design
 * Variables:
   - Content variable uses "map" type
     > DA_Item as key (must be unique)
     > Integer as value (quantity)

 * Core Functions Created:
   - Add to Inventory
     > Takes item (DA_Item) and quantity
     > Uses Add Map to combine with existing quantity
     > Returns success boolean

   - Remove from Inventory
     > Takes item and quantity to remove
     > Checks if enough quantity exists
     > Subtracts quantity if possible

   - Query Inventory
     > Takes item and quantity
     > Returns:
       * Boolean (if exists)
       * "In stock" value (quantity owned)

The inventory system uses a map structure to track items and their quantities, with three main functions to manage the contents: adding, removing and querying items. The system is built as an actor component that can be added to any actor in the game.
