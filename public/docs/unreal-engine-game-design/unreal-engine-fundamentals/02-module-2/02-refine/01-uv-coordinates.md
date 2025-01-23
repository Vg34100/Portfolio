* UV Control Setup:
 - LandscapeLayerCoords Node:
   * Controls mapping type, scale, rotation
   * "Must connect to UV input of textures"
   * Can parameterize mapping scale:
     - Default: 1.0
     - "Smaller values (0.25) = larger tiling"
     - "Larger values (8.0) = smaller tiling"

* Material Enhancement:
 - Individual Layer Control:
   * Separate UV scaling per layer
   * Parameter Groups:
     - UV tile settings
     - Layer textures
 
 - Texture Map Integration:
   * Use MakeMaterialAttributes:
     - Base color
     - Normal map
     - ORD maps:
       > R = Ambient Occlusion
       > G = Roughness
       > B = Displacement
   * "Must use Break Material Attributes node"

* Key Material Settings:
 - Non-metallic Landscapes:
   * "Set metallic = 0"
   * "Specular = 0.02 (not 0 to keep roughness control)"
 
* Organization Tips:
 - Use name reroute nodes
 - Group parameters logically
 - "Keep connections clean for maintainability"