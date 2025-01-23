# Lakes and Rivers

* Lake Creation:
  - Uses water body lake actor
  - Key constraints:
    * Spline points must be at same height
    * Landscape deforms to meet lake level
  
* Lake Controls:
  - Terrain blend modes:
    * Alpha: Default blend
    * Minimum: Only lowers terrain
    * Maximum: Only raises terrain
    * Additive: Combines landscape layers
  - Wave customization via Gerstner parameters:
    * Smaller scale than ocean waves
    * Adjustable wavelength/amplitude

* River Features:
  - Direction indicated by river icon
  - Unique properties:
    * Variable elevation between points
    * Automatic material transition at lake connections
    * Flow control
  
* River Controls:
  - Visual controls:
    * Width (spline adjustment)
    * Depth (vertical arrows)
    * Velocity (triple arrows)
  - Can visualize:
    * Water velocity
    * River width
    * Depth
    
* Customization Tips:
  - Start with default settings
  - Adjust blend modes for terrain integration
  - Add subtle curl noise for natural edges
  - Back up materials before experimenting
  - Use "Asset Actions > Reload" to reset materials

The system allows for natural water feature creation with detailed control over flow, appearance, and terrain integration.