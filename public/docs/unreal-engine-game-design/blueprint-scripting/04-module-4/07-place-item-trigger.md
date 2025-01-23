# Creating Interactive Item Podiums

- Creating New Trigger Type (BP_ItemPodium)
 * Child of BP trigger
 * Components:
   - Cube base
   - Mesh for item display
   - DA_Item variable for required item
     > Instance editable enabled
   - Collision set to "block interactive traces"

- Interaction Setup
 * Look At Function:
   - Verb: "place"
   - Noun: gets item name
   - Checks inventory before display
 * Interact Logic:
   - Query inventory for item
   - If found:
     > Remove from inventory
     > Update static mesh
     > Trigger connected events

- Trophy Implementation Example
 * Created "item_trophy" from keycard
   - Set as unique item
   - Uses ornament statue mesh
 * Podium Usage:
   - Pickup trophy first
   - Place on podium
   - Triggers door unlock

- Enhanced UI Feedback
 * Dynamic Text Display:
   - Shows "requires trophy" if not in inventory
   - Changes to "place trophy" when obtained
   - Uses query inventory to check status

The system creates interactive podiums that require specific items to activate triggers. Shows how to repurpose existing mechanics (like the inventory system) to create new interactive elements with dynamic feedback.
