# Foliage Mode (Shift+3)

* Adding Foliage:
  - Drag assets to foliage drop area (turns yellow)
  - Supports:
    * Megascans foliage (auto-converts)
    * Regular static meshes (auto-creates foliage type)

* Paint Controls:
  - Brush Settings:
    * Size
    * Paint density (default 0.5)
    * Erase density
  
  - Paint Modes:
    * Normal: Paints all selected types
    * Single Instance: One type at a time
    * Cycle through: Alternates between types
    
* Key Instance Settings:
  - Density (affects spawn frequency)
  - Radius (minimum distance between instances)
  - Scaling:
    * Uniform/Free/Axis-locked
    * Min/Max scale control
  
* Important Placement Settings:
  - Align to Normal (false for trees/vertical objects)
  - Ground Slope (angle limits for spawning)
  - Height Range (min/max spawn elevation)
  - Call Distance (visibility range)
    * Trees: ~20,000 units
    * Grass: ~5,000 units recommended
  
* Optimization Tips:
  - Disable dynamic shadows for grass
  - Set appropriate call distances
  - Use layer-based spawn controls
  - Consider collision settings based on asset type

* Selection Tools:
  - Select All
  - Lasso Select
  - Remove Selected