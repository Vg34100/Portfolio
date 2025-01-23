# Understanding Actor Components

* Components Overview
 * Actors = "bundles of components packed together"
 * Add Components:
   - Click add button in top left
   - Can create custom components
   - Hover for tooltip explanations

* Static Mesh Components
 * Key Properties:
   - Displays 3D assets
   - Empty by default
     • Must assign mesh in details panel
   - Has standard controls
     • Movement
     • Rotation
     • Scale

* Component Hierarchy
 * Parent-Child Relationships
   - Children components indent under parents
   - Moving parent moves children
   - Example:
     • Weapon component -> attached to mesh
     • Point light -> can be child of mesh

* Instance Handling
 * Instance = "copy of actor in world"
 * Instance Components:
   - Found in details panel
   - Can modify individual instances
     • Changes won't affect other copies
   - Can reposition components
     • No effect on original blueprint

* Axis Understanding
 * X-axis = "typically regarded as forwards"
   - Visible in corner gizmo
   - Important for component rotation
   - Example: Rotating weapon 90° to face forward

Components form the building blocks of actors, allowing hierarchical organization and instance-specific modifications. Understanding their relationships and properties enables efficient actor creation and customization.
