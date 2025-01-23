# Landscape Splines and Layers

* Spline Layer Setup:
  - Reserve layer for splines (prevents other editing)
  - Commonly used for roads/paths
  - Can be locked to prevent accidental modification

* Creating Splines:
  - Control + Click: Add control points
  - Connect points to create segments
  - Can create closed loops
  - Landscape automatically conforms to splines

* Key Settings:
  - Half Width: Distance from center to edge
  - Side Falloff:
    * Controls slope transition
    * Can be different per side
    * Range: 0 (sharp) to large values (gradual)
    * Recommended: ~2500-5000 for natural look
  
* Mesh Implementation:
  - Can attach static meshes to spline segments
  - Important settings:
    * Vertical offset (raises mesh above terrain)
    * Shadow casting options
    * Segment properties
    
* Practical Tips:
  - Use separate layers for:
    * Roads/paths (splines)
    * Base terrain
    * Detail work
  - Paint appropriate ground texture under roads
  - Adjust falloff for natural terrain blending

The system allows efficient creation of roads and paths that naturally integrate with the landscape while maintaining separate editing layers.