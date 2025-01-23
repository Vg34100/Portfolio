# Using Enums for Item Categories

- Enums are "lists" used in blueprinting
 * Create new Blueprint Enumeration
   - Start with 'E' prefix
   - Named 'E_ItemCategory'

- Creating Categories
 * Double click to open enum
 * Add different types:
   - Key items
   - Consumables
   - Equipment

- Implementation in Data Asset
 * Add category variable to DA_Item
   - Change type to E_ItemCategory
   - Creates dropdown list with options
 * Example Usage:
   - Keycard item can be set as:
     > Key item
     > Consumable
     > Equipment
   - Useful for:
     > Menu organization
     > Item filtering

Enums provide an organized way to categorize different types of items through simple dropdown lists. This allows for better item management and filtering capabilities in the inventory system.
