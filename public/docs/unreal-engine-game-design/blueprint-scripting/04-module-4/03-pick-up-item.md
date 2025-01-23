# Inventory Item Pickup & Verification

- Data Asset Additions
 * Added "is unique" boolean variable
   - Default value off
   - Controls if multiple can be held

- Adding Items Process
 * Condition Checks:
   - Query if item exists in inventory
   - Check if item is unique
   - Use "not Boolean" to flip results
     > If true: don't add to inventory
     > If false: proceed with add

 * BP_Pickup Implementation:
   - Get player character from interact interface
   - Find inventory system component
   - Add to inventory function:
     > Pass data asset as item
     > Quantity set to 1 (or variable)
     > Returns success boolean

 * Pickup Behavior:
   - Check if add was successful
   - Verify if "destroy on pickup" is enabled
     > If both true: destroy actor
   - Example: Key card pickup with 'E' key

The system implements verification before adding items, ensuring unique items can't be duplicated and proper destruction of pickups occurs. Focuses on proper condition checking before executing pickup logic.
