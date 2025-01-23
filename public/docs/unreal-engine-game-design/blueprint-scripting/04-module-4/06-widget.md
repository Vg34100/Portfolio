# Creating UI Notifications Widget

- Widget Blueprint Setup
 * Create in UI folder: "W_notification"
 * Two main views:
   - Designer view: visual organization
   - Graph view: logic/code

- Widget Structure
 * Uses Canvas Panel
   - Stores content in absolute position
   - Takes up entire screen
 * Border Element:
   - Placed on right side
   - Anchored to screen edge
     > Hold shift: updates alignment
     > Hold control: updates position
   - Set black color

- Text Component
 * Inside border panel
 * Set as variable "text_Notice"
   - "Expose on Spawn" enabled
   - Editable
 * PreConstruct:
   - Sets text to notice variable

- Auto-Remove System
 * On Construct:
   - Set timer: 2 seconds
   - Clear notice event
   - "Remove from Parent"

- Implementation
 * Add to Inventory:
   - Create widget (W_notification)
   - Format text: {item name} added to inventory
   - Add to viewport

UI widgets provide visual feedback through screen notifications, using a structured panel system with automatic removal timers. They display text that can be dynamically updated based on game events.
