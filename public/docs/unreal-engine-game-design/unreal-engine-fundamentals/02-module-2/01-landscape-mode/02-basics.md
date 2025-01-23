* Enable Landscape Mode:
 - Access via Shift+2 OR Selection Mode > Landscape
 - Top tabs:
   * Manage:
     - Create/modify landscapes & components
   * Sculpt: Shape selected landscape
   * Paint: Apply materials

* Technical Considerations (Critical):
 - Components:
   * Base unit for:
     - Rendering
     - Visibility calculations 
     - Collisions
   * Must be square & same size
   * Each stored in single texture
   * "Power of two texture size" required
   * Duplicates vertices along shared edges

 - Sections:
   * Division options:
     - One section (1x1)
     - Four sections (2x2)
   * Max size: 256x256 vertices
   * Used for LOD calculations

 - Performance Balance:
   * Smaller landscapes:
     - Faster LOD transitions
     - Better terrain occlusion
     - "Requires more components"
   * Each component:
     - Has CPU processing cost
     - Each section = one draw call
   * "Epic's max recommendation: 1,024 components"