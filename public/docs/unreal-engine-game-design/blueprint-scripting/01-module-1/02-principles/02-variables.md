# Understanding Variable Types

* Variables = "values that can change during game"
 * Examples in games:
   - Health
   - Ammo
   - Score

* Creating Variables
 * Located in Variables section (left side)
   - Can add via plus button
   - Can "promote to variable" by right-clicking pins
 * Default values settable after compile

* Instance Editable Variables
 * Makes variables changeable per instance
   - Enable via:
     > Details panel checkbox
     > Eyeball icon in variable list
 * Each instance maintains own version
   - Can have different values per copy

* Common Variable Types
 * Boolean
   - True/false statements
 * Numbers
   - Integer: Whole numbers
   - Float: Decimal points allowed
   - Integer 64: Larger number capacity
 * Text Types
   - String: Character arrays/words
   - Text: Localization-ready strings
   - Name: Asset references
 * Spatial Types
   - Vector: Three float points (x,y,z)
   - Rotator: Pitch/role values
   - Transform: Location + rotation + scale combined

Variables serve as dynamic value storage in games, with various types suited for different needs. They can be made instance-editable to allow unique values per copy of an actor, making them flexible for diverse gameplay scenarios.
