# Creating an Inventory System

- Problem Analysis for Inventory System:
 * Need "items that we can pick up"
 * Need "way to store data on player character"

- Data Asset Setup:
 * Create blueprint class for pickups:
   - Make new folder for inventory system
   - Create BP_Pickup actor class
   - Uses data assets to store item info

 * Creating Data Asset:
   - Create in /data folder
   - Use Primary Data Asset class
   - Name as "DA_Item"
   - Can store variables and functions
   - "Read only data"

 * Key Variables for Data Asset:
   - Name (text value)
   - Description (text)
   - Thumbnail (texture2D)
   - Static mesh (3D model)

- Implementation Details:
 * Individual Items:
   - Created as Data Asset instances
   - Based on DA_Item template
   - Example: item_keycard

 * Pickup Blueprint Setup:
   - Add data asset variable type (DA_Item)
   - Add static mesh component
   - Construction script reads from data asset
   - Set collision to block
   - Add interaction interface
   - Displays "pickup [item name]" text

Data assets provide a clean way to store read-only game information, though they can't be written to during gameplay. They work by assigning data to actors as needed, making them effective for inventory systems despite some limitations in searching through large collections.
